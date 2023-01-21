import styles from "./Users.module.css";

function UsersRows({id, first_name, last_name, age, country, idiom, phone}) {
  return(
    <tr className={styles.tableRowItems} id={id}>
      <td className={styles.tableCell} >{first_name}</td>
      <td className={styles.tableCell} >{last_name}</td>
      <td className={styles.tableCell} >{age}</td>
      <td className={styles.tableCell} >{country}</td>
      <td className={styles.tableCell} >{idiom}</td>
      <td className={styles.tableCell} >{phone}</td>

    </tr>
  )
}

export default UsersRows;