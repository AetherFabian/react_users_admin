import React from 'react';

import Modal from './Modal';
import styles from './Modal.module.css';
import { putUser, deleteUser, postUser } from '../../data/requestsUsers';

function CreateUserModal({ setIsOpen }) {
  return (
    <EditUserModal setIsOpen={setIsOpen} 
    />
  );
}

function DeleteUserModal({ setIsOpen, user }) {
  const deleteHandler = (id) => {
    deleteUser(id).then((res) => {
      setIsOpen(false);
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <Modal  setIsOpen={setIsOpen}>
    <div className={styles.modalContent}>
      ¿Estás seguro sobre borrar este usuario?
    </div>
    <div className={styles.modalActions}>
      <div className={styles.actionsContainer}>
          <button className={styles.deleteBtn} onClick={() => deleteHandler(user.id)}>
            Borrar
          </button>
          <button
            className={styles.cancelBtn}
            onClick={() => setIsOpen(false)}
          >
          Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
}


function EditUserModal({ setUserHandler, setIsOpen, user }) {
  const submitForm = (e, modal) => {
    e.preventDefault();
    const form = {}
    for (let i = 0; i < e.target.length - 2; i++) {
        form[e.target[i].id] = e.target[i].value;
    }
    form.birth_date = new Date(form.birth_date).toISOString();
    form.hobbies = form.hobbies.split(',');
    form.preferences = form.preferences.split(',');
    const data = JSON.stringify(form);
    console.log(data);
    if (modal === 'edit') {
      putUser(user.id, data).then((res) => {
        setUserHandler(res.data);
        setIsOpen(false);
      }).catch((err) => {
        console.log(err);
      });
    } else {
      postUser(data).then((res) => {
        setUserHandler(res.data);
        setIsOpen(false);
      }).catch((err) => {
        console.log(err);
      }
      );
    }
  };

  return (
    <Modal isInput={true} setIsOpen={setIsOpen}>
      <form onSubmit={(e) => submitForm(e, user?.id ? 'edit' : 'create')}>
      <div className={styles.modalContent}>
        <div className={styles.modalContentItem}>
          <span className={styles.modalContentItemTitle}>Nombre(s):</span>
          <input
            id='first_name'
            className={styles.modalContentItemValue}
            type="text"
            defaultValue={user?.first_name}
          />
        </div>
        <div className={styles.modalContentItem}>
          <span className={styles.modalContentItemTitle}>Apellido(s):</span>
          <input
            id='last_name'
            className={styles.modalContentItemValue}
            type="text"
            defaultValue={user?.last_name}
          />
        </div>
        <div className={styles.modalContentItem}>
          <span className={styles.modalContentItemTitle}>Edad:</span>
          <input
            id='age'
            className={styles.modalContentItemValue}
            type="text"
            defaultValue={user?.age}
          />
        </div>
        <div className={styles.modalContentItem}>
          <span className={styles.modalContentItemTitle}>Fecha de Nacimiento:</span>
          <input
            id='birth_date'
            className={styles.modalContentItemValue}
            type="date"
            defaultValue={user?.birth_date.split('T')[0]}
          />
        </div>
        <div className={styles.modalContentItem}>
          <span className={styles.modalContentItemTitle}>Estado Civil:</span>
          <select id='civil_status' className={styles.modalContentItemValue} defaultValue={user?.civil_status}>
            <option value="single">Soltero</option>
            <option value="married">Casado</option>
            <option value="divorced">Divorciado</option>
            <option value="widowed">Viudo</option>
          </select>
        </div>
        <div className={styles.modalContentItem}>
          <span className={styles.modalContentItemTitle}>Teléfono:</span>
          <input
            id='phone'
            className={styles.modalContentItemValue}
            type="text"
            defaultValue={user?.phone}
            maxLength="10"
          />
        </div>
        <div className={styles.modalContentItem}>
          <span className={styles.modalContentItemTitle}>Pais:</span>
          <input
            id='country'
            className={styles.modalContentItemValue}
            type="text"
            defaultValue={user?.country}
          />
        </div>
        <div className={styles.modalContentItem}>
          <span className={styles.modalContentItemTitle}>Estado:</span>
          <input
            id='state'
            className={styles.modalContentItemValue}
            type="text"
            defaultValue={user?.state}
          />
        </div>
        <div className={styles.modalContentItem}>
          <span className={styles.modalContentItemTitle}>Ciudad:</span>
          <input
            id='city'
            className={styles.modalContentItemValue}
            type="text"
            defaultValue={user?.city}
          />
        </div>
        <div className={styles.modalContentItem}>
          <span className={styles.modalContentItemTitle}>Código Postal:</span>
          <input
            id='zip_code'
            className={styles.modalContentItemValue}
            type="text"
            defaultValue={user?.zip_code}
            maxLength="5"
          />
        </div>
        <div className={styles.modalContentItem}>
          <span className={styles.modalContentItemTitle}>Idioma:</span>
          <select id='idiom' className={styles.modalContentItemValue} defaultValue={user?.language}>
            <option value="es">Español</option>
            <option value="en">Inglés</option>
            <option value="fr">Francés</option>
          </select>
        </div>
        <div className={styles.modalContentItem}>
          <span className={styles.modalContentItemTitle}>Hobbies:</span>
          <input
            id='hobbies'
            className={styles.modalContentItemValue}
            type="text"
            defaultValue={user?.hobbies}
          />
        </div>
        <div className={styles.modalContentItem}>
          <span className={styles.modalContentItemTitle}>Preferencias:</span>
          <input
            id='preferences'
            className={styles.modalContentItemValue}
            type="text"
            defaultValue={user?.preferences}
          />
        </div>
      </div>
      <div className={styles.modalActions}>
        <div className={styles.actionsContainer}>
          <button type='submit' className={styles.editBtn}>
            {user?.id ? 'Editar' : 'Crear'}
          </button>
          <button
            className={styles.cancelBtn}
            onClick={() => {
              setUserHandler({})
              setIsOpen(false)}}
          >
          Cancelar
          </button>
        </div>
      </div>
      </form>
    </Modal>
  );
}

export { 
  CreateUserModal,
  EditUserModal,
  DeleteUserModal,
};