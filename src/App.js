
import './App.css';
import { Home } from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Login } from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
function App() {
  return (
   <Router>
     <Routes >
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route exact path="/login" element={<Login></Login>}></Route>
     </Routes>
   </Router>
  );
}

export default App;
