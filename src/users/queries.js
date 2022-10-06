const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id_user = $1";
const checkEmailExists = "SELECT s FROM users s WHERE s.email = $1";
const addUser = "INSERT INTO users(id_user, email, password, name, gender) VALUES ($1, $2, $3, $4, $5)";
const deleteUser = "DELETE FROM users WHERE id = $1";
const updateUser = "UPDATE users SET name = $1 WHERE id_user = $2";

module.exports = {
    getUsers,
    getUserById,
    checkEmailExists,
    addUser,
    deleteUser,
    updateUser
}