import React, {useEffect, useState} from 'react';
import Users from '../components/Users';
import userRequest from '../lib/userRequest';
import '../../public/css/index.css'

function UserAdmin() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const users = await userRequest();
            setUsers(users);
        }
        getUsers();
    }, []);

  return (
    <div className="users_dash">
        <div className="card Recent-Users">
            <div className="card-header">
                <h5>Users</h5>
            </div>
            <div className="card-block px-0 py-3">
                <div className="table-responsive">
                    <table className="table table-hover">
                        <tbody>
                            {users.length > 0 ? users.map((user) => 
                                <Users
                                    id={user.id}
                                    key={user.id}
                                    nombre={user.nombre}
                                    apellidoPaterno={user.apellidoPaterno}
                                    pais={user.pais}
                                    estado={user.estado}
                                    telefono={user.telefono}
                                />
                            ) : <tr></tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    );
}

export default UserAdmin;