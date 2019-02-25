var template = `
	<div class="product">
		<div class="product-image">
			<img :src="image" alt="" width="200" height="250">
		</div>
	
		<div class="product-info">
			<h1>{{ title }}</h1>
			<p v-if="inStock">In Stock</p>
			<p v-else :class="{'t-line-through': !inStock }">Out of Stock</p>

			<div>
				<span class="tab"
					  :class="{ 'active-tab': selectedTab == tab }"
					  v-for="(tab, index) in tabs"
					  @click="selectedTab = tab"
					  v-text="tab"></span>

				<p v-show="selectedTab == 'Shipping'">Shipping: {{ shipping }}</p>
				
				<product-detail :details="details" v-show="selectedTab == 'Details'"></product-detail>
			</div>

			<div v-for="(variant, index) in variants" 
				 :key="variant.id"
				 class="color-box"
				 :style="{backgroundColor: variant.color}"
				 @mouseover="changeProduct(index)">
			</div>
			
			<button @click="addToCart" 
					:disabled="!inStock"
					:class="{'disabled-btn': !inStock}">Add to Cart</button>

			<button @click="removeCart"
					:disabled="!cart"
					:class="{'disabled-btn': !cart}">Remove Cart</button>

		</div>
		
		<product-tab :reviews="reviews"></product-tab>

	</div>		
`;

import ProductDetail from './ProductDetail.js';

export default {
	props: {
		premium: {
			type: Boolean,
			required: true
		},
		cart: {}
	},

	template : template,
	components: { ProductDetail },

	mounted() {
		eventBus.$on('review-submitted', productReview => {
			this.reviews.push(productReview);
		})
	},

	data() {
		return {
			brand: 'Vue Mastery',
			product: 'Liminho',
			selectedVariant: 0,
			details: ['height - 180cm', 'White', 'Clothes Black'],
			variants: [
				{
					id: 220,
					image: './assets/liminho1.jpg',
					color: 'black',
					qty: 10
				},
				{
					id: 232,
					image: './assets/liminho2.jpg',
					color: 'gray',
					qty: 3
				}
			],
			reviews: [],
			tabs: ['Shipping', 'Details'],
			selectedTab: 'Shipping'
		}
	},

	computed: {
		title() {
			return `${this.brand} ${this.product}`
		},
		image() {
			return this.variants[this.selectedVariant].image
		},
		variantId() {
			return this.variants[this.selectedVariant].id
		},
		inStock() {
			return this.variants[this.selectedVariant].qty
		},
		shipping() {
			return this.premium ? 'Free' : 2.99
		}
	},

	methods: {
		addToCart() {
			this.$emit('add-to-cart', this.variantId)
		},

		removeCart() {
			this.$emit('remove-cart', this.variantId)
		},

		changeProduct(index) {
			this.selectedVariant = index
		}
		
	}

}