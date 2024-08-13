interface ButtonSharedStateProps {
  count: number;
  onClick: () => void;
}

export default function ButtonSharedState({
  count,
  onClick,
}: ButtonSharedStateProps) {
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
