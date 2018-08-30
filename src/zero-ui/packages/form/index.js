import form from './src/form.vue'

/* istanbul ignore next */
form.install = function (Vue) {
  Vue.component(form.name, form)
}

export default form
