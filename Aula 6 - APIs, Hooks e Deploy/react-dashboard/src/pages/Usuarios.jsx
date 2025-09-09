import { useEffect, useState } from "react";

export default function Usuarios() {
  
  const [usuarios, setUsuarios] = useState([]);
  
  //fetch puxa dados de algum lugar
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // transforma em json
      .then(data => setUsuarios(data)) // guarda o json em data
      .catch(error => console.log(error)) // se der erro 
      .finally(console.log("Acabou!"))
  },[])
    


  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Usuários</h1>
      {usuarios.map(pegaItem => (
        <div key={pegaItem.id}>
          <p>Nome: {pegaItem.name}</p>
          <p>Email: {pegaItem.email}</p>
          <p>Rua: {pegaItem.address.street}</p>
          <p>Latitude: {pegaItem.address.geo.lat}</p>
          <br />
        </div>
      ))}
    </div>
  );
}
