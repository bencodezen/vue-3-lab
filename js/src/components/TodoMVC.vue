<script>
export default {
  data() {
    return {
      taskList: [],
      userInput: ''
    }
  },
  methods: {
    addTask(event) {
      if (event.key === 'Enter') {
        this.taskList.push({
          description: this.userInput,
          complete: false
        })
        this.userInput = ''
      }
    }
  }
}
</script>

<template>
  <h1>TodoMVC</h1>
  <input
    type="text"
    placeholder="Enter task"
    v-model="userInput"
    @keyup="addTask"
  />
  <p>X items left</p>
  {{ taskList }}
  <h2>All Tasks</h2>
  <ul class="task-list">
    <li v-for="(task, index) in taskList" :key="`task-${index}`">
      <input type="checkbox" v-model="task.complete" />{{ task.description }}
    </li>
  </ul>
  <h2>Active Tasks</h2>
  <h2>Completed Tasks</h2>
  <button>Clear all tasks</button>
</template>

<style>
input[type='text'] {
  padding: 1.5rem;
  font-size: 1.5rem;
  width: 50%;
}

.task-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.task-list li {
  list-style: none;
  width: 200px;
  text-align: left;
}
</style>
