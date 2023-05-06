const userController = require("../controllers/userController")

const router = require("express").Router()

router.post("/",userController.addUser)
router.get("/",userController.getAllUser)
router.post("/auth",userController.authUser)

module.exports = router