const axios = require('axios')
const { Spot } = require('@binance/connector')
const router = require('express')()

const {apiKeyBiance, secretKeyBiance} =require('../../../key')

const client = new Spot(apiKeyBiance, secretKeyBiance)



router.route('/').get(async (req, res)=>{
//Current price
//   const coinData = await client.tickerPrice('',['BTCUSDT','1INCHUSDT','AAVEUSDT',
//     'ACMUSDT',
//     'ADAUSDT',
//     'AIONUSDT',
//     'AKROUSDT',
//     'ALGOUSDT',
//     'ALICEUSDT',
//     'ALPACAUSDT',
//     'ALPHAUSDT',
//     'ANKRUSDT',
//     'ANTUSDT',
//     'ARDRUSDT',
//     'ARPAUSDT',
//     'ARUSDT',
//     'ASRUSDT',
//     'ATAUSDT',
//     'ATMUSDT',
//     'ATOMUSDT',
//     'AUDIOUSDT',
//     'AUDUSDT',
//     'AUTOUSDT',
//     'AVAUSDT',
//     'AVAXUSDT',
//     'AXSUSDT',
//     'BADGERUSDT',
//     'BAKEUSDT',
//     'BALUSDT',
//     'BANDUSDT',
//     'BATUSDT',
//     'BCHUSDT',
//     'BEAMUSDT',
//     'BELUSDT',
//     'BLZUSDT',
//     'BNTUSDT',
//     'BONDUSDT',
//     'BTCSTUSDT',
//     'BURGERUSDT',
//     'BUSDUSDT',
//     'C98USDT',
//     'CAKEUSDT',
//     'CELOUSDT',
//     'CELRUSDT',
//     'CFXUSDT',
//     'CHRUSDT',
//     'CHZUSDT',
//     'CKBUSDT',
//     'CLVUSDT',
//     'COCOSUSDT',
//     'COMPUSDT',
//     'COSUSDT',
//     'COTIUSDT',
//     'CRVUSDT',
//     'CTKUSDT',
//     'CTSIUSDT',
//     'CTXCUSDT',
//     'CVCUSDT',
//     'DASHUSDT',
//     'DATAUSDT',
//     'DCRUSDT',
//     'DEGOUSDT',
//     'DENTUSDT',
//     'DEXEUSDT',
//     'DGBUSDT',
//     'DIAUSDT',
//     'DNTUSDT',
//     'DOCKUSDT',
//     'DODOUSDT',
//     'DOGEUSDT',
//     'DOTUSDT',
//     'DREPUSDT',
//     'DUSKUSDT',
//     'EGLDUSDT',
//     'ENJUSDT',
//     'EOSUSDT',
//     'ERNUSDT',
//     'ETCUSDT',
//     'EURUSDT',
//     'FARMUSDT',
//     'FETUSDT',
//     'FILUSDT',
//     'FIOUSDT',
//     'FIROUSDT',
//     'FISUSDT',
//     'FLMUSDT',
//     'FLOWUSDT',
//     'FORTHUSDT',
//     'FTMUSDT',
//     'FTTUSDT',
//     'FUNUSDT',
//     'GBPUSDT',
//     'GRTUSDT',
//     'GTCUSDT',
//     'GTOUSDT',
//     'HARDUSDT',
//     'HBARUSDT',
//     'HIVEUSDT',
//     'HNTUSDT',
//     'HOTUSDT',
//     'ICPUSDT',
//     'ICXUSDT',
//     'INJUSDT',
//     'IOSTUSDT',
//     'IOTAUSDT',
//     'IOTXUSDT',
//     'IRISUSDT',
//     'JSTUSDT',
//     'JUVUSDT',
//     'KAVAUSDT',
//     'KEYUSDT',
//     'KLAYUSDT',
//     'KMDUSDT',
//     'KNCUSDT',
//     'KSMUSDT',
//     'LINAUSDT',
//     'LINKUSDT',
//     'LITUSDT',
//     'LPTUSDT',
//     'LRCUSDT',
//     'LSKUSDT',
//     'LTCUSDT',
//     'LTOUSDT',
//     'LUNAUSDT',
//     'MANAUSDT',
//     'MASKUSDT',
//     'MATICUSDT',
//     'MBLUSDT',
//     'MDTUSDT',
//     'MDXUSDT',
//     'MFTUSDT',
//     'MINAUSDT',
//     'MITHUSDT',
//     'MKRUSDT',
//     'MLNUSDT',
//     'MTLUSDT',
//     'NBSUSDT',
//     'NEARUSDT',
//     'NEOUSDT',
//     'NMRUSDT',
//     'NULSUSDT',
//     'OCEANUSDT',
//     'OGNUSDT',
//     'OGUSDT',
//     'OMGUSDT',
//     'OMUSDT',
//     'ONEUSDT',
//     'ONGUSDT',
//     'ONTUSDT',
//     'ORNUSDT',
//     'OXTUSDT',
//     'PAXGUSDT',
//     'PERLUSDT',
//     'PERPUSDT',
//     'PHAUSDT',
//     'PNTUSDT',
//     'POLSUSDT',
//     'PONDUSDT',
//     'PSGUSDT',
//     'PUNDIXUSDT',
//     'QNTUSDT',
//     'QTUMUSDT',
//     'QUICKUSDT',
//     'RAYUSDT',
//     'REEFUSDT',
//     'REPUSDT',
//     'RIFUSDT',
//     'RLCUSDT',
//     'ROSEUSDT',
//     'RSRUSDT',
//     'RUNEUSDT',
//     'RVNUSDT',
//     'SANDUSDT',
//     'SCUSDT',
//     'SFPUSDT',
//     'SHIBUSDT',
//     'SKLUSDT',
//     'SLPUSDT',
//     'SNXUSDT',
//     'SOLUSDT',
//     'SRMUSDT',
//     'STMXUSDT',
//     'STORJUSDT',
//     'STPTUSDT',
//     'STRAXUSDT',
//     'STXUSDT',
//     'SUNUSDT',
//     'SUPERUSDT',
//     'SUSHIUSDT',
//     'SXPUSDT',
//     'TCTUSDT',
//     'TFUELUSDT',
//     'THETAUSDT',
//     'TKOUSDT',
//     'TLMUSDT',
//     'TOMOUSDT',
//     'TORNUSDT',
//     'TRBUSDT',
//     'TROYUSDT',
//     'TRUUSDT',
//     'TRXUSDT',
//     'TUSDUSDT',
//     'TVKUSDT',
//     'TWTUSDT',
//     'UMAUSDT',
//     'UNFIUSDT',
//     'UNIUSDT',
//     'USDCUSDT',
//     'UTKUSDT',
//     'VETUSDT',
//     'VITEUSDT',
//     'VTHOUSDT',
//     'WANUSDT',
//     'WAVESUSDT',
//     'WINGUSDT',
//     'WINUSDT',
//     'WNXMUSDT',
//     'WRXUSDT',
//     'WTCUSDT',
//     'XEMUSDT',
//     'XLMUSDT',
//     'XMRUSDT',
//     'XRPUSDT',
//     'XTZUSDT',
//     'XVGUSDT',
//     'XVSUSDT',
//     'YFIIUSDT',
//     'YFIUSDT',
//     'ZECUSDT',
//     'ZENUSDT',
//     'ZILUSDT',
//     'ZRXUSDT',
//     'BNBUSDT',
//     'ETHUSDT',
//     'RENUSDT',
//     'NKNUSDT',
//     'BTSUSDT',
//     'BTGUSDT',
//     'MIRUSDT',
//     'BARUSDT',
//     'MBOXUSDT',
//     'FORUSDT',
//     'REQUSDT',
//     'GHSTUSDT',
//     'WAXPUSDT',
//     'TRIBEUSDT',
//     'GNOUSDT',
//     'XECUSDT',
//     'ELFUSDT',
//     'DYDXUSDT',
//     'POLYUSDT',
//     'IDEXUSDT',
//     'VIDTUSDT',
//     'USDPUSDT',
//     'GALAUSDT',
//     'ILVUSDT',
//     'YGGUSDT',
//     'SYSUSDT',
//     'DFUSDT',
//     'FIDAUSDT',
//     'FRONTUSDT',
//     'CVPUSDT',
//     'AGLDUSDT',
//     'RADUSDT',
//     'BETAUSDT',
//     'RAREUSDT',
//     'LAZIOUSDT',
//     'CHESSUSDT',
//     'ADXUSDT',
//     'AUCTIONUSDT',
//     'DARUSDT',
//     'BNXUSDT',
//     'MOVRUSDT',
//     'CITYUSDT',
//     'ENSUSDT',
//     'KP3RUSDT',
//     'QIUSDT',
//     'PORTOUSDT',
//     'POWRUSDT',
//     'VGXUSDT',
//     'JASMYUSDT',
//     'AMPUSDT',
//     'PLAUSDT',
//     'PYRUSDT',
//     'RNDRUSDT',
//     'ALCXUSDT',
//     'SANTOSUSDT',
//     'MCUSDT',
//     'BICOUSDT',
//     'FLUXUSDT',
//     'FXSUSDT',
//     'VOXELUSDT',
//     'HIGHUSDT',
//     'CVXUSDT',
//     'PEOPLEUSDT',
//     'OOKIUSDT',
//     'SPELLUSDT',
//     'JOEUSDT',
//     'ACHUSDT',
//     'IMXUSDT',
//     'GLMRUSDT',
//     'LOKAUSDT',
//     'SCRTUSDT',
//     'API3USDT',
//     'BTTCUSDT',
//     'ACAUSDT',
//     'ANCUSDT',
//     'XNOUSDT',
//     'WOOUSDT',
//     'ALPINEUSDT',
//     'TUSDT',
//     'ASTRUSDT',
//     'GMTUSDT',
//     'KDAUSDT',
//     'APEUSDT',
//     'BSWUSDT',
//     'BIFIUSDT',
//     'MULTIUSDT',
//     'STEEMUSDT',
//     'MOBUSDT',
//     'NEXOUSDT',
//     'REIUSDT',
//     'GALUSDT',
//     'LDOUSDT',
//     'EPXUSDT',
//     'OPUSDT',
//     'LEVERUSDT',
//   ])
//     console.log(coinData.data)

//Coins history

  const coinHistoryData = await client.historicalTrades('BTCUSDT', { limit: 25 })
    console.log(coinHistoryData)

    res.json(coinHistoryData.data)
})
 module.exports = router
