const CLEAN_REGEX = {
  NUMBERS_SYMBOLS: /[^\d.-]/g,
  NUMBERS: /\D/g
}

interface FormatValue {
  formatted: string,
  clean: string
}


function cleanNonNumeric(
  value: string,
  cleaner = CLEAN_REGEX['NUMBERS']
) {
  return value.replace(cleaner, '');
}


export function toPhone(value: string = ''): FormatValue {
  const phoneRegex = /^(\d{0,3})(\d{0,3})(.*)$/;
  const cleanValue = cleanNonNumeric(value);
  return {
    formatted: cleanValue.replace(phoneRegex, (match, p1, p2, p3) => {
      let formatted = p1;
      if (p2) formatted += '-' + p2;
      if (p3) {
        formatted += '-' + p3.match(/\d{1,4}/g)?.join('-');
      }
      return formatted;
    }),
    clean: cleanValue
  };
}
export function toCreditCard(value: string = ''): FormatValue {
  const cardRegex = /\d{1,4}/g;
  const cleanValue = cleanNonNumeric(value);
  return {
    formatted: cleanValue.match(cardRegex)?.join(' ') || cleanValue,
    clean: cleanValue
  }
}

export function toCurrency({
  value = '',
  currency = 'USD',
  decimals = 0,
  currencyDisplay = 'symbol'
}: {
  value: string,
  currency: string,
  decimals?: number,
  currencyDisplay?: 'symbol' | 'code' | 'name' | 'narrowSymbol'
}): FormatValue {
  const cleanValue = cleanNonNumeric(
    value, CLEAN_REGEX['NUMBERS_SYMBOLS']
  );
  const numberValue = parseFloat(cleanValue);

  if (isNaN(numberValue)) return { formatted: '', clean: '' };

  return {
    formatted: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: decimals,
      currencyDisplay: currencyDisplay,
      useGrouping: true
    }).format(numberValue),
    clean: cleanValue.replace(CLEAN_REGEX['NUMBERS'], '')
  }
}
