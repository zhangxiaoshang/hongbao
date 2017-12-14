<template>
  <div id="pricing-list">
    <div class="pure-g">
      <div class="pure-u-1 pure-u-md-1-3 item" v-for="pricing in pricingList">
        <div class="content" :class="{ 'blue-border': type === 1, 'orange-border': type === 2}">
          <div class="topbar">
            <span class="shop" :class="{ 'shop-ele': type === 1, 'shop-meituan': type === 2}">
              <img src="/src/assets/eleme.png" alt="ele" v-if="type === 1">
              <img src="/src/assets/meituan.png" alt="ele" v-else>
              {{pricing.typename}}
            </span>
            <div class="abstract">
              <span class="no">No. {{pricing.no}}</span>
              <span class="contributor">贡献者:{{pricing.contributor}}</span>
            </div>
          </div>
          <div class="body">
            <p>{{pricing.title}} <img src="/src/assets/clock.png" alt="time">{{pricing.createtime}}</p>
          </div>
          <div class="bottom">
            <button class="pure-button" :class="{ 'button-secondary': type === 1, 'button-orange': type === 2 }" v-on:click="open(pricing.url)">已有{{pricing.offer}}位小伙伴从这里领取红包</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 上一页 下一页 -->
    <div class="pagination">
      <button class="pure-button" @click="lastPage">上一页</button>
      <button class="pure-button" @click="nextPage">下一页</button>
    </div>
  </div>
</template>

<script>
import {getPricingList} from '@/models/index'
import {Bus} from '@/store/Bus'

export default {
  name: 'PricingList',
  data () {
    return {
      type: 1,
      currentPage: 1,
      pricingList: []
    }
  },
  created () {
    this.initPricingList()

    Bus.$on('type-selected', type => {
      this.type = type

      this.initPricingList(this.type)
    })
  },

  computed: {
  },

  methods: {
    initPricingList (type = 1, pageindex = 1) {
      getPricingList({type: type, pageindex: pageindex}, (list) => {
        this.pricingList = list
      })
    },

    lastPage () {
      if (this.currentPage <= 1) {
        return
      }

      getPricingList({type: 1, pageindex: --this.currentPage}, (list) => {
        this.pricingList = list
      })
    },

    nextPage () {
      getPricingList({type: 1, pageindex: ++this.currentPage}, (list) => {
        this.pricingList = list
      })
    },

    open (url) {
      console.log('open')
      window.open('https://h5.ele.me/hongbao/#from=singlemessage#hardware_id=&is_lucky_group=True&lucky_number=6&track_id=&platform=0&sn=29dcbd64b01d0822&theme_id=1809&device_id=')
    }
  }
}
</script>

<style lang="less">
  #pricing-list {
    .pure-g {
      .item {
        display: flex;
        flex-direction: column;

        >.content {
          margin: 10px 25px;
          border: 1px solid #ddd;

          &.blue-border {
            border-top: 2px solid #288bdd;
          }

          &.orange-border {
            border-top: 2px solid #ffad29;
          }
        }

        .topbar {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin: 10px 5%;

          .shop {
            font-size: 1.4rem;
            font-weight: bold;

            &.shop-ele {
              color: #1e87f0;
            }

            &.shop-meituan {
              color: #ffad29;
            }

            img {
              margin: 0 .5rem;
              vertical-align: middle;
            }
          }

          .abstract {
            display: flex;
            flex-direction: column;
          }
        }

        .body {
          height: 5rem;
          border-top: 1px solid #efefef;
          border-bottom: 1px solid #efefef;

          p {

            img {
              margin: 0 .5rem;
              vertical-align: middle;
            }
          }
        }

        .bottom {
          .pure-button {
            margin: 10px auto;
            padding: .5rem 2rem;
            font-size: 1.4rem;
            font-weight: bold;
            color: white;
            border-radius: 4px;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);

            &.button-secondary {
              background: #269ef4;
            }

            &.button-orange {
              background: #ffad29;
            }
          }

        }
      }
    }

    .pagination {
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      .pure-button {
        margin: 10px auto;
        padding: .5rem 2rem;
        font-size: 1.4rem;
        font-weight: bold;
        color: white;
        border-radius: 4px;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
        background: #1e87f0;
      }
    }
  }
</style>
