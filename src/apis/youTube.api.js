const searchErrorMessage =
  "Currently unable to search YouTube. Please try again later.";
const statisticsErrorMessage =
  "Currently unable to retrieve YouTube video statistics. Please try again later.";

export class YouTubeApi {
  youTubeService;
  constructor(youTubeService) {
    this.youTubeService = youTubeService;
  }

  async searchByKeywordWithStatistics(query, order) {
    if (!query || query.length < 1) {
      return await { status: 200, result: { items: null } };
    }

    const res = await this.youTubeService.searchByKeyword(query, order);
    if (res.status >= 400) {
      return { status: res.status, error: searchErrorMessage };
    }

    let result = await res.json();

    if (!!result.items && result.items.length > 0) {
      const ids = result.items.map(i => i.id.videoId).filter(id => !!id);
      const statsRes = await this.youTubeService.getStatistics(ids);

      if (statsRes.status >= 400) {
        return {
          status: statsRes.status,
          error: statisticsErrorMessage
        };
      }

      const stats = await statsRes.json();

      result.items = result.items.map(i => {
        const item = stats.items.find(s => s.id === i.id.videoId);
        return { ...i, statistics: item.statistics };
      });
    }
    return { status: res.status, result };
  }
}

export default YouTubeApi;
