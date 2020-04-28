const request = require("supertest");
const server = require("../app");

describe("projectRouter test suite", () => {
    describe("Return projects", () => {
        it("Should return 200 status", async () => {
            const res = await request(server).get("/api/projects")
            .set("Authenticate", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ildvd29vdyIsImVtYWlsIjoiYmxhaEB5YWhvby5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCR3dEtqQjBsdmVuS0IzVkRmVFpYWTlPbWt1REk3LnNlZi5QeGduYmtzUWNFVFFiMWhvazFVdSIsInppcGNvZGUiOiIxMDAwMSIsImlhdCI6MTU4ODAyNjg0NiwiZXhwIjoxNTg4MTEzMjQ2fQ.Pht6zooneYKhS8HjmL0rk0plFSbulkLe2g6-GTva7RI");
            expect(res.statusCode).toEqual(200);
        })
    })
});