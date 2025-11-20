import User from '../models/User.js';
import UserService from '../services/UserService.js';

class UserController {
    constructor() {
        this.userservice = new UserService(User);
    }

    register = async (req,res) => {
        const userdata = req.body;

        const user = await this.userservice.createUser(userdata);

        console.log({_id: user._id, nome: user.nome, email: user.email, senha: user.senha});

        res.status(201).json(user);
    }
}

export default UserController;