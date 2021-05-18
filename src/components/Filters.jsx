import React from "react";
import { connect } from "react-redux";
import { filterAll, filterCompleted, filterIncomplete } from "../actions/index";

const Filters = ({ filterAll, filterCompleted, filterIncomplete }) => {
  return (
    <section>
      <button onClick={filterAll}>All</button>
      <button onClick={filterCompleted}>Completed</button>
      <button onClick={filterIncomplete}>Incomplete</button>
    </section>
  );
};

const mapDispatchToProps = {
  filterAll,
  filterCompleted,
  filterIncomplete,
};

export default connect(null, mapDispatchToProps)(Filters);
