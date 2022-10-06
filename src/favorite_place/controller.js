const pool = require('../../db');
const queries = require('./queries')

const getFavoritePlacebyUser = (req, res) => {
    const id_user = req.params.id_user;
    pool.query(queries.getFavoritePlacebyUser, [id_user], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const deleteFavoritePlace = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deleteFavoritePlace, [id], (error, _results) => {
        if(error) throw error;
        res.status(200).send("ok")
    })
}

const addFavoritePlace = (req, res) => {
    const {id_user, id_place, fav_unique} = req.body;
    pool.query(queries.checkFavoriteExists, [fav_unique], (_error, results) => {
        if(results.rows.length){
            res.send("Favorite Already Exists!");
        }else{
            pool.query(queries.addFavoritePlace, [id_user, id_place, fav_unique], (error, _results) => {
                if(error) throw error;
                res.status(201).send("Favorite Successfully Created!");
            })
        }
    })
}

// const addFavoritePlace = (req, res) => {
//     const {id_user, id_place} = req.body;
//     pool.query(queries.addFavoritePlace, [id_user, id_place], (error, _results) => {
//         if(error) throw error;
//         res.status(201).send("Favorite Created Successfully!")
        
//     })
// }


module.exports = {
    getFavoritePlacebyUser,
    deleteFavoritePlace,
    addFavoritePlace,
}