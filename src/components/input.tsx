/* Obtained the code for capitalizing the first letter of a string from here:
 * https://masteringjs.io/tutorials/fundamentals/capitalize-first-letter
 * */

const boxStyle = `w-full rounded-md border-[1px] border-neutral-400 
  bg-neutral-100 px-2 text-black placeholder:text-slate-600 
  dark:border-neutral-700 dark:bg-neutral-900 dark:text-white 
  dark:placeholder:text-slate-300`;

export const Input = (props: {
  id: string;
  value: string;
  setText: (arg0: string) => void;
}) => {
  const id = props.id;
  const idCaps = props.id.charAt(0).toUpperCase() + props.id.slice(1);

  return (
    <>
      <label htmlFor={id} className="hidden">
        {idCaps.concat(":")}
      </label>
      <input
        type="text"
        name={id}
        id={id}
        value={props.value}
        placeholder={idCaps}
        required={true}
        className={boxStyle}
        onChange={(e) => props.setText(e.target.value)}
      />
    </>
  );
};

export const TextBox = (props: {
  id: string;
  value: string;
  placeholder: string;
  cols: number;
  rows: number;
  setText: (arg0: string) => void;
}) => {
  return (
    <>
      <label htmlFor={props.id} className="hidden">
        {props.id.charAt(0).toUpperCase() + props.id.slice(1).concat(":")}
      </label>
      <textarea
        name={props.id}
        id={props.id}
        value={props.value}
        cols={props.cols}
        rows={props.rows}
        placeholder={props.placeholder}
        required={true}
        className={boxStyle}
        onChange={(e) => props.setText(e.target.value)}
      />
    </>
  );
};
