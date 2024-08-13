"use client";

import { useState } from "react";
import ButtonSharedState from "./components/button-shared-state";
import { ButtonIndependentState } from "./components/button-independent-state";

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <h1>React-TS-NextJS-TailwindCSS Counter Button</h1>
      <ButtonSharedState count={count} onClick={handleClick} />
      <ButtonSharedState count={count} onClick={handleClick} />
      <h2 className="text-xl">Buttons with independent state</h2>
      <ButtonIndependentState />
      <ButtonIndependentState />
    </main>
  );
}
