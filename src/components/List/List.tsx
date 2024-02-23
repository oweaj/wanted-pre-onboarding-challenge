import { FormEvent, ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { add, remove } from '../../store/todoSlice';
import Button from '../Common/Button';

const List = () => {
  const [data, setData] = useState('');
  const dispatch = useDispatch();
  const { todoList } = useSelector((state: RootState) => state.todo);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(add(data));
    setData('');
  };

  const handleRemove = (index: number) => {
    dispatch(remove(index));
  };

  return (
    <div className="flex flex-col w-1/3 gap-8 p-6 border border-gray-400 rounded-md shadow-lg h-3/4">
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
      <ul className="flex flex-col gap-6">
        {todoList?.map((todo, index) => (
          <li key={index} className="flex items-center justify-between gap-8">
            <p className="w-full py-2 border-b border-gray-400">{todo}</p>
            <Button type={'button'} content={'Delete'} onClick={() => handleRemove(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
