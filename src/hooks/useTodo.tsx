import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add, remove } from '../store/todoSlice';

const useTodo = () => {
  const [data, setData] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(add(data));
    setData('');
  };

  const handleRemove = (index: number) => {
    dispatch(remove(index));
  };

  return { data, setData, handleSubmit, handleRemove };
};

export default useTodo;
