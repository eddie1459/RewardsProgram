import transactions from './data/transactions.json'

const getRewardsForCustomer = async id => {
    const results = transactions.filter(x => x.id === id)
    return calculateRewards(results)
}

const getAllRewards = async () => {
    return calculateRewards(transactions)
}

const getTransactions = async () => {
    return transactions
}

const calculateRewards = async data => {
    const d = new Date()
    d.setMonth(d.getMonth() - 3)
    const filteredData = data.filter(x =>new Date(x.date) >= d)
    let results = []
    for (let i = 0; i < filteredData.length; i++) {
        let points = 0
        if(data[i].amount > 100) {
            points += (data[i].amount - 100) * 2
            points += 50
        }
        if(data[i].amount >= 50 && data[i].amount <= 100) {
            points += data[i].amount - 50
        }
        if (results.filter(x => x.id === data[i].id).length === 0){
            results.push({id: data[i].id, Name: `${data[i].first} ${data[i].last}`, Points: points})
        } else {
            const customer = results.filter(x => x.id === data[i].id)[0]
            customer.Points += points
        }
    }
    return results
}

const getCustomers = async () => {
    return [
        {
            id: 1,
            First: 'John',
            Last: 'Smith'
        },
        {
            id: 2,
            First: 'Mary',
            Last: 'Jane'
        },
        {
            id: 3,
            First: 'Mike',
            Last: 'Tyson'
        }
    ]

}

export { getRewardsForCustomer, getAllRewards, getTransactions, getCustomers, calculateRewards}