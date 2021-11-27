import { useQuery, gql } from "@apollo/client";

const PRODUCTOS = gql`
  query{
  productos{
  _id,
  nombre,
  almacen
  }
}
`;

export default function Listaproductos() {
  const { loading, error, data } = useQuery(PRODUCTOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.productos.map(({ _id, almacen,nombre }) => (
    <div key={_id}>
      <p>
        {nombre} Se encuentra en el almacen: {almacen}
      </p>
    </div>
  ));
}