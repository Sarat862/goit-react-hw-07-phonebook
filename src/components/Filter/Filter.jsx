import css from './Filter.module.css';
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from "redux/filter/filter-slice";

export function Filter() {
    
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const {value} = e.target;
        dispatch(setFilter(value));
    }

    return (
        <>
            <p className={css.filterTitle}>Find contacts by name</p>
            <input className={css.filterInput} type="text" name="filter" value={filter} onChange={handleChange} />        
        </>
    )
}