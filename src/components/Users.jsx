

function Users({id, name, lastName, country, state}) {
  return(
    <tr class="unread" id={id}>
      <td>
        <h6 class="mb-1">{`${name} ${lastName}`}</h6>
        <p class="m-0">{`${country} ${state}`}</p>
      </td>
      <td>
        <h6 class="text-muted"><i class="fas fa-circle text-c-green f-10 m-r-15"></i>11 MAY 12:56</h6>
      </td>
      <button>Delete</button>
    </tr>
  )
}

export default Users;