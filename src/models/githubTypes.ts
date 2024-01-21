export interface IGithubUser {
    name: string;
    image: string;
    id: string;
    email: string;
    location: string;
    followers: number;
    publicRepos: number;
    githubUrl: string;
}

export interface IGithubUserApi {
    name: string;
    avatar_url: string;
    node_id: string;
    email: string;
    location: string;
    followers: number;
    public_repos: number;
    html_url: string;
}