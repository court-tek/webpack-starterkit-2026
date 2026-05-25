import { h, text } from "hyperapp";
import { Home, Tutorial, Grid, TaskManager, BillsManager } from "../actions/index.js";
import { jsxify } from "../config/utilities.js";
const jsx = jsxify(h) /** @jsx jsx */

export default function Header(state) {
    const { menu } = state.data;

    const siteNav = menu.map((element) => {
        return <li className="menu__item" onclick={element.func}>{element.page}</li>
    })
    return (
        <ul className="menu">
            <li className="menu__item" onclick={Home}>home</li>
            <li className="menu__item" onclick={Tutorial}>hyperapp tutorial</li>
            <li className="menu__item" onclick={Grid}>css grid</li>
            <li className="menu__item" onclick={TaskManager}>task manager</li>
            <li className="menu__item" onclick={BillsManager}>bills manager</li>
        </ul>  
    )
}