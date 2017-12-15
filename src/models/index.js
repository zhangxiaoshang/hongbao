import axios from 'axios'
// https://api.pinghongbao.com/pinghongbao/api/hb/gethongbaopage?type=1&pageindex=1'

const getPricingList = (params = {type: 1, pageindex: 1}, success) => {
  // axios.get('/pinghongbao/api/hb/gethongbaopage', {
  // axios.get('/src/mocks/pricinglist.json', {
  axios.get('/hongbaos', {
    params: params
  })
  .then(res => {
    console.log(res.data)
    success(res.data)
  })
  .catch(function (error) {
    console.log(error)
  })
}

export {
  getPricingList
}
