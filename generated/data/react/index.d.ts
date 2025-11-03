import { UpdateUserData, UpdateUserVariables, AddWatchData, AddWatchVariables, AddReviewData, AddReviewVariables, DeleteWatchData, DeleteWatchVariables, HomePageData, SearchMoviesData, SearchMoviesVariables, MoviePageData, MoviePageVariables, WatchHistoryPageData, WatchHistoryPageVariables, BrowseMoviesData, BrowseMoviesVariables, GetMoviesData, GetMoviesVariables, DetailedWatchHistoryData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useUpdateUser(options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, UpdateUserVariables>): UseDataConnectMutationResult<UpdateUserData, UpdateUserVariables>;
export function useUpdateUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, UpdateUserVariables>): UseDataConnectMutationResult<UpdateUserData, UpdateUserVariables>;

export function useAddWatch(options?: useDataConnectMutationOptions<AddWatchData, FirebaseError, AddWatchVariables>): UseDataConnectMutationResult<AddWatchData, AddWatchVariables>;
export function useAddWatch(dc: DataConnect, options?: useDataConnectMutationOptions<AddWatchData, FirebaseError, AddWatchVariables>): UseDataConnectMutationResult<AddWatchData, AddWatchVariables>;

export function useAddReview(options?: useDataConnectMutationOptions<AddReviewData, FirebaseError, AddReviewVariables>): UseDataConnectMutationResult<AddReviewData, AddReviewVariables>;
export function useAddReview(dc: DataConnect, options?: useDataConnectMutationOptions<AddReviewData, FirebaseError, AddReviewVariables>): UseDataConnectMutationResult<AddReviewData, AddReviewVariables>;

export function useDeleteWatch(options?: useDataConnectMutationOptions<DeleteWatchData, FirebaseError, DeleteWatchVariables>): UseDataConnectMutationResult<DeleteWatchData, DeleteWatchVariables>;
export function useDeleteWatch(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteWatchData, FirebaseError, DeleteWatchVariables>): UseDataConnectMutationResult<DeleteWatchData, DeleteWatchVariables>;

export function useHomePage(options?: useDataConnectQueryOptions<HomePageData>): UseDataConnectQueryResult<HomePageData, undefined>;
export function useHomePage(dc: DataConnect, options?: useDataConnectQueryOptions<HomePageData>): UseDataConnectQueryResult<HomePageData, undefined>;

export function useSearchMovies(vars: SearchMoviesVariables, options?: useDataConnectQueryOptions<SearchMoviesData>): UseDataConnectQueryResult<SearchMoviesData, SearchMoviesVariables>;
export function useSearchMovies(dc: DataConnect, vars: SearchMoviesVariables, options?: useDataConnectQueryOptions<SearchMoviesData>): UseDataConnectQueryResult<SearchMoviesData, SearchMoviesVariables>;

export function useMoviePage(vars: MoviePageVariables, options?: useDataConnectQueryOptions<MoviePageData>): UseDataConnectQueryResult<MoviePageData, MoviePageVariables>;
export function useMoviePage(dc: DataConnect, vars: MoviePageVariables, options?: useDataConnectQueryOptions<MoviePageData>): UseDataConnectQueryResult<MoviePageData, MoviePageVariables>;

export function useWatchHistoryPage(vars?: WatchHistoryPageVariables, options?: useDataConnectQueryOptions<WatchHistoryPageData>): UseDataConnectQueryResult<WatchHistoryPageData, WatchHistoryPageVariables>;
export function useWatchHistoryPage(dc: DataConnect, vars?: WatchHistoryPageVariables, options?: useDataConnectQueryOptions<WatchHistoryPageData>): UseDataConnectQueryResult<WatchHistoryPageData, WatchHistoryPageVariables>;

export function useBrowseMovies(vars?: BrowseMoviesVariables, options?: useDataConnectQueryOptions<BrowseMoviesData>): UseDataConnectQueryResult<BrowseMoviesData, BrowseMoviesVariables>;
export function useBrowseMovies(dc: DataConnect, vars?: BrowseMoviesVariables, options?: useDataConnectQueryOptions<BrowseMoviesData>): UseDataConnectQueryResult<BrowseMoviesData, BrowseMoviesVariables>;

export function useGetMovies(vars?: GetMoviesVariables, options?: useDataConnectQueryOptions<GetMoviesData>): UseDataConnectQueryResult<GetMoviesData, GetMoviesVariables>;
export function useGetMovies(dc: DataConnect, vars?: GetMoviesVariables, options?: useDataConnectQueryOptions<GetMoviesData>): UseDataConnectQueryResult<GetMoviesData, GetMoviesVariables>;

export function useDetailedWatchHistory(options?: useDataConnectQueryOptions<DetailedWatchHistoryData>): UseDataConnectQueryResult<DetailedWatchHistoryData, undefined>;
export function useDetailedWatchHistory(dc: DataConnect, options?: useDataConnectQueryOptions<DetailedWatchHistoryData>): UseDataConnectQueryResult<DetailedWatchHistoryData, undefined>;
