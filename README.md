# FriendlyMovies: Firebase Data Connect Movie Recommendation app

This is a demo app that shows to build a movie review and recommendation app using Firebase and Next.js.

This project demonstrates how to use Firebase Data Connect and Vertex AI for personalized movie recommendations.

**Explore a detailed walkthrough of the demo and its key concepts on the solutions page at https://developers.google.com/solutions/learn/data-connect-grounded-agents**

*This project is intended for demonstration purposes only. It is not intended for use in a production environment.*

## Try it out today

We recommend trying out this project in Firebase Studio. Click this button to launch the project in Firebase Studio and follow the steps below to get started.


<a href="https://studio.firebase.google.com/import?url=https%3A%2F%2Fgithub.com%2Fmbleigh%2Ffdc-movies">
  <picture>
    <source
      media="(prefers-color-scheme: dark)"
      srcset="https://cdn.firebasestudio.dev/btn/try_dark_32.svg">
    <source
      media="(prefers-color-scheme: light)"
      srcset="https://cdn.firebasestudio.dev/btn/try_light_32.svg">
    <img
      height="32"
      alt="Try in Firebase Studio"
      src="https://cdn.firebasestudio.dev/btn/try_blue_32.svg">
  </picture>
</a>

### Prerequisites

The demo can be run in Firebase Studio using the built-in Firebase emulators.

However, for signing in and AI movie recommendations you need to set up a Firebase project, enable Vertex AI and the recommended APIs:

1. A new Firebase project
   - *We recommended using a new Firebase project for this demo. This [simplifies cleanup](#delete-and-clean-up-deployed-services) to avoid incurring on-going costs after trying out this demo app.*
1. Update the file `src/config/firebaseConfig.ts` with your [Firebase project configuration](https://firebase.google.com/docs/web/setup).
1. [Activate billing on your Google Cloud / Firebase Project](https://console.cloud.google.com/billing/linkedaccount?project=_)
1. [Enable Vertex AI and recommended APIs](https://console.cloud.google.com/vertex-ai) in the Google Cloud console.
1. [Enable Firebase Data Connect API](https://console.developers.google.com/apis/api/firebasedataconnect.googleapis.com/overview) in the Google Cloud console.
1. [Enable Firebase Authentication](https://console.firebase.google.com/project/_/authentication) and enable a sign-in provider in the Firebase console.
   1. Configure the domain where you'll be accessing the app. If you are not sure, you can find the domain in the error message returned in the console log when clicking the "Sign In" button. ("The current domain is not authorized for OAuth operations"). Add the domain in the Firebase console: Authentication -> Settings -> Authorized domains.

### Getting started in Firebase Studio

1. Follow the prerquisite steps above to set up your Firebase project.
1. Open the project in Firebase Studio.
1. When prompted, select your Firebase project.
1. If you want to sign in and use AI movie recommendations, copy your [Firebase config for a web app](https://firebase.google.com/docs/web/learn-more#config-object) into the the file src/config/firebaseConfig.ts.
1. The app is now ready! Switch to the **Web Preview** to see it in action.

### Getting started locally

You can run the application locally and access Firebase and Google Cloud directly.

#### Local Prerequisites

In addition to the [general prerequisites](#prerequisites), follow these steps to set up your development environment:

1. Set up the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install-sdk).
1. Set up the [Firebase CLI](https://firebase.google.com/docs/cli).
1. Set up [Application Default Credentials (ADC) for a local development environment](https://cloud.google.com/docs/authentication/set-up-adc-local-dev-environment)
1. Set up your [development environment for Firebase Data Connect](https://firebase.google.com/docs/data-connect/quickstart-local?userflow=automatic#choose_a_local_development_flow)

#### Running the app locally

1. Prepare seed data (movies, actors, reviews) for the Firebase Data Connect Emulator. The `seed-data.zip` file contains the required `dataconnect/.dataconnect/` directory structure. Extract the zip file at the top level of the project, and the files will be placed in the correct directory to be picked up by the emulator.
   ```bash
   unzip seed-data.zip
   ```
1. If you want to sign in and use AI movie recommendations, copy your [Firebase config for a web app](https://firebase.google.com/docs/web/learn-more#config-object) into the the file src/config/firebaseConfig.ts.
1. Start the Firebase Emulators.
   ```bash
   firebase emulators:start
   ```
1. Run the Next.js development server with the Firebase Data Connect emulator.
   ```bash
   pnpm run dev:emulator
   ```
1. Open your browser and navigate to the local URL provided in the terminal output (typically http://localhost:3000).

### Firebase Data Connect Emulator

This project can be configured to use the [Firebase Data Connect emulator for local development](https://firebase.google.com/docs/data-connect/quickstart-local). To use the emulator, you need to set the `DATA_CONNECT_EMULATOR_HOST` environment variable to the hostname of the emulator (e.g., `localhost`) and ensure the emulator is listening on port `9399`.

The `dev:emulator` run script (`pnpm run dev:emulator`) is configured to use the emulator listening on `localhost:9399`.

When running this application in Firebase Studio, the Firebase Data Connect emulator is used by default.

### Deploying the app

Once your application is running locally, you can deploy it to the cloud. Follow the steps to deploy the [Data Connect backend](https://firebase.google.com/docs/data-connect/quickstart-local?userflow=automatic#deploy_your_schema_and_query_to_production) and the [Next.JS app using Firebase App Hosting](https://firebase.google.com/docs/app-hosting/get-started).

## Demo and code overview

This project demonstrates the following key features:

*   **Firebase Data Connect**: The backend for this application is built using Firebase Data Connect. The schema and data models are defined in [`dataconnect/`](./dataconnect/).
*   **Vertex AI for Recommendations**: Personalized movie recommendations are generated using Vertex AI. The recommendation logic is implemented in [`src/ai/recommender.ts`](./src/ai/recommender.ts).
*   **Next.js Frontend**: The user interface is built with Next.js in the [`src/components`](./src/components/) directory.
*   **Firebase Authentication**: Users can sign in and manage their profiles using Firebase Authentication.
*   **Firebase Storage**: Movie posters and other assets are stored in Firebase Storage.

## Delete and clean up deployed services

To avoid continued billing for the resources that you have created as part of trying out this demo app, delete the Firebase project or disable the deployed services.
If you have created a new project to test this app, follow [these steps to delete the project](https://support.google.com/firebase/answer/9137886?hl=en) through the Firebase console.
Alternatively, if you followed the steps to deploy Firebase Data Connect and Firebase App Hosting to an existing project, follow these steps to remove them manually through the console:

* [Administer Cloud SQL instances](https://firebase.google.com/docs/data-connect/manage-services-and-databases#administer-cloud) that back Firebase Data Connect
* [Manage Firebase App Hosting backends](https://firebase.google.com/docs/app-hosting/configure#delete-backend)

## Additional Information

This app is not an officially supported Google Product.
