import { Todo } from "../utils/types";

type Props = {
  todo: Todo;
};

export function TodoItem({ todo }: Props) {
  return <li>{todo.name}</li>;
}
