<template>
  <div>
    <!-- 顶部菜单 组建 -->
    <navbar></navbar>
    <!-- 红包列表 组建 -->
    <pricing-list></pricing-list>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import PricingList from './component/PricingList'

export default {
  name: 'Index',
  data () {
    return {
      msg: 'Index'
    }
  },
  components: {
    Navbar,
    PricingList
  }
}
</script>
