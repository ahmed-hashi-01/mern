import * as api from '../api'

// Actions
export const getpost =()=> async (dispatch)=>{
    try {
      const {data} = api.fetchPost()  
      dispatch({'type': 'FETCH_ALL', payload:data})
    } catch (error) {
        console.log(error.message)
    }



    
}