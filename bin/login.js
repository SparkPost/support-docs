const vip = require("@automattic/vip");
const Token = vip.Token.default; // fun
const token = new Token(process.env.WORDPRESS_VIP_ACCESS_TOKEN);

// this is a hack because there is no way from the vip-cli to provide an access token, it has to be
// manually provided via prompt
// see, https://github.com/Automattic/vip/blob/master/src/bin/vip.js

if (token.expired()) {
  console.log(
    "The token provided is expired. Please log in again to refresh the token."
  );
  process.exit();
}

if (!token.valid()) {
  console.log(
    "The provided token is not valid. Please log in again to refresh the token."
  );
  process.exit();
}

Token.set(token.raw);
