import "./Drawer.scss";
import SearchFilters from "../SearchFIlters/SearchFIlters";
import Draggable from "../Draggable/Draggable";

export default function Drawer(props) {
  const { id, list, filteredList, setFilteredList } = props;

  //TODO: handle click function for drawer open/close

  // Plant drawer
  if (!props.dndPlantList) {
    // no filters applied
    if (!filteredList) {
      return (
        <section className="drawer--plant">
          <SearchFilters
            list={list}
            filteredList={filteredList}
            setFilteredList={setFilteredList}
          />
          <ul className="list--plant">
            {list.map((plant) => {
              <Draggable
                key={plant.plant_id}
                id={crypto.randomUUID()}
                type_id={plant.type_id}
                plant_id={plant.plant_id}
                type={plant.type}
                plant_name={plant.plant_name}
                plant_description={plant.plant_description}
              />;
            })}
          </ul>
        </section>
      );
    }
    // filters applied
    else {
      return (
        <section className="drawer--plant">
          <SearchFilters
            list={list}
            filteredList={filteredList}
            setFilteredList={setFilteredList}
          />
          <ul className="list--plant">
            {filteredList.map((plant) => {
              <Draggable
                key={plant.plant_id}
                id={crypto.randomUUID()}
                type_id={plant.type_id}
                plant_id={plant.plant_id}
                type={plant.type}
                plant_name={plant.plant_name}
                plant_description={plant.plant_description}
              />;
            })}
          </ul>
        </section>
      );
    }
  }
  // Planter Drawer
  else {
    const { dndPlantList, setDndPlantList } = props;
    // no filters applied
    if (!filteredList) {
      return (
        <section className="drawer--planter">
          <SearchFilters
            list={list}
            filteredList={filteredList}
            setFilteredList={setFilteredList}
          />
          <ul className="list--planter">
            {list.map((planter) => {
              <Draggable
              dndPlantList={dndPlantList} 
              setDndPlantList={setDndPlantList}
              key={planter.id}
              id={crypto.randomUUID()}
              planter_id= {planter.id}
              name= {planter.name}
              type= {planter.type}
              height={planter.height}
              width={planter.width}
              length={planter.length}
              radius={planter.radius}
              round={planter.round}
              />;
            })}
          </ul>
        </section>
      );
    }
    // filters applied
    else {
      return (
        <section className="drawer--planter">
          <SearchFilters
            list={list}
            filteredList={filteredList}
            setFilteredList={setFilteredList}
          />
          <ul className="list--planter">
            {filteredList.map((planter) => {
              <Draggable
              dndPlantList={dndPlantList} 
              setDndPlantList={setDndPlantList}
              key={planter.id}
              id={crypto.randomUUID()}
              planter_id= {planter.id}
              name= {planter.name}
              type= {planter.type}
              height={planter.height}
              width={planter.width}
              length={planter.length}
              radius={planter.radius}
              round={planter.round}
              />;
            })}
          </ul>
        </section>
      );
    }
  }
}
