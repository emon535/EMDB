import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import { store } from './app/store';
import { Home } from './Containers/Home';
import Movies from './Containers/Movies';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './Root';

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    {/* <App /> */}

    <Router history={createBrowserHistory()}>
    <Route path="/" component={Root}>
        <Route  exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/movies/:id" render={()=><h1>Hello ID</h1>}/>
      </Route>
    </Router>

  </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
