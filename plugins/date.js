import Vue from 'vue'

Vue.filter('date', function(value) {
  return new Date(value).toLocaleDateString() 
});
