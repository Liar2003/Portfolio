import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import { setDark } from "./reducers/theme/themeSlice";
const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // Adding or removing 'dark' class based on theme state
  const { mode } = store.getState().theme;
  const html = document.documentElement;

  if (mode == "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }

  return result;
};
const createAppStore = async () => {
  try {
    const store = configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
    });
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    store.dispatch(setDark(prefersDarkMode ? "dark" : "dark"));

    return store;
  } catch (err) {
    console.log(err);

    throw new Error("Some error occurred");
  }
};
export default createAppStore;

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(tokenMiddleware),
// });

// // Initialize authentication state
// (async () => {
//   const accessToken = localStorage.getItem("accessToken");
//   if (accessToken) {
//     try {
//       console.log("genaccess");
//       //await store.dispatch(refreshAccessToken());
//     } catch (error) {
//       console.error("Failed to initialize auth state", error);
//     }
//   }
// })();

// export default store;
