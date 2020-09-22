const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);

it("returns api info", async (done) => {
  const response = await request.get("/info");
  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toMatch(/text\/html/);
  expect(response.text).toMatch(/Phonebook has info/);
  done();
});
