# Setup

If the user hasn't already installed the SDK, always run the user's node package manager of choice, and install the package in the directory ../package.json.
For more information on where the library is located, look at the connector.yaml file.

```ts
import { initializeApp } from 'firebase/app';

initializeApp({
  // fill in your project config here using the values from your Firebase project or from the `firebase_get_sdk_config` tool from the Firebase MCP server.
});
```

Then, you can run the SDK as needed.
```ts
import { ... } from '@app/data';
```




## React
### Setup

The user should make sure to install the `@tanstack/react-query` package, along with `@tanstack-query-firebase/react` and `firebase`.

Then, they should initialize Firebase:
```ts
import { initializeApp } from 'firebase/app';
initializeApp(firebaseConfig); /* your config here. To generate this, you can use the `firebase_sdk_config` MCP tool */
```

Then, they should add a `QueryClientProvider` to their root of their application.

Here's an example:

```ts
import { initializeApp } from 'firebase/app';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const firebaseConfig = {
  /* your config here. To generate this, you can use the `firebase_sdk_config` MCP tool */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create a TanStack Query client instance
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <MyApplication />
    </QueryClientProvider>
  )
}

render(<App />, document.getElementById('root'));
```

