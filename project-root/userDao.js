const db = require('../config/database'); //assuming you have a database module to handle DB connection

class UserDao {
 static async getAllUsers() {
    // implement database query logic here
    const query = 'SELECT * FROM users';
    const [rows] = await db.execute(query);
    return rows;
 }   

 // Other database interaction methods...
}

module.exports = UserDao