import Header from "./components/Header";
import ListCard from "./components/ListCard";
// import styles from "./TodoList.module.css";

export default function TodoList({ lists }) {
  return (
    <>
      <Header />
      <ul style={{ listStyle: "none" }}>
        {lists.map((list) => (
          <ListCard list={list} />
        ))}
      </ul>
    </>
  );
}
