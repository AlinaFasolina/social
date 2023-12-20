import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    messagesList: state.dialogsPage.messagesList,
    newMessageBody: state.dialogsPage.newMessageBody,
    dialogsList: state.dialogsPage.dialogsList,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendBtnHandler: () => {
      let action = sendMessageCreator();
      dispatch(action);
    },
    changeMsg: (text) => {
      let action = updateNewMessageBodyCreator(text);
      dispatch(action);
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
