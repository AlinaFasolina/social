import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let textareaRef = React.createRef();
  let sendBtnHandler = () => {
    alert(textareaRef.current.value);
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
        <textarea ref={textareaRef} placeholder="Enter your message"></textarea>
        <button onClick={sendBtnHandler} className={classes.sendBtn}>
          Send message
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
