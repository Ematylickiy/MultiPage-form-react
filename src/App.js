import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Step1 from './Components/Step1';
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';
import Steps from './Components/Steps';
import StartPage from './Components/StartPage';
import ResultPage from './Components/ResultPage';
import Step4 from './Components/Step4';
import SuccedPage from './Components/SuccedPage';


function App() {
  return (
    <Router>
        <Steps/>
      <Switch>
        <Route exact path='/' component = {StartPage}/>
        <Route exact path='/step1'><Step1 path='/step2'/></Route>
        <Route exact path='/step2'><Step2 path='/step3'/></Route>
        <Route exact path='/step3'><Step3 path='/step4'/></Route>
        <Route exact path='/step4'><Step4 path='/step5'/></Route>
        <Route path='/step5' component = {ResultPage}/>
        <Route path='/succeed' component = {SuccedPage}/>
        <Route path='/step1/edit'><Step1 path = '/step5' to='/step5' textLink='Cancel' textBtn='Ok'/></Route>
        <Route path='/step2/edit'><Step2 path = '/step5' to='/step5' textLink='Cancel' textBtn='Ok'/></Route>
        <Route path='/step3/edit'><Step3 path = '/step5' to='/step5' textLink='Cancel' textBtn='Ok'/></Route>
        <Route path='/step4/edit'><Step4 path = '/step5' to='/step5' textLink='Cancel' textBtn='Ok'/></Route>
      </Switch>
    </Router>
  );
}

export default App;
