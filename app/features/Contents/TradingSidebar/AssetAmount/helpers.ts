import { toFixedAmount } from "@/utils/formatters";
import BigNumber from "bignumber.js";

export const calculateBaseAmount = (
  amount: string,
  balance: BigNumber,
  exchangeRate: BigNumber
) => {
  const baseAmount = new BigNumber(amount);
  const maxBaseAmount = balance.dividedBy(exchangeRate);

  return baseAmount.isGreaterThan(maxBaseAmount)
    ? toFixedAmount(maxBaseAmount)
    : amount;
};

export const calculateQuoteAmount = (amount: string, balance: BigNumber) => {
  const bigNumAmount = new BigNumber(amount);

  return bigNumAmount.isGreaterThan(balance) ? toFixedAmount(balance) : amount;
};

export const convertQuoteToBaseAmount = (
  quoteAmount: string,
  balance: BigNumber,
  exchangeRate: BigNumber
) => {
  const convertedAmount = new BigNumber(quoteAmount).dividedBy(exchangeRate);
  const maxAmount = balance.dividedBy(exchangeRate);

  return toFixedAmount(BigNumber.min(convertedAmount, maxAmount));
};

export const convertBaseToQuoteAmount = (
  baseAmount: string,
  balance: BigNumber,
  exchangeRate: BigNumber
) => {
  const convertedAmount = new BigNumber(baseAmount).multipliedBy(exchangeRate);

  return toFixedAmount(BigNumber.min(convertedAmount, balance));
};
