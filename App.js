
import './App.css';
// import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import Entry from './pages/entry/Entry';
import { LoginForm } from './components/login/LoginForm';
import { ResetForm } from './components/password-reset/ResetForm';
// import Random from './Random';

function App() {
  return (
    <div className="App">
  
<LoginForm/>
    </div>
  );
}

export default App;
