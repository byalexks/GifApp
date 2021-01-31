import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (cater) => {

   const [state, setState] = useState({
        
    data: [],
    loading: true

   }) ;

useEffect( ()=> {

    getGifs( cater)
        .then(img => {

            setState({
                data: img,
                loading: false

            })
        })

}, [cater])

    return state;
}
