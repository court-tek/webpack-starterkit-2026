import { h, text } from "hyperapp";
import { Start, Cancel, Continue, Pause } from "../actions/index.js";

export default function Timer(props) {
    const {  mode, remainingTime } = props;
    return (
        h("div", {class: "machine"}, [
            h("div", {class: "machine__button-container"}, [
                mode === "stopped"
                ? h("button", {class: "machine__start-btn", onclick: Start}, text("start"))
                : h("button", {class: "machine__cancel-btn", onclick: Cancel}, text("cancel")),
                
                mode === "paused"
                ? h("button", {class: "machine__continue-btn", onclick: Continue}, text("continue"))
                : h("button", {class: "machine__paused-btn", onclick: Pause}, text("pause")),
            ]),
            remainingTime && h("p", {}, text(`Remaining: ${remainingTime}ms`)),
            h("div", {class: "machine__mode"}, [text(`Current state: ${mode}`)]),
        ])
    )
}