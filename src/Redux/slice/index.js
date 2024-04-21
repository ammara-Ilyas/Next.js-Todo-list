const { createSlice } = require("@reduxjs/toolkit");

const userInformationSlice = createSlice({
  name: "user",
  initialState: {
    userInformation: [
      { name: "Zeeshan", password: "****", email: "zeeshan.noor@gmail.com" },
    ],
    Todo: [],
  },
  reducers: {
    setUserInformation: (state, action) => {
      state.userInformation.push(action.payload);
    },
    setTodoReducer: (state, action) => {
      state.Todo.push(action.payload);
    },
  },
});

export const { setUserInformation, setTodoReducer } = userInformationSlice.actions;
export default userInformationSlice.reducer;
