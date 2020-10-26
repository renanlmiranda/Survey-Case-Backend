const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Question = require('../models/Question');
const Alternative = require('../models/Alternative');

const connection = new Sequelize(dbConfig);

User.init(connection);
Question.init(connection);
Alternative.init(connection);

Alternative.associate(connection.models);

module.exports = connection;