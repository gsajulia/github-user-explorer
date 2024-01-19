import styles from "./Home.module.css";
import { useState } from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { getUserBySearch } from "../../services/users";
import { IGithubUser } from "../../GlobalTypes";

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

      const githubUser = {
        id: result.data.node_id,
        name: result.data.name,
        description: result.data.bio,
        img: result.data.avatar_url,
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
      <h2>SEARCH GITHUB USERS</h2>
      <SearchBar
        onSearch={handleSearch}
        searchTerm={searchTerm}
        onSearchTermChange={handleSearchTermChange}
      />
    </div>
  );
}

export default Home;
