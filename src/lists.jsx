import ItemList from './ItemList.jsx';

function Lists({ items, handleCheck, handleDelete }) {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        ></ItemList>
      ) : (
        <p> Your list is empty, chindi boy ! </p>
      )}
    </>
  );
}

export default Lists;
