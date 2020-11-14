import { createStore, combineReducers, applyMiddleware } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { appReducer } from "./app-reducer";
import { reducer as formReducer } from "redux-form";
import { newsReducer } from "./news-reducer";
import { helpReducer } from "./help-reducer";
import { advertsReducer } from "./adverts-reducer";
import { footerReducer } from "./footer-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  newsPage: newsReducer,
  help: helpReducer,
  adverts: advertsReducer,
  footer: footerReducer,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
