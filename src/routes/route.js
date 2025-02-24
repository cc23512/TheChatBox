const express = require("express");
const upload = require("../middlewares/uploadMiddleware");

const loginController = require("../controllers/loginController");
const tweetController = require("../controllers/tweetController");
const userController = require("../controllers/userController");
const router = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// LOGIN CONTROLLER
router.get("/home", loginController.home);
router.get("/login", loginController.login);
router.get("/cadastro", loginController.cadastro);

// POST
router.post("/cadastro", loginController.cadastroPOST);
router.post("/login", loginController.loginPOST);

// TWEET CONTROLLER
router.get("/tweetar", tweetController.tweetar);
router.post("/tweetar", tweetController.tweetarPOST);

// USER CONTROLLER
router.get("/perfil/:userId", userController.perfilUsuario);
router.get("/editarFoto", userController.editarFoto);
router.post("/editar-biografia", userController.editarBiografia);
router.post("/editar-foto-perfil", userController.editarFotoPerfil);

module.exports = router;
