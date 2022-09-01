import { getPair } from "@/defi";
import { formatAmount, toFixedAmount } from "@/utils/formatters";
import { useStore } from "@/stores/root";
import { getBalance } from "@/stores/slices/connection";
import { getExchangeRate } from "@/stores/slices/rates";

import {
  calculateBaseAmount,
  calculateQuoteAmount,
  convertBaseToQuoteAmount,
  convertQuoteToBaseAmount,
} from "./helpers";

export default function useAssetAmount() {
  const { pair } = useStore((state) => state.rates);
  const {
    amounts: { base, quote },
    setAmounts,
  } = useStore((state) => state.tradingSidebar);
  const exchangeRate = useStore(getExchangeRate);
  const balance = useStore(getBalance);

  const [baseProduct, quoteProduct] = getPair(pair).productIds;
  const formattedBalance = `Balance: ${formatAmount(balance, {
    productId: quoteProduct,
  })}`;
  const isDisabled = balance.isEqualTo(0);
  const commonProps = {
    InputProps: {
      inputProps: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER,
        step: 0.01,
      },
    },
    alignEnd: true,
    disabled: isDisabled,
    type: "number",
    placeholder: "0",
  };

  const handleMaxClick = () => {
    const baseAmount = toFixedAmount(balance.dividedBy(exchangeRate));
    const quoteAmount = toFixedAmount(balance);

    setAmounts(baseAmount, quoteAmount);
  };

  const handleBaseAmountChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const baseAmount = calculateBaseAmount(value, balance, exchangeRate);
    const quoteAmount = convertBaseToQuoteAmount(
      baseAmount,
      balance,
      exchangeRate
    );

    setAmounts(baseAmount, quoteAmount);
  };

  const handleQuoteAmountChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const quoteAmount = calculateQuoteAmount(value, balance);
    const baseAmount = convertQuoteToBaseAmount(
      quoteAmount,
      balance,
      exchangeRate
    );

    setAmounts(baseAmount, quoteAmount);
  };

  return {
    base,
    quote,
    baseProduct,
    quoteProduct,
    formattedBalance,
    commonProps,
    handleMaxClick,
    handleBaseAmountChange,
    handleQuoteAmountChange,
  };
}
