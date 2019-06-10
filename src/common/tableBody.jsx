import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  // remember that column.content is a function reference
  // here we check to see if column.content exists, if it does return the function
  //passing item, which is the movie

  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column);
  };

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr>
            {columns.map(column => (
              <td>{this.renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
