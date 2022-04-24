import { Button, FormControl, FormSelect } from "react-bootstrap";
import { useState } from "react/cjs/react.development";
import "./Home.css";
const ListItem = (props) => {
  const { id, nama, umur, jenisKelamin } = props.data;
  const { updatePengunjung, hapusPengunjung } = props;

  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState({});

  const toggleEditMode = () => {
    setData(props.data);
    setEditMode(!editMode);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const editedData = { ...data };
    editedData[name] = value;
    setData(editedData);
  };

  const handleEditedData = () => {
    const { nama, umur, jenisKelamin } = data;
    const newData = {
      nama,
      umur,
      jenisKelamin,
    };
    if (nama.trim() && umur) {
      if (umur >= 75 || umur <= 12) {
        alert("Umur tidak sesuai");
      } else {
        setData({ ...data, ...newData });
        updatePengunjung({ variables: { ...data } });
      }
    } else {
      alert("Data tidak boleh kosong!");
    }
  };

  return (
    <tr>
      {editMode ? (
        <>
          <td className="align-middle" style={{ width: "35%" }}>
            <FormControl
              size="sm"
              type="text"
              name="nama"
              defaultValue={nama}
              onChange={handleOnChange}
            />
          </td>
          <td className="align-middle" style={{ width: "15%" }}>
            <FormControl
              size="sm"
              type="text"
              name="umur"
              defaultValue={umur}
              onChange={handleOnChange}
            />
          </td>
          <td className="align-middle" style={{ width: "15%" }}>
            <FormSelect
              size="sm"
              name="jenisKelamin"
              defaultValue={jenisKelamin}
              onChange={handleOnChange}
            >
              <option value="Pria">Pria</option>
              <option value="Wanita">Wanita</option>
            </FormSelect>
          </td>
          <td className="align-middle" style={{ width: "25%" }}>
            <Button
              variant="primary"
              className="mx-2"
              size="sm"
              onClick={() => handleEditedData()}
            >
              Submit
            </Button>

            <Button
              variant="outline-secondary"
              className="mx-2"
              size="sm"
              onClick={() => toggleEditMode()}
            >
              Batal
            </Button>

            <Button
              variant="danger"
              className="mx-2"
              size="sm"
              onClick={() => hapusPengunjung({ variables: { id } })}
            >
              Hapus
            </Button>
          </td>
        </>
      ) : (
        <>
          <td className="align-middle" style={{ width: "35%" }}>
            {nama}
          </td>
          <td className="align-middle" style={{ width: "15%" }}>
            {umur}
          </td>
          <td className="align-middle" style={{ width: "15%" }}>
            {jenisKelamin}
          </td>
          <td className="align-middle" style={{ width: "25%" }}>
            <Button
              className="mx-2"
              size="sm"
              variant="primary"
              onClick={() => toggleEditMode()}
            >
              Edit
            </Button>
            <Button
              className="mx-2"
              size="sm"
              variant="outline-danger"
              onClick={() => hapusPengunjung({ variables: { id } })}
            >
              Hapus
            </Button>
          </td>
        </>
      )}
    </tr>
  );
};

export default ListItem;
