import { useState } from "react";
import { Button, FormControl, FormSelect } from "react-bootstrap";
import "./Home.css";

export default function PassengerInput(props) {
  const { tambahPengunjung } = props;
  const [state, setState] = useState({
    nama: "",
    umur: "",
    jenisKelamin: "Pria",
    editing: true,
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (state.nama.trim() && state.umur && state.jenisKelamin) {
      const umur = state.umur;
      if (umur >= 75 || umur <= 12) {
        alert("Umur tidak sesuai");
      } else {
        const newData = {
          nama: state.nama,
          umur: state.umur,
          jenisKelamin: state.jenisKelamin,
        };
        tambahPengunjung({ variables: { object: { ...newData } } });
        setState({
          ...state,
          nama: "",
          umur: "",
          jenisKelamin: "Pria",
        });
      }
    } else {
      alert("Data masih ada yang kosong");
    }
  };

  const handleBukaInput = () => {
    setState({
      ...state,
      editing: false,
    });
  };

  const handleTutupInput = () => {
    setState({
      ...state,
      editing: true,
    });
  };

  let viewMode = {};
  let editMode = {};

  if (state.editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <>
      <div className="w-50 mx-auto my-3">
        <div onSubmit={handleSubmit} style={viewMode}>
          <h5>Tambah Pengunjung</h5>
          <p>Masukkan Nama Anda</p>
          <FormControl
            type="text"
            placeholder="Nama anda ..."
            value={state.nama}
            name="nama"
            onChange={onChange}
          />
          <p>Masukkan Umur Anda</p>
          <FormControl
            type="number"
            placeholder="Umur anda ..."
            value={state.umur}
            name="umur"
            onChange={onChange}
          />
          <p>Masukkan Jenis Kelamin Anda</p>
          <FormSelect
            onChange={onChange}
            name="jenisKelamin"
            defaultValue="pria"
          >
            <option value="Pria">Pria</option>
            <option value="Wanita">Wanita</option>
          </FormSelect>
          <p></p>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <Button
            className="ms-2"
            variant="outline-secondary"
            onClick={handleTutupInput}
          >
            Selesai
          </Button>
        </div>
      </div>
      <Button
        variant="primary"
        className="inputan"
        onClick={handleBukaInput}
        style={editMode}
      >
        Masukkan Nama Pelanggan
      </Button>
    </>
  );
}
