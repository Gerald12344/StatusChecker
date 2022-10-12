import axios from 'axios';

// You must fetch every 7 hours
let lastFetch = 0;
let JWT = "";

export default async function GET_JWT() {
    // Has it been 7 hours since last fetch?
    if (Date.now() - lastFetch > 25200000) {
        // Fetch new JWT
        lastFetch = Date.now();
        console.table({
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
        })
        let data: any;
        try {
            data = await axios.post("http://10.113.206.237:9000/api/auth", {

                Username: process.env.USERNAME,
                Password: process.env.PASSWORD

            })

            JWT = data.data.jwt;
        } catch (e) {
            console.log(e)
        }
    }

    return JWT;
}
