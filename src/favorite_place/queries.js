const getFavoritePlacebyUser = "SELECT * FROM tourism_place RIGHT JOIN fav_place ON tourism_place.id=fav_place.id_place WHERE fav_place.id_user = $1";
const deleteFavoritePlace = "DELETE FROM fav_place WHERE id = $1";
const checkFavoriteExists = "SELECT name FROM tourism_place RIGHT JOIN fav_place ON tourism_place.id=fav_place.id_place WHERE fav_place.id_user = $1";
const addFavoritePlace = "INSERT INTO fav_place (id_user, id_place) VALUES ($1, $2)";
const testUserFav = "SELECT * FROM fav_place";

module.exports = {
    getFavoritePlacebyUser,
    deleteFavoritePlace,
    addFavoritePlace,
    checkFavoriteExists,
    testUserFav
}