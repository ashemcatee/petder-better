const request = require("supertest");
const app = require("../src/App");

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request('http://localhost:3000')
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
  
});

describe("test signup path", () => {
    test("it should response the post method", () => {
        return request('http://localhost:8080/signup')
        .post("/").send({
                username: "jacob",
                password: "codesmith",
                email: "jacobcodesmith@yahoo.com",
              })
        .then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
})

describe("test breeds", () => {
    test("It should response the GET method", () => {
        return request('http://localhost:8080')
          .get("/favorite")
          .then(response => {
            expect(response.statusCode).toBe(200);
          });
      });
      
    });