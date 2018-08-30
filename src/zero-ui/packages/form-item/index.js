import formItem from '../form/src/form-item'

/* istanbul ignore next */
formItem.install = function (Vue) {
  Vue.component(formItem.name, formItem)
}

export default formItem
