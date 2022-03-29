import "./App.css";
import { useState, useRef, useEffect } from "react";
function App() {
  const baseData = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: {
      it: false,
      nonIt: false,
    },
    kelas: "",
    harapan: "",
  };

  const baseError = {
    nama: "",
    email: "",
    noHandphone: "",
  };

  const errorRules = {
    nama: {
      rules: /^[A-Za-z ]*$/,
      message: "Nama Lengkap Harus Berupa Huruf",
    },
    email: {
      rules: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]*$/,
      message: "Email Tidak Sesuai",
    },
    noHandphone: {
      rules: /^[0-9]*$/,
      message: "No Handphone Tidak Sesuai",
    },
  };

  const suratKesungguhan = useRef("");
  const [data, setData] = useState(baseData);
  const [errorMessage, setErrorMessage] = useState(baseError);
  const errorMessageElement = Object.values(errorMessage).map((values) => {
    if (values) return <li key={values}>{values}</li>;
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    const newErrorMessage = { ...errorMessage };
    const newData = { ...data };

    if (name === "pendidikan") {
      const education = newData[name];
      const nameOfEducation = value;
      const newEducation = { ...education };
      Object.keys(education).forEach((value) => {
        value === nameOfEducation
          ? (newEducation[value] = e.target.checked)
          : (newEducation[value] = false);
      });
      newData[name] = newEducation;
    } else {
      newData[name] = value;
    }

    if (Object.keys(errorRules).includes(name)) {
      newErrorMessage[name] = errorRules[name]["rules"].test(value)
        ? ""
        : errorRules[name]["message"];
    }

    setErrorMessage(newErrorMessage);
    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorMessageEmpty = true;
    for (const property in errorMessage) {
      if (errorMessage[property]) {
        errorMessageEmpty = false;
        break;
      }
    }

    if (errorMessageEmpty) {
      alert(`Data Pendaftar "${data.nama}" Berhasil Diterima`);
      setData(baseData);
      setErrorMessage(baseError);
    } else {
      alert(`Data Pendaftar Tidak Sesuai`);
    }
  };

  const handleReset = () => {
    setData(baseData);
    setErrorMessage(baseError);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <h1 className="title">Pendaftaran Peserta Coding Bootcamp</h1>
        <div className="form-item">
          <label htmlFor="nama">Nama Lengkap:</label>
          <input
            type="text"
            name="nama"
            id="nama"
            className="inputform"
            value={data.nama}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="inputform"
            value={data.email}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="noHandphone">No Handphone:</label>
          <input
            type="text"
            name="noHandphone"
            id="noHandphone"
            className="inputform"
            value={data.noHandphone}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-item">
          Latar Belakang Pendidikan
          <div className="radio">
            <label htmlFor="it">
              <input
                type="radio"
                name="pendidikan"
                id="it"
                value="it"
                checked={data.pendidikan.it}
                onChange={handleInput}
                required
              />
              IT
            </label>

            <label htmlFor="nonIt">
              <input
                type="radio"
                name="pendidikan"
                id="nonIt"
                value="nonIt"
                checked={data.pendidikan.nonIt}
                onChange={handleInput}
              />
              Non IT
            </label>
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="kelas">Kelas Koding yang Dipilih:</label>
          <select
            name="kelas"
            id="kelas"
            className="inputform"
            value={data.kelas}
            onChange={handleInput}
          >
            <option value="backend">Coding Backend with Golang</option>
            <option value="frontend">Coding Frontend with ReactJS</option>
            <option value="fullstack">Fullstack Developer</option>
          </select>
        </div>
        <div className="form-item">
          <label>Foto Surat Kesungguhan:</label>
          <input type="file" name="foto" id="foto" ref={suratKesungguhan} />
        </div>
        <div className="form-item">
          <label htmlFor="harapan">Harapan Untuk Coding Bootcamp Ini:</label>
          <textarea
            name="harapan"
            id="harapan"
            cols="30"
            rows="10"
            className="inputform"
            onChange={handleInput}
            value={data.harapan}
          />
        </div>
        {errorMessageElement && (
          <ul className="error-message">{errorMessageElement}</ul>
        )}

        <div>
          <button type="submit" className="btn-submit">
            Submit
          </button>
          <button type="reset" className="btn-reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
