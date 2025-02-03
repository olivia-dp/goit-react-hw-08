
import { changeFilter } from "../../redux/filters/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filters/selectors";


const SearchBox = () => {
const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <label className="input w-full">
        <span className="leading-tight tracking-tight text-gray-900 dark:text-white">Find contacts by name:</span>
                <input type='text' value={filter} onChange={handleChange}/>
        </label>
        </div>
    )
};

export default SearchBox;
