// Todo App actions
export const AddHashTag = (state) => ({
    ...state,
    value: "",
    annoyingHashTags: state.annoyingHashTags.add(state.value),
})

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
const DURATION = 15000;

export const Start = (state, event) => (
    state.mode === "stopped" 
    ? {
        ...state,
        mode: "running",
        startedTime: event.timeStamp,
        remainingTime: DURATION,
        duration: DURATION
    }
    : state
)

export const Pause = (state) => (
    state.mode === "running"
    ? {
        ...state,
        mode: "paused"
    }
    : state
)

export const Continue = (state, event) => (
    state.mode === "paused"
    ? {
        ...state,
        mode: "running",
        startedTime: event.timeStamp,
        duration: state.remainingTime
    }
    : state
)

export const Cancel = (state) => ({
    ...state,
    mode: "stopped"
})

function test(name) {
    return function(data) {
        return `${name} ${data}`
    }
}