import { calculatePopularityScore } from './popularityScore'

describe('calculatePopularityScore', () => {
  it('returns 5 stars for followers >= 10 and publicRepos >= 8', () => {
    expect(calculatePopularityScore(10, 8)).toEqual([1, 1, 1, 1, 1]);
  });

  it('returns 4 stars for followers 7-9 and publicRepos >= 7', () => {
    expect(calculatePopularityScore(7, 7)).toEqual([1, 1, 1, 1, 0]);
    expect(calculatePopularityScore(9, 7)).toEqual([1, 1, 1, 1, 0]);
  });

  it('returns 3 stars for followers 5-6 and publicRepos >= 5', () => {
    expect(calculatePopularityScore(5, 5)).toEqual([1, 1, 1, 0, 0]);
    expect(calculatePopularityScore(6, 5)).toEqual([1, 1, 1, 0, 0]);
  });

  it('returns 2 stars for followers 3-4 and publicRepos >= 3', () => {
    expect(calculatePopularityScore(3, 3)).toEqual([1, 1, 0, 0, 0]);
    expect(calculatePopularityScore(4, 3)).toEqual([1, 1, 0, 0, 0]);
  });

  it('returns 1 star for followers 1-2 and publicRepos >= 1', () => {
    expect(calculatePopularityScore(1, 1)).toEqual([1, 0, 0, 0, 0]);
    expect(calculatePopularityScore(2, 1)).toEqual([1, 0, 0, 0, 0]);
  });

  it('returns 0 stars for followers = 0 and publicRepos = 0', () => {
    expect(calculatePopularityScore(0, 0)).toEqual([0, 0, 0, 0, 0]);
  });

  it('returns null for all other cases', () => {
    expect(calculatePopularityScore(2, 0)).toBeNull();
    expect(calculatePopularityScore(0, 2)).toBeNull();
    expect(calculatePopularityScore(10, 3)).toBeNull();
  });
});
