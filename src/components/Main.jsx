import React, { useState } from "react";
import Form from "./form";
import TravelItem from "./Travelitem";

const Main = () => {
  const [isForm, setIsForm] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleAddDestination = (newDestination) => {
    setDestinations((prev) => {
      return [...prev, newDestination];
    });
  };

  const handleSelected = (idx) => {
    setSelected((prev) => {
      return prev.includes(idx)
        ? prev.filter((i) => i !== idx)
        : [...prev, idx];
    });
  };

  const handleDelete = (idx) => {
    setDestinations((prev) => prev.filter((_, inx) => inx !== idx));
  };

  const handleDeleteSelected = () => {
    setDestinations((prev) => prev.filter((_, idx) => !selected.includes(idx)));
    setSelected([]);
  };

  const handleSelectAll = () => {
    if (selected.length === destinations.length) {
      setSelected([]);
    } else {
      setSelected(destinations.map((_, idx) => idx));
    }
  };

  const handleChangeStatus = (newStatus, idx) => {
    setDestinations((prev) => {
      return prev.map((item, inx) =>
        inx === idx ? { ...item, status: newStatus } : item
      );
    });
  };

  const handleForm = () => {
    setIsForm(!isForm);
  };

  return (
    <main className="container main">
      <section className="">
        <div className="card">
          <h2 className="card-title">Add new destination</h2>
          {!isForm ? (
            <button className="btn" onClick={handleForm}>
              Add destination
            </button>
          ) : (
            <Form
              isForm={() => setIsForm(false)}
              onAdd={handleAddDestination}
            />
          )}
        </div>
        <div className="card">
          <div className="list-header">
            <h2 className="list-title">
              My Destinations: {destinations.length}
            </h2>
            <div className="select-tools">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={
                    selected.length === destinations.length &&
                    destinations.length > 0
                  }
                />
                select all
              </label>
              <button
                className="btn-red btn"
                disabled={selected.length === 0}
                onClick={handleDeleteSelected}
              >
                Delete selected {selected.length}
              </button>
            </div>
          </div>
          {destinations.map((destination, idx) => {
            return (
              <TravelItem
                {...destination}
                key={idx}
                onSelect={() => handleSelected(idx)}
                isSelected={selected.includes(idx)}
                onDelete={() => handleDelete(idx)}
                onStatusChange={(newStatus) =>
                  handleChangeStatus(newStatus, idx)
                }
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Main;
