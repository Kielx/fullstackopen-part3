const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const mongoose = require("mongoose");

afterAll(() => {
  mongoose.connection.close();
});

it("returns api info", async (done) => {
  const response = await request.get("/info");
  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toMatch(/text\/html/);
  expect(response.text).toMatch(/Phonebook has info/);
  done();
});

it("returns 404 when no matching url is found", async (done) => {
  const response = await request.get("/dsaafdsfa/asfdafd/abc-123-def-asf4asdf");
  expect(response.status).toBe(404);
  expect(response.headers["content-type"]).toMatch(/application\/json/);
  expect(typeof response.body).toBe("object");
  expect(JSON.parse(response.text).error).toBe("Not found");
  done();
});
