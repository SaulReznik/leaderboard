import { combineReducers } from '@reduxjs/toolkit';

import usersReducer from './slices/users';

const reducer = combineReducers({
  users: usersReducer
});

export default reducer;
