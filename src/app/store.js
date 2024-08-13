// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice"; // 안됐던코드 1
// export default configureStore({
//   reducer: {},
//   // middleware: getDefaultMiddleware({
//   //   serializableCheck : false,
//   middleware : 
//   }),
// });

export default configureStore({
  reducer: {
    user: userReducer //안됐던코드 1
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});