import React, { Component } from "react";
import styled from "styled-components";
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination
} from "react-table";
import items from "../../routes/InventoryRoutes";

// Imports react-table styles
// import "react-table-v6/react-table.css";

const url = "http://localhost:8080/api/items";
console.log(url);

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  // componentDidMount() {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(
  //       result => {
  //         this.setState({
  //           isLoaded: true,
  //           items: result.items
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       error => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     );
  // }
  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ items: res }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    // react-table maps from data array NAMED data ONLY
    const data = this.state.items.data;

    // accessor pulls data from each object under that key
    const columns = [
      {
        Header: "ID",
        accessor: "id" // String-based value accessors!
      },
      {
        Header: "Name",
        accessor: "name" // String-based value accessors!
      },
      {
        Header: "Part Number",
        accessor: "part_number",
        Cell: props => <span className="partnumber">{props.value}</span> // Custom cell components!
      },
      {
        Header: "Serial",
        accessor: "serial",
        Cell: props => <span className="serial">{props.value}</span> // Custom cell components!
      },
      {
        Header: "Location",
        accessor: "location",
        Cell: props => <span className="location">{props.value}</span> // Custom cell components!
      },
      {
        Header: "Category",
        accessor: "id",
        Cell: props => <span className="category">{props.value}</span> // Custom cell components!
      },
      {
        Header: "Description",
        accessor: "description",
        Cell: props => <span className="description">{props.value}</span> // Custom cell components!
      }
    ];

    return (
      <div>
        <useTable data={data} columns={columns} />
        {}
      </div>
    );
  }
}
export default DataTable;
