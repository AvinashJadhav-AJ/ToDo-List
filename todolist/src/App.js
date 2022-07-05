import React, { useState } from 'react';
import ToDoList from './ToDoList';


const App = () => {

  const [inputList, setInputList] = useState("");

  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id; 
      });
    });
};

return <>

<div className="main_div">

  <div className="center_div">

    <br />
    <h1> TO DO LIST </h1>

    <br />
    <input type= "text"  placeholder="Add Items" 
      value={inputList}
    onChange={itemEvent} />

    <button onClick={listofItem}> + </button>

  <o1>
   
    {/*<li>{inputList}</li>*/}

    {
      Items.map((itemval, index) => {
        return <ToDoList
        key = {index} 
        id = {index} 
        text = {itemval}
        onSelect = {deleteItems}
        />;
      })
    }
  </o1>

  </div>

</div>
</>
};

export default App;
