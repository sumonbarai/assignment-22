const express = require("express");
const adminController = require("../controllers/adminController");
const cartController = require("../controllers/cartController");
const categoryController = require("../controllers/categoryController");
const customerController = require("../controllers/customerController");
const order_itemController = require("../controllers/order_itemController");
const orderController = require("../controllers/orderController");
const paymentController = require("../controllers/paymentController");
const postController = require("../controllers/postController");
const productController = require("../controllers/productController");
const shipmentController = require("../controllers/shipmentController");
const subAdminController = require("../controllers/subAdminController");
const userController = require("../controllers/userController");
const wishlistController = require("../controllers/wishlistController");

const router = express.Router();
router.get("/health", (req, res) => {
  res.status(200).json({ message: "ok" });
});

// admin
router.get("/admin/read", adminController.read);
router.get("/admin/create", adminController.create);
router.get("/admin/update", adminController.update);
router.get("/admin/delete", adminController.delete);
// cart
router.get("/cart/read", cartController.read);
router.get("/cart/create", cartController.create);
router.get("/cart/update", cartController.update);
router.get("/cart/delete", cartController.delete);
// category
router.get("/cart/read", categoryController.read);
router.get("/cart/create", categoryController.create);
router.get("/cart/update", categoryController.update);
router.get("/cart/delete", categoryController.delete);
// customer
router.get("/customer/read", customerController.read);
router.get("/customer/create", customerController.create);
router.get("/customer/update", customerController.update);
router.get("/customer/delete", customerController.delete);
// order_item
router.get("/order-item/read", order_itemController.read);
router.get("/order-item/create", order_itemController.create);
router.get("/order-item/update", order_itemController.update);
router.get("/order-item/delete", order_itemController.delete);
// order
router.get("/order/read", orderController.read);
router.get("/order/create", orderController.create);
router.get("/order/update", orderController.update);
router.get("/order/delete", orderController.delete);
// payment
router.get("/order/read", paymentController.read);
router.get("/order/create", paymentController.create);
router.get("/order/update", paymentController.update);
router.get("/order/delete", paymentController.delete);
// post
router.get("/order/read", postController.read);
router.get("/order/create", postController.create);
router.get("/order/update", postController.update);
router.get("/order/delete", postController.delete);
// post
router.get("/order/read", productController.read);
router.get("/order/create", productController.create);
router.get("/order/update", productController.update);
router.get("/order/delete", productController.delete);
// shipment
router.get("/order/read", shipmentController.read);
router.get("/order/create", shipmentController.create);
router.get("/order/update", shipmentController.update);
router.get("/order/delete", shipmentController.delete);
// subAdmin
router.get("/order/read", subAdminController.read);
router.get("/order/create", subAdminController.create);
router.get("/order/update", subAdminController.update);
router.get("/order/delete", subAdminController.delete);
// user
router.get("/order/read", userController.read);
router.get("/order/create", userController.create);
router.get("/order/update", userController.update);
router.get("/order/delete", userController.delete);
// wishlist
router.get("/order/read", wishlistController.read);
router.get("/order/create", wishlistController.create);
router.get("/order/update", wishlistController.update);
router.get("/order/delete", wishlistController.delete);

module.exports = router;
