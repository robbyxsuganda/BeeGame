const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const { signToken } = require("../helpers/jwt");
const { hash } = require("../helpers/bcrypt");

let access_token;
let access_token_staff;
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

  // access token admin
  const payloadAdmin = {
    id: 1,
    email: "robbysugandaaa@gmail.com",
    role: "admin",
  };

  // access token staff
  const payloadStaff = {
    id: 2,
    email: "user@gmail.com",
    role: "user",
  };

  access_token = signToken(payloadAdmin);
  access_token_staff = signToken(payloadStaff);
});

afterAll(async () => {
  await sequelize.queryInterface.bulkDelete("Users", null, { truncate: true, cascade: true, restartIdentity: true });
  await sequelize.queryInterface.bulkDelete("Categories", null, { truncate: true, cascade: true, restartIdentity: true });
  await sequelize.queryInterface.bulkDelete("Games", null, { truncate: true, cascade: true, restartIdentity: true });
  await sequelize.queryInterface.bulkDelete("Vouchers", null, { truncate: true, cascade: true, restartIdentity: true });
});

describe("POST /games", () => {
  describe("POST /games - succeed", () => {
    it("should be return an object with message", async () => {
      const body = { title: "New Game", developer: "bee", image: "asdasd", CategoryId: 1 };
      const response = await request(app).post("/games").send(body).set("Authorization", `Bearer ${access_token}`);

      expect(response.status).toBe(201);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", expect.any(String));
      expect(response.body).toHaveProperty("game", expect.any(Object));
    });
  });

  describe("POST /games - fail", () => {
    // error kalo belum login
    it("should be return an object with error message", async () => {
      const body = { title: "New Game", developer: "bee", image: "asdasd", CategoryId: 1 };
      const response = await request(app).post("/games").send(body);

      expect(response.status).toBe(401);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", "Please login first");
    });

    // error karna token tidak valid
    it("should be return an object with error message", async () => {
      const body = { title: "New Game", developer: "bee", image: "asdasd", CategoryId: 1 };
      const response = await request(app).post("/games").send(body).set("Authorization", `Bearer ngasal`);

      expect(response.status).toBe(401);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", "Please login first");
    });

    // error karna req body tidak sesuai
    it("should be return an object with error message", async () => {
      const body = { name: "", description: "Description produk", price: 20000, imageUrl: "test", categoryId: 1, authorId: 1 };
      const response = await request(app).post("/games").send(body).set("Authorization", `Bearer ${access_token}`);

      expect(response.status).toBe(400);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", expect.any(String));
    });
  });
});

describe("DELETE /games/:id", () => {
  describe("DELETE /games/:id - succeed", () => {
    it("should be return an object with message", async () => {
      const response = await request(app).delete("/games/1").set("Authorization", `Bearer ${access_token}`);

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", expect.any(String));
    });
  });

  describe("DELETE /games/:id - fail", () => {
    // error karna token tidak valid
    it("should be return an object with error message", async () => {
      const response = await request(app).delete("/games/1").set("Authorization", `Bearer ngasal`);

      expect(response.status).toBe(401);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", "Please login first");
    });

    // error karna id tidak valid
    it("should be return an object with error message", async () => {
      const response = await request(app).delete("/games/1000").set("Authorization", `Bearer ${access_token}`);

      expect(response.status).toBe(404);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", "Data not found!");
    });

    // error karna tidak ada akses
    it("should be return an object with error message", async () => {
      const response = await request(app).delete("/games/2").set("Authorization", `Bearer ${access_token_staff}`);

      expect(response.status).toBe(403);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", "You dont have any access");
    });
  });
});

describe("GET /pub", () => {
  describe("GET /pub - succeed", () => {
    it("should be return an object with message", async () => {
      const response = await request(app).get("/pub");

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", expect.any(String));
      expect(response.body).toHaveProperty("games", expect.any(Array));
    });

    it("should be return filtered games by category", async () => {
      const response = await request(app).get("/pub?filter[categoryId]=1");

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", expect.any(String));
      expect(response.body).toHaveProperty("games", expect.any(Array));
      expect(response.body.games[0].CategoryId).toEqual(1);
    });

    it("should be return paginated games", async () => {
      const response = await request(app).get("/pub?page=2&limit=5");

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", expect.any(String));
      expect(response.body).toHaveProperty("games", expect.any(Array));
    });
  });
});
