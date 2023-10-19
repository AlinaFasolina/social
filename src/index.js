
import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import App from './App';
import state, {addPost, subscribe, updateNewPostText} from './redux/state';

let rerenderEntireTree = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>
  );
};

rerenderEntireTree(state,addPost,updateNewPostText);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

