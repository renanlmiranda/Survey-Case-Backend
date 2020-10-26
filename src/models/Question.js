const { Model, DataTypes } = require('sequelize');

class Question extends Model {
  static init(sequelize) {
    super.init({
      question: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Question;