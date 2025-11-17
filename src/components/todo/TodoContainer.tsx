import { AddTodoModal } from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex gap-4 justify-end mb-4">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="[background-image:var(--gradient-primary)] shadow w-full rounded-sm p-4 space-y-4">
        <p className="bg-white rounded-sm font-medium uppercase p-4">
          There is no task is pending!
        </p>
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoContainer;
