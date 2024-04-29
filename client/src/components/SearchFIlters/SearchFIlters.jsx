import "./SearchFilters.scss";

export default function SearchFilters(props) {
  const { list, filteredList, setFilteredList } = props;

  // create an array that contains only the filter options
  let optionList = [];
  list.forEach((obj) => {
    if (!optionList.includes(obj.type)) {
      optionList.push(obj.type);
    }
  });

  // update filteredList if a filter is checked or unchecked
  function handleChange(e) {
    if (!filteredList) {
      const newFilteredList = list.filter((obj) => obj.type === e.target.value);
      setFilteredList(newFilteredList);
    } else {
      setFilteredList([]);
    }
  }

  return (
    <select className="search-filter" onChange={handleChange}>
      {optionList.map((i) => {
        <option className="search-filter__checkbox" type="checkbox" value={i}>
          {" "}
          `${i}`
        </option>;
      })}
    </select>
  );
}
