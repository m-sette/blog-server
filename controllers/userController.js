const db = require('../models/db')

exports.get_user = async (req, res) => {
  let email = 'j@d.com'
  try {
    let { rows } = await db.getUser(email)
    res.status(200).json(rows)
  } catch (e) {
    console.log('Error on the get user route', e)
  }
}
