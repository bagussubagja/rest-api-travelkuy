const pool = require('../../db');
const queries = require('./queries');

const getUsers = (_req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

const getUserById = (req, res) => {
    const id = req.params.id;
    pool.query(queries.getUserById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addUser = (req, res) => {
    const {id_user, email, password, name} = req.body;
    pool.query(queries.checkEmailExists, [email], (_error, results) => {
        if(results.rows.length){
            res.send("Email already exists!");
        }else{
            pool.query(queries.addUser, [id_user, email, password, name], (error, _results) => {
                if(error) throw error;
                res.status(201).send("User Created Successfully!")
                
            })
        }

        
    })
}

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (_error, results) => {
        const noUserFound = !results.rows.length;
        if(noUserFound){
            res.send("User doesnt exist in the database!");
        }
        pool.query(queries.deleteUser, [id], (error, _results) => {
            if(error) throw error;
            res.status(200).send("User removed successfully")
        })
    })
}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const {email} = req.body;
    pool.query(queries.getUserById, [id], (_error, results) => {
        const noUserFound = !results.rows.length;
        if(noUserFound){
            res.send("User doesnt exist in the database!");
        }

        pool.query(queries.updateUser, [email, id], (error, _results) => {
            if(error) throw error;
            res.status(200).send("User updated successfully!")
        })
    })
}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    deleteUser,
    updateUser,
}