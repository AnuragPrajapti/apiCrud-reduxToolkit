import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route , Routes } from 'react-router-dom';
import SighnIn from './component/SignIn';
import SignUp from './component/SignUp';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={ <SignUp /> }  />
         <Route path='/signIn' element={<SighnIn />} />
         <Route path='/dashboard' element={<Dashboard />} /> 
      </Routes>
    </div>
  );
}

export default App;
