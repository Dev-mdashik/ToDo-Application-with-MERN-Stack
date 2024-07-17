import { configureStore } from "@reduxjs/toolkit";
import slices from "../slices/slices";

const Store = configureStore({
    devTools: true,
    reducer: {
        store: slices,
    }
})

export default Store;