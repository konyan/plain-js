var template = `
<div>
	<form class="review-form" @submit.prevent="submitForm">
		<p v-if="errors.length">
			<b>Please correct the following errors.</b>
			<ul>
				<li v-for="error in errors" class="t-danger">{{ error }}</li>
			</ul>
		</p>
		<p>
			<label for="name">Name:</label> <br>
			<input type="text" v-model="name" />
		</p>

		<p>
			<label for="review">Review:</label> <br>
			<textarea id="raview" v-model="review"></textarea>
		</p>

		<p>
			<label for="rating">Rating:</label>
			<select id="rating" v-model.number="rating">
				<option>5</option>
				<option>4</option>
				<option>3</option>
				<option>2</option>
				<option>1</option>
			</select>
		</p>

		<p>
			<input type="submit">
		</p>
	</form>
</div>
`;

export default {
	template: template,

	data() {
		return {
			name: null,
			review: null,
			rating: null,
			errors: []
		}
	},

	methods: {
		submitForm() {
			if (this.name && this.review && this.rating) {
				let productReview = {
					name: this.name,
					review: this.review,
					rating: this.rating
				};

				eventBus.$emit('review-submitted', productReview)

				this.name = null
				this.review = null
				this.rating = null
			} else {
				if (!this.name) this.errors.push('Name required.')
				if (!this.review) this.errors.push('Review required.')
				if (!this.rating) this.errors.push('Rating required.')
			}
		}
	}
}