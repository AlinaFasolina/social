import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/state";

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  console.log('props in DIALOGS',props)
  // let textareaRef = React.createRef();

  let changeMsgHandler = (e) => {
    // let text = textareaRef.current.alue;
    let text = e.target.value;

    console.log("text in dialog = ", text);
    let action = updateNewMessageBodyCreator(text);
    console.log("action in dialog = ", action);

    props.dispatch(action);
  };

  let sendBtnHandler = () => {
    let action = sendMessageCreator();
    props.dispatch(action);
  };

  return (
    <div className={classes.dialogs_page}>
      <div className={classes.dialogs_top}>
        <div className={classes.dialogs_items}>
          {props.dialogsList.map((item) => (
            <DialogItem name={item.name} id={item.id} />
          ))}
        </div>
        <div className={classes.messages}>
          {props.messagesList.map((item) => (
            <Message message={item.message} />
          ))}
        </div>
      </div>
      <div className={classes.sendWrapper}>
        <textarea
          // ref={textareaRef}
          placeholder="Enter your message"
          value={props.newMessageBody}
          onChange={changeMsgHandler}
        ></textarea>
        <button onClick={sendBtnHandler} className={classes.sendBtn}>
          Send message
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
