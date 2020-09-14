import React from 'react';
import {Provider} from 'react-redux'
import store from './Redux/store';
import Routes from './Component/Routes';


function App() {
  return (
    <Provider store={store}>
    <Routes/>
    </Provider>
  );
}

export default App;
