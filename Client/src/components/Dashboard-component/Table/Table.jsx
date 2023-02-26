import { bgcolor } from '@mui/system';
import React from 'react'
import './Table.css'
const Table = (props) => {
    const recentVisit=props.arr;
  return (
    <div id="table-container">
      <h5 style={{color:"white"}}>Recent Sites Visites:</h5>
      <div className="tableDiv">
        <div className="fieldNameRow">
            <div className="fieldName">URL</div>
            <div className="fieldName">Status</div>
            <div className="fieldName">CleanerThan</div>
            <div className="fieldName">Date</div>
        </div>
        {
            recentVisit.map((ele)=>{
                const date= new Date(ele.timestamp);
                
                return(
                    <div className="rowData">
                        <div className="rowDataEle" style={{fontSize:"1rem"}}><a href={ele.url}>{ele.url.substring(0,30)}...</a></div>
                        <div className="rowDataEle"><span className={ele.green==true?'statusgreen':'statusred'}>{`${ele.green}`}</span></div>
                        <div className="rowDataEle">{ele.cleanerThan}</div>
                        <div className="rowDataEle">{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</div>
                    </div>
                )
            })
        }
                
      </div>
    </div>
  )
}

export default Table
