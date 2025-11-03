# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useUpdateUser, useAddWatch, useAddReview, useDeleteWatch, useHomePage, useSearchMovies, useMoviePage, useWatchHistoryPage, useBrowseMovies, useGetMovies } from '@app/data/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useUpdateUser(updateUserVars);

const { data, isPending, isSuccess, isError, error } = useAddWatch(addWatchVars);

const { data, isPending, isSuccess, isError, error } = useAddReview(addReviewVars);

const { data, isPending, isSuccess, isError, error } = useDeleteWatch(deleteWatchVars);

const { data, isPending, isSuccess, isError, error } = useHomePage();

const { data, isPending, isSuccess, isError, error } = useSearchMovies(searchMoviesVars);

const { data, isPending, isSuccess, isError, error } = useMoviePage(moviePageVars);

const { data, isPending, isSuccess, isError, error } = useWatchHistoryPage(watchHistoryPageVars);

const { data, isPending, isSuccess, isError, error } = useBrowseMovies(browseMoviesVars);

const { data, isPending, isSuccess, isError, error } = useGetMovies(getMoviesVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { updateUser, addWatch, addReview, deleteWatch, homePage, searchMovies, moviePage, watchHistoryPage, browseMovies, getMovies } from '@app/data';


// Operation UpdateUser:  For variables, look at type UpdateUserVars in ../index.d.ts
const { data } = await UpdateUser(dataConnect, updateUserVars);

// Operation AddWatch:  For variables, look at type AddWatchVars in ../index.d.ts
const { data } = await AddWatch(dataConnect, addWatchVars);

// Operation AddReview:  For variables, look at type AddReviewVars in ../index.d.ts
const { data } = await AddReview(dataConnect, addReviewVars);

// Operation DeleteWatch:  For variables, look at type DeleteWatchVars in ../index.d.ts
const { data } = await DeleteWatch(dataConnect, deleteWatchVars);

// Operation HomePage: 
const { data } = await HomePage(dataConnect);

// Operation SearchMovies:  For variables, look at type SearchMoviesVars in ../index.d.ts
const { data } = await SearchMovies(dataConnect, searchMoviesVars);

// Operation MoviePage:  For variables, look at type MoviePageVars in ../index.d.ts
const { data } = await MoviePage(dataConnect, moviePageVars);

// Operation WatchHistoryPage:  For variables, look at type WatchHistoryPageVars in ../index.d.ts
const { data } = await WatchHistoryPage(dataConnect, watchHistoryPageVars);

// Operation BrowseMovies:  For variables, look at type BrowseMoviesVars in ../index.d.ts
const { data } = await BrowseMovies(dataConnect, browseMoviesVars);

// Operation GetMovies:  For variables, look at type GetMoviesVars in ../index.d.ts
const { data } = await GetMovies(dataConnect, getMoviesVars);


```