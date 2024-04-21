export const FormInput = (props: {
  id: string;
  label: string;
  setValue: (value: string) => void;
}) => {
  return (
    <>
      <label className="text-light-100 mt-5 mb-1">{props.label}</label>
      <input
        className="rounded shadow-lg text-light-100 bg-dark-200 py-2 px-3 focus:outline-none focus:shadow-outline"
        id={props.id}
        type="text"
        placeholder={props.label}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </>
  );
};
