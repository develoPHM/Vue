import {onBeforeMount, ref} from "vue";

function useTodo() {
    const todoItems = ref([])

    function fetchTodos() {
        const result = []
        for (let i = 0; i < localStorage.length; i++) {
            const todoItem = localStorage.key(i);
            result.push(todoItem)
            // items.value.push(todoItem)
        }
        return result
    }

    function addTodoItem(todo) {
        todoItems.value.push(todo)
        localStorage.setItem(todo, todo)
    }

    onBeforeMount(() => {
        // 라이프 사이클 api 가 적용된 구간
        console.log('2 : onBeforeMount called')
        todoItems.value = fetchTodos();
    })
    return { todoItems, fetchTodos, addTodoItem }
}

export {useTodo}