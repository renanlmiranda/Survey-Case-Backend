const User = require('../models/User');
const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
require('dotenv').config();

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

      // const { secret, expiresIn } = authConfig.jwt;
      const token = sign(
        {}, 
        process.env.JWT_SECRET,
        { 
          subject: user.id,
          expiresIn: '1d',
        }
      );
  
      return res.json({ user, token });
    }catch (err) {
      return res.status(400).json({error: err.message});
    }
  }
} 