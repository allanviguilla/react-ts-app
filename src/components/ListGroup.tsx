import { MouseEvent, useState } from "react";

interface ListGroupProps {
  //an array of strings
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

export default function ListGroup({
  items,
  heading,
  onSelectItem,
}: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // let items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];
  // let selectedIndex = 0;

  // const handleClick = (item: string) => {
  //   setClicked(true);
  // };

  // const items = [];

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No items found</p> : null;
  // };

  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
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
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
