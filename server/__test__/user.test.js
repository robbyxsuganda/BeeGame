const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const { signToken } = require("../helpers/jwt");
const { hash } = require("../helpers/bcrypt");

let access_token;
beforeAll(async () => {
  //seeding users
  const users = [
    {
      username: "robbysuganda",
      email: "robbysugandaaa@gmail.com",
      password: hash("123456"),
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "user",
      email: "user@gmail.com",
      password: hash("123456"),
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  //seeding games
  const games = [
    {
      title: "Mobile Legends",
      developer: "Moonton",
      image: "https://yt3.googleusercontent.com/naOY_2iC824ZRwqpoPXcvXy7qZOU-BD1AQhog4MF6veLxScaBC2glExHMtIWryX5fhx8q2Y81MA=s900-c-k-c0x00ffffff-no-rj",
      CategoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "PUBG Mobile",
      developer: "Tencent",
      image: "https://cdn6.aptoide.com/imgs/e/b/e/ebe4c3a3d00e00e9b26d18fcde77a3b6_icon.png",
      CategoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Free Fire",
      developer: "Garena",
      image: "https://i.pinimg.com/736x/30/1a/c5/301ac5586bad7635b3ecfd7e6ab6a934.jpg",
      CategoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Point Blank",
      developer: "Zepetto",
      image: "https://play-lh.googleusercontent.com/IGOlY-TMU0cGW_I8EFKBkLACxPLu1TQqbqaqx7NUsGMyjNWIO1NdhwdBrq-71pUAHw",
      CategoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Valorant",
      developer: "Riot Games",
      image: "https://i.pinimg.com/736x/b7/cf/62/b7cf62846ae6ae5e96b35cf9d5e05a7c.jpg",
      CategoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  //seeding categories
  const categories = [
    {
      name: "Mobile Game",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "PC Game",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const vouchers = [
    {
      name: "Voucher1",
      price: 10000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Voucher2",
      price: 20000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Voucher3",
      price: 25000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Voucher4",
      price: 50000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Voucher5",
      price: 100000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Voucher6",
      price: 1000000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  await sequelize.queryInterface.bulkInsert("Users", users, {});
  await sequelize.queryInterface.bulkInsert("Categories", categories, {});
  await sequelize.queryInterface.bulkInsert("Games", games, {});
  await sequelize.queryInterface.bulkInsert("Vouchers", vouchers, {});

  // access token
  const payload = {
    id: 1,
    email: "robbysugandaaa@gmail.com",
    role: "admin",
  };

  access_token = signToken(payload);
});

afterAll(async () => {
  await sequelize.queryInterface.bulkDelete("Users", null, { truncate: true, cascade: true, restartIdentity: true });
  await sequelize.queryInterface.bulkDelete("Categories", null, { truncate: true, cascade: true, restartIdentity: true });
  await sequelize.queryInterface.bulkDelete("Games", null, { truncate: true, cascade: true, restartIdentity: true });
  await sequelize.queryInterface.bulkDelete("Vouchers", null, { truncate: true, cascade: true, restartIdentity: true });
});

describe("POST /login", () => {
  describe("POST /login - succeed", () => {
    it("should be return an object access token", async () => {
      const body = { email: "robbysugandaaa@gmail.com", password: "123456" };
      const response = await request(app).post("/login").send(body);

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("access_token", expect.any(String));
    });
  });

  describe("POST /login - fail", () => {
    // error kalo email kosong
    it("should be return an object access token", async () => {
      const body = { email: "", password: "qwerty" };
      const response = await request(app).post("/login").send(body);

      expect(response.status).toBe(400);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", expect.any(String));
    });

    // error kalo password kosong
    it("should be return an object with error message", async () => {
      const body = { email: "robbysugandaaa@gmail.com", password: "" };
      const response = await request(app).post("/login").send(body);

      expect(response.status).toBe(400);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", expect.any(String));
    });

    // error kalo email or password salah
    it("should be return an object with error message", async () => {
      const body = { email: "robbysugandaaa@gmail.com", password: "asdfgh" };
      const response = await request(app).post("/login").send(body);

      expect(response.status).toBe(401);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", expect.any(String));
    });
  });
});

describe("POST /register", () => {
  describe("POST /register - succeed", () => {
    it("should return success message and user data", async () => {
      const body = {
        username: "testuser",
        email: "test@mail.com",
        password: "123456",
      };
      const response = await request(app).post("/register").send(body);

      expect(response.status).toBe(201);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", "Success Register User");
      expect(response.body).toHaveProperty("user");
      expect(response.body.user).toHaveProperty("username", body.username);
      expect(response.body.user).toHaveProperty("email", body.email);
    });
  });

  describe("POST /register - fail", () => {
    it("should return error when email already exists", async () => {
      const body = {
        username: "robbysuganda",
        email: "robbysugandaaa@gmail.com",
        password: "123456",
      };
      const response = await request(app).post("/register").send(body);

      expect(response.status).toBe(400);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", expect.any(String));
    });
  });
});

describe("GET /profile", () => {
  describe("GET /profile - succeed", () => {
    it("should return user profile data", async () => {
      const response = await request(app).get("/profile").set("Authorization", `Bearer ${access_token}`);

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("id", expect.any(Number));
      expect(response.body).toHaveProperty("username", expect.any(String));
      expect(response.body).toHaveProperty("email", expect.any(String));
    });
  });

  describe("GET /profile - fail", () => {
    it("should return error when no access token", async () => {
      const response = await request(app).get("/profile");

      expect(response.status).toBe(401);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", expect.any(String));
    });
  });
});

describe("PATCH /change-profile/:id", () => {
  describe("PATCH /change-profile/:id - fail", () => {
    it("should return error when no image file provided", async () => {
      const response = await request(app).patch("/change-profile/1").set("Authorization", `Bearer ${access_token}`);

      expect(response.status).toBe(400);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", expect.any(String));
    });

    it("should return error when invalid user id", async () => {
      const response = await request(app).patch("/change-profile/999").set("Authorization", `Bearer ${access_token}`).attach("file", Buffer.from("dummy image"), "test.jpg");

      expect(response.status).toBe(404);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", expect.any(String));
    });

    it("should return error when no access token", async () => {
      const response = await request(app).patch("/change-profile/1").attach("file", Buffer.from("dummy image"), "test.jpg");

      expect(response.status).toBe(401);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", expect.any(String));
    });
  });
});
