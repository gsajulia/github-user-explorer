import axios, { AxiosResponse } from "axios";
import { IGithubUserApi } from "../models/githubTypes";
import { IApiResponse } from "../models/base";
const url = "https://api.github.com";

export const getUserBySearch = async (
    search: string
  ): Promise<IApiResponse<IGithubUserApi>> => {
    const response: AxiosResponse<IGithubUserApi> = await axios.get(
      `${url}/users/${search}`
    );
    return { data: response.data };
};