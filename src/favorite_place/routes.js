const {Router} = require('express');
const controller = require('./controller');
const router = Router();

router.get('/:id_user', controller.getFavoritePlacebyUser);
router.delete('/:id', controller.deleteFavoritePlace);
router.post('/', controller.addFavoritePlace);
router.get('/', controller.getFavoritePlace);

module.exports = router;