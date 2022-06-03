# Screens TG

This is a mobile aplication development with React Native.

<form 
  action="https://drive.google.com/file/d/1vAdmtxqEF5vUl0mYdT-4jmUh57TCyrsV/view?usp=sharing" 
  method="get" 
  target="_blank">
    <button type="submit">Download App APK</button>
</form>

## Get started

### Run project

To run project you need `clone` or download this repository, install node dependencies and `start` project.

One hava the project, install the dependencies using `npm` or `yarn`, I will use npm

```bash
npm install
# or
yarn install
```

Then into one command line run this:

```sh
npm start
```

Into another command line run:

```sh
npm run android
# or
npx react-native run-android
```

### Build project

To generate a 'release'of the application for android OS follow this steps.
See the docs for [Android](https://reactnative.dev/docs/signed-apk-android) or [IOS](https://reactnative.dev/docs/publishing-to-app-store)

**Android** Go to the root of the project.

```sh
cd android

./gradlew bundleRelease # generates a AAB (Android App Bundle) 
# or
./gradlew assembleRelease # generates a APK
```

The output files are in the path `<project-root>/android/app/build/outputs/`

## Project structure

The project source code is in `src/`

```sh
src
├── api
│   ├── photosServices.js
│   ├── postsServices.js
│   └── userServices.js
├── components
│   ├── atoms
│   ├── molecules
│   └── organisms
├── context
│   ├── AppContext.js
│   └── AppProvider.js
├── helpers
│   ├── Dimensions
│   └── filters
├── navigation
│   ├── AppNavigation.js
│   └── screens.js
├── reducers
│   ├── appReducer.js
│   └── appReducerTypes.js
├── screens
│   ├── Home.js
│   ├── PostDescription.js
│   └── PostsScreen.js
├── ScreensTG.js
├── styles
│   └── colors.js
└── utils
    └── validations.js
```

* `/api/` api services functions.
* `/components/` Atomic design components.
* `/context/` Context and `Context.Provider` aplication.
* `/helpers/` Contain the normalize function using Dimensions and filter functions.
* `/navigation/` App navigation and `screens` variables.
* `/reducers/` reducer function an reducer variables.
* `/screens` App Screens
* `/ScreensTG` App main component file.
* `/styles/` contant the colors palette.
* `/utils/` containt some utils for use in aplicacion. 

### Environment variables `.env` file

Example `.env` file

```sh
BASE_API_URL="https://jsonplaceholder.typicode.com/"
```

## Some errors

### `local.properties`

This error is fixed by creating the file  `<project>/android/local.properties` with the following content:

```text
sdk.dir = /home/smog/Android/Sdk
```

### deprecate gradle version on build

`react-native-screens` have some conflict with the `classpath` or `gradle`,  see this [issue](https://github.com/software-mansion/react-native-screens/issues/1449)
