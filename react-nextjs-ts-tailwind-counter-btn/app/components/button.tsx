interface ButtonProps {
  count: number;
  onClick: () => void;
}

export default function Button({ count, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
      bg-pink-500
      hover:bg-blue700
      rounded
      text-white
      font-bold
      px-4
      py-2"
    >
      I have been clicked {count} times
    </button>
  );
}
