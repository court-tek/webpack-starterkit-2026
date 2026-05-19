import { h, text } from "hyperapp";
import { NewValue, AddTodo } from "../actions/index.js";

export default function TaskList(props) {
    const { name, value } = props;
    return (
        h("div", {class: "todo"}, [
            h("h1", {class: "todo__header"}, text("to do list")),
            h("input", {class: "todo__text-input", type: "text", oninput: NewValue, value }),
            h("ul", {class: "todo__list"}, 
                h("li", {class: "todo__list-item"}, text(name))
            ),
            h("button", {class: "todo__submit-btn", onclick: AddTodo}, text("Add Task"))
        ])
    )
}