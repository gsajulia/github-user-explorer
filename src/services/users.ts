import axios, { AxiosResponse } from "axios";
import { IGithubUserApi } from "../models/githubTypes";
import { IApiResponse } from "../models/base";
export const baseUrl = "https://api.github.com";

export const getUserBySearch = async (
    search: string
  ): Promise<IApiResponse<IGithubUserApi>> => {
    const response: AxiosResponse<IGithubUserApi> = await axios.get(
      `${baseUrl}/users/${search}`
    );
    return { data: response.data };
};