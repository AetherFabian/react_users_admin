import React, { useState, useEffect } from 'react'
import styles from './UsersManagment.module.css';

import Table from '../../components/table';
import { getAllUsers } from '../../data/requestsUsers';

function UsersManagment({ setLoading }) {
  const [users, setusers] = useState([]);

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