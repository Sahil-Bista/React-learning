function Lists({ items, handleCheck, handleDelete }) {
  return (
    <>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              ></input>
              <label
                style={item.checked ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <button onClick={() => handleDelete(item.id)}> Delete </button>
            </li>
          ))}
        </ul>
      ) : (
        <p> Your list is empty, chindi boy ! </p>
      )}
    </>
  );
}

export default Lists;
