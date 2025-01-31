const { Order } = require("../models");
const midtransClient = require("midtrans-client");
const { nanoid } = require("nanoid");
const axios = require("axios");

class Controller {
  static async readOrders(req, res, next) {
    try {
      const orders = await Order.findAll({
        where: {
          userId: req.loginInfo.userId,
        },
      });

      res.status(200).json(orders);
    } catch (error) {
      // console.log(error);
      next(error);
    }
  }

  static async midtransToken(req, res, next) {
    try {
      // Create Snap API instance
      const price = 10000;
      let snap = new midtransClient.Snap({
        // Set to true if you want Production Environment (accept real transaction).
        isProduction: false,
        serverKey: "SB-Mid-server-zkJYKzoU6i37BXrZN_7BOWlD",
      });

      // console.log(snap, "snapp");

      const orderId = `trx-buy-${nanoid()}`;

      await Order.create({
        orderId,
        userId: req.loginInfo.userId,
        amount: price,
      });

      let parameter = {
        transaction_details: {
          order_id: orderId,
          gross_amount: price,
        },
        credit_card: {
          secure: true,
        },
        customer_details: {
          email: req.loginInfo.email,
        },
      };

      const { token } = await snap.createTransaction(parameter);

      // console.log(token, "token");

      res.status(200).json({
        transaction_token: token,
        orderId,
      });
    } catch (error) {
      // console.log(error, "error midtrans");
      next(error);
    }
  }

  static async updateOrderStatus(req, res, next) {
    try {
      const { orderId } = req.body;
      // console.log(orderId, "kakaaa");

      // cari order bedasarkan order id
      const order = await Order.findOne({
        where: {
          orderId,
        },
      });

      console.log(order);

      if (!order) throw { name: "NotFound" };

      // abis itu check midtrans status ordernya
      const base64Key = Buffer.from(process.env.MIDTRANS_SERVER_KEY).toString("base64");
      const { data } = await axios.get(`https://api.sandbox.midtrans.com/v2/${orderId}/status`, {
        headers: {
          Authorization: `Basic ${base64Key}`,
        },
      });

      if (+data.status_code !== 200) {
        throw { name: "BadRequest" };
      }

      if (data.transaction_status !== "capture") {
        throw { name: "BadRequest" };
      }
      // update order statusnya jadi paid
      await order.update({
        status: "paid",
        paidDate: new Date(),
      });

      res.status(200).json({
        message: "Payment success!",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = Controller;
