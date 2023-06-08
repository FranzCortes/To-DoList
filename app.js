const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "To-Do list",
      toDoList: [],
      newItems: "",
      result: [],
      queryItem: "",
    };

  },

  methods: {
    addListItem() {
      if (this.newItems.trim() !== "") {
        this.toDoList.unshift(this.newItems);
        this.newItems = "";
      }
    },

    serchItem() {
        this.result = this.toDoList.filter(item => item.includes(this.queryItem));
    },



    deleteItem(index) {
        this.toDoList.splice(index, 1);
    },

    deleteFull() {
        this.toDoList.splice(this.toDoList);
    },
  }
}).mount("#app");
