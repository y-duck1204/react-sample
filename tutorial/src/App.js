import { useState } from "react";

function Squeare({ value }) {
  return <button className="squeare">{value}</button>;
}

export default function Board() {
  const [squeares, setSqueares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <Squeare value={squeares[0]} />
        <Squeare value={squeares[1]} />
        <Squeare value={squeares[2]} />
      </div>
      <div className="board-row">
        <Squeare value={squeares[3]} />
        <Squeare value={squeares[4]} />
        <Squeare value={squeares[5]} />
      </div>
      <div className="board-row">
        <Squeare value={squeares[6]} />
        <Squeare value={squeares[7]} />
        <Squeare value={squeares[8]} />
      </div>
    </>
  );
}
