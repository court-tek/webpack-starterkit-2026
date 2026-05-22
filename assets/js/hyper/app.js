  import { h, text, app } from "hyperapp";
  import { jsxify } from "./config/utilities.js";
  import { globalState } from "./state/globalState.js";
  import Welcome from "./components/welcome.js";
  import ColtComponent from "./components/coltcomp.js";
  import TaskList from "./components/todoapp.js";
  import Timer from "./components/statemachine.js";
  import "../../styles/main.scss";

  const jsx = jsxify(h) /** @jsx jsx */



  app({
    init: globalState,
    view: state => (
      <div className="main">
        <Welcome data={state} />
      </div>
    ),
    node: document.querySelector(".app"),
  })
