import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react/cjs/react.development";

const GET_PASSANGERS = gql`
  query GetPassangers {
    passangers {
      id
      nama
      umur
      jenisKelamin
    }
  }
`;

const GET_PASSANGER_BY_ID = gql`
  query GetPassangerById($id: Int!) {
    passangers(where: { id: { _eq: $id } }) {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

export default function Home() {
  const [userInput, setUserInput] = useState(null);
  const passangers = useQuery(GET_PASSANGERS, {
    skip: userInput,
  });
  const passanger = useQuery(GET_PASSANGER_BY_ID, {
    skip: !userInput,
    variables: { id: userInput },
  });

  const data = passangers.data || passanger.data;
  const loading = passangers.loading || passanger.loading;
  const error = passangers.error || passanger.error;

  const [passangerList, setPassangerList] = useState([]);

  const hapusPengunjung = (id) => {
    setPassangerList(
      ...passangerList.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const tambahPengunjung = (newUser) => {
    const newData = {
      id: uuidv4(),
      ...newUser,
    };
    setPassangerList([...passangerList, newData]);
  };

  const onChangeHandle = (e) => {
    setUserInput(e.target.value);
  };

  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <Header />
      <div>
        <input
          className="search-input"
          type="number"
          name="userInput"
          onChange={onChangeHandle}
        />
      </div>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <>
          {data.passangers.length !== 0 ? (
            <>
              <ListPassenger data={data} hapusPengunjung={hapusPengunjung} />
              <PassengerInput tambahPengunjung={tambahPengunjung} />
            </>
          ) : (
            <p>Pengunjung tidak ada ...</p>
          )}
        </>
      )}
    </div>
  );
}
