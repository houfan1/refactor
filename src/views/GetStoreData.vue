<template>
  <div class="GetStoreData">{{ storeData }}</div>
</template>

<script>
import { getStoreData } from '../until'
export default {
  name: 'GetStoreData',
  computed: {
    storeData() {
      getStoreData('getTestData', 'asyncGetData')
      // console.log(this.$store.getTestData)
      return this.$store.state.testData.filter((ele) => {
        return ele.value == '111'
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>