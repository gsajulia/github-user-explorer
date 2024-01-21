export const calculatePopularityScore = (followers: number, publicRepos: number) => {
  switch (true) {
    case followers >= 10 && publicRepos >= 8:
      return [1, 1, 1, 1, 1];
    case followers >= 7 &&  followers <= 9 && publicRepos >= 7:
      return [1, 1, 1, 1, 0];
    case followers >= 5 &&   followers <= 6 && publicRepos >= 5:
      return [1, 1, 1, 0, 0];
    case followers >= 3 &&  followers <= 4 && publicRepos >= 3:
      return [1, 1, 0, 0, 0];
    case followers >= 1 &&  followers <= 2 && publicRepos >= 1:
      return [1, 0, 0, 0, 0];
    case followers === 0 && publicRepos === 0:
      return [0, 0, 0, 0, 0];
    default:
      return null;
  }
}