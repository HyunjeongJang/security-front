import axios from "axios";
export async function signIn(param){
    try {
        const response = await axios.post("/login", {
            email: param.email,
            password: param.password
        })
        console.log(response)
        return response;
    } catch (error) {
        console.error(error)
        return error;
    }
}

export async function signUp(param){
    try {
        const response = await axios.post("/member/register", {
            nickname: param.nickname,
            email: param.email,
            password: param.password
        })
        console.log(response)
        return response;
    } catch (error) {
        console.error(error)
        return error;
    }
}

export async function getUserToken(code, state){
    try {
        // const response = await axios.get(`/oauth2/login/callback/kakao?code=${code}&state=${state}`);
        const response = await axios.get(`/oauth/kakao?code=${code}&state=${state}`);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error(error)
        return error;
    }
}