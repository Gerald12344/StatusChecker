import { config } from "dotenv";
import GET_JWT from "./auth/fetchToken";
import mainUpdate from "./update";


config();

(async () => {
    await GET_JWT();


    setInterval(() => {
        mainUpdate();
    }, 5000)


})();
