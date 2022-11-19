import axios from "axios";
import { createSignal } from "solid-js";
import { css } from "solid-styled";
// import PocketBase from "pocketbase";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  css`
    button {
      font-family: inherit;
      font-size: inherit;
      padding: 1em 2em;
      color: #335d92;
      background-color: rgba(${count() * 30 + ''}, 107, 158, 0.1);
      border-radius: 2em;
      border: 2px solid rgba(68, 107, 158, 0);
      outline: none;
      width: 200px;
      font-variant-numeric: tabular-nums;
    }

    button:focus {
      border: 2px solid #335d92;
    }
  `;
  function newFunction(): void {
    
  }

  return (
    <button onClick={newFunction}>Clicks: {count()}</button>
  );

    
}
