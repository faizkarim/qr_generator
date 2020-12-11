import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FormPage from "./view/FormPage";
import QrFormPage from "./view/QrFormPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FormPage} />
        <Route exact path="/qrformpage" component={QrFormPage} />
      </Switch>
    </Router>
  );
}

export default App;
