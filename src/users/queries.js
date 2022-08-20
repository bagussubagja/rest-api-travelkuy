const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const checkEmailExists = "SELECT s FROM users s WHERE s.email = $1";
const addUser = "INSERT INTO users(email, password, name, username) VALUES ($1, $2, $3, $4)";
const deleteUser = "DELETE FROM users WHERE id = $1";
const updateUser = "UPDATE users SET email = $1 WHERE id = $2";

module.exports = {
    getUsers,
    getUserById,
    checkEmailExists,
    addUser,
    deleteUser,
    updateUser
}