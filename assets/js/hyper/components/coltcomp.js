import { h, text } from "hyperapp";
import { jsxify } from "../config/utilities.js";
const jsx = jsxify(h) /** @jsx jsx */
// import {  } from "../actions/index.js";

export default function ColtComponent(state) {
    const { movies } = state.data;
    const movieSearch = movies.find(function(movie) {
        return movie.includes("Mrs")
    })

    const cenimaSearch = movies.find(function(param) {
        return param.indexOf("Kill") === 0
    })

    
    return (
        <div>
            <div>
                {movieSearch}
            </div>
            <div>
                {cenimaSearch}
            </div>
        </div>
    )
}