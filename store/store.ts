import { configureStore } from "@reduxjs/toolkit";
import themeReducers from "./features/themeSlice";
import productReducers from "./features/productsSlice";
export const store = configureStore({
  reducer: {
    theme: themeReducers,
    products: productReducers,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
