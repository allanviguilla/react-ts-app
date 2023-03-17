import { useState } from "react";

export default function App() {
  return <></>;
}

// import ExpandableText from "./components/ExpandableText";

// <ExpandableText maxChars={10}>
//   Lil Wayne - New Slaves These are the thoughts of the brainless No new
//   friends, we don't talk to strangers Man I'm so serious with this pimp
//   shit Full clip in my Mac 10 Ain't no exit out the game Nigga cut off
//   your blinkers And if she married I fuck her If she lonely I fuck her If
//   she crazy I love her Y'all just don't understand her
// </ExpandableText>

// const [cart, setCart] = useState({
//   discount: 0.1,
//   items: [
//     { id: 1, title: "Product 1", quantity: 1 },
//     { id: 2, title: "Product 2", quantity: 1 },
//   ],
// });

// const handleClick = () => {
//   setCart({
//     ...cart,
//     items: cart.items.map((cartItem) =>
//       cartItem.id === 1
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     ),
//   });
// };

// const [pizza, setPizza] = useState({
//   name: "Spicy Pepperoni",
//   toppings: ["Mushroom"],
// });

// const handleClick = () => {
//   setPizza({
//     ...pizza,
//     toppings: [...pizza.toppings, "Sausage"],
//   });
// };

// {pizza.toppings}
// <button onClick={() => handleClick()}>Click Me</button>

// const [game, setGame] = useState({
//   id: 1,
//   player: {
//     name: "John",
//   },
// });

// const handleClick = () => {
//   setGame({ ...game, player: { ...game.player, name: "Allan" } });
// };

// <h1>{game.player.name}</h1>
// <button onClick={() => handleClick()}>Click Me</button>

// import NavBar from "./components/NavBar";
// import Cart from "./components/Cart";

// <div>
//   <NavBar cartItemsCount={cart.length} />
//   <Cart cartItems={cart} onClear={() => setCart([])} />
// </div>

// import Message from "./Message";
// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import Like from "./components/Like";

// import { BsFillCalendarFill } from "react-icons/bs";

// let items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];

// const handleSelectItem = (item: string) => {
//   console.log(item);
// };

// const [alert, setAlert] = useState(false);

{
  /* {alert && <Alert onClose={() => setAlert(false)}>Hello fren</Alert>} */
}
{
  /* <Button onClick={() => setAlert(true)}>My Button</Button> */
}
{
  /* <ListGroup
  items={items}
  heading="Cities"
  onSelectItem={handleSelectItem}
/> */
}
{
  /* <BsFillCalendarFill color="red" size="40" /> */
}
{
  /* <Like onClick={() => console.log("Clicked!")} /> */
}
