import React, { useState } from 'react'
import './MainPanel.css'
import Card from '../Card/Card'
import Co2Icon from '@mui/icons-material/Co2';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import Table from '../Table/Table';
const MainPanel = (props) => {
  const userData=props.data
  let totalCarbonFootPrint_grams=0;
  let totalCarbonFootPrint_renewable=0;
  let todayCarbonFootPrint=0;
  let totalEnergyRelease=0;
  const tabCarbonInfo=props.data.TabCarbonInfo;
  const Todaydate = new Date();
  let recentVisit=[]
  // console.log(Todaydate.getMonth());
  if(tabCarbonInfo!=undefined){
    // console.log(tabCarbonInfo);
    tabCarbonInfo.forEach(element => {
      totalCarbonFootPrint_grams=totalCarbonFootPrint_grams+element.statistics.co2.grid.grams;
      totalCarbonFootPrint_renewable=totalCarbonFootPrint_renewable+element.statistics.co2.renewable.grams;
      totalEnergyRelease=totalEnergyRelease+element.statistics.energy
      const Elementdate= new Date(element.timeStamp);
      if(Elementdate.getDate()===Todaydate.getDate() && Elementdate.getMonth()===Todaydate.getMonth() && Elementdate.getFullYear()==Todaydate.getFullYear()){
        todayCarbonFootPrint=todayCarbonFootPrint+ element.statistics.co2.grid.grams;
      }
    });
    for (let index = 0; index < 8; index++) {
      if(index<tabCarbonInfo.length){
        recentVisit.push(tabCarbonInfo[index])
      }
    }
  }
  // console.log(recentVisit);
  // console.log(totalCarbonFootPrint_grams);
  return (
    <div id='Mainpanel-container'>
      <div className="leftsideOfPanel">
        <div className='cardsFlex'>
            <Card title="Total Grid CO2:" figure={totalCarbonFootPrint_grams.toFixed(4)} sub_desc="in grams"  icon={<Co2Icon className='iconInCard' sx={{ fontSize: "80px" }}/>} />
            <Card title="Total renewable CO2:" figure={totalCarbonFootPrint_renewable.toFixed(4)} sub_desc="in grams" icon={<Co2Icon className='iconInCard' sx={{ fontSize: "80px" }}/>} />
            <Card title="Total Energy:" figure={totalEnergyRelease.toFixed(4)} icon={<ElectricBoltIcon className='iconInCard' sx={{ fontSize: "80px" }}/>} sub_desc="in KWg."/>
        </div>
        <Table arr={recentVisit}/>
      </div>
      hello1
    </div>
  )
}

export default MainPanel
