import {BrowserRouter as Router} from "react-router-dom"
import {Switch, Route} from "react-router-dom"
import {Home, Signin, Signup, Browse} from "./pages"
// import { useAuthListener } from './hooks';
// import { IsUserRedirect, ProtectedRoute} from './helpers/routes';

function App() {
  // const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <Route path='/signin'>
          <Signin />
        </Route> 
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/browse'>
          <Browse />
        </Route>
        <Route path='/'>
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;

        // <IsUserRedirect user={user} loggedinPath='/browse' path='/signin'>
        //   <Signin />
        // </IsUserRedirect>

        // <IsUserRedirect user={user} loggedinPath='/browse' path='/signup'>
        //   <Signup />
        // </IsUserRedirect>

        // <ProtectedRoute user={user} path='/browse'>
        //   <Browse />
        // </ProtectedRoute>

        // <IsUserRedirect user={user} loggedinPath='/browse' path='/'>
        //   <Home />
        // </IsUserRedirect>