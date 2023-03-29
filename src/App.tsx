import useUsers from "./hooks/useUsers";
import userService, { User } from "./services/user-service";

export default function App() {
  const { users, error, loading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Allan" };

    setUsers([newUser, ...users]);

    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    //We use the PUT method for replacing an object
    //On the other hand, the PATCH method updates one or more of its properties
    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <h3 className="text-danger">{error}</h3>}
      {loading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div className="mb-3">
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

// import { AxiosError } from "axios";

//get -> await promise -> res / err
// const fetchUsers = async () => {
//   try {
//     const res = await axios.get<User[]>(
//       "https://jsonplaceholder.typicode.com/xusers"
//     );
//     setUsers(res.data);
//   } catch (err) {
//     setError((err as AxiosError).message);
//   }
// };

// fetchUsers();

// import ExpenseTracker from "./ExpenseTracker";
// import ExpenseFilter from "./ExpenseFilter";
// import ExpenseForm from "./ExpenseForm";

// const [selectedCategory, setSelectedCategory] = useState("");
// const [expenses, setExpenses] = useState([
//   { id: 1, description: "Milk", amount: 5, category: "Groceries" },
//   { id: 2, description: "Eggs", amount: 3, category: "Groceries" },
//   { id: 3, description: "Bread", amount: 2, category: "Groceries" },
//   { id: 4, description: "Netflix", amount: 9, category: "Entertainment" },
//   { id: 5, description: "Electricity", amount: 1, category: "Utilities" },
// ]);

// const visibleExpenses = selectedCategory
// ? expenses.filter((e) => e.category === selectedCategory)
// : expenses;

{
  /* <div className="mb-5">
<ExpenseForm
  onSubmit={(expense) =>
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
  }
/>
</div>
<div className="mb-3">
<ExpenseFilter
  onSelectCategory={(category) => setSelectedCategory(category)}
/>
</div>
<div className="mb-3">
<ExpenseTracker
  expenses={visibleExpenses}
  onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
/>
</div> */
}

// import Form from "./Form";

{
  /* <Form /> */
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
