const app = Vue.createApp({
    data() {
        return {
            newTask: "",
            tasks: [],
        };
    },
    methods: {
        addTask() {
            if (this.newTask.trim() !== "") {
                this.tasks.push({ text: this.newTask, completed: false });
                this.newTask = "";
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        clearCompletedTasks() {
            this.tasks = this.tasks.filter(task => !task.completed);
        },
    },
    computed: {
        completedTasks() {
            return this.tasks.filter(task => task.completed);
        },
    },
});

app.mount("#app");
