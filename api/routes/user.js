const user_controller = require('../../controllers/userController')

module.exports = (router) => {
  router.get('/user', user_controller.get_user)
}
