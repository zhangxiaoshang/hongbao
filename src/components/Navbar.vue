<template>
  <div id="navbar">
    <div class="pure-menu pure-menu-horizontal">
      <a href="#" class="pure-menu-heading pure-menu-link">logo</a>
      <ul class="pure-menu-list">
        <li class="pure-menu-item"><a href="#" class="pure-menu-link" :class="{ active: type === 1 }" @click="changeType(1)">饿了么</a></li>
        <li class="pure-menu-item"><a href="#" class="pure-menu-link" :class="{ active: type === 2 }" @click="changeType(2)">美团</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {Bus} from '@/store/Bus'

export default {
  name: 'Navbar',
  data () {
    return {
      type: 1
    }
  },

  created () {
  },

  methods: {
    changeType (type) {
      this.type = type
      Bus.$emit('type-selected', this.type)
    }
  }
}
</script>

<style lang="less">
#navbar {
  .pure-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 5rem;
    line-height: 4rem;
    background: linear-gradient(to left,#28a5f5,#1e87f0);

    a {
      color: #fff;
    }

    >.pure-menu-heading,
    >.pure-menu-list {
      margin: 0 2rem;

      .pure-menu-link {
        position: relative;
        &:hover {
          background: transparent;
        }

        &.active:after {
          content: '';
          display: block;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 5px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #fff;
        }
      }
    }
  }
}
</style>

