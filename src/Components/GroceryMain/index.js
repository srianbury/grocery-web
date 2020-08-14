import React, { useState, useEffect, useContext } from "react";
import { AuthenticationContext } from "../Authentication";

const GroceryMain = () => {
  const { user } = useContext(AuthenticationContext);
  const [list, setList] = useState([]);

  async function read() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/list`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: user.token
      }
    });
    const result = await response.json();
    setList(result.list);
  }

  useEffect(() => {
    read();
    // eslint-disable-next-line
  }, []);

  async function handleRemoveItem(id) {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/list/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: user.token
        }
      }
    );
    if (response.status !== 200) {
      throw Error("Unhandled Exception");
    }
    setList(prev => prev.filter(item => item._id !== id));
  }

  async function handleRemoveAll() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/list`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: user.token
      }
    });
    if (response.status !== 200) {
      throw Error("Unhandled Exception");
    }
    setList([]);
  }

  return (
    <div>
      <h1>Grocery App Guy</h1>
      <button onClick={read}>Refresh List</button>
      <ListView
        list={list}
        handleRemoveItem={handleRemoveItem}
        handleRemoveAll={handleRemoveAll}
      />
    </div>
  );
};

const ListView = ({ list, handleRemoveItem, handleRemoveAll }) => (
  <div>
    {list.map(item => (
      <ListItem
        key={item._id}
        id={item._id}
        name={item.name}
        handleRemoveItem={handleRemoveItem}
      />
    ))}
    <button onClick={handleRemoveAll}>Clear List</button>
  </div>
);

const ListItem = ({ id, name, handleRemoveItem }) => (
  <div>
    - {name}
    <button onClick={() => handleRemoveItem(id)}>Delete</button>
  </div>
);

export default GroceryMain;
