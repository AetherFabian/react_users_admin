function userRequest() {
  const response = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{
        id:1,
        nombre: 'John',
        apellidoPaterno: 'Doe',
        pais: 'México',
        estado: 'CDMX',
        telefono: 32
      },
      {
        id:2,
        nombre: 'John',
        apellidoPaterno: 'Doe',
        pais: 'México',
        estado: 'CDMX',
        telefono: 32
      },
      {
        id:3,
        nombre: 'John',
        apellidoPaterno: 'Doe',
        pais: 'México',
        estado: 'CDMX',
        telefono: 32
      }]);
    }, 2000);
  })
  return response;
}

export default userRequest;