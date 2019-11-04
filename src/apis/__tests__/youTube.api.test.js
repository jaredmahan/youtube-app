import YouTubeApi from "../youTube.api";

describe("YouTubeApi", () => {
  it("searchByKeywordWithStatistics should return search results with statistics", async () => {
    const api = new YouTubeApi({
      searchByKeyword: jest.fn().mockResolvedValue({
        status: 200,
        json: jest.fn().mockResolvedValue({
          items: [{ id: { videoId: 1 } }, { id: { videoId: 2 } }]
        })
      }),
      getStatistics: jest.fn().mockResolvedValue({
        status: 200,
        json: jest.fn().mockResolvedValue({
          items: [
            { id: 1, statistics: { commentCount: 1 } },
            { id: 2, statistics: { commentCount: 2 } }
          ]
        })
      })
    });
    const res = await api.searchByKeywordWithStatistics(
      "test",
      expect.any(String)
    );

    expect(api.youTubeService.searchByKeyword).toBeCalledTimes(1);
    expect(api.youTubeService.getStatistics).toBeCalledTimes(1);
    expect(res.result.items[0].statistics).toStrictEqual({ commentCount: 1 });
    expect(res.result.items[1].statistics).toStrictEqual({ commentCount: 2 });
  });
  it("searchByKeywordWithStatistics should return error when error status is returned when searching by keyword", async () => {
    const api = new YouTubeApi({
      searchByKeyword: jest.fn().mockResolvedValue({
        status: 500,
        json: jest.fn().mockResolvedValue(expect.any(Object))
      }),
      getStatistics: jest.fn().mockResolvedValue({
        status: 200,
        json: jest.fn().mockResolvedValue(expect.any(Object))
      })
    });
    const res = await api.searchByKeywordWithStatistics(
      "test",
      expect.any(String)
    );

    expect(api.youTubeService.searchByKeyword).toBeCalledTimes(1);
    expect(api.youTubeService.getStatistics).not.toBeCalled();
    expect(res).toStrictEqual({ status: 500, error: expect.any(String) });
  });

  it("searchByKeywordWithStatistics should return error when error status is returned when retrieving video statistics", async () => {
    const api = new YouTubeApi({
      searchByKeyword: jest.fn().mockResolvedValue({
        status: 200,
        json: jest.fn().mockResolvedValue({
          items: [{ id: { videoId: 1 } }, { id: { videoId: 2 } }]
        })
      }),
      getStatistics: jest.fn().mockResolvedValue({
        status: 500,
        json: jest.fn().mockResolvedValue(expect.any(Object))
      })
    });
    const res = await api.searchByKeywordWithStatistics(
      "test",
      expect.any(String)
    );

    expect(api.youTubeService.searchByKeyword).toBeCalledTimes(1);
    expect(api.youTubeService.getStatistics).toBeCalledTimes(1);
    expect(res).toStrictEqual({
      status: 500,
      error: expect.any(String)
    });
  });
  it("searchByKeywordWithStatistics should return null items when a query less than 1 characters is passed in", async () => {
    const api = new YouTubeApi({
      searchByKeyword: jest.fn(),
      getStatistics: jest.fn()
    });
    const res = await api.searchByKeywordWithStatistics("", expect.any(String));

    expect(api.youTubeService.searchByKeyword).toBeCalledTimes(0);
    expect(api.youTubeService.getStatistics).toBeCalledTimes(0);
    expect(res).toStrictEqual({ status: 200, result: { items: null } });
  });
});
