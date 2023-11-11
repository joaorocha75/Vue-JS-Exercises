<template>
    <div>
    <h1>Lista de Tarefas</h1>
    <TaskForm @addTask="addTask" />
    <TaskList :tasks="tasks" @completeTask="completeTask" />
    <button @click="deleteAllTasks">Apagar todas as tarefas</button>
    <button @click="deleteCompletedTasks">Apagar tarefas concluídas</button>
    <button @click="sortTasks">Ordenar tarefas</button>
    </div>
</template>

<script>
import TaskForm from './TaskForm.vue'
import TaskList from './TaskList.vue'

    export default {
        components: {
            TaskForm,
            TaskList,
        },
        data() {
            return {
                tasks: [],
            }
        },
        methods: {
            addTask(newTask) {
                if(this.tasks.find(
                    task => task.text === newTask.text
                )) {
                    alert('A tarefa já existe!')
                } else {
                    this.tasks.push(newTask)
                    localStorage.setItem('tasks', JSON.stringify(this.tasks))
                }
            },
            completeTask(index) {
                if (this.tasks[index].completed) {
                    alert(`Task ${this.tasks[index].text} completed with success!` )  
                } else {
                    alert(`Task ${this.tasks[index].text} was not completed!` )  
                }
                localStorage.setItem('tasks', JSON.stringify(this.tasks))
            },
            deleteAllTasks() {
                this.tasks = []
                localStorage.setItem('tasks', JSON.stringify(this.tasks))
            },
            deleteCompletedTasks() {
                this.tasks = this.tasks.filter(task => !task.completed)
                localStorage.setItem('tasks', JSON.stringify(this.tasks))
            },
            sortTasks() {
                this.tasks.sort((a, b) => {
                    if (a.text > b.text) {
                        return 1
                    } else if (a.text < b.text) {
                        return -1
                    } else {
                        return 0
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>