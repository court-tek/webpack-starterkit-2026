import { h, text } from "hyperapp";
// import {  } from "../actions/index.js";

export default function Welcome({title}) {
    return (
        h("div", {id: "app"}, [
            h("div", {class: "welcome"}, [
                h("h1", {class: "welcome__header"}, text(`${title}`)),
                h("a", {class: "welcome__link", target: "new", href: "https://github.com/court-tek/webpack-starterkit-2026"}, text("by courtneyPhase.com"))
            ]),
        ])
    )
}
