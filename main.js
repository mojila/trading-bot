const { get_today_market } = require('./utils')

const main = async () => {
    let data = await get_today_market()

    if (data.length > 0) console.log(data)
}

main()