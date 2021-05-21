const db = require('./../../data/dbConfig')


const checkIfUsernameandPassword =  (req, res, next) =>{
    const {username, password} = req.body
    if(!username || !password){
        res.status(401).json({message: 'Your Username And Password Required'})
    } else {
        next()
    }
}

const checkIfUsernameExist = async (req, res, next)=>{
    const {username} = req.body
    const user = await db('Users').where('Username', username).first()
    if(user && user.username){
        res.status(401).json({message: 'This Username is Taken'})
    } else {
        next()
    }
}

module.exports = {
    checkIfUsernameandPassword,
    checkIfUsernameExist
}