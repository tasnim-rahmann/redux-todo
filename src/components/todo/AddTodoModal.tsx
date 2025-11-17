import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState, type FormEvent } from "react";
import { DialogClose } from "@radix-ui/react-dialog";

export const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(task, description);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="[background-image:var(--gradient-primary)] text-xs text-black font-medium uppercase rounded-sm cursor-pointer">
          Add Todo
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add your task that you want to finish!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Task Title</Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="title"
                placeholder="Task Title"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Task Description</Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                placeholder="Task Description"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button
                className="rounded-sm mt-4 text-sm uppercase cursor-pointer"
                type="submit"
              >
                Add Task!
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
