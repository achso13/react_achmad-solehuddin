import { gql } from "@apollo/client";

export const GET_PASSANGERS = gql`
  query GetPassangers {
    passangers(order_by: { id: asc }) {
      id
      nama
      umur
      jenisKelamin
    }
  }
`;

export const GET_PASSANGER_BY_ID = gql`
  query GetPassangerById($id: Int!) {
    passangers(where: { id: { _eq: $id } }) {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

export const INSERT_PASSANGER = gql`
  mutation MyMutation($object: passangers_insert_input!) {
    insert_passangers_one(object: $object) {
      id
    }
  }
`;

export const DELETE_PASSANGER = gql`
  mutation MyMutation($id: Int!) {
    delete_passangers_by_pk(id: $id) {
      id
    }
  }
`;

export const UPDATE_PASSANGER = gql`
  mutation MyMutation(
    $id: Int!
    $jenisKelamin: String
    $nama: String
    $umur: Int
  ) {
    update_passangers_by_pk(
      pk_columns: { id: $id }
      _set: { jenisKelamin: $jenisKelamin, nama: $nama, umur: $umur }
    ) {
      id
    }
  }
`;
