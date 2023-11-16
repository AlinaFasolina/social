import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  console.log('Dialogs presentational component props',props)
  let textareaRef = React.createRef();

  let onSendBtnHandler = () => {
    props.sendBtnHandler();
  };
  let changeMsgHandler = () => {
    let text = textareaRef.current.value;
    props.changeMsg(text);
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
          ref={textareaRef}
          placeholder="Enter your message"
          value={props.newMessageBody}
          onChange={changeMsgHandler}
        ></textarea>
        <button onClick={onSendBtnHandler} className={classes.sendBtn}>
          Send message
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
