import { h, text } from "hyperapp";
import {  } from "../actions/index.js";
import { jsxify } from "../config/utilities.js";
const jsx = jsxify(h) /** @jsx jsx */

export default function TaskManager(state) {
    return (
        <div className="template">
            <h1>Task Manager App Page.</h1>
        </div>  
    )
}