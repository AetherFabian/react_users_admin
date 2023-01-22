import React, { useState } from "react";

import styles from "./Users.module.css";

function UsersRows({setIsOpen, ...props}) {
  return(
    <tr className={styles.tableRowItems} id={props.id} onClick={() => setIsOpen(true)} >
      <td className={styles.tableCell} >{props.first_name}</td>
      <td className={styles.tableCell} >{props.last_name}</td>
      <td className={styles.tableCell} >{props.age}</td>
      <td className={styles.tableCell} >{props.country}</td>
      <td className={styles.tableCell} >{props.idiom}</td>
      <td className={styles.tableCell} >{props.phone}</td>
      <td className={styles.tableCell} ><img src="../../../../public/images/edit_icon.png" alt="" style={{width: 25, height: 25}} /></td>
      <td className={styles.tableCell} ><img src="../../../../public/images/delete_icon.png" alt="" style={{width: 20, height: 20}} /></td>
    </tr>
  )
}

export default UsersRows;