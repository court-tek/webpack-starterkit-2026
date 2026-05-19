function test(name) {
    return function(data) {
        return `${name} ${data}`
    }
}

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

// export default aSentence = test('courtney');

