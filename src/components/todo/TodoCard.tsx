import { Button } from "../ui/button";

const TodoCard = () => {
  return (
    <div className="bg-white rounded-sm flex justify-between items-center p-4 shadow">
      <input type="checkbox" name="" id="" />
      <p className="font-medium">Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="flex gap-4 justify-end mb-4">
        <Button className="[background-image:var(--gradient-primary)] text-xs text-black font-medium uppercase rounded-sm cursor-pointer">
          Delete
        </Button>
        <Button className="[background-image:var(--gradient-primary)] text-xs text-black font-medium uppercase rounded-sm cursor-pointer">
          Edit
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
