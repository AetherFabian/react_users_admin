import React, {useState} from "react";

import useTable from "../../hooks/useTable";
import UsersRows from "./Users/Users";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";
import { DeleteUserModal, EditUserModal} from "../modal";

function Table({data, rowsPerPage}, key) {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [userHandler, setUserHandler] = useState({});

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
            <th className={styles.tableHeader} >Hobbies</th>
            <th className={styles.tableHeader} >Preferencias</th>
            <th className={styles.tableHeader} ></th>
            <th className={styles.tableHeader} ></th>
          </tr>
          {slice ? slice.map((user) => 
            <UsersRows
              id={user.id}
              key={user.id}
              data={user}
              preferences={user.preferences}
              setUserHandler={setUserHandler}
              setIsOpenEdit={setIsOpenEdit}
              setIsOpenDelete={setIsOpenDelete}
            />
          ) : null}
        </thead>
      </table>
      {isOpenEdit && <EditUserModal user={userHandler} setUserHandler={setUserHandler} setIsOpen={setIsOpenEdit} />}
      {isOpenDelete && <DeleteUserModal user={userHandler} setIsOpen={setIsOpenDelete} />}
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
  </>
  );
}

export default Table;