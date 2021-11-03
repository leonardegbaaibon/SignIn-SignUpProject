const {Userdb} = require('../model/models');
const bcrypt = require('bcrypt');
const { name } = require('ejs');
// const saltRounds = 10;
exports.signUp = async (req, res) => {
    const {name, email, username, password} = req.body
    console.log(req.body)
    try{
        // const {name, email, username, password} = req.body
        // console.log(req.body)
        const user = Userdb({
            name,
            username,
            email,
            password       
        });
        if(user){
// hash password - bryptjs - await bcrypt.hash(pword) -> hpwd
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        // // save data to the dB
            user
            .save(user) 
            .then(data =>{
            return res.send(data)})
        }else{
            console.log('error')
        }

    }catch(err){
        return res.status(500).send({
            message: err.message ||"Some error occurred while creating a create operation"
        
    })
 }
 // redirect to homeroutes
 return res.redirect('/')
}



exports.login = async (req, res) => {
    // console.log(req.body)
    // validate the req.body (email, password exists and is valid)
    const {email,password} = req.body
    // console.log(req.body)
    try {
        const user = await Userdb.findOne({email})
        if(user){
            const validPassword = await bcrypt.compare(password, user.password)
            if(validPassword){
                session=req.session; 
                session.userid=req.body._id;
                console.log(req.session)

                res.redirect('/dashboard')
            }else{
                res.redirect('/',error)
            }
        }else{
            alert('user does not exist')
            res.status(401).json({error: "User does not exist"})
            console.log(user)
        }
        
    } catch (error) {
        alert('Error')
        return res.status(500).send({
            message: error.message ||"Some error occurred during the log in process"
        })
    }

}