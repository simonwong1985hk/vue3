import { defineStore } from "pinia";

export let useCounterStore = defineStore("counter", {
  // data
  state() {
    return {
      count: 0,
    };
  },

  // methods
  actions: {
    increment() {
      if (this.count < 10) {
        this.count++;
      }
    },
  },

  // computed
  getters: {
    remaining() {
      return 10 - this.count;
    },
  },
});
