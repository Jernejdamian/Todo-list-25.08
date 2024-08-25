import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

const tasks = [
  {
    content: "Zdobyć szczyt Mogielica", done: true,
  },
  {
    content: "Wieczorem nauka JS razem z YouCode", done: false,
  },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <h1>Lista zadań do zrobienia</h1>
      <Section
        title="Poniżej wpisz jakie masz zadania do zrobienia"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />

    </Container>
  );
}

export default App;
