import Lists from './lists.jsx';
import Header from './Header.jsx';
import { useEffect, useState } from 'react';
import Footer from './Footer.jsx';
import AddItem from './AddItem.jsx';
import SearchItem from './SearchItem.jsx';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shoppinglist')) || []
  );

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  //renders everytime the items array changes
  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    console.log(id);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    console.log(listItems);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <SearchItem search={search} setSearch={setSearch} />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Lists
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
