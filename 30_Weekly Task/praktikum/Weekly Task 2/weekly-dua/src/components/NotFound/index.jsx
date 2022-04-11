import { Link } from "react-router-dom";
import Container from "../Container";
import Navbar from "../Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="mx-auto text-center">
          <div className="mt-8 mb-12">
            <h1 className="text-7xl font-extrabold text-blue-500">
              404 Not Found
            </h1>
            <p className="text-xl leading-loose">
              Whoops! It seems the page you're looking for doesn't exist.
            </p>
          </div>

          <Link
            to="/"
            className="my-8 rounded-md bg-blue-500 py-4 px-4 text-white hover:bg-blue-700"
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </>
  );
}
