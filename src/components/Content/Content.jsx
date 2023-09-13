import { useState } from "react";
import Card from "./Card";

export default function Content() {
  const [time, setTime] = useState(false);

  return (
    <div className="col-start-1 col-end-1 row-start-1 row-end-2 content-center w-[90%] portrait:md:w-[60%] mx-auto grid gap-[3em] relative z-50 py-[15%] landscape:lg:w-[70%] landscape:py-[0%] landscape:gap-[5em]">
      <div className="grid gap-[1em]">
        <h1 className="text-[250%] text-greyish-blue justify-self-center">
          Our Pricing
        </h1>
        <div className="flex items-center gap-[1.5em] justify-self-center">
          <p className="text-light-greyish-blue">Annually</p>
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              class="sr-only peer"
              onChange={() => setTime((prev) => !prev)}
            />
            <div className="w-[3.4em] h-[1.9em] bg-gradient-to-r from-gradient-from to-gradient-to peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[1.55em] after:w-[1.55em] after:transition-all"></div>
          </label>
          <p className="text-light-greyish-blue">Monthly</p>
        </div>
      </div>
      <div className="grid gap-[2em] landscape:grid-cols-3 landscape:gap-0">
        <Card
          heading="Basic"
          amount={time ? "19.99" : "199.99"}
          storage="500 GB"
          users="2"
          up="3"
          common="true"
        />
        <Card
          heading="Professional"
          amount={time ? "24.99" : "249.99"}
          storage="1 TB"
          users="5"
          up="10"
        />
        <Card
          heading="Master"
          amount={time ? "39.99" : "399.99"}
          storage="2 TB"
          user="10"
          up="20"
          common="true"
        />
      </div>
    </div>
  );
}
