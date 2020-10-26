const Question = require('../models/Question');

module.exports = {
  async store(req, res) {
    const { question } = req.body;

    const response = await Question.create({
      question
    })

    return res.json(response)
  }
}