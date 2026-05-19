  import { h, text, app } from "hyperapp";
  import { globalState } from "./state/globalState.js";
  import TaskList from "./components/todoapp.js";
  import Timer from "./components/statemachine.js";
  import "../../styles/main.scss";

  app({
    init: globalState,
    view: state =>
      h("main", {}, [
        Timer(state), 
      ]),
    node: document.querySelector(".app"),
  })
