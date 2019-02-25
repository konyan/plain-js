var template = `
	<div>
		<p v-if="!reviews.length">There are no reviews yet.</p>
		<ul>
			<li v-for="review in reviews"> 
				<p>Name: {{ review.name }}</p>
				<p>Review: {{ review.review }}</p>
				<p>Rating: {{ review.rating }}</p>
			</li>
		</ul>
	</div>
`;

export default {
	props: ['reviews'],

	template: template,
}