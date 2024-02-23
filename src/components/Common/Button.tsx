interface ButtonInfo {
  type: 'submit' | 'button';
  content: string;
  onClick?: () => void;
}

const Button = ({ type, content, onClick }: ButtonInfo) => {
  return (
    <button
      type={type}
      className="w-24 p-2 border border-gray-400 rounded-md hover:text-white hover:bg-gray-400"
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
