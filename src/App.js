import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import React from "react";

const App = (props) => {
  console.log('props in App=',props)

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar friends={props.state.sidebar.friends} />
        <div className="app-wrapper-content ">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  newPostText={props.state.profilePage.newPostText}
                  postsList={props.state.profilePage.postsList}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}
                />
              }
            />
            <Route
              path="/dialogs"
              element={
                <Dialogs
                  dialogsList={props.state.dialogsPage.dialogsList}
                  messagesList={props.state.dialogsPage.messagesList}
                />
              }
            />
            <Route
              path="/"
              element={
                <Dialogs
                  dialogsList={props.state.dialogsPage.dialogsList}
                  messagesList={props.state.dialogsPage.messagesList}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;