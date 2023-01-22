import React, { useState } from "react";

import styles from "./Users.module.css";

function UsersRows({setIsOpenDelete, setIsOpenEdit, setIsOpenUser, setUserHandler, ...props}) {
  const [user] = useState({...props.data});
  const modalHanlder = (modal) => {
    if (modal === 'deleteUser') {
      setIsOpenDelete(true);
      setUserHandler(user);
    }
    if (modal === 'editUser') {
      setIsOpenEdit(true);
      setUserHandler(user);
    }
  }
  
  return(
    <tr className={styles.tableRowItems} id={props.id}>
      <td className={styles.tableCell} >{props.data.first_name}</td>
      <td className={styles.tableCell} >{props.data.last_name}</td>
      <td className={styles.tableCell} >{props.data.age}</td>
      <td className={styles.tableCell} >{props.data.country}</td>
      <td className={styles.tableCell} >{props.data.idiom}</td>
      <td className={styles.tableCell} >{props.data.phone}</td>
      <td className={styles.tableCell} >{props.data?.hobbies.length > 1 ?
        props.data.hobbies.join(", ") : props.data.hobbies}</td>
        <td className={styles.tableCell} >{props.data?.preferences ?
          props.data.preferences.join(", ") : 'No tiene Preferencias'}</td>
      <td className={styles.tableCell} ><img src="../../../../public/images/edit_icon.png" alt="" style={{width: 25, height: 25}} onClick={() => modalHanlder('editUser')} /></td>
      <td className={styles.tableCell} ><img src="../../../../public/images/delete_icon.png" alt="" style={{width: 20, height: 20}} onClick={() => modalHanlder('deleteUser')} /></td>
    </tr>
  )
}

export default UsersRows;