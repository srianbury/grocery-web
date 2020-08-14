import React, { useState, useEffect, useContext } from "react";
import { AuthenticationContext } from "../Authentication";
import Spinner from "../Spinner";
import Error from "../Error";

const AppContainer = ({ children }) => (
  <div className="d-flex justify-content-center">{children}</div>
);

const App = () => {
  const { user } = useContext(AuthenticationContext);
  const [state, setState] = useState({
    list: [],
    loading: true,
    error: null
  });

  async function read() {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/list`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: user.token
        }
      });
      const result = await response.json();
      setState(prev => ({
        ...prev,
        list: result.list
      }));
    } catch (e) {
      setState(prev => ({
        ...prev,
        error: "Unable to load data! :("
      }));
    } finally {
      setState(prev => ({
        ...prev,
        loading: false
      }));
    }
  }

  useEffect(() => {
    read();
    // eslint-disable-next-line
  }, []);

  function handleRetry() {
    setState(prev => ({
      ...prev,
      error: null,
      loading: true
    }));
    // this was performing too quickly and I wanted to give the feel/visualization that
    // something was actually happending
    setTimeout(() => {
      read();
    }, 500);
  }

  async function handleRemoveItem(id, cb) {
    try {
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
      await response.json();
      if (response.status !== 200) {
        throw Error("Unhandled Exception");
      }
      setState(prev => ({
        ...prev,
        list: prev.list.filter(item => item._id !== id)
      }));
    } catch (e) {
      cb();
    }
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
    setState(prev => ({
      ...prev,
      list: []
    }));
  }

  if (state.error) {
    return (
      <div>
        <Error message={state.error} />
        <div className="d-flex justify-content-center mt-2 mb-2">
          <button
            type="button"
            className="btn btn-sm btn-primary"
            onClick={handleRetry}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (state.loading) {
    return <Spinner />;
  }

  return (
    <div>
      <span>
        <h3 className="d-inline-block mr-2">Grocery List</h3>
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={handleRetry}
        >
          Refresh
        </button>
      </span>
      <ListView
        list={state.list}
        handleRemoveItem={handleRemoveItem}
        handleRemoveAll={handleRemoveAll}
      />
    </div>
  );
};

const ListView = ({ list, handleRemoveItem, handleRemoveAll }) => (
  <div>
    {list.length === 0 && <div>Your list is empty!</div>}
    <div className="card">
      <ul className="list-group list-group-flush">
        {list.map(item => (
          <ListItemContainer
            key={item._id}
            id={item._id}
            name={item.name}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </ul>
    </div>
    {list.length > 0 && <ClearList handleRemoveAll={handleRemoveAll} />}
  </div>
);

const ClearList = ({ handleRemoveAll }) => (
  <div className="d-flex justify-content-end mt-3">
    <button
      type="button"
      className="btn btn-sm btn-danger"
      onClick={handleRemoveAll}
    >
      Clear List
    </button>
  </div>
);

const ListItemContainer = ({ id, name, handleRemoveItem }) => {
  const [deleting, setDeleting] = useState(false);
  function handleRemove() {
    setDeleting(true);
    handleRemoveItem(id, () => setDeleting(false));
  }
  if (deleting) {
    return (
      <li className="list-group-item">
        <Spinner />
      </li>
    );
  }
  return <ListItemView id={id} name={name} handleRemoveItem={handleRemove} />;
};

const ListItemView = ({ id, name, handleRemoveItem }) => (
  <li className="list-group-item">
    <div className="d-flex justify-content-between">
      <div>{name}</div>
      <button
        type="button"
        className="btn btn-sm btn-danger"
        onClick={() => handleRemoveItem(id)}
      >
        Delete
      </button>
    </div>
  </li>
);

export default () => (
  <AppContainer>
    <App />
  </AppContainer>
);
