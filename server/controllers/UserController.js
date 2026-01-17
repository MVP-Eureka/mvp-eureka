import User from '../models/User.js';
import UserService from '../services/UserService.js';
import TokenService from '../services/TokenService.js';
import ApiError from '../utils/errors.js';

class UserController {
    constructor() {
        this.userservice = new UserService(User);
        this.tokenService = new TokenService();
    }

    register = async (req,res) => {
        const userdata = req.body;

        const user = await this.userservice.createUser(userdata);

        console.log({_id: user._id, nome: user.nome, email: user.email, senha: user.senha});

        res.status(201).json(user);
    }

    login = async (req,res) => {
        const userdata = req.body;

        const user = await this.userservice.getUser(userdata);

        console.log({_id: user._id, nome: user.nome, email: user.email, senha: user.senha});

        if(!user) {
            res.status(401).json({message: 'Usuario nao encontrado'});
        }

        try {
            const token = await this.tokenService.getAcessToken();

            console.log("Acess token:", token);

            res.cookie("acess_token", token, {
                maxAge: 1000 * 60 * 60, 
                httpOnly: true,    
                secure: false,   
                sameSite: "lax"
            }); 
        
            //req.headers['Authorization'] = 'Bearer: ' + token;

            res.status(200).json({user: user, acess_token: token});
        } catch {
            throw ApiError.notFound("Unable to login now. Please try later.");
        }
    }

    protected = async (req,res) => {
        res.status(200).json({message: 'Usuario autenticado'});
    }

    teste = async (req,res) => {
        res.status(200).json({message: req.cookies?.acess_token});
        console.log(req.cookies?.acess_token);
    }
}

export default UserController;