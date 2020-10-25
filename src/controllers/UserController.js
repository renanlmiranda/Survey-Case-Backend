const User = require('../models/User');
const { hash } = require('bcryptjs');

module.exports = {
  async store(req, res) {
    const { name, email, password } = req.body;

    const checkEmail = await User.findOne({ where: { email }});

    if (checkEmail) {
      throw new Error('Email address already used.');
    }

    const pwdEncryption = await hash(password, 8);

    const user = await User.create({
      name,
      email,
      password: pwdEncryption,
    });

    return res.json(user);
  }
}