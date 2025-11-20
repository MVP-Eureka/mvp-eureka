
class UserService {
    constructor(usermodel) {
        this.usermodel = usermodel;
    }

    createUser = async (userdata) => {
        if(!userdata.nome || !userdata.email || !userdata.senha) {
            return res.status(401).json({body: 'All fields are required'});
        }

        const u = await this.usermodel.findOne({email: userdata.email});

        if(u) {
            return res.status(401).json({body: 'User already exists'});
        }

        const user = new this.usermodel(userdata);

        try {
            await user.save();
        } catch {
            return res.status(401).json({body: 'Failed to create user'});
        }
    }
}

export default UserService;