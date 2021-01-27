const conversionTable = {
    AUDAUD: 'N',
    AUDCAD: 'USD',
    AUDCNY: 'USD',
    AUDCZK: 'USD',
    AUDDKK: 'USD',
    AUDEUR: 'USD',
    AUDGBP: 'USD',
    AUDJPY: 'USD',
    AUDNOK: 'USD',
    AUDNZD: 'USD',
    AUDUSD: 'D',

    CADAUD: 'USD',
    CADCAD: 'N',
    CADCNY: 'USD',
    CADCZK: 'USD',
    CADDKK: 'USD',
    CADEUR: 'USD',
    CADGBP: 'USD',
    CADJPY: 'USD',
    CADNOK: 'USD',
    CADNZD: 'USD',
    CADUSD: 'D',

    CNYAUD: 'USD',
    CNYCAD: 'USD',
    CNYCNY: 'N',
    CNYCZK: 'USD',
    CNYDKK: 'USD',
    CNYEUR: 'USD',
    CNYGBP: 'USD',
    CNYJPY: 'USD',
    CNYNOK: 'USD',
    CNYNZD: 'USD',
    CNYUSD: 'D',

    CZKAUD: 'USD',
    CZKCAD: 'USD',
    CZKCNY: 'USD',
    CZKCZK: 'N',
    CZKDKK: 'EUR',
    CZKEUR: 'INV',
    CZKGBP: 'USD',
    CZKJPY: 'USD',
    CZKNOK: 'EUR',
    CZKNZD: 'USD',
    CZKUSD: 'EUR',

    DKKAUD: 'USD',
    DKKCAD: 'USD',
    DKKCNY: 'USD',
    DKKCZK: 'EUR',
    DKKDKK: 'N',
    DKKEUR: 'INV',
    DKKGBP: 'USD',
    DKKJPY: 'USD',
    DKKNOK: 'EUR',
    DKKNZD: 'USD',
    DKKUSD: 'EUR',

    EURAUD: 'USD',
    EURCAD: 'USD',
    EURCNY: 'USD',
    EURCZK: 'D',
    EURDKK: 'D',
    EUREUR: 'N',
    EURGBP: 'USD',
    EURJPY: 'USD',
    EURNOK: 'D',
    EURNZD: 'USD',
    EURUSD: 'D',

    GBPAUD: 'USD',
    GBPCAD: 'USD',
    GBPCNY: 'USD',
    GBPCZK: 'USD',
    GBPDKK: 'USD',
    GBPEUR: 'USD',
    GBPGBP: 'N',
    GBPJPY: 'USD',
    GBPNOK: 'USD',
    GBPNZD: 'USD',
    GBPUSD: 'D',

    JPYAUD: 'USD',
    JPYCAD: 'USD',
    JPYCNY: 'USD',
    JPYCZK: 'USD',
    JPYDKK: 'USD',
    JPYEUR: 'USD',
    JPYGBP: 'USD',
    JPYJPY: 'N',
    JPYNOK: 'USD',
    JPYNZD: 'USD',
    JPYUSD: 'INV',

    NOKAUD: 'USD',
    NOKCAD: 'USD',
    NOKCNY: 'USD',
    NOKCZK: 'EUR',
    NOKDKK: 'EUR',
    NOKEUR: 'INV',
    NOKGBP: 'USD',
    NOKJPY: 'USD',
    NOKNOK: 'N',
    NOKNZD: 'USD',
    NOKUSD: 'EUR',

    NZDAUD: 'USD',
    NZDCAD: 'USD',
    NZDCNY: 'USD',
    NZDCZK: 'USD',
    NZDDKK: 'USD',
    NZDEUR: 'USD',
    NZDGBP: 'USD',
    NZDJPY: 'USD',
    NZDNOK: 'USD',
    NZDNZD: 'N',
    NZDUSD: 'D',

    USDAUD: 'INV',
    USDCAD: 'INV',
    USDCNY: 'INV',
    USDCZK: 'EUR',
    USDDKK: 'EUR',
    USDEUR: 'INV',
    USDGBP: 'INV',
    USDJPY: 'D',
    USDNOK: 'EUR',
    USDNZD: 'INV',
    USDUSD: 'N'
}

const conversionRates = {
    AUDUSD: 0.8371,
    CADUSD: 0.8711,
    USDCNY: 6.1715,
    EURUSD: 1.2315,
    GBPUSD: 1.5683,
    NZDUSD: 0.7750,
    USDJPY: 119.95,
    EURCZK: 27.6028,
    EURDKK: 7.4405,
    EURNOK: 8.6651
}

export const convert = (from, to, amount) => {
    let key = from + to;
    if (!conversionTable[key]) {
        throw new Error('Invalid conversion');
    }
    if (conversionTable[key] === 'N') {
        return amount;
    } else if (conversionTable[key] === 'INV') {
        const revKey = to + from;
        return (1 / conversionRates[revKey]) * amount;
    } else if (conversionTable[key] === 'D') {
        return conversionRates[key] * amount;
    } else if (conversionTable[key] === 'USD' || conversionTable[key] === 'EUR') {
        amount = convert(from, conversionTable[key], amount)
    }
    return convert(conversionTable[key], to, amount)
}