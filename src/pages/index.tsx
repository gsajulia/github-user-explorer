import styles from "@/styles/Home.module.css";
import { useEffect, useMemo, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { getUserBySearch } from "../services/users";
import { IGithubUser, IGithubUserApi } from "../models/githubTypes";
import { IApiResponse } from "../models/base";
import UserInfo from "../components/UserInfo/UserInfo";
import UserStats from "../components/UserStats/UserStats";
import useFetch from "../hooks/useFetch";
import Spinner from "@/components/Spinner/Spinner";
import { calculatePopularityScore } from "@/utils/popularityScore";

function Home() {
  const { data, error, setError, isLoading, sendRequest } =
    useFetch<IApiResponse<IGithubUserApi>>();
  const [user, setUser] = useState<IGithubUser>();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const transformApiResponseToGithubUser = (data: IGithubUserApi) => {
    const {
      node_id,
      name,
      avatar_url,
      email,
      location,
      followers,
      public_repos,
      html_url,
    } = data;

    return {
      id: node_id,
      name,
      image: avatar_url,
      email,
      location,
      followers,
      publicRepos: public_repos,
      githubUrl: html_url,
    };
  };

  const handleSearch = async () => {
    setUser(undefined);
    if (!searchTerm.trim()) {
      setError("Por favor, insira um termo de busca.");
      return;
    }
    await sendRequest(getUserBySearch, searchTerm);
  };

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (data) {
      const githubUser = transformApiResponseToGithubUser(data.data);
      setUser(githubUser);
      setSearchTerm("");
    }
  }, [data]);

  const popularityStars = useMemo(() => {
    return calculatePopularityScore(
      user?.followers ?? 0,
      user?.publicRepos ?? 0
    );
  }, [user]);

  return (
    <div className={styles.searchUserSection}>
      <h2 className={styles.homeTitle}>SEARCH GITHUB USERS</h2>
      <SearchBar
        onSearch={handleSearch}
        searchTerm={searchTerm}
        onSearchTermChange={handleSearchTermChange}
      />

      {user && !isLoading && !error && (
        <hr className={styles.firstSectionDivider} />
      )}

      {isLoading && (
        <div className={styles.statusContainer}>
          <Spinner />
        </div>
      )}

      <div className={styles.userSection}>
        {error && <div> {error} </div>}

        {user && (
          <>
            <UserInfo
              image={user.image}
              name={user.name}
              email={user.email}
              location={user.location}
              githubUrl={user.githubUrl}
            />

            <hr className={styles.secondSectionDivider} />

            <UserStats
              followers={user.followers}
              repositories={user.publicRepos}
              popularityScore={popularityStars}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
