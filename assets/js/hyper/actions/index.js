// Todo App actions


export const AddTodo = (state) => ({
    ...state,
    value: "",
    todos: state.todos.concat(state.value),
})

export const NewValue = (state, event) => ({
    ...state,
    value: event.target.value,
})

// Routing system actions
export const changeLocation = (state) => ({
    ...state,
    location: state.location
})

export const Home = (state) => (
    state.mode != "home" 
    ? {
        ...state,
        location: "home",
    }
    : state
)

export const Tutorial = (state) => (
    state.mode != "hyperapp tutorial" 
    ? {
        ...state,
        location: "hyperapp tutorial",
    }
    : state
)

export const Grid = (state) => (
    state.mode != "css grid" 
    ? {
        ...state,
        location: "css grid",
    }
    : state
)

export const TaskManager = (state) => (
    state.mode != "task manager" 
    ? {
        ...state,
        location: "task manager",
    }
    : state
)

export const BillsManager = (state) => (
    state.mode != "bills manager" 
    ? {
        ...state,
        location: "bills manager",
    }
    : state
)

// Miscellaneous actions donde eatan
export const AddHashTag = (state) => ({
    ...state,
    value: "",
    annoyingHashTags: state.annoyingHashTags.add(state.value),
})

function test(name) {
    return function(data) {
        return `${name} ${data}`
    }
}