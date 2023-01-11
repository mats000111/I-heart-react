import HeartsList from './components/HeartsList';
import Header from './components/Header';
import './App.css';
import { Component } from 'react';

// function App() {
//   return (
//     <>
//       <Header />
//       <HeartsList />
//     </>
//   );
// };

class App extends Component {
  render () {
    return (
      <>
        <Header />
        <HeartsList />
      </>
    );
  };
};

export default App;
