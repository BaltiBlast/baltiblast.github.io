import Select from "./sidebarComponents/Select";

export function selectGeneratorSideBar(
  display,
  direction,
  wrap,
  justify,
  align
) {
  const dataSelectFlexBox = [
    {
      text: "Display",
      value: "",
      style: "sidebar__select",
      change: display,
      optionSelect: ["", "flex"],
      divId: 1
    },
    {
      text: "Flex Direction",
      value: "",
      style: "sidebar__select",
      change: direction,
      optionSelect: ["", "row", "row-reverse", "column", "column-reverse"],
      divId: 2
    },
    {
      text: "Flex Wrap",
      value: "",
      style: "sidebar__select",
      change: wrap,
      optionSelect: ["", "nowrap", "wrap", "wrap-reverse"],
      divId: 3
    },
    {
      text: "Justify Content",
      value: "",
      style: "sidebar__select",
      change: justify,
      optionSelect: [
        "",
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly"
      ],
      divId: 4
    },
    {
      text: "Align Items",
      value: "",
      style: "sidebar__select",
      change: align,
      optionSelect: [
        "",
        "flex-start",
        "flex-end",
        "center",
        "stretch",
        "space-between",
        "space-around"
      ],
      divId: 5
    }
  ];

  return (
    <>
      {" "}
      {dataSelectFlexBox.map((_v) => {
        return <Select {..._v} />;
      })}
    </>
  );
}
