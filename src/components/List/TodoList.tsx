import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <div className="flex flex-col w-1/3 gap-8 p-6 border border-gray-400 rounded-md shadow-lg h-3/4">
      <TodoForm />
      <TodoItem />
    </div>
  );
};

export default TodoList;
