const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

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
    console.log("action in dispatch=", action);
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
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.text;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: 10,
        message: this._state.dialogsPage.newMessageBody,
      };
      this._state.dialogsPage.messagesList.push(newMessage);
      this._state.dialogsPage.newMessageBody = "";
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (textareaValue) => ({
  type: UPDATE_NEW_POST_TEXT,
  newtext: textareaValue,
});

export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  text: text,
});

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

window.store = store;

export default store;
