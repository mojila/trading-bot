const { get_today_market } = require('./utils')

const main = async () => {
    let data = await get_today_market()

    console.log(data)
}

main()