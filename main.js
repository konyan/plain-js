import Product from "./components/Product.js";
import ProductReviewForm from "./components/ProductReviewForm.js";
import ProductReview from "./components/ProductReview.js";
import ProductTab from "./components/ProductTab.js";

Vue.component("product", Product);
Vue.component("product-review-form", ProductReviewForm);
Vue.component("product-review", ProductReview);
Vue.component("product-tab", ProductTab);

import * as Bridge  from "./js/bridge.js";

window.eventBus = new Vue();

const app = new Vue({
  el: "#app",
  data: {
    premium: true,
    cart: []
  },

  methods: {
    updateCart(id) {
	  this.cart.push(id);
	  Bridge.phoneCall('HEE');
    },

    deleteCart(id) {
      let index = this.cart.indexOf(id);

      if (index != -1) {
        this.cart.splice(index, 1);
      }
    }
  }

  // watch: {
  // 	cart(value) {
  // 		if (value < 0) {
  // 			var vm = this;
  // 			setTimeout(function () {
  // 				vm.cart = 0
  // 			}, 2000)
  // 		}
  // 	}
  // },
});
