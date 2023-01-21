import React, { useState, useEffect } from 'react'
import styles from './UsersManagment.module.css';

import Table from '../../components/table';
import fetchUsers from '../../data/fetchUsers';

function UsersManagment() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    // fetch('http://localhost:3001/users')
    //   .then((res) => res.json())
    //   .then((data) => setusers(data));
    setTimeout(() => {
        setusers([
            {
              'id': '3fa825bd-102d-4880-ab4f-f5743aab284c',
              'first_name': 'hola',
              'last_name': 'hola',
              'age': '32',
              'birth_date': '2019-09-26T00:00:00.000Z',
              'civil_status': 'single',
              'phone': '6872163298',
              'country': 'Mexico',
              'state': 'Chihuahua',
              'city': 'Delicias',
              'zip_code': '32132',
              'idiom': 'es',
              'hobbies': [
                'PLay Video games',
              ],
              'preferences': [
                'Hola',
              ],
              'deleted_by': null,
              'deleted_at': null,
            },
            {
              'id': '12b6432e-f012-4d52-a281-4ae047fbbd4b',
              'first_name': 'John',
              'last_name': 'Doe',
              'age': '35',
              'birth_date': '1985-09-26T00:00:00.000Z',
              'civil_status': 'single',
              'phone': '6872163298',
              'country': 'Mexico',
              'state': 'Chihuahua',
              'city': 'Delicias',
              'zip_code': '32132',
              'idiom': 'es',
              'hobbies': [
                'Hacer deporte',
              ],
              'preferences': [
                'Playa',
              ],
              'deleted_by': null,
              'deleted_at': null,
            },
            {
              'id': 'e6621edc-9387-4d89-bd38-b357ab8392ea',
              'first_name': 'Gabriel',
              'last_name': 'Salazar',
              'age': '20',
              'birth_date': '2002-09-26T00:00:00.000Z',
              'civil_status': 'single',
              'phone': '6872163298',
              'country': 'Mexico',
              'state': 'Chihuahua',
              'city': 'Delicias',
              'zip_code': '32132',
              'idiom': 'es',
              'hobbies': [
                'Jugar Videojuegos',
                'Leer ciencia ficcion',
              ],
              'preferences': [
                'Montaña',
                'Ciudades grandes',
              ],
              'deleted_by': null,
              'deleted_at': null,
            },
            {
              'id': 'd58de6a6-4866-4352-90bd-2a037e4b165f',
              'first_name': 'Gabriel',
              'last_name': 'Salazar',
              'age': '20',
              'birth_date': '2002-09-26T00:00:00.000Z',
              'civil_status': 'single',
              'phone': '6872163298',
              'country': 'Mexico',
              'state': 'Chihuahua',
              'city': 'Delicias',
              'zip_code': '32132',
              'idiom': 'es',
              'hobbies': [
                'Jugar Videojuegos',
                'Leer ciencia ficcion',
              ],
              'preferences': [
                'Montaña',
                'Ciudades',
              ],
              'deleted_by': null,
              'deleted_at': null,
            },
            {
              'id': '7a1211dd-0cc2-42fb-a8e0-ba4031cab24e',
              'first_name': 'Gabriel',
              'last_name': 'Salazar',
              'age': '20',
              'birth_date': '2002-09-26T00:00:00.000Z',
              'civil_status': 'single',
              'phone': '6872163298',
              'country': 'Mexico',
              'state': 'Chihuahua',
              'city': 'Delicias',
              'zip_code': '32132',
              'idiom': 'es',
              'hobbies': [
                'Jugar Videojuegos',
                'Leer ciencia ficcion',
              ],
              'preferences': [
                'Montaña',
                'Ciudades',
              ],
              'deleted_by': null,
              'deleted_at': null,
            },
            {
              'id': '712797a1-b5f1-4593-9b58-0e131572b556',
              'first_name': 'Gabriel',
              'last_name': 'Salazar',
              'age': '20',
              'birth_date': '2002-09-26T00:00:00.000Z',
              'civil_status': 'single',
              'phone': '6872163298',
              'country': 'Mexico',
              'state': 'Chihuahua',
              'city': 'Delicias',
              'zip_code': '32132',
              'idiom': 'es',
              'hobbies': [
                'Jugar Videojuegos',
                'Leer ciencia ficcion',
              ],
              'preferences': [
                'Montaña',
                'Ciudades',
              ],
              'deleted_by': null,
              'deleted_at': null,
            }]
          )
    }, 2000);    
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <Table
          key={"UserTable"}
          data={users}
          rowsPerPage={1}
        />
      </div>
    </main>
  );
}

export default UsersManagment;