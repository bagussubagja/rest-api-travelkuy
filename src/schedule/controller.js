const pool = require('../../db');
const queries = require('./queries');

const getSchedules = (req, res) => {
    const id_user = req.params.id_user;
    pool.query(queries.getAllSchedules, [id_user], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addSchedule = (req, res) => {
    const {name, start_date, end_date, thumbnail, num_of_person, total_price, id_user} = req.body;
    pool.query(queries.addSchedule, [name, start_date, end_date, thumbnail, num_of_person, total_price, id_user], (error, _results) => {
        if(error) throw error;
        res.status(201).send("Schedule Created Successfully!")
    })
}

const deleteSchedule = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deleteSchedule, [id], (error, _results) => {
        if(error) throw error;
        res.status(200).send("ok")
    })
}

module.exports = {
    getSchedules,
    addSchedule,
    deleteSchedule
}
