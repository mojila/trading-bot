const { get_today_market_idx } = require('./utils')

const main = async () => {
    let data = await get_today_market_idx()

    if (data.length > 0) console.log(data)
}

main()