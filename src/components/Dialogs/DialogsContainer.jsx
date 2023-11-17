import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import ContextStore from "../../StoreContext";

const DialogsContainer = (props) => {
  

  return (
    <ContextStore.Consumer>
      {(store) => {
        let state = store.getState();

        let changeMsg = (text) => {
          let action = updateNewMessageBodyCreator(text);
          store.dispatch(action);
        };
      
        let sendBtnHandler = () => {
          let action = sendMessageCreator();
          store.dispatch(action);
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
      }}
    </ContextStore.Consumer>
  );
};

export default DialogsContainer;
