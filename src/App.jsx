import Lists from './lists.jsx';
import Header from './Header.jsx';
import { useState } from 'react';
import Footer from './Footer.jsx';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'One half pound bag of cocoa covered almonds unsalted',
    },
    {
      id: 2,
      checked: false,
      item: 'Item 2',
    },
    {
      id: 3,
      checked: false,
      item: 'Item3',
    },
  ]);

  const handleCheck = (id) => {
    console.log(id);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    console.log(listItems);
    setItems(listItems);
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <Lists
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
