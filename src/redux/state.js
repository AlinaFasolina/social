const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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

  // addPost() {
  //   let newPost = {
  //     id: 4,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 1030,
  //   };
  //   this._state.profilePage.postsList.push(newPost);
  //   this._state.profilePage.newPostText = "";
  //   this._callSubscriber(this._state);
  // },

  // updateNewPostText(newValue) {
  //   this._state.profilePage.newPostText = newValue;
  //   this._callSubscriber(this._state);
  // },

  dispatch(action) {
    debugger;

    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likesCount: 1030,
      };
      this._state.profilePage.postsList.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newtext;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextActionCreator = (textareaValue) => {
  return { type: UPDATE_NEW_POST_TEXT, newtext: textareaValue };
};

window.store = store;

export default store;
