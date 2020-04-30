const request = require("supertest");
const server = require("../app");

// Tokens expire after 24 hr
const token = process.env.TOKEN;

const project = {
    "title": "Improve infrastructure 2",
    "description": "We'll need to raise funding.",
    "location": "Chicago",
    "category": "Government",
    "solution": "ETC"
};

describe("projectRouter test suite", () => {

    describe("Get all projects endpoint", () => {
        it("Should return 200 status with valid token", async () => {
            const res = await request(server).get("/api/projects")
            .set("Authenticate", token);
            expect(res.statusCode).toEqual(200);
        });

        it("Should return 401 status with invalid token", async () => {
            const res = await request(server).get("/api/projects")
            .set("Authenticate", "invalid-token");
            expect(res.statusCode).toEqual(401);
        });
    })

    describe("Get project by ID endpoint", () => {
        it("Should return 200 status with valid token", async () => {
            // Get first project
            const res = await request(server).get("/api/projects/1")
            .set("Authenticate", token);
            expect(res.statusCode).toEqual(200);
        })
    })

    describe("Update project by ID", () => {
        it("Should return 200 status", async () => {
            const res = await request(server).put("/api/projects/1").send(project)
            .set("Authenticate", token);
            expect(res.statusCode).toBe(200);
        })
    })

    describe("Add new project", () => {
        it("Error handling: should return 500 status", async () => {
            const res = await request(server).post("/api/projects").send(project)
            .set("Authenticate", token);
            expect(res.statusCode).toBe(500);
        })
    })

    describe("Delete project", () => {
        it("Error handling: should return 404", async () => {
            const res = await request(server).delete("/api/projects/2").send(project)
            .set("Authenticate", token);
            expect(res.statusCode).toBe(404);
        })
    })
})