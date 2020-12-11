import React from "react";

import { ListItem } from "../list-item/list-item";

import "./emp-list.css";

export const EmpList = (props) => {
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" className="single-header t-header"></th>
            <th scope="col" className="single-header t-header">
              Name
            </th>
            <th scope="col" className="single-header t-header">
              Email
            </th>
            <th scope="col" className="t-header">
              Phone Number
            </th>
          </tr>
        </thead>
        <tbody>
          {props.employee.map((employee) => (
            <ListItem key={employee.id.value} employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
