import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react/cjs/react.development";
import {
  DELETE_PASSANGER,
  GET_PASSANGERS,
  GET_PASSANGER_BY_ID,
  INSERT_PASSANGER,
  UPDATE_PASSANGER,
} from "../lib/client/graphql";
import { Card, Container, FormControl, Spinner } from "react-bootstrap";

export default function Home() {
  const [userInput, setUserInput] = useState(null);

  const { data: passangersData, loading: passangersLoading } =
    useQuery(GET_PASSANGERS);
  const { data: passangerData, loading: passangerLoading } = useQuery(
    GET_PASSANGER_BY_ID,
    {
      skip: !userInput,
      variables: { id: userInput },
    }
  );

  const data = passangerData ? passangerData : passangersData;
  const loading = passangerLoading ? passangerLoading : passangersLoading;

  const [insertPassanger, { loading: loadingInsert }] = useMutation(
    INSERT_PASSANGER,
    {
      refetchQueries: [GET_PASSANGERS],
      onCompleted: () => alert("Insert data berhasil"),
    }
  );
  const [deletePassanger, { loading: loadingDelete }] = useMutation(
    DELETE_PASSANGER,
    {
      refetchQueries: [GET_PASSANGERS],
      onCompleted: () => alert("Delete data berhasil"),
    }
  );
  const [updatePassanger, { loading: loadingUpdate }] = useMutation(
    UPDATE_PASSANGER,
    {
      refetchQueries: [GET_PASSANGERS],
      onCompleted: () => alert("Update data berhasil"),
    }
  );

  const onChangeHandle = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <Container>
      <Card className="my-5">
        <Card.Header>
          <Card.Title>
            <Header />
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <FormControl
            className="w-25 float-right mt-4 mb-3"
            type="number"
            name="userInput"
            placeholder="Cari..."
            onChange={onChangeHandle}
          />
          {loading || loadingDelete || loadingInsert || loadingUpdate ? (
            <div className="text-center my-lg-5">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : (
            <>
              {data.passangers.length !== 0 ? (
                <>
                  <ListPassenger
                    data={data?.passangers}
                    hapusPengunjung={deletePassanger}
                    updatePengunjung={updatePassanger}
                  />
                  <PassengerInput tambahPengunjung={insertPassanger} />
                </>
              ) : (
                <p className="text-center my-lg-3 py-lg-3">
                  Pengunjung tidak ditemukan...
                </p>
              )}
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}
