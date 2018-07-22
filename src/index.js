import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import promise from 'redux-promise';

import PostIndex from './components/post_index';
import PostNew from './components/post_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      {/* <Switch>
        <Route path='/new' component={PostNew} />
        <Route path='/' component={PostIndex}/>
      </Switch> */}
      <div>
        <Route path='/new' component={PostNew} />
        <Route exact path='/' component={PostIndex}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
