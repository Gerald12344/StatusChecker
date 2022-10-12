import axios from "axios";
import GET_JWT from "./auth/fetchToken";


export default async function FetchStacks() {
    let JWT = await GET_JWT();



    if (JWT === "") {
        return { state: false, nodeID: 0 }
    };


    let state = true;
    let nodeID = 0;

    try {
        let data = await axios.get("http://10.113.206.237:9000/api/endpoints/2/docker/tasks", {
            headers: {
                'Authorization': `Bearer ${JWT}`,
                'Accept': 'application/json'
            }
        });


        if (data.data[0].Status.State) {
            state = data.data[0].Status.State === "running"
            nodeID = data.data[0].NodeID
        }
    } catch (e) {
        console.log(e)
    }

    return { state, nodeID }
}