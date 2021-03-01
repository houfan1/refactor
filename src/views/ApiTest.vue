<template>
  <div>打到{{ name }}</div>
</template>

<script>
import { getUser } from '../http/api'
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    getUser() {
     getUser().then((res) => {
        console.log(res)
        this.name = res.name
      })
    }
  },
  created() {
    this.getUser()
  }
}
</script>

<style>
</style>