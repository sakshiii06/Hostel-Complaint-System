const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(user_id, type) {
  const payload = {
    user: {
      user_id,
      type
    }
  };
  
  return jwt.sign(payload, process.env.JWTSECRET, { expiresIn: "15d" });
}

function jwtDecoder(token){
    return jwt.verify(token, process.env.JWTSECRET);
}

module.exports = {
  jwtDecoder,
  jwtGenerator
};
