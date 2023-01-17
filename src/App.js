import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect, createStore } from 'redux'
import { Provider } from 'react-redux';
import allReducer from './Redux/Reducers/combinedReducer';

const store = createStore(allReducer);

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
