import logo from './logo.svg';
import './App.css';
import SignUpClient from './Signup/SignupClient'
import SignUpSeller from './Signup/SignUpSeller'
import LoginSeller from './Login/LoginSeller'
import LoginClient from './Login/LoginClient'

function App() {
  return (
    <div className="App">
      <LoginSeller/>
      <LoginClient/>

      <SignUpClient/>
      <SignUpSeller/>
    </div>
  );
}

export default App;
