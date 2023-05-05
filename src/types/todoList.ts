export interface TodoListReturnType {
  text: string;
  array: string[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAdd: () => void;
}