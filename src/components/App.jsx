import React from "react";
import Content from "./Content/Content";

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-very-light-greyish-blue grid font-main-font font-bold text-custom-font">
      <Content />
      <img
        src="bg-top.svg"
        alt=""
        className="col-start-1 col-end-1 row-start-1 row-end-2 justify-self-end w-[25em]"
      />
      <img
        src="bg-bottom.svg"
        alt=""
        className="col-start-1 col-end-1 row-start-1 row-end-2 self-end w-[25em]"
      />
    </div>
  );
}
