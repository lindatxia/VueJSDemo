// Define a new component called tickle-counter
Vue.component('tickle-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You tickled me {{ count }} times.</button>'
});

// Our main Vue instance
var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue World!', 
        cat_image: 'imgs/my_cat.jpg', 
        dog_image: 'imgs/other_dog.jpg', 
    }, 
});
