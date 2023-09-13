import Line from "./Line";

export default function Card(props) {
  return (
    <div
      className={`text-center p-[10%] grid gap-[1em] rounded-[0.5em] shadow-lg ${
        props.common
          ? "bg-white"
          : "bg-gradient-to-br from-gradient-from to-gradient-to landscape:scale-110"
      }`}
    >
      <p
        className={`text-[120%] ${
          props.common ? "text-greyish-blue" : "text-white"
        } landscape:text-[100%]`}
      >
        {props.heading}
      </p>
      <h1
        className={`text-[400%] ${
          props.common ? "text-dark-greyish-blue" : "text-white"
        } landscape:sm:text-[300%] landscape:lg:text-[400%]`}
      >
        ${props.amount}
      </h1>
      <Line />
      <p
        className={`text-[110%] ${
          props.common ? "text-greyish-blue" : "text-very-light-greyish-blue"
        } landscape:text-[90%]`}
      >
        {props.storage} Storage
      </p>
      <Line />
      <p
        className={`text-[110%] ${
          props.common ? "text-greyish-blue" : "text-very-light-greyish-blue"
        } landscape:text-[90%]`}
      >
        {props.users} Users Allowed
      </p>
      <Line />
      <p
        className={`text-[110%] ${
          props.common ? "text-greyish-blue" : "text-very-light-greyish-blue"
        } landscape:text-[90%]`}
      >
        Send up to {props.up} GB
      </p>
      <Line />
      <button
        className={`tracking-[0.1em] py-[1em] rounded-[0.3em] mt-[1.5em] border-[thin] ${
          props.common
            ? "bg-gradient-to-r from-gradient-from to-gradient-to text-very-light-greyish-blue hover:bg-none hover:text-gradient-to hover:border-dark-greyish-blue"
            : "bg-white text-gradient-to hover:bg-transparent hover:text-very-light-greyish-blue"
        }`}
      >
        LEARN MORE
      </button>
    </div>
  );
}
