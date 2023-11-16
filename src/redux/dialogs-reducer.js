const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.text;
      return state;
    case SEND_MESSAGE:
      let newMessage = {
        id: 10,
        message: state.newMessageBody,
      };
      state.messagesList.push(newMessage);
      state.newMessageBody = "";
      return state;
    default:
      return state;
  }
};

export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  text: text,
});

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});


export default dialogsReducer;
