import { ChangeEvent } from 'react';
import Button from '../Common/Button';
import useTodo from '../../hooks/useTodo';

const TodoForm = () => {
  const { data, setData, handleSubmit } = useTodo();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  return (
    <form className="flex items-center justify-between gap-8" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full p-2 border border-gray-400 rounded-md"
        placeholder="할 일을 입력해주세요."
        onChange={handleChange}
        value={data}
      />
      <Button type={'submit'} content={'Add'} />
    </form>
  );
};

export default TodoForm;
