import { h, text } from "hyperapp";
import { jsxify } from "../config/utilities.js";
const jsx = jsxify(h) /** @jsx jsx */
// import {  } from "../actions/index.js";

export default function Welcome(state) {
    const { title, myName } = state.data;
    return (
        <div className="app">
            <div className="welcome">
                <h1 className="welcome__header">{title}</h1>
                <a href="https://github.com/court-tek/webpack-starterkit-2026" className="welcome__link welcome__link--hover" target="new">by {myName}</a>
            </div>
        </div>
    )
}
