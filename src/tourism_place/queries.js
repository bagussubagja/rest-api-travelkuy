const getAllPlaces = "SELECT * FROM tourism_place";
const getPlaceById = "SELECT * FROM tourism_place WHERE id = $1";
const getPopularPlaces = "SELECT * FROM tourism_place WHERE status = 'Popular'";
const getRecommendedPlaces = "SELECT * FROM tourism_place WHERE status = 'Recommended'";
const getMostViewedPlaces = "SELECT * FROM tourism_place WHERE status = 'Most Viewed'";
const getNewlyAddedPlaces = "SELECT * FROM tourism_place WHERE status = 'Newly Added'";
const getBeachPlaces = "SELECT * FROM tourism_place WHERE category = 'Beach'";
const getLakePlaces = "SELECT * FROM tourism_place WHERE category = 'Lake'";
const getMountainPlaces = "SELECT * FROM tourism_place WHERE category = 'Mountain'";
const getParkPlaces = "SELECT * FROM tourism_place WHERE category = 'Park'";
const getWaterfallPlaces = "SELECT * FROM tourism_place WHERE category = 'Waterfall'";
const getIslandPlaces = "SELECT * FROM tourism_place WHERE category = 'Island'";
const getRandomPlaces = "SELECT * FROM tourism_place ORDER BY RANDOM() LIMIT 7";



module.exports = {
    getAllPlaces,
    getPlaceById,
    getPopularPlaces,
    getRecommendedPlaces,
    getMostViewedPlaces,
    getNewlyAddedPlaces,
    getBeachPlaces,
    getLakePlaces,
    getMountainPlaces,
    getParkPlaces,
    getWaterfallPlaces,
    getIslandPlaces,
    getRandomPlaces,
}