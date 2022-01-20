import "./App.css";
import AllContacts from "./Components/AllContacts/AllContacts";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateContact from "./Components/CreateContact/CreateContact";
import UpdateContacts from "./Components/UpdateContact/UpdateContact";
import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext()

function App() {
  const [allContacts, setAllContacts] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8080/api/v1/students`)
      .then((res) => res.json())
      .then((data) => setAllContacts(data));

      setLoading(false);
  }, []);

  return (
    !loading && <StudentContext.Provider value={{ students: [allContacts, setAllContacts]}}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <AllContacts></AllContacts>
            </Route>
            <Route exact path="/createContact">
              <CreateContact></CreateContact>
            </Route>
            <Route exact path="/updateContact/:id">
              <UpdateContacts></UpdateContacts>
            </Route>
          </Switch>
        </Router>
      </div>
    </StudentContext.Provider>
  );
}

export default App;
