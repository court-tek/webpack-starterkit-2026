import { h, text } from "hyperapp";
import {  } from "../actions/index.js";
import { jsxify } from "../config/utilities.js";
const jsx = jsxify(h) /** @jsx jsx */

export default function nameHere({}) {
    return (
        <div className="template">
            <h1>This is a template.</h1>
        </div>  
    )
}