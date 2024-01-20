import styles from "./SearchBar.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { ISearchBar } from "./SearchBar.types";

const SearchBar = ({
  searchTerm,
  onSearchTermChange,
  onSearch,
}: ISearchBar) => (
  <section className={styles.searchForm}>
    <div className={styles.formGroup}>
      <label htmlFor="github-user-search">USER</label>
      <Input
        id="github-user-search"
        value={searchTerm}
        onChange={onSearchTermChange}
      />
    </div>
    <Button onClick={onSearch} type="submit">
      Search
    </Button>
  </section>
);

export default SearchBar;
