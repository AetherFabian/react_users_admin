import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

function Modal({ setIsOpen, children, ...props }) {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={!props?.isInput ? styles.modalDelete : styles.modalInput}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{props.title}</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;