import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const actor = ['IFTE', 'FARDIN', 'JITU']
  const products = [
    { name: 'PhotoShop', price: '99.99$' },
    { name: 'Pdf reader', price: '9.99$' },
    { name: 'Vfx', price: '69.99$' }
  ]
  const actorNames = actor.map(actor => actor)
  return (
    <div className="App">
      <header className="App-header">
        
        <Users></Users>
        <ul>
          {
            actor.map(actor => <li>{actor}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Counter></Counter>
      </header>
    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  })
  return (
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {
          users.map(users => <li>{users.name}</li>)
        }
      </ul>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}
function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: ' 5px',
    backgroundColor: 'gray',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '5px',
    float:'left'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )

}
function Person(props) {
  return (
    <div style={{}}>
      <h1>Name : {props.name}</h1>
      <p>Student</p>
    </div>
  )
}
export default App;
