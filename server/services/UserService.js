import ApiError from '../utils/errors.js';
class UserService {
    constructor(usermodel) {
        this.usermodel = usermodel;
    }

    createUser = async (userdata) => {
        if(!userdata.nome || !userdata.email || !userdata.senha) {
            throw ApiError.badRequest('All fields are required');
        }

        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(!regexEmail.test(userdata.email)) {
            throw ApiError.badRequest('Invalid Email');
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

    getUser = async (userdata) => {
        if(!userdata.email || !userdata.password) {
            throw ApiError.badRequest('All fields are required');
        }

        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(!regexEmail.test(userdata.email)) {
            throw ApiError.badRequest('Invalid Email');
        }

        const user = await this.usermodel.findOne({email: userdata.email});

        console.log({email: user?.email, password: user?.senha});

        if(userdata.password != user?.senha || userdata.email != user?.email) {
            throw ApiError.unauthorized('Invalid email or password');
        }

        return user;
    }

    updateUser = async (user) => {
        const u = await this.usermodel.findOne({nome: user.nome});

        const { nome, email, senha } = user.userdata;

        // Monta objeto apenas com campos enviados
        const dadosAtualizados = {};
        if (nome) dadosAtualizados.nome = nome;
        if (email) dadosAtualizados.email = email;
        if (senha) dadosAtualizados.senha = senha;

        const usuarioAtualizado = await this.usermodel.findByIdAndUpdate(
        u._id,
        { $set: dadosAtualizados },
        { new: true, runValidators: true }
        );

        return usuarioAtualizado;
    }
}

export default UserService;