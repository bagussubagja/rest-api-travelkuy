const getAllSchedules = "SELECT * FROM schedule WHERE id_user = $1 ORDER BY start_date ASC";
const addSchedule = "INSERT INTO schedule (name, start_date, end_date, thumbnail, num_of_person, total_price, id_user) VALUES ($1, $2, $3, $4, $5, $6, $7)";
const deleteSchedule = "DELETE FROM schedule WHERE id = $1";

module.exports = {
    getAllSchedules,
    addSchedule,
    deleteSchedule
}