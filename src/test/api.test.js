import {getAllRewards, getCustomers, getRewardsForCustomer, getTransactions, calculateRewards} from '../api'

describe('api testing', () => {
    it ('gets all rewards', async () => {
        const results = await getAllRewards();
        expect(results).toHaveLength(3)
    })
    it ('gets all customers', async () => {
        const results = await getCustomers();
        expect(results).toHaveLength(3)
    })
    it ('gets rewards for customer', async () => {
        const results = await getRewardsForCustomer(1);
        expect(results).toHaveLength(1)
    })
    it ('gets all transactions', async () => {
        const results = await getTransactions();
        expect(results).toHaveLength(12)
    })
    it ('calculates rewards points for customer', async () => {
        const results = await getRewardsForCustomer(1);
        expect(results[0].Points).toEqual(115)
    })

    it ('calculates rewards points but not in time frame < 3 months', async () => {
        const results = await calculateRewards([{id: 10, amount: 120, date: '01/01/2020', first: 'John', last: 'Smith'}]);
        expect(results).toHaveLength(0)
    })

    it ('calculates rewards points > 100', async () => {
        const results = await calculateRewards([{id: 10, amount: 120, date: '01/30/2023', first: 'John', last: 'Smith'}]);
        expect(results[0].Points).toEqual(90)
    })

    it ('calculates rewards points >= 50 && <= 100', async () => {
        const results = await calculateRewards([{id: 10, amount: 75, date: '02/01/2023', first: 'John', last: 'Smith'}]);
        expect(results[0].Points).toEqual(25)
    })
})
