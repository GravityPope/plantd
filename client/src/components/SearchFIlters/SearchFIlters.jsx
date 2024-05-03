import "./SearchFilters.scss";

export default function SearchFilters(props) {
  const { list, filteredList, setFilteredList, isChecked, setIsChecked } =
    props;

  // create an array that contains only the filter options
  let optionList = [];
  list.forEach((obj) => {
    if (!optionList.includes(obj.type)) {
      optionList.push(obj.type);
    }
  });

  function addCheckedStates() {
    const checkedStates = optionList.map((name) => {
      if (isChecked.toString().includes(name)) {
        console.log("name included, returning");
        return;
      } else {
        const newFilter = { name: `${name}`, isTrue: false };
        return newFilter;
      }
    });
    return checkedStates;
  }
  // add checkbox objects to state if they dont already exist
  if (isChecked.length === 0) {
    setIsChecked(addCheckedStates());
  }

  // update filteredList if a filter is checked or unchecked
  function handleChange(e) {
    const currentCheckboxIndex = isChecked.findIndex(
      (checkbox) => checkbox.name === e.target.value
    );
    const currentCheckbox = isChecked[currentCheckboxIndex];

    if (currentCheckbox.isTrue) {
      const listItems = list.filter((obj) => obj.type === e.target.value);
      const newFilteredList = [...filteredList, ...listItems];
      setFilteredList(newFilteredList);
      console.log("added to list", newFilteredList);
    } 
    else if (!currentCheckbox.isTrue) {
      const removedFilteredList = filteredList.filter(
        (obj) => obj.type !== e.target.value
      );
      setFilteredList(removedFilteredList);
      console.log("removed from list", removedFilteredList);
    }
  }

  return (
    <div className="search-filter">
      <h2>Filter By:</h2>
      {isChecked.map((checkbox) => {
        return (
          <label>
            <input
              key={crypto.randomUUID()}
              className="search-filter__checkbox"
              type="checkbox"
              value={checkbox.name}
              defaultChecked={checkbox.isTrue}
              onChange={(event) => {
                // find index of object with key i
                const currentCheckboxIndex = isChecked.findIndex(
                  (i) => i.name === checkbox.name
                );
                // assign current object to variable
                const currentCheckbox = isChecked[currentCheckboxIndex];
                // // update the value to !value
                currentCheckbox.isTrue = currentCheckbox.isTrue ? false : true;
                // setIsChecked
                setIsChecked(isChecked);
                console.log ('checkbox on change', isChecked)
                handleChange(event);
              }}
            ></input>
            {checkbox.name}
          </label>
        );
      })}
    </div>
  );
}
