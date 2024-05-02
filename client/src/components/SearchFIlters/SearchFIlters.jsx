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
  
    if (e.target.checked) {
      const newFilteredList = list.filter((obj) => obj.type === e.target.value);
      filteredList.push(...newFilteredList)
      setFilteredList(filteredList);
      console.log("added to list", filteredList)
     
    } else {
      const removedFilteredList = filteredList.filter((obj)=> obj.type !== e.target.value)
      setFilteredList(removedFilteredList);
      console.log("removed from list", removedFilteredList)
      
    }
  }

  return (
    <div className="search-filter" >
      <h2>Filter By:</h2>
      {optionList.map((i) => (
        <label>
        <input
          key={crypto.randomUUID()}
          className="search-filter__checkbox"
          type="checkbox"
          value={i}
          onChange={handleChange}
        ></input>
        {i}
        </label>
      ))}
    </div>
  );
}
