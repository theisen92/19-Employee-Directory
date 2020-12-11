import React from "react";

import "./list-item.css";

export const ListItem = (props) => (
  <tr className="t-item">
    <td>
      <img
        src={props.employee.picture.medium}
        alt={`${props.employee.first} ${props.employee.last}`}
      />
    </td>
    <td className="single-item">{`${props.employee.name.first} ${props.employee.name.last}`}</td>
    <td className="single-item">{props.employee.email}</td>
    <td className="double-item">{props.employee.phone}</td>
  </tr>
);
