import { h, text } from "hyperapp";
import {  } from "../actions/index.js";
import { jsxify } from "../config/utilities.js";
const jsx = jsxify(h) /** @jsx jsx */

export default function ColtGrid(state) {
    const { colors } = state.data;
    const colours = colors.map((hue) => {
        return <div className="grid__box" style={{backgroundColor: `${hue}`}} index={hue}>{hue}</div>
    })
    return (
        <div className="steel-grid">
            <h1>Mastering Css Grid</h1>
            <div className="grid">
                {colours}
            </div>
        </div>  
    )
}