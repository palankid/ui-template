import { AppState, CustomStateCreator } from "../../types";
import { Markets } from "@/types/api";

interface MarketsProps {
  list: Markets;
}

export interface MarketsSlice {
  markets: MarketsProps & {
    setMarkets: (markets: Markets) => void;
  };
}

export const createMarketsSlice: CustomStateCreator<MarketsSlice> = (
  set,
  _get
) => ({
  markets: {
    list: {},
    setMarkets: (markets: Markets) => {
      set(function setMarkets(state: AppState) {
        state.markets.list = markets;
      });
    },
  },
});
