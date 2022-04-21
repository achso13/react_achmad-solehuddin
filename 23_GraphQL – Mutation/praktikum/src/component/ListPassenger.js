import { Table } from "react-bootstrap";
import ListItem from "./ListItem";
const ListPassenger = (props) => {
  const { data, hapusPengunjung, updatePengunjung } = props;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nama</th>
          <th>Umur</th>
          <th>Jenis Kelamin</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <ListItem
            key={item.id}
            data={item}
            hapusPengunjung={hapusPengunjung}
            updatePengunjung={updatePengunjung}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default ListPassenger;
