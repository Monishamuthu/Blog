import React from "react";
import "./styles.css";

import {HashRouter,Switch,Route} from 'react-router-dom';
import Routes from './router';

export default function App() {
  return (
    
    <div>
    <HashRouter>
      <div>
        <Switch>
          {
            Routes.map((item,index)=>{
              return(<Route 
                      path={item.path} 
                      component={item.component}
                      exact={item.exact || false}>
                     </Route>)
                      
            })
          }
        </Switch>
      </div>
    </HashRouter>
    </div>
  );
}
