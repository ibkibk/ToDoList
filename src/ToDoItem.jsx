import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

export default class ToDoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i>
              <i>
                <FontAwesomeIcon
                  style={{ cursor: "pointer" }}
                  icon={faPen}
                  size="1x"
                />
              </i>
            </i>
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i>
              <i>
                <FontAwesomeIcon
                  style={{ cursor: "pointer" }}
                  icon={faTrash}
                  size="1x"
                />
              </i>
            </i>
          </span>
        </div>
      </li>
    );
  }
}
