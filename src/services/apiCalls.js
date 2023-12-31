import axios from "axios";
const root = "http://localhost:3000";

export const loginMe = async(credentials) => {
    return await axios.post(`${root}/login`,credentials);
}

export const registerMe = async (credentials) => {
    return await axios.post(`${root}/register`, credentials);
}