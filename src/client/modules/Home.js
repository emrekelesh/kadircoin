import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios'

const Home = () => {
  const [currentData, setTimeData] = useState()
  const [ema, setEma] = useState()
  const [crossD, setCrossD] = useState()
  const [crossUp, setCrossUp] = useState()
  const [crossD55 , setCrossD55] = useState()
  const [crossUp55, setCrossUp55]= useState()
  const [ema5, setEma5]= useState()

  useEffect(()=>{
    if(!currentData){
      axios.get('/api/coin').then((res)=>{
        // const values = res.data.tableData
        const values = res.data
        setTimeData(values)
      })
    }
    if(!ema){
      axios.get('/api/coin').then((res)=>{
        const values = res.data.emaData
        setEma(values)
      })
    }
    if(!crossD){
     axios.get('/api/coin').then((res)=>{
       const values = res.data.crossD
       setCrossD(values)
     })
    }
    if(!crossUp){
      axios.get('/api/coin').then((res)=>{
        const values = res.data.crossU
        setCrossUp(values)
      })
    }
    if(!crossD55){
      axios.get('/api/coin').then((res)=>{
        const values = res.data.crossD55
        setCrossD55(values)
      })
    }
    if(!crossUp55){
      axios.get('/api/coin').then((res)=>{
          const values = res.data.crossU55
          setCrossUp55(values)
      })
    }
    if(!ema5){
      axios.get('/api/coin').then((res)=>{
        const values = res.data.emaData
        setEma5(values)
      })
    }
  },[])

if(!currentData)
  return <div>loading</div>
console.log(currentData)
// console.log(crossUp)

  const crossIndex = (crossArr) =>{
    const crossIn = cross => cross == true
    const index = crossArr.findIndex(crossIn)
    return index
  }
// if(!crossUp)
//   return <div>loading</div>
//   const crossUpIndex = crossIndex(crossUp)
// console.log(crossIndex(crossUp))

const priceIndex = (indexCr) =>{
  const price = currentData[indexCr]
  return price
}
// console.log(priceIndex(crossUpIndex))

  return(
      <div>
        {/*<div>*/}
        {/*  <LineChart data={currentData} width={730} height={250} margin={{ top: 5, right: 20, bottom: 5 , left: 0 }}>*/}
        {/*    <XAxis dataKey="time" angle="90" textAnchor="true" domain={['auto', 'auto']}/>*/}
        {/*    <YAxis/>*/}
        {/*    <Tooltip/>*/}
        {/*    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>*/}
        {/*    <Line type="monotone"  dataKey="price" stroke="red" />*/}
        {/*    <Line type="monotone" dataKey="ema5"   stroke="#82ca9d"/>*/}
        {/*    <Line type="monotone" dataKey="ema10" stroke="#8884d8"/>*/}
        {/*  </LineChart>*/}
        {/*</div>*/}
Hop
      </div>
    )
}
export default Home









