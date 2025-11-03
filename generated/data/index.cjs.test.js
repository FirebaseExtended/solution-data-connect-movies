
const {
  updateUserRef,
  updateUser,
  addWatchRef,
  addWatch,
  addReviewRef,
  addReview,
  deleteWatchRef,
  deleteWatch,
  homePageRef,
  homePage,
  searchMoviesRef,
  searchMovies,
  moviePageRef,
  moviePage,
  watchHistoryPageRef,
  watchHistoryPage,
  browseMoviesRef,
  browseMovies,
  getMoviesRef,
  getMovies,
  detailedWatchHistoryRef,
  detailedWatchHistory,
} = require('./index.cjs.js');

jest.mock('firebase/data-connect', () => ({
  queryRef: jest.fn(),
  executeQuery: jest.fn(),
  mutationRef: jest.fn(),
  executeMutation: jest.fn(),
  validateArgs: jest.fn((config, dcOrVars) => ({ dc: { _useGeneratedSdk: jest.fn() }, vars: dcOrVars })),
}));

const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

describe('Data Connect SDK', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Mutations', () => {
    it('should call updateUser mutation', () => {
      const vars = { id: '1', name: 'Test User' };
      updateUser(vars);
      expect(validateArgs).toHaveBeenCalledWith({ connector: 'connector', service: 'app', location: 'us-central1' }, vars, undefined, true);
      expect(mutationRef).toHaveBeenCalledWith(expect.any(Object), 'UpdateUser', vars);
      expect(executeMutation).toHaveBeenCalled();
    });

    it('should call addWatch mutation', () => {
      const vars = { userId: '1', movieId: '2' };
      addWatch(vars);
      expect(validateArgs).toHaveBeenCalledWith({ connector: 'connector', service: 'app', location: 'us-central1' }, vars, undefined, true);
      expect(mutationRef).toHaveBeenCalledWith(expect.any(Object), 'AddWatch', vars);
      expect(executeMutation).toHaveBeenCalled();
    });

    it('should call addReview mutation', () => {
      const vars = { userId: '1', movieId: '2', rating: 5, review: 'Excellent!' };
      addReview(vars);
      expect(validateArgs).toHaveBeenCalledWith({ connector: 'connector', service: 'app', location: 'us-central1' }, vars, undefined, true);
      expect(mutationRef).toHaveBeenCalledWith(expect.any(Object), 'AddReview', vars);
      expect(executeMutation).toHaveBeenCalled();
    });

    it('should call deleteWatch mutation', () => {
      const vars = { id: '1' };
      deleteWatch(vars);
      expect(validateArgs).toHaveBeenCalledWith({ connector: 'connector', service: 'app', location: 'us-central1' }, vars, undefined, true);
      expect(mutationRef).toHaveBeenCalledWith(expect.any(Object), 'DeleteWatch', vars);
      expect(executeMutation).toHaveBeenCalled();
    });
  });

  describe('Queries', () => {
    it('should call homePage query', () => {
      homePage();
      expect(validateArgs).toHaveBeenCalledWith({ connector: 'connector', service: 'app', location: 'us-central1' }, undefined, undefined);
      expect(queryRef).toHaveBeenCalledWith(expect.any(Object), 'HomePage');
      expect(executeQuery).toHaveBeenCalled();
    });

    it('should call searchMovies query', () => {
      const vars = { query: 'test' };
      searchMovies(vars);
      expect(validateArgs).toHaveBeenCalledWith({ connector: 'connector', service: 'app', location: 'us-central1' }, vars, undefined, true);
      expect(queryRef).toHaveBeenCalledWith(expect.any(Object), 'SearchMovies', vars);
      expect(executeQuery).toHaveBeenCalled();
    });

    it('should call moviePage query', () => {
      const vars = { id: '1' };
      moviePage(vars);
      expect(validateArgs).toHaveBeenCalledWith({ connector: 'connector', service: 'app', location: 'us-central1' }, vars, undefined, true);
      expect(queryRef).toHaveBeenCalledWith(expect.any(Object), 'MoviePage', vars);
      expect(executeQuery).toHaveBeenCalled();
    });

    it('should call watchHistoryPage query', () => {
      watchHistoryPage();
      expect(validateArgs).toHaveBeenCalledWith({ connector: 'connector', service: 'app', location: 'us-central1' }, undefined, undefined);
      expect(queryRef).toHaveBeenCalledWith(expect.any(Object), 'WatchHistoryPage', undefined);
      expect(executeQuery).toHaveBeenCalled();
    });

    it('should call browseMovies query', () => {
      browseMovies();
      expect(validateArgs).toHaveBeenCalledWith({ connector: 'connector', service: 'app', location: 'us-central1' }, undefined, undefined);
      expect(queryRef).toHaveBeenCalledWith(expect.any(Object), 'BrowseMovies', undefined);
      expect(executeQuery).toHaveBeenCalled();
    });

    it('should call getMovies query', () => {
      getMovies();
      expect(validateArgs).toHaveBeenCalledWith({ connector: 'connector', service: 'app', location: 'us-central1' }, undefined, undefined);
      expect(queryRef).toHaveBeenCalledWith(expect.any(Object), 'GetMovies', undefined);
      expect(executeQuery).toHaveBeenCalled();
    });

    it('should call detailedWatchHistory query', () => {
      detailedWatchHistory();
      expect(validateArgs).toHaveBeenCalledWith({ connector: 'connector', service: 'app', location: 'us-central1' }, undefined, undefined);
      expect(queryRef).toHaveBeenCalledWith(expect.any(Object), 'DetailedWatchHistory');
      expect(executeQuery).toHaveBeenCalled();
    });
  });
});
