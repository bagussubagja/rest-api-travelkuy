const {Router} = require('express');
const controller = require('./controller');
const router = Router();


router.get('/', controller.getPlaces);
router.get('/popular', controller.getPopularPlaces);
router.get('/recommended', controller.getRecommendedPlaces);
router.get('/mostviewed', controller.getMostViewedPlaces);
router.get('/newlyadded', controller.getNewlyAddedPlaces);
router.get('/beach', controller.getBeachPlaces);
router.get('/lake', controller.getLakePlaces);
router.get('/mountain', controller.getMountainPlaces);
router.get('/park', controller.getParkPlaces);
router.get('/waterfall', controller.getWaterfallPlaces);
router.get('/island', controller.getIslandPlaces);
router.get('/random', controller.getRandomPlaces);
router.get('/:id', controller.getPlaceById);






module.exports = router;