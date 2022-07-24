export default {
  template: `
    <li>
        <label class="p-2 flex justify-between items-center">
        {{ assignment.title }}
        <input type="checkbox" v-model="assignment.completed" class="ml-4" />
        </label>
    </li>
  `,

  props: {
    assignment: Object,
  },
};
