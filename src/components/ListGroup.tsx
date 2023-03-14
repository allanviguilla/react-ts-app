import { MouseEvent, useState } from "react";

export default function ListGroup() {
  const [clicked, setClicked] = useState(false);
  const items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];

  // const handleClick = (item: string) => {
  //   setClicked(true);
  // };

  // const items = [];

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No items found</p> : null;
  // };

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List Group</h1>
      {/* {items.length === 0 ? <p>No items found.</p> : null} */}
      {/* {items.length === 0 && <p>No items found.</p>} */}
      {/* {getMessage()} */}
      <ul className="list-group active">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
