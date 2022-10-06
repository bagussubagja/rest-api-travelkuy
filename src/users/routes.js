const {Router} = require('express');
const controller = require('./controller');
const router = Router();

router.get('/', controller.getUsers);
router.get('/:id', controller.getUserById);
router.post('/', controller.addUser);
router.put('/:id_user', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;