import { MouseEvent, useState } from "react";

// import "./ListGroup.css";
// import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0px;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface ListGroupProps {
  //an array of strings
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

interface ListItemProps {
  active: boolean;
}

export default function ListGroup({
  items,
  heading,
  onSelectItem,
}: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

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
      {items.length === 0 && <p>No items found.</p>}
      {/* {getMessage()} */}
      {/* <ul className="list-group active"> */}
      {/* <ul className="list-group"> */}
      <List className="list-group">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
        {items.map((item, index) => (
          // <li
          //   className={
          //     selectedIndex === index
          //       ? "list-group-item active"
          //       : "list-group-item"
          //   }
          //   key={item}
          //   onClick={() => {
          //     setSelectedIndex(index);
          //     onSelectItem(item);
          //   }}
          // >
          // <li key={index}>{item}</li>
          <ListItem
            active={index === selectedIndex}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
        {/* </ul> */}
      </List>
    </>
  );
}
