export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('bind-once', {
    created (el, binding) {
        el.setAttribute(binding.arg, binding.value)
    },
    getSSRProps (binding) {
        if (binding.arg && binding.value)
            return { [binding.arg]: binding.value }

        return {}
    },
  })
})
