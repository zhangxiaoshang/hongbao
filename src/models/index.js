import axios from 'axios'
// https://api.pinghongbao.com/pinghongbao/api/hb/gethongbaopage?type=1&pageindex=1'

const getPricingList = (params = {type: 1, pageindex: 1}, success) => {
  axios.get('/pinghongbao/api/hb/gethongbaopage', {
    params: params
  })
  .then(res => {
    success(res.data.info.list)
  })
  .catch(function (error) {
    console.log(error)
  })
}

export {
  getPricingList
}
