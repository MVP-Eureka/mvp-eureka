import ApiError from '../utils/errors.js';
class UserService {
    constructor(usermodel) {
        this.usermodel = usermodel;
    }

    createUser = async (userdata) => {
        if(!userdata.nome || !userdata.email || !userdata.senha) {
            throw ApiError.badRequest('All fields are required');
        }

        const u = await this.usermodel.findOne({email: userdata.email});

        if(u) {
            throw ApiError.badRequest('User already exists');
        }

        const user = new this.usermodel(userdata);

        try {
            await user.save();
            return user;
        } catch {
            throw ApiError.badRequest('Failed to create user');
        }
    }
}

export default UserService;