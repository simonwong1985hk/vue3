import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },

  template: `
    <section class="space-y-6">
      <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
      <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

      <assignment-create @add="add"></assignment-create>
    </section>
  `,

  data() {
    return {
      assignments: [
        { id: 1, title: "Assignment 1", completed: false },
        { id: 2, title: "Assignment 2", completed: false },
        { id: 3, title: "Assignment 3", completed: false },
      ],
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
    add(title) {
      this.assignments.push({
        id: this.assignments.length + 1,
        title: title,
        completed: false,
      });
    },
  },
};
