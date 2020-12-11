import React from "react";

export default function TableRowComponent(props) {
  return (
    <tr>
      <td className="col-6 text-dark">{props.th}</td>
      <td className="col-6 text-dark">{props.td}</td>
    </tr>
  );
}
