const axios = require('axios');

function desk(domain, auth) {
  if (domain.indexOf('http') === -1) {
    domain = `https://${domain}.desk.com`;
  }

  return axios.create({
    baseURL: `${domain}`,
    auth: auth
  });
}

module.exports = desk;