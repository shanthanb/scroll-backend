import React from 'react'
import Skeleton from "@mui/material/Skeleton"

const Loading = () => {
    return (
        <div className='loader-wrap'>

            {Array.from(new Array(4)).map(() => {

                return <Skeleton variant={'rounded'} animation={'wave'} height={150} width={"60%"} sx={{ mx: "auto", borderRadius: "20px" }} />

            })}
        </div>
    )
}

export default Loading