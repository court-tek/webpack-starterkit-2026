import { h, text } from "hyperapp";
import { NewValue, AddTodo } from "../actions/index.js";

export default function TaskList(props) {
    const { name, value, texts, acronyms, numbers } = props;

    const doubles = numbers.map(function(num) {
        return h("li", {class: "colt_item"}, text(`${num * 2}`))
    })
    const caps = texts.map(function (t) {
        return h("li", {class: "colt__item"}, text(t.toUpperCase()))
    })
    const numDetail = numbers.map(function(n) {
        const obj = {value: n, isEven: n % 2 === 0}
        return h("li", {class: "colt__item"}, text(`${obj.value}, ${obj.isEven}`))
    })
    const abbrevs = acronyms.map(function(word) {
        const newAbbrev = word.toUpperCase().split('').join('.');
        return h("li", {}, text(newAbbrev))
    })
    return (
        h("div", {class: "todo"}, [
            h("h1", {class: "todo__header"}, text("to do list")),
            h("input", {class: "todo__text-input", type: "text", oninput: NewValue, value }),
            h("ul", {class: "todo__list"}, 
                h("li", {class: "todo__list-item"}, text(name))
            ),
            h("ul", {class: "colt"}, doubles),
            h("ul", {class: "colt"}, caps),
            h("ul", {class: "colt"}, numDetail),
            h("ul", {class: "colt"}, abbrevs),
            h("button", {class: "todo__submit-btn", onclick: AddTodo}, text("Add Task"))
        ])
    )
}