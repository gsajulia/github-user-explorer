import styles from "./Home.module.css";
import { useState } from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { getUserBySearch } from "../../services/users";
import { IGithubUser } from "../../GlobalTypes";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { UserStats } from "../../components/UserStats/UserStats";

function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [user, setUser] = useState<IGithubUser>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError("Por favor, insira um termo de busca.");
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      const result = await getUserBySearch(searchTerm);
      const {
        node_id,
        name,
        avatar_url,
        email,
        location,
        followers,
        public_repos,
      } = result.data;

      const githubUser = {
        id: node_id,
        name,
        image: avatar_url,
        email,
        location,
        followers,
        publicRepos: public_repos,
      };

      setUser(githubUser);
      setSearchTerm("");
    } catch (err) {
      setError("Erro ao realizar a busca.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.searchUserSection}>
      <h2 className={styles.homeTitle}>SEARCH GITHUB USERS</h2>
      <SearchBar
        onSearch={handleSearch}
        searchTerm={searchTerm}
        onSearchTermChange={handleSearchTermChange}
      />
      <hr className={styles.firstSectionDivider} />

      {user && (
        <div className={styles.userSection}>
          <UserInfo
            image={user.image}
            name={user.name}
            email={user.email}
            location={user.location}
          />

          <hr className={styles.secondSectionDivider} />

          <UserStats
            followers={user.followers}
            repositories={user.publicRepos}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
