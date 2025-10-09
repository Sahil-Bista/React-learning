import React, { useEffect, useState } from 'react';
import Form from './Form';
import Items from './Items';

const App3 = () => {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [reqType, setReqType] = useState('users');

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await fetch(`${API_URL}/${reqType}`);
        console.log(`${API_URL}/${reqType}`);
        console.log(response);
        if (!response.ok) throw Error('Cannot fetch items, please try again');
        const data = await response.json();
        console.log(data);
        setItems(data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
    };

    fetchRequest();
  }, [reqType]);

  return (
    <div>
      <Form reqType={reqType} setReqType={setReqType} />
      {fetchError && (
        <p style={{ color: 'red' }}> {`Error : ${fetchError}`} </p>
      )}
      {!fetchError && <Items items={items} setItems={setItems} />}
    </div>
  );
};

export default App3;
