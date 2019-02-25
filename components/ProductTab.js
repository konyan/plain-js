var template = `
	<div>
		<span class="tab"
			  :class="{ 'active-tab': selectedTab == tab }"
			  v-for="(tab, index) in tabs"
			  :key="index"
			  @click="selectedTab = tab">{{ tab }}</span>

		<product-review :reviews="reviews" v-show="selectedTab == 'Reviews'"></product-review>

		<product-review-form v-show="selectedTab == 'Make a Review'"></product-review-form>
	</div>
`;

export default {
	props: ['reviews'],

	template: template,

	data() {
		return {
			tabs: ['Reviews', 'Make a Review'],
			selectedTab: 'Reviews',
		}
	}



}