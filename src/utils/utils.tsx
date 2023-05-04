export const gen_list = (list: { item: String; subitems?: String[] }[]) => {
  return list.map((list, index) => (
    <li key={index}>
      {list.item}
      {list.subitems && (
        <ul className="mt-2 list-inside list-[circle] space-y-1 pl-5">
          {list.subitems.map((subitem, index) => (
            <li key={index}>{subitem}</li>
          ))}
        </ul>
      )}
    </li>
  ));
};
