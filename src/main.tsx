import React from 'react'
import {RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
import routers from './routes/index.tsx';
import { Provider } from 'react-redux';
import store from './redux/store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider  router={routers}/>
    </Provider>
  </React.StrictMode>,
)
