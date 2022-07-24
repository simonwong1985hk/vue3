export default {
    template: `
        <section v-show="inProgressAssignments.length">
            <h2 class="font-semibold mb-2">In Progress</h2>
            <ul>
            <li v-for="assignment in inProgressAssignments" :key="assignment.id">
                <label>
                {{ assignment.title }}
                <input type="checkbox" v-model="assignment.completed" />
                </label>
            </li>
            </ul>
        </section>

        <section v-show="completedAssignments.length" class="mt-8">
            <h2 class="font-semibold mb-2">Completed</h2>
            <ul>
            <li v-for="assignment in completedAssignments" :key="assignment.id">
                <label>
                {{ assignment.title }}
                <input type="checkbox" v-model="assignment.completed" />
                </label>
            </li>
            </ul>
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
        inProgressAssignments() {
        return this.assignments.filter((assignment) => !assignment.completed);
        },

        completedAssignments() {
        return this.assignments.filter((assignment) => assignment.completed);
        },
    },
}
