export interface ISearchBar {
    searchTerm: string;
    onSearchTermChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
  }