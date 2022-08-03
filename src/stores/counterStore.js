import { reactive } from "vue";

export let counter = reactive({
  // state = data
  count: 0,

  // action = method
  increment() {
    if (this.count < 10) {
      this.count++;
    }
  },
});
