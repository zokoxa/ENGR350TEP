import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";

function HandleClickOnListItem(event: MouseEvent) {
  console.log(event);
}
function ListGroup() {
  let arr = new Array();
  if (arr.length === 0) {
    return (
      <Fragment>
        <h1>Group List</h1>
        <p>No items found</p>
      </Fragment>
    );
  }
  let activeItem = -1;

  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {arr.map((item, index) => (
          <li
            key={item}
            className={
              activeItem === index
                ? "list-group-item list-group-item-action list-group-item-dark active"
                : "list-group-item list-group-item-action list-group-item-dark"
            }
            onClick={HandleClickOnListItem}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
