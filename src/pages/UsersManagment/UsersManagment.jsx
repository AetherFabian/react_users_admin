import React, { useState, useEffect } from 'react'
import styles from './UsersManagment.module.css';

import Table from '../../components/table';
import { CreateUserModal } from '../../components/modal';
import { getAllUsers } from '../../data/requestsUsers';

function UsersManagment({ setLoading }) {
  const [users, setusers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getAllUsers()
      .then((res) => res.json())
      .then((data) => {
        setusers(data)
        setLoading(false);
      });
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
      <button className={styles.createBtn} onClick={() => setIsOpen(true)} >Crear</button>
      {isOpen && <CreateUserModal setIsOpen={setIsOpen} />}
      <Table
          key={"UserTable"}
          data={users}
          rowsPerPage={3}
        />
      </div>
    </main>
  );
}

export default UsersManagment;