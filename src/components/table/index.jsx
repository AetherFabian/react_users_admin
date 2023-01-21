import React, {useState} from "react";

import useTable from "../../hooks/useTable";
import UsersRows from "./Users/Users";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";

function Table({data, rowsPerPage}, key) {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <table className={styles.table} key={key}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader} >Nombre</th>
            <th className={styles.tableHeader} >Apellido</th>
            <th className={styles.tableHeader} >Edad</th>
            <th className={styles.tableHeader} >País</th>
            <th className={styles.tableHeader} >Idiomas</th>
            <th className={styles.tableHeader} >Teléfono</th>
          </tr>
          {slice ? slice.map((user) => 
            <UsersRows
              id={user.id}
              key={user.id}
              first_name={user.first_name}
              last_name={user.last_name}
              age={user.age}
              country={user.country}
              idiom={user.idiom}
              phone={user.phone}
            />
          ) : null}
        </thead>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
  </>
  );
}

export default Table;