import HeartLogo from './heart.svg';
import './App.css';

const message = "cool cud";
const headerMessage = "I ❤️ React";

const Heart = (props) => {
  return (
    <div className="heart">
      <img className="heart-img" src={HeartLogo} alt="heart" />
      <p className="heart-message">{props.msg}</p>
    </div>
  )
}

const Header = (props) => { 
  return <div className="App-header">{props.msg}</div>
}

function App() {
  return (
    <>
      <Header msg={headerMessage}/>
      <Heart msg={message} />
    </>
  );
}

export default App;
