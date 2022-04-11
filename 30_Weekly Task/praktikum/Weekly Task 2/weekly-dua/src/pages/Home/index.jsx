import Container from "../../components/Container";
import Navbar from "../../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Container>
        <h1 className="mb-4 text-2xl font-bold">HOME</h1>
        <p className="text-base">
          Ini adalah tugas weekly dua oleh{" "}
          <span className="font-medium">Achmad Solehuddin</span> dari kelas{" "}
          <span className="font-medium">React JS B</span> yang berisi
          project-project yang pernah dikerjakan di Alterra Academy.
        </p>
      </Container>
    </>
  );
}
