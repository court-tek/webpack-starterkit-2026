  import { h, text, app } from "hyperapp";
  import { globalState } from "./state/globalState.js";
  import TaskList from "./components/todoapp.js";
  import "../../styles/main.scss";

  const state = {
    name: "courtney"
  }

  app({
    init: globalState,
    view: state =>
      h("main", {}, [
        TaskList(state),
        console.log()
      ]),
    node: document.querySelector(".app"),
  })
