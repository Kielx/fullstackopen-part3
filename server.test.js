const app = require("./app");
const supertest = require("supertest");
const request = supertest(app);

it("returns json array of persons", async (done) => {
  const response = await request.get("/api/persons");
  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toMatch(/application\/json/);
  expect(response.body.length).toBeGreaterThanOrEqual(1);
  done();
});

it("returns a single person", async (done) => {
  const response = await request.get("/api/persons/1");
  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toMatch(/application\/json/);
  expect(typeof response.body).toBe("object");
  expect(response.body.hasOwnProperty("id")).toBe(true);
  expect(response.body.hasOwnProperty("name")).toBe(true);
  expect(response.body.hasOwnProperty("phone")).toBe(true);
  done();
});

it("posts a single person", async (done) => {
  const response = await request.post("/api/persons/").send({
    name: "John Johnes",
    phone: "123 345 567",
  });
  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toMatch(/application\/json/);
  expect(typeof response.body).toBe("object");
  expect(response.body.hasOwnProperty("id")).toBe(true);
  expect(response.body.hasOwnProperty("name")).toBe(true);
  expect(response.body.hasOwnProperty("phone")).toBe(true);
  done();
});

it("deletes a single person", async (done) => {
  const response = await request.delete("/api/persons/1");
  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toMatch(/application\/json/);
  expect(typeof response.body).toBe("object");
  expect(response.body.hasOwnProperty("id")).toBe(true);
  expect(response.body.hasOwnProperty("name")).toBe(true);
  expect(response.body.hasOwnProperty("phone")).toBe(true);
  done();
});
