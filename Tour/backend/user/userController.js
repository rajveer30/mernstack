import user from "./userModel"

import mongoose from "mongoose"
import JWT from "jsonwebtoken"

exports.signup = (req, res) => {
    let { Name, email, password } = req.body;
    let User = new user({
        Name,
        email,
        password,
    });
    User
    .save()
    .then(() => {
        const token = getToken(User);
        return res.status(200).send({user, token})})
    .catch((error) => {
        console.error(error);
        return res.status(500).send("Error");
    });
};


exports.login = (req, res) => {
    let { email, password } = req.body;
    user.findOne({ email: email})
    .then((User) => {
       
        if(password === User.password){
            
            console.log("Login successfull");
            return res.status(200).send({User, token});
        }
        console.warn("password incorrect");
        return res.status(401).send("password was incorrect");
    })
    .catch((error) => {
        console.error(`User with email ${email} does not exist`);
        return res.status(404).send(`User with email ${email} does not exist`);
    });
};