const Alternative = require('../models/Alternative');
const Question = require('../models/Question');

module.exports = {
  async store(req, res) {
    const { alternative, question_id } = req.body;

    try{
      const validateQuestion = await Question.findByPk(question_id);

      if(!validateQuestion){
        return res.status(400).json({ error: 'Question not found'});
      }

      const response = await Alternative.create({
        alternative,
        question_id,
      })
  
      return res.json(response);
    }catch(err){
      return res.status(400).json({error: err.message});
    }
  }
}