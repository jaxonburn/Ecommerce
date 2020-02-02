import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Shop from './Components/Shop';
import store from './redux'
import Header from './Components/Header'
import './App.css';
import ProductDetails from './Components/ProductDetails';
import history from './Components/history'




class App extends React.Component{

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/tdmichaelis/typicode/products")
      .then(res => res.json())
      .then(json => {
        store.dispatch({
          type: "INIT_API",
          Product: json
        })
        
      })
}

  render(){

    return (
      <div className="App">
          <Router history={history}>
          <Header />
            <Switch>
                <Route exact path='/store' component={Home} />
                <Route path='/shop' component={Shop} />
                <Route path='/cart' component={Cart} />
                <Route path='/itemdetails/:id' component = {ProductDetails} />
           </Switch>
          
        </Router>
      </div>
    );
  }
  
}


export default App;
