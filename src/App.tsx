import { useState } from "react";

import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";

import { BsFillCalendarFill } from "react-icons/bs";

export default function App() {
  // let items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // const [alert, setAlert] = useState(false);

  return (
    <div>
      {/* {alert && <Alert onClose={() => setAlert(false)}>Hello fren</Alert>} */}
      {/* <Button onClick={() => setAlert(true)}>My Button</Button> */}
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {/* <BsFillCalendarFill color="red" size="40" /> */}
      <Like onClick={() => console.log("Clicked!")} />
    </div>
  );
}
