<template>
  <div class="StoreTest">store testData :{{ storeData }}</div>
</template>

<script>
export default {
  name: 'StoreTest',
  computed: {
    storeData() {
      if (this.$store.getters.getTestData.length == 0) {
        this.$store.dispatch('asyncGetData')
      }
      return this.$store.state.testData
    }
  },

  methods: {
   click(){

   }
  },
  created() {
    // this.storeDataMethods('asyncGetData')
    // this.getStoreData()
  }
}
</script>
