import axios from "axios";

export async function getUser(userID, accessToken){
    return await axios.get(`/member/${userID}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}