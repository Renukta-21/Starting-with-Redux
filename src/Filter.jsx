import { useDispatch, useSelector } from "react-redux"
import {changeFilter} from "./reducers/filterReducer"

const Filter = () => {
    const dispatch = useDispatch()
    const currentFilter = useSelector(state=> state.filter)
    const handleChange = (e) => dispatch(changeFilter(e.target.value))
    console.log(currentFilter)
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter