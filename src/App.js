import React from 'react';
import Home from './pages/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import AddEntry from "./pages/AddEntry"
import Toxml from "./pages/Toxml"
import Toyaml from './pages/Toyaml';
import DeleteFile from './pages/DeleteFile';
import EditEntry from './pages/EditEntry';

const App= ()=> {
  return (
    <Router>
        <Switch>
              <Route exact path="/" component={Home}/>

              <Route path="/add" component={AddEntry}/>
               
              <Route path="/edit" component={EditEntry}/>
               
              <Route path="/xml" component={Toxml}/>
      
              <Route path="/yaml" component={Toyaml}/>
               
              <Route path="/delete" component={DeleteFile}/>
                
        </Switch>
  </Router>
  );
}

export default App;