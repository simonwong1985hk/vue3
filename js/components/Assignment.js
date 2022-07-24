export default {
  template: `
    <li>
        <label>
        {{ assignment.title }}
        <input type="checkbox" v-model="assignment.completed" />
        </label>
    </li>
  `,

  props: {
    assignment: Object,
  },
};
