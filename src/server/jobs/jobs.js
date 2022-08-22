const axios = require('axios')
const cron = require('node-cron')
const { EMA, CrossUp, CrossOver, CrossDown } = require('technicalindicators')

const {apiKeyNomic} = require('../../../key')

const ema = (period, values) => {
  return EMA.calculate({period: period, values: values})
}

const crossUp = (lineA, lineB) =>{
  return CrossUp.calculate({ lineA: lineA, lineB: lineB})
}

const crossDown = (lineA, lineB) => {
  return CrossDown.calculate({lineA: lineA, lineB: lineB})
}



function coinGrafik(){

  let coinArray = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1, 2, 4, 5, 6, 7, 8, 9, 10]
  let timeArray = ['2022-01-01T00:00:00Z','2022-01-01T00:01:00Z','2022-01-01T00:02:00Z','2022-01-01T00:03:00Z','2022-01-01T00:04:00Z'
    ,'2022-01-01T00:05:00Z','2022-01-01T00:06:00Z','2022-01-01T00:07:00Z','2022-01-01T00:08:00Z','2022-01-01T00:09:00Z'
    ,'2022-01-01T00:10:00Z','2022-01-01T00:11:00Z','2022-01-01T00:12:00Z','2022-01-01T00:130:00Z','2022-01-01T00:14:00Z'
    ,'2022-01-01T00:15:00Z','2022-01-01T00:16:00Z','2022-01-01T00:17:00Z','2022-01-01T00:18:00Z','2022-01-01T00:19:00Z'
    ,'2022-01-01T00:20:00Z','2022-01-01T00:21:00Z','2022-01-01T00:22:00Z','2022-01-01T00:23:00Z','2022-01-01T00:24:00Z'
  ]

  // cron.schedule('0 * * * *', ()=>{
  //   axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${apiKeyNomic}&ids=BTC,ETH,XRP&interval=1h,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1`)
  //     .then(response => {
  //       const coin = {
  //         cryptoCoin: response.data[0].name,
  //         time: response.data[0].price_timestamp,
  //         price: response.data[0].price,
  //         volume: response.data["1h"].volume
  //       }
  //       coinPriceArray.push(coin.price)
  //
  //       const emaP5 = ema(5, coinPriceArray)
  //       const emaP10 = ema(10, coinPriceArray)
  //
  //       crossDown(coinArray, emaP5)
  //
  //     }).catch(err => console.log(err))
  // }, (err) => {console.log(err)})

  const emaP5 = ema(5, coinArray)

  const emaP10 = ema(10, coinArray)

  const cross = crossDown(emaP5, emaP10)
  

  const dataArr = []
  coinArray.forEach((i, x)=> dataArr.push([coinArray[i], timeArray[i]]))
  // console.log(dataArr)

  const col = [ 'price', 'time']
  const data = dataArr.map((d)=>{
    return d.reduce((data, field, i)=>{
      data[col[i]]= field
      return data
    },{})
  })

console.log(cross)
  return (data)
}

module.exports = {
  coinGrafik
}























