import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state=props.store.getState();

  let changeMsg = (text) => {
    let action = updateNewMessageBodyCreator(text);
    props.store.dispatch(action);
  };

  let sendBtnHandler = () => {
    let action = sendMessageCreator();
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      dialogsList={state.dialogsPage.dialogsList}
      messagesList={state.dialogsPage.messagesList}
      newMessageBody={state.dialogsPage.newMessageBody}
      sendBtnHandler={sendBtnHandler}
      changeMsg={changeMsg}
    />
  );
};

export default DialogsContainer;
