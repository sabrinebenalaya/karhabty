import React from 'react'
import CustomText from './Text'


function CustomCriteria({criteria,text}) {
    const criteriaStyle ={
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f8f9fa",
        borderRadius: "10px", padding:"2%",width:"20%", heigth:"10px"
    }
  return (
    <div style={criteriaStyle}>
    <CustomText text={criteria} style={{fontWeight:"normal"}}/>
    <CustomText text={text} style={{fontWeight:"bold", color:"#007bff"}}/>
    </div>
  )
}

export default CustomCriteria