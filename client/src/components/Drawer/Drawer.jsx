import "./Drawer.scss";
import SearchFilters from "../SearchFIlters/SearchFIlters";
import { SortableContext } from "@dnd-kit/sortable";
import ModalPlanter from "../ModalPlanter/ModalPlanter";
import ModalPlant from "../ModalPlant/ModalPlant";
import closeIcon from "../../assets/images/close-square-svgrepo-com.svg";

//TODO: add drawer close buttons, figure out why searchFilter list is lagging

export default function Drawer(props) {
  const {
    id,
    list,
    filteredList,
    setFilteredList,
    isChecked,
    setIsChecked,
    showModal,
    setShowModal,
    onAddItem,
  } = props;
  // filter states

  // Plant drawer
  if (id === "plants") {
    if (!showModal) return;
    // no filters applied
    if (filteredList.length === 0) {
      return (
        <div className="overlay">
          <section className="drawer--plant">
            <SearchFilters
              key={crypto.randomUUID()}
              list={list}
              filteredList={filteredList}
              setFilteredList={setFilteredList}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
            <img
              className="drawer__close"
              src={closeIcon}
              onClick={() => {
                setShowModal(false);
                setIsChecked([]);
                setFilteredList([]);
              }}
            ></img>
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
                    setFilteredList={setFilteredList}
                    setIsChecked={setIsChecked}
                  />
                ))}
              </SortableContext>
            </ul>
          </section>
        </div>
      );
    }
    // filters applied
    else if (filteredList.length > 0) {
      return (
        <div className="overlay">
          <section className="drawer--plant">
            <SearchFilters
              key={crypto.randomUUID()}
              list={list}
              filteredList={filteredList}
              setFilteredList={setFilteredList}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
            <img
              className="drawer__close"
              src={closeIcon}
              onClick={() => {
                setShowModal(false);
                setIsChecked([]);
                setFilteredList([]);
              }}
            ></img>
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
                    setFilteredList={setFilteredList}
                    setIsChecked={setIsChecked}
                  />
                ))}
              </SortableContext>
            </ul>
          </section>
        </div>
      );
    }
  }

  // Planter Drawer
  else {
    if (!showModal) return;
    // no filters applied
    if (filteredList.length === 0) {
      return (
        <div className="overlay">
          <section className="drawer--planter">
            <SearchFilters
              key={crypto.randomUUID()}
              list={list}
              filteredList={filteredList}
              setFilteredList={setFilteredList}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
            <img
              className="drawer__close"
              src={closeIcon}
              onClick={() => {
                setShowModal(false);
                setIsChecked([]);
                setFilteredList([]);
              }}
            ></img>
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
                    setFilteredList={setFilteredList}
                    setIsChecked={setIsChecked}
                  />
                ))}
              </SortableContext>
            </ul>
          </section>
        </div>
      );
    }
    // filters applied
    else if (filteredList.length > 0) {
      return (
        <div className="overlay">
          <section className="drawer--planter">
            <SearchFilters
              key={crypto.randomUUID()}
              list={list}
              filteredList={filteredList}
              setFilteredList={setFilteredList}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
            <img
              className="drawer__close"
              src={closeIcon}
              onClick={() => {
                setShowModal(false);
                setIsChecked([]);
                setFilteredList([]);
              }}
            ></img>
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
                    setFilteredList={setFilteredList}
                    setIsChecked={setIsChecked}
                  />
                ))}
              </SortableContext>
            </ul>
          </section>
        </div>
      );
    }
  }
}
