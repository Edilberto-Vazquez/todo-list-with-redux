import React from "react";
import { connect } from "react-redux";
import { filterAll, filterCompleted, filterIncomplete } from "../actions/index";

const Filters = (props) => {
  // functions to filter items
  const handleAll = () => {
    props.filterAll();
  };
  const handleComplete = () => {
    props.filterCompleted();
  };
  const handleIncomplete = () => {
    props.filterIncomplete();
  };
  return (
    <section>
      <button onClick={handleAll}>All</button>
      <button onClick={handleComplete}>Completed</button>
      <button onClick={handleIncomplete}>Incomplete</button>
    </section>
  );
};

// conexion created with the store
const mapDispatchToProps = {
  filterAll,
  filterCompleted,
  filterIncomplete,
};

export default connect(null, mapDispatchToProps)(Filters);
