const  User  = require("../model/userModel")

const userController = {
    addUser: async (req,res) => {
        try {
            console.log("body: ",req.body)
            const exist = await User.findOne({username: req.body.username})
            console.log(exist)
            if (exist){
                return res.status(200).json({"message":"Tai khoan ton tai",success:false})
            }
            else{
                const user = new User(req.body)
                const saveUser = await user.save()
                return res.status(200).json({"message":"Tao tai khoan thanh cong",success:true})
            }
        } catch (error) {
            res.status(500).json(error)
            console.log(error)
        }
    },
    getAllUser: async (req,res) => {
        try {
            const user = await User.find()
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    authUser: async (req,res) => {
        try {
            const user = await User.findOne({username:req.body.username,password:req.body.password})
            if(user){
                res.status(200).json({"message":"Đăng nhập thành công",success:true,user})
            }
            else{
                res.status(200).json({"message":"Đăng nhập thất bại",success:false})
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
module.exports = userController