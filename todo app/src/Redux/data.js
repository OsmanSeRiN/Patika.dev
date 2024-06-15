import { configureStore } from "@reduxjs/toolkit";
import { dataset } from "./Todos/dataset"; // dataset reducer'ını içe aktarıyoruz

export const data = configureStore({
    reducer: {
        todos: dataset.reducer // 'todos' reducer'ını ekliyoruz
    }
});
