/**
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'connector',
  service: 'app',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

function updateUserRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUser', inputVars);
}
updateUserRef.operationName = 'UpdateUser';
exports.updateUserRef = updateUserRef;

exports.updateUser = function updateUser(dcOrVars, vars) {
  return executeMutation(updateUserRef(dcOrVars, vars));
};

const addWatchRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddWatch', inputVars);
}
addWatchRef.operationName = 'AddWatch';
exports.addWatchRef = addWatchRef;

exports.addWatch = function addWatch(dcOrVars, vars) {
  return executeMutation(addWatchRef(dcOrVars, vars));
};

const addReviewRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddReview', inputVars);
}
addReviewRef.operationName = 'AddReview';
exports.addReviewRef = addReviewRef;

exports.addReview = function addReview(dcOrVars, vars) {
  return executeMutation(addReviewRef(dcOrVars, vars));
};

const deleteWatchRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteWatch', inputVars);
}
deleteWatchRef.operationName = 'DeleteWatch';
exports.deleteWatchRef = deleteWatchRef;

exports.deleteWatch = function deleteWatch(dcOrVars, vars) {
  return executeMutation(deleteWatchRef(dcOrVars, vars));
};

const homePageRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'HomePage');
}
homePageRef.operationName = 'HomePage';
exports.homePageRef = homePageRef;

exports.homePage = function homePage(dc) {
  return executeQuery(homePageRef(dc));
};

const searchMoviesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'SearchMovies', inputVars);
}
searchMoviesRef.operationName = 'SearchMovies';
exports.searchMoviesRef = searchMoviesRef;

exports.searchMovies = function searchMovies(dcOrVars, vars) {
  return executeQuery(searchMoviesRef(dcOrVars, vars));
};

const moviePageRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'MoviePage', inputVars);
}
moviePageRef.operationName = 'MoviePage';
exports.moviePageRef = moviePageRef;

exports.moviePage = function moviePage(dcOrVars, vars) {
  return executeQuery(moviePageRef(dcOrVars, vars));
};

const watchHistoryPageRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'WatchHistoryPage', inputVars);
}
watchHistoryPageRef.operationName = 'WatchHistoryPage';
exports.watchHistoryPageRef = watchHistoryPageRef;

exports.watchHistoryPage = function watchHistoryPage(dcOrVars, vars) {
  return executeQuery(watchHistoryPageRef(dcOrVars, vars));
};

const browseMoviesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'BrowseMovies', inputVars);
}
browseMoviesRef.operationName = 'BrowseMovies';
exports.browseMoviesRef = browseMoviesRef;

exports.browseMovies = function browseMovies(dcOrVars, vars) {
  return executeQuery(browseMoviesRef(dcOrVars, vars));
};

const getMoviesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMovies', inputVars);
}
getMoviesRef.operationName = 'GetMovies';
exports.getMoviesRef = getMoviesRef;

exports.getMovies = function getMovies(dcOrVars, vars) {
  return executeQuery(getMoviesRef(dcOrVars, vars));
};

const detailedWatchHistoryRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'DetailedWatchHistory');
}
detailedWatchHistoryRef.operationName = 'DetailedWatchHistory';
exports.detailedWatchHistoryRef = detailedWatchHistoryRef;

exports.detailedWatchHistory = function detailedWatchHistory(dc) {
  return executeQuery(detailedWatchHistoryRef(dc));
};
