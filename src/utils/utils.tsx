export const gen_list = (
  list: {
    section: {
      item: String;
      subitems?: String[];
    }[];
  }[]
) => {
  return (
    <div className="lg:grid lg:grid-cols-2">
      {list.map((item, i) => (
        <ul key={i} className="list-inside list-disc">
          {item.section.map((section, index) => (
            <li key={index}>
              {section.item}
              {section.subitems && (
                <ul className="mt-2 list-inside list-[circle] space-y-1 px-6">
                  {section.subitems.map((subitem, subindex) => (
                    <li key={subindex}>{subitem}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export const format_about = (list: String[]) => {
  return (
    <div>
      {list.map((data, index) => (
        <p key={index}>
          {data}
          <br />
          <br />
        </p>
      ))}
    </div>
  );
};
