import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const TodoApplication = () => {
  return (
    <Container>
      <h1 className="text-center text-2xl font-medium my-10 underline">
        My Todo
      </h1>
      <TodoContainer />
    </Container>
  );
};

export default TodoApplication;
