import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Steps from './Steps';
import StartPage from './StartPage';
import ResultPage from './ResultPage';
import Step4 from './Step4';
import SuccedPage from './SuccedPage';


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
