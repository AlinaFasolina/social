import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      postsList: [
        { id: 1, message: "First post", likesCount: 12 },
        { id: 2, message: "Second post", likesCount: 152 },
        { id: 3, message: "Third post", likesCount: 412 },
      ],
      newPostText: "it-kamasutra.com",
    },

    dialogsPage: {
      messagesList: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is you kokok" },
        { id: 3, message: "Heyayay" },
      ],

      dialogsList: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" },
      ],
      newMessageBody: "Hey",
    },

    sidebar: {
      friends: [
        { id: 1, name: "Nastya" },
        { id: 2, name: "Stasya" },
        { id: 2, name: "Dave" },
      ],
    },
  },

  _callSubscriber() {
    console.log("State changed");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};



window.store = store;

export default store;
