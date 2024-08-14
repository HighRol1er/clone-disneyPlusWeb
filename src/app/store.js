// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice"; // 안됐던코드 1
import movieReducer from "../features/movie/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie : movieReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});