const spicedPg = require('spiced-pg')
const secrets = require('../secrets.json')
const db = spicedPg(
  process.env.DATABASE_URL ||
    `${secrets.user}:${secrets.pass}:postgres@localhost:5432/blog`
)

module.exports.getUser = function(email) {
  return db.query(
    `SELECT * FROM users
        WHERE email = $1`,
    [email]
  )
}
