const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <div>
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
    </div>
  );
};

export default LineItem;
