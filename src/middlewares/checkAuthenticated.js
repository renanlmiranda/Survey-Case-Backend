const { request } = require('express');
const { verify } = require('jsonwebtoken');
require('dotenv').config();

module.exports = function checkAuthenticated( req, res, next) {

  const authHeader = req.headers.authorizion;

  if(!authHeader) {
    throw new Error('JWT token is missing');
  }

  const [, token] = authHeader.split(' ');

  try{ 
    const decoded = verify(token, process.env.JWT_SECRET);


    return next();
  }catch(err){
    throw new Error('Invalid JWT token');
  }
}