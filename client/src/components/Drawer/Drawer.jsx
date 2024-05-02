import "./Drawer.scss";
import SearchFilters from "../SearchFIlters/SearchFIlters";
import { SortableContext } from "@dnd-kit/sortable";
import ModalPlanter from "../ModalPlanter/ModalPlanter";
import ModalPlant from "../ModalPlant/ModalPlant";

//TODO: add drawer close buttons, figure out why searchFilter list is lagging

export default function Drawer(props) {
  const { id, list, filteredList, setFilteredList, showModal, onAddItem } =
    props;

  // Plant drawer
  if (id === "plants") {
    if (!showModal) return;
    // no filters applied
    if (filteredList.length === 0) {
      return (
        <section className="drawer--plant">
          <SearchFilters
            key={crypto.randomUUID()}
            list={list}
            filteredList={filteredList}
            setFilteredList={setFilteredList}
          />
          <ul className="list--plant">
            <SortableContext items={list.map((i) => i.id)}>
              {list.map((plant) => (
                <ModalPlant
                  key={plant.plant_id}
                  id={`plant-${crypto.randomUUID()}`}
                  type_id={plant.type_id}
                  plant_id={plant.plant_id}
                  type={plant.type}
                  plant_name={plant.plant_name}
                  plant_description={plant.plant_description}
                  onAddItem={onAddItem}
                />
              ))}
            </SortableContext>
          </ul>
        </section>
      );
    }
    // filters applied
    else {
      return (
        <section className="drawer--plant">
          <SearchFilters
            key={crypto.randomUUID()}
            list={list}
            filteredList={filteredList}
            setFilteredList={setFilteredList}
          />
          <ul className="list--plant">
            <SortableContext items={list.map((i) => i.id)}>
              {filteredList.map((plant) => (
                <ModalPlant
                  key={plant.plant_id}
                  id={`plant-${crypto.randomUUID()}`}
                  type_id={plant.type_id}
                  plant_id={plant.plant_id}
                  type={plant.type}
                  plant_name={plant.plant_name}
                  plant_description={plant.plant_description}
                  onAddItem={onAddItem}
                />
              ))}
            </SortableContext>
          </ul>
        </section>
      );
    }
  }

  // Planter Drawer
  else {
    if (!showModal) return;
    // no filters applied
    if (filteredList.length === 0) {
      return (
        <section className="drawer--planter">
          <SearchFilters
            key={crypto.randomUUID()}
            list={list}
            filteredList={filteredList}
            setFilteredList={setFilteredList}
          />
          <ul className="list--planter">
            <SortableContext items={list.map((i) => i.id)}>
              {list.map((planter) => (
                <ModalPlanter
                  key={planter.id}
                  id={`container-${crypto.randomUUID()}`}
                  planter_id={planter.id}
                  name={planter.name}
                  type={planter.type}
                  height={planter.height}
                  width={planter.width}
                  length={planter.length}
                  radius={planter.radius}
                  round={planter.round}
                  onAddItem={onAddItem}
                />
              ))}
            </SortableContext>
          </ul>
        </section>
      );
    }
    // filters applied
    else {
      return (
        <section className="drawer--planter">
          <SearchFilters
            key={crypto.randomUUID()}
            list={list}
            filteredList={filteredList}
            setFilteredList={setFilteredList}
          />
          <ul className="list--planter">
            <SortableContext items={list.map((i) => i.id)}>
              {filteredList.map((planter) => (
                <ModalPlanter
                  key={planter.id}
                  id={`container-${crypto.randomUUID()}`}
                  planter_id={planter.id}
                  name={planter.name}
                  type={planter.type}
                  height={planter.height}
                  width={planter.width}
                  length={planter.length}
                  radius={planter.radius}
                  round={planter.round}
                  onAddItem={onAddItem}
                />
              ))}
            </SortableContext>
          </ul>
        </section>
      );
    }
  }
}
