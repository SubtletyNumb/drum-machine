import { configureStore } from "@reduxjs/toolkit";
import drumMachineSlice from "./Features/drumMachineSlice/drumMachineSlice";
export const Store = configureStore({
  reducer: {
    drumMachine : drumMachineSlice,
  }
});