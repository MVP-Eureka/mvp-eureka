import axios from 'axios';

class TokenService {
    constructor() {}

    getAcessToken = async () => {
        try {
            const response = await axios.post(
            `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
            {
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                audience: process.env.AUTH0_AUDIENCE, 
                grant_type: "client_credentials"
            },
            {
                headers: {
                "Content-Type": "application/json"
                }
            });

            return response.data.access_token;
        } catch (err) {
            console.error("Erro:", err.response?.data || err.message);
        }
    }
}

export default TokenService;