  import { h, text, app } from "hyperapp";
  import { jsxify } from "./config/utilities.js";
  import { globalState } from "./state/globalState.js";
  import Header from "./components/header.js";
  import Welcome from "./components/welcome.js";
  import Hyperlist from "./components/hypertutorial.js";
  import ColtGrid from "./components/coltgrid.js";
  import TaskManager from "./components/taskmanager.js";
  import BillsManager from "./components/billsmanager.js";
  import "../../styles/main.scss";
  // JSX config
  const jsx = jsxify(h) /** @jsx jsx */
  
  const routingSystem = (state) => {
    switch (state.location) {
      case 'home':
        return <Welcome data={state} />
        break;

      case 'hyperapp tutorial':
        return <Hyperlist data={state} />
        break;

      case 'css grid':
        return <ColtGrid data={state} />
        break;

      case 'task manager':
        return <TaskManager data={state} />
        break;

      case 'bills manager':
        return <BillsManager data={state} />
        break;

      default:
        return <ColtGrid data={state} />
        break;
    }
  }
  
  app({
    init: globalState,
    view: state => (
      <div className="main">
        <Header data={state} />
        {routingSystem(state)}
      </div>
    ),
    node: document.querySelector(".app"),
  })
