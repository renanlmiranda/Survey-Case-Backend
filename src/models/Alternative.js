const { Model, DataTypes } = require('sequelize');

class Alternative extends Model {
  static init(sequelize) {
    super.init({
      alternative: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Question, {foreignKey: 'question_id', as: 'question'});
  }
}

module.exports = Alternative;