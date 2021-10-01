import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Steps from './Steps';
import Welcome from './Welcome';
import Finish from './Finish';

function App() {
  return (
    <Router>
        <Steps />
      <Switch>
        <Route exact path='/' component = {Welcome}/>
        <Route path='/step1' component = {Step1}/>
        <Route path='/step2' component = {Step2}/>
        <Route path='/step3' component = {Step3}/>
        <Route path='/step4' component = {Finish}/>
      </Switch>
    </Router>
  );
}

export default App;
