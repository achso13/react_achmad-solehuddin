import Container from "../Container";
import Navbar from "../Navbar";
import TaskImages from "../TaskImages";
import NotFoundPage from "../../pages/NotFoundPage";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Task() {
  let params = useParams();
  const { taskSlug } = params;

  const task = useSelector((state) =>
    state.getTask.find((value) => value.slug === taskSlug)
  );

  return (
    <>
      {task ? (
        <>
          <Navbar />
          <Container>
            <h1 className="mb-4 text-2xl font-bold">{task.title}</h1>
            <p className="text-base">{task.description}</p>
          </Container>
          <Container>
            <h1 className="mb-4 text-2xl font-bold">Screenshots</h1>
            <TaskImages imagesList={task.screenshots} />
          </Container>
        </>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
}
