const fortunes = {
  aries: 'your star sign will not affect your life in any way',
  taurus: 'lets not and pretend we did',
  gemini: 'insert made up nonsense here',
  cancer: 'the tooth fairy and the easter bunny says everything gonna be ok',
  leo: 'tony the tiger says your day will be gggrrrreeeeeaaatttt!',
  virgo: 'bob from down the pub says your day today will be bad....sorry...blame bob',
  libra: '#TERRIBLEHORROSCOPEPUN',
  scopio: 'and the weather today? Scorpio!'
};

export function getFortune(starSign: string): string|null {
  if (!starSign) {
    return null;
  }

  return fortunes[starSign.toLowerCase()] || null;
};
