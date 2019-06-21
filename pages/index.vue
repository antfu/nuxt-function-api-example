<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-function-api-example
      </h1>
      <h2 class="subtitle">
        Count is {{ count }} and computed is {{ plusOne }}
      </h2>
      <div class="links">
        <span
          class="button--green"
          @click="()=> count += 1"
        >Count</span>
        <a
          href="https://github.com/antfu/nuxt-function-api-example"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { value, computed, watch, onMounted } from 'vue-function-api'

export default {
  components: { Logo },
  setup() {
    // reactive state
    const count = value(0)
    // computed state
    const plusOne = computed(() => count.value + 1)
    // method
    const increment = () => {
      count.value++
    }
    // watch
    watch(
      () => count.value * 2,
      (val) => {
        console.log(`count * 2 is ${val}`)
      }
    )
    // lifecycle
    onMounted(() => {
      console.log(`mounted`)
    })
    // expose bindings on render context
    return {
      count,
      plusOne,
      increment
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
