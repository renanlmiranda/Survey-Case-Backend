const { Model, DataTypes, Sequelize } = require('sequelize');

const PROTECTED_ATTRIBUTES = ['password']

class User extends Model {

  toJSON () {
    let hidePassword = Object.assign({}, this.get())
    for (let attribute of PROTECTED_ATTRIBUTES) {
      delete hidePassword[attribute]
    }
    return hidePassword
  }

  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = User;