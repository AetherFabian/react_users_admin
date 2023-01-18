

function Users({id, nombre, apellidoPaterno, pais, estado, telefono}) {
  return(
    <tr onClick={()=>(console.log('hola'))} className="unread" id={id}>
      <td>
        <h6 className="mb-1">{`${nombre} ${apellidoPaterno}`}</h6>
        <p className="m-0">{`${pais} ${estado}`}</p>
      </td>
      <td>
        <h6 className="mb-1">{telefono}</h6>
      </td>
      <td>
      <div id={id} ><img style={{weight: 20, height:30, borderRadius: "5px"}} alt="delete user" onClick={()=>(console.log())} src="../../public/images/trash.png" /></div>
      </td>
    </tr>
  )
}

export default Users;