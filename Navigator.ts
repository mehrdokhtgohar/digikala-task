import {MarketType} from './android/app/src/types/market.type';

export type RootStackParamList = {
  marketDetail: {item: MarketType} | undefined;
};
