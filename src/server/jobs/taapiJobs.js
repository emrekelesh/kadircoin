const axios = require('axios')
const router = require('express')()
const cron = require('node-cron')
const { CrossUp, CrossOver, CrossDown } = require('technicalindicators')

const {TaapiSecret, TaapiKadirSecret, ApiKeyTD} = require('../../../key')

router.route('/').get(async (req, res)=>{
  // cron.schedule('0 * * * *', async ()=>{

  //Axios requests
  const emaRequest = axios.get('https://api.taapi.io/ema',{
    params:{
      secret: TaapiSecret,
      exchange: "binance",
      symbol: "BTC/USDT",
      interval: "1h",
      period: 55,
      backtracks: "10"
    }
  })

  const candlesRequest = axios.get('https://api.taapi.io/candles',{
    params:{
      secret: TaapiSecret,
      exchange: "binance",
      symbol: "BTC/USDT",
      interval: "1h",
      backtrack: 10
    }
  })

  axios.all([emaRequest])
    .then(axios.spread((...response)=>{
    const loadEmaData = response[0]
    // const loadCandlesData = response[1]

      //Spared to Arrays
      const emaArr = loadEmaData.data.map(({value})=>{return value})
      const candlesLowArr = loadCandlesData.data.map(({low})=>{return low})
      const candlesHighArr = loadCandlesData.data.map(({high})=>{return high})
      const serverTime = loadCandlesData.data.map(({timestampHuman})=>{return timestampHuman})

      //cross Down ema
      const crossDownlow = CrossDown.calculate({lineA: emaArr, lineB: candlesLowArr})
      const crossDownHigh = CrossDown.calculate({lineA: emaArr, lineB: candlesHighArr})

      //cross Up ema
      const crossUplow = CrossUp.calculate({line: emaArr, lineB: candlesLowArr})
      const crossUpHigh = CrossUp.calculate({line: emaArr, lineB: candlesHighArr})

      //Find Index
      const crossDownIndex = crossDown => {
        const crossIn = cross => cross == true
        const index = crossDown.findIndex(crossIn)
        return index
      }

      //Chart object
      const rangeArray = candlesLowArr.forEach((item, i)=> rangeArray.push([[candlesLowArr[i], candlesHighArr[i]]]))
      const chartArray = serverTime.forEach((item, i)=> chartArray.push([serverTime[i], rangeArray[i]]))
      const col = ['time', 'candleArea', 'ema']
      const chartData = chartArray.map((d)=>{
        return d.reduce((chartData, field, i)=>{
          chartData[col[i]]= field
          return chartData
        },{})
      })

      //Cross Down prices
      const crossDownPrice1 = candlesHighArr[crossDownIndex(crossDownHigh)]
      const crossDownPrice2 = candlesLowArr[crossDownIndex(crossDownlow)]

      //Cross Up Price
      const crossUpPrice1 = candlesHighArr[crossDownIndex(crossUpHigh)]
      const crossUpPrice2 = candlesLowArr[crossDownIndex(crossUplow)]
      // { crossDownPrice1, crossDownPrice2, crossUpPrice1, crossUpPrice2 }
      res.json( chartData )
  })).catch(err=>{
    console.log(err.response)
  })

  // })
})

module.exports = router