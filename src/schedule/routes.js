const {Router} = require('express');
const controller = require('./controller');
const router = Router();

router.get('/:id_user', controller.getSchedules);
router.post('/', controller.addSchedule);
router.delete('/:id', controller.deleteSchedule);

module.exports = router;