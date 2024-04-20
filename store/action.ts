import {MainList} from '../android/app/src/data/mainList'; // Import your local data
import {MarketType} from '../android/app/src/types/market.type';
import {updateMainList} from './marketListSlice';
import {useDispatch} from 'react-redux';

export interface UpdateMainListAction {
  type: string;
  payload: MarketType;
}

export const useUpdateMainListData = () => {
  const dispatch = useDispatch();
  return () => dispatch(updateMainList(MainList));
};
