export const BaseButton = (props: { text: string; onClick: () => void }) => {
  return (
    <button
      className="text-dark-100 bg-light-100 rounded-lg px-5 py-3 uppercase font-bold cursor-pointer m-3"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
