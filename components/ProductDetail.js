export default {
	props: ['details'],

	mounted() {
		// console.log(this.details)
	},

	template: `
		<ul>
			<li v-for="detial in details">{{ detial }}</li>
		</ul>
	`,


}