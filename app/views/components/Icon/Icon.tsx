import dynamic from "next/dynamic";
import React from "react";




const Icon = ({ collecition, id }) => {
    const IconComponent = dynamic(() => import(`@mui/material-icons/${id}`), { ssr: false })
    return (<IconComponent /> || <></>)
}

export default Icon