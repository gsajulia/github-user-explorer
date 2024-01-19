import axios from "axios";

const url = "https://api.github.com";

export const getUserBySearch = async (search: string) => {
    return axios.get(`${url}/users/${search}`);
};