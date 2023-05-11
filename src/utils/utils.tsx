export const gen_list = (
  list: {
    section: {
      item: String;
      subitems?: String[];
    }[];
  }[]
) => {
  return list.map((item, i) => (
    <ul key={i} className="list-inside list-disc">
      {item.section.map((section, index) => (
        <li key={index}>
          {section.item}
          {section.subitems && (
            <ul className="mt-2 list-inside list-[circle] space-y-1 pl-5">
              {section.subitems.map((subitem, index) => (
                <li key={index}>{subitem}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  ));
};
