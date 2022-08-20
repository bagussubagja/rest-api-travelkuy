const pool = require('../../db');
const queries = require('./queries')

const getPlaces = (req, res) => {
    pool.query(queries.getAllPlaces, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};


const getPlaceById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getPlaceById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getPopularPlaces = (req, res) => {
    pool.query(queries.getPopularPlaces, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

const getRecommendedPlaces = (req, res) => {
    pool.query(queries.getRecommendedPlaces, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

const getMostViewedPlaces = (req, res) => {
    pool.query(queries.getMostViewedPlaces, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

const getNewlyAddedPlaces = (req, res) => {
    pool.query(queries.getNewlyAddedPlaces, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

const getBeachPlaces = (req, res) => {
    pool.query(queries.getBeachPlaces, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

const getLakePlaces = (req, res) => {
    pool.query(queries.getLakePlaces, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

const getMountainPlaces = (req, res) => {
    pool.query(queries.getMountainPlaces, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

const getParkPlaces = (req, res) => {
    pool.query(queries.getParkPlaces, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

const getWaterfallPlaces = (req, res) => {
    pool.query(queries.getWaterfallPlaces, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

const getIslandPlaces = (req, res) => {
    pool.query(queries.getIslandPlaces, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

const getRandomPlaces = (req, res) => {
    pool.query(queries.getRandomPlaces, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};



module.exports = {
    getPlaces,
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
   
};