const app = require("./app");
const supertest = require("supertest");
const request = supertest(app);

it("returns json array of persons", async (done) => {
  const response = await request.get("/api/persons");
  expect(response.status).toBe(200);
  console.log(response.headers);
  expect(response.headers["content-type"]).toMatch(/application\/json/);
  expect(response.body.length).toBeGreaterThanOrEqual(1);
  done();
});
