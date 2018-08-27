import { combineReducers } from 'redux';
import filters from '../store/filters/reducer';
import toast from '../components/ui/toast/Toast.reducer';

const rootReducer = combineReducers({
  filters,
  toast,
});

export default rootReducer;
