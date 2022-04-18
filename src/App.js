import './App.css';

import { connect } from "react-redux";
function App(props) {

  const handleInc = (evt) => {
    props.dispatch({
      type: 'INCREMENT'
    })
  }
  
  const handleDec = (evt) => {
    props.dispatch({
      type: 'DECREMENT'
    })
  } 

  return (
    <div className="App">
      <header className="App-header">
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <p>
      {props.count}
      </p>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
export default connect(mapStateToProps)(App);;
