import { Routes, Route } from 'react-router-dom';
import MainTemplate from './components/templates/MainTemplate';
import HomeView from './views/HomeView';
import StudentView from './views/StudentView';
import TasksView from './views/TasksView';
import InfoView from './views/InfoView';
import AwardsView from './views/AwardsView';
import ConsequencesView from './views/ConsequencesView';
import SettingsView from './views/SettingsView';
import Head from './Head';
import { ROUTE_NAME } from './const/routing.const';

function App(){
  // const [loggedIn, addLoggedIn] = useState(true);
  // console.log(loggedIn);

  return (
    <div className="App">
      <Head />

     
        <MainTemplate>   
        <Routes>      
            <Route exact path={ROUTE_NAME.home} element={<HomeView />}/>
            <Route path={ROUTE_NAME.student}  element={<StudentView />}/>
            <Route exact path={ROUTE_NAME.tasks}  element={<TasksView />}/>
            <Route exact path={ROUTE_NAME.awards} element={<AwardsView />}/>
            <Route exact path={ROUTE_NAME.consequences} element={<ConsequencesView/>}/>
            <Route exact path={ROUTE_NAME.info}element={<InfoView />}/>
            <Route exact path={ROUTE_NAME.settings}element={<SettingsView />}/>
            </Routes>
        </MainTemplate>
      
    </div>
  );
}

export default App;
