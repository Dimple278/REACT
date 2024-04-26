import { useState } from "react";

export const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h2>Name:{name}</h2>
      <h2>Contact</h2>
      <h3>Count:{count}</h3>
    </div>
  );
};
