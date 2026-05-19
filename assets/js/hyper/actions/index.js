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

// State Machine Tutorial
export const Start = (state) => ({
    ...state,
    mode: state === "stopped" ? "running" : state
})

export const Pause = (state) => ({
    ...state,
    mode: state === "running" ? "paused" : state
})

export const Continue = (state) => ({
    ...state,
    mode: state === "paused" ? "running" : state
})

export const Cancel = (state) => ({
    ...state,
    mode: "stopped"
})

function test(name) {
    return function(data) {
        return `${name} ${data}`
    }
}