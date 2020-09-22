const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);

const basicCheck = (response) => {
  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toMatch(/application\/json/);
  expect(typeof response.body).toBe("object");
};

it("returns json array of persons", async (done) => {
  const response = await request.get("/api/persons");
  basicCheck(response);
  expect(response.body.length).toBeGreaterThanOrEqual(1);
  done();
});

it("returns a single person", async (done) => {
  const response = await request.get("/api/persons/1");
  basicCheck(response);
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

it("throws errors with invalid input", async (done) => {
  const response = await request.post("/api/persons/").send({
    name: "",
    phone: "",
  });
  expect(response.status).toBe(422);
  expect(response.headers["content-type"]).toMatch(/application\/json/);
  expect(typeof response.body).toBe("object");
  expect(response.body.hasOwnProperty("errors")).toBe(true);
  expect(response.body.errors).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ name: "Username provided is invalid" }),
      expect.objectContaining({ phone: "Phone number provided is invalid" }),
    ])
  );
  done();
});

it("throws returns 422 when username already exists", async (done) => {
  const response = await request.post("/api/persons/").send({
    name: "John Johnes",
    phone: "123 345 567",
  });
  expect(response.status).toBe(422);
  expect(response.headers["content-type"]).toMatch(/text\/html/);
  expect(response.text).toMatch(/Username already exists/);
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

it("returns 404 when user is not found", async (done) => {
  const response = await request.get("/api/persons/abc-123-def-asf4asdf");
  expect(response.status).toBe(404);
  expect(response.headers["content-type"]).toMatch(/application\/json/);
  expect(typeof response.body).toBe("object");
  expect(JSON.parse(response.text).error).toBe("User not found");
  done();
});
