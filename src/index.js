import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import redux createStore y applyMiddleware
import { applyMiddleware, createStore } from 'redux';

import reducers from './reducers/index';
// Import Actions
import {addToCart} from './actions/cartActions';
import {postBooks,deleteBooks,updateBooks} from './actions/booksActions';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();




// STEP 1 create to store
//const middleware = applyMiddleware(logger);
const store = createStore(reducers);

/*store.subscribe(function(){
   console.log('Books redux: ', store.getState());   
   
})*/

// STEP 2 create and dispatch actions 
store.dispatch(postBooks(
      [
         {
            id: 1,
            title: "Crepusculo",
            description: "El libro de vampiros y hombres lobos",
            precio: 30
         },
         {
            id: 2,
            title: "Harry Potter",
            description: "El libro de magia y criaturas fantasticas",
            precio: 50
         }
      ]
   ))


// Other actions CRUD

// Actions DELETE

store.dispatch(deleteBooks(
   {id: 1}
))

// Actions UPDATE
store.dispatch(updateBooks(
   {  
      id: 2,
      title: "Ready One Player",
      description: "El libro futurista y del mundo de realidad virtual",
      precio: 44
   }
))


// Actions Cart

// Actions ADD
store.dispatch(addToCart([{id:1}]))
