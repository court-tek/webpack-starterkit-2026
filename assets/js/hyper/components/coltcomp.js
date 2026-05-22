import { h, text } from "hyperapp";
import { jsxify } from "../config/utilities.js";
const jsx = jsxify(h) /** @jsx jsx */
// import {  } from "../actions/index.js";

export default function ColtComponent(state) {
    const { movies, reviews } = state.data;
    const movieSearch = movies.find(function(movie) {
        return movie.includes("Mrs")
    })

    const cenimaSearch = movies.find(function(param) {
        return param.indexOf("Kill") === 0
    })

    const getStats = (arr) => {
        const max = Math.max(...arr);
        const sum = arr.reduce((sum, r) => sum + r);
        return {
            max: max,
            sum: sum
        }
    
    }
    const stats = getStats(reviews);
    return (
        <div>
            <div>
                {cenimaSearch}
            </div>
        </div>
    )
}