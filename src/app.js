import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Javascript Loaded")
    new Vue({
      el: "#app",
      data: {
        tasks: [
          {name: "Stop Global Warming", isHighPriority: true}, 
          {name: "Call mum", isHighPriority: false} 
        ],
        newTask: "",
        newPriority: true
      },
      methods: {
        saveNewTask:function(){
          this.tasks.push({
            name: this.newTask,
            isHighPriority: this.newPriority
          });
          this.newTask = "";
        },
        changePriority: function(index){
          if (this.tasks[index].isHighPriority === false) {
            this.tasks[index].isHighPriority = true;
          } else {
            this.tasks[index].isHighPriority = false;
          }
        }
      }
    });
  });