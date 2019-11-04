import config from "../../config";

export class YouTubeService {
  searchByKeyword = async (query, order) => {
    return await fetch(
      `${config.youtubeApi.baseUrl}search?part=snippet&q=${query}&type=video&order=${order}&key=${config.youtubeApi.apiKey}`
    );
  };
  getStatistics = async ids => {
    const idString = ids.join(",");
    return await fetch(
      `${config.youtubeApi.baseUrl}videos?part=statistics&id=${idString}&key=${config.youtubeApi.apiKey}`
    );
  };
}

export default YouTubeService;
