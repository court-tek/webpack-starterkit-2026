import { h, text } from "hyperapp";
import {  } from "../actions/index.js";
import { jsxify } from "../config/utilities.js";
const jsx = jsxify(h) /** @jsx jsx */

export default function BillsManager(state) {
    return (
        <div className="template">
            <h1>Bill Manager Page Template.</h1>
            <p>coming soon.</p>
        </div>  
    )
}