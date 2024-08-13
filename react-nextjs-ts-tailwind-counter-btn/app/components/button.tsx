import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button
      onClick={handleClick}
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
