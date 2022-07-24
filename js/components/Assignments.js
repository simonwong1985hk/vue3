import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },

  template: `
    <section class="space-y-6">
      <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
      <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

      <form @submit.prevent="add">
        <div class="border border-gray-600 text-black">
          <input v-model="newAssignment" placeholder="New assignment..." class="p-2" />
          <button type="submit" class="bg-white p-2 border-l">Add</button>
        <div>
      </form>
    </section>
  `,

  data() {
    return {
      assignments: [
        { id: 1, title: "Assignment 1", completed: false },
        { id: 2, title: "Assignment 2", completed: false },
        { id: 3, title: "Assignment 3", completed: false },
      ],

      newAssignment: "",
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.completed
        ),
        completed: this.assignments.filter(
          (assignment) => assignment.completed
        ),
      };
    },
  },

  methods: {
    add() {
      this.assignments.push({
        id: this.assignments.length + 1,
        title: this.newAssignment,
        completed: false,
      });

      this.newAssignment = "";
    },
  },
};
