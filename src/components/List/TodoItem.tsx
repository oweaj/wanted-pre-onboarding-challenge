import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Button from '../Common/Button';
import useTodo from '../../hooks/useTodo';

const TodoItem = () => {
  const { handleRemove } = useTodo();
  const { todoList } = useSelector((state: RootState) => state.todo);

  return (
    <ul className="flex flex-col gap-6 overflow-y-auto">
      {todoList?.map((todo, index) => (
        <li key={index} className="flex items-center justify-between gap-8 py-1 rounded-md bg-gray-50">
          <p className="w-full py-2 border-b border-gray-400">{todo}</p>
          <Button type={'button'} content={'Delete'} onClick={() => handleRemove(index)} />
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;
