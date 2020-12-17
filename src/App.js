import React from 'react';
import ReactDOM from 'react-dom';
import DataFetch from './components/DataFetch';
import CustomList from './components/CustomList';
import Context from './components/Context';

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Context />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-6 float-left">
                <DataFetch />
              </div>
              <div className="col-md-6 float-right">
                <CustomList />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;