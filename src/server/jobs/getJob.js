const { EMA, CrossUp, CrossDown } = require('technicalindicators')
const router = require('express')()

const ema = (period, values) => {
  return EMA.calculate({period: period, values: values})
}

const crossUp = (lineA, lineB) =>{
  return CrossUp.calculate({ lineA: lineA, lineB: lineB})
}

const crossDown = (lineA, lineB) => {
  return CrossDown.calculate({lineA: lineA, lineB: lineB})
}

const addTimeArray = (rArray, dataArray, timeArray, p) => {
  return dataArray.forEach((item, i)=> rArray.push(dataArray[i], timeArray[i+p]))
}

const createArray = ()=>{

}

router.route('/').get((req, res)=>{

  let coinArray = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1, 2, 4, 5, 6, 7, 8, 9, 10, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1, 2, 4, 5, 6, 7, 8, 9, 10, 15, 1, 2, 4, 5, 6, 7, 8, 9, 10, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  let timeArray = ['2022-01-01T00:00:00Z','2022-01-01T00:01:00Z','2022-01-01T00:02:00Z','2022-01-01T00:03:00Z','2022-01-01T00:04:00Z'
    ,'2022-01-01T00:05:00Z','2022-01-01T00:06:00Z','2022-01-01T00:07:00Z','2022-01-01T00:08:00Z','2022-01-01T00:09:00Z'
    ,'2022-01-01T00:10:00Z','2022-01-01T00:11:00Z','2022-01-01T00:12:00Z','2022-01-01T00:130:00Z','2022-01-01T00:14:00Z'
    ,'2022-01-01T00:15:00Z','2022-01-01T00:16:00Z','2022-01-01T00:17:00Z','2022-01-01T00:18:00Z','2022-01-01T00:19:00Z'
    ,'2022-01-01T00:20:00Z','2022-01-01T00:21:00Z','2022-01-01T00:22:00Z','2022-01-01T00:23:00Z','2022-01-01T00:24:00Z',
    '2022-01-01T00:25:00Z','2022-01-01T00:26:00Z','2022-01-01T00:27:00Z','2022-01-01T00:28:00Z','2022-01-01T00:29:00Z',
    '2022-01-01T00:30:00Z','2022-01-01T00:31:00Z','2022-01-01T00:32:00Z','2022-01-01T00:33:00Z','2022-01-01T00:34:00Z',
    '2022-01-01T00:35:00Z','2022-01-01T00:36:00Z','2022-01-01T00:37:00Z','2022-01-01T00:38:00Z','2022-01-01T00:39:00Z',
    '2022-01-01T00:40:00Z','2022-01-01T00:41:00Z','2022-01-01T00:42:00Z','2022-01-01T00:43:00Z','2022-01-01T00:44:00Z',
    '2022-01-01T00:45:00Z','2022-01-01T00:46:00Z','2022-01-01T00:47:00Z','2022-01-01T00:48:00Z','2022-01-01T00:49:00Z',
    '2022-01-01T00:50:00Z','2022-01-01T00:51:00Z','2022-01-01T00:52:00Z','2022-01-01T00:53:00Z','2022-01-01T00:54:00Z',
    '2022-01-01T00:55:00Z','2022-01-01T00:56:00Z','2022-01-01T00:57:00Z','2022-01-01T00:58:00Z','2022-01-01T00:59:00Z',
    '2022-01-01T00:60:00Z','2022-01-01T00:61:00Z','2022-01-01T00:62:00Z','2022-01-01T00:63:00Z','2022-01-01T00:64:00Z',
    '2022-01-01T00:65:00Z','2022-01-01T00:66:00Z','2022-01-01T00:67:00Z','2022-01-01T00:68:00Z','2022-01-01T00:69:00Z',
  ]

  const emaP5 = ema(5, coinArray)

  const emaP10 = ema(10, coinArray)

  const emaP55 = ema(55, coinArray)

  const crossD55 = crossDown(emaP55, coinArray)

  const crossU55 = crossUp(emaP55, coinArray)

  const crossD = crossDown(emaP5, emaP10)

  const crossU = crossUp(emaP5, emaP10)

  const col = [ 'price', 'time', 'ema5', 'ema10']
  const dataArr = []
  coinArray.forEach((item,i)=> dataArr.push([coinArray[i+10], timeArray[i+10], emaP5[i+5], emaP10[i]]))
  // addTimeArray(dataArr, coinArray,timeArray, 0)

  const tableData = dataArr.map((d)=>{
    return d.reduce((tableData, field, i)=>{
      tableData[col[i]]= field
      return tableData
    },{})
  })

  const emaArr1 = []
  emaP5.forEach((item,i)=> emaArr1.push([emaP5[i], timeArray[i+5]]))

  const emaData = emaArr1.map((e)=>{
    return e.reduce((emaData, field, i)=>{
      emaData[col[i]] = field
      return emaData
    },{})
  })
  for(let i = 0; i < 5; i++){
    tableData.pop()
  }



  const emaArr2 = []
  emaP10.forEach((i)=> emaArr2.push([emaP10[i], timeArray[i+10]]))


  res.json({ tableData, emaData, crossD, crossU , crossD55, crossU55, emaData})
})

module.exports = router