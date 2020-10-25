const User = require('../models/User');
const { compare } = require('bcryptjs');

module.exports = {
  async create(req, res) {
    const { email, password } = req.body;

    try{
      const user = await User.findOne({ where: { email }});

      if(!user) {
        throw new Error('Incorrect email/password combination.');
      }
  
      const pwdCompare = await compare(password, user.password);
  
      if(!pwdCompare) {
        throw new Error('Incorrect email/password combination');
      }
  
      return res.json(user);
    }catch (err) {
      return res.status(400).json({error: err.message});
    }
  }
} 