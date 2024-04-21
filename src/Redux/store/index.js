import { configureStore } from "@reduxjs/toolkit";
import userInformation from "../slice/index.js";

import { combineReducers } from "redux";

const reducer = combineReducers({
  user: userInformation,
});

export const store = configureStore({ reducer });
