import Reddit from "./Reddit";

describe("Reddit", () => {

  describe("getFeed", () => {
    it("Returns a list of articles", () => {
      expect.assertions(1);
      return Reddit.getFeed("pics").then((results) => {
        expect(results.length).toBeGreaterThan(0);
      });
    });

    it("Returns a list of objects which contain the expected values", async () => {
      expect.assertions(1);
      const expected = ["author", "comments", "date", "id", "img",
        "link_to_article", "title", "votes"];

      const results = await Reddit.getFeed("pics");
      expect.assertions(results.length);
      results.forEach(item => {
        expect(Object.keys(item).sort()).toEqual(expected.sort());
      });

    });

    it("Returns an empty list if the feed doesn't exist", () => {
      expect.assertions(1);
      return Reddit.getFeed("ZZZZZZZZZZZZZZZZZZZZZZZ233").then((results) => {
        expect(results.length).toBe(0);
      });
    });
  });


});
