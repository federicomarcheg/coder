const UserDao = require('../dao/userDao');

class UserController {
    static async getUsers(req, res) {
        try {
            const users = await
            UserDao.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }  

    // Other controller methods...
}

module.exports = UserController;