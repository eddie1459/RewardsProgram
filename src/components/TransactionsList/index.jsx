import PropTypes from 'prop-types'

const TransactionsList = ({transactions}) => {
    return (
        <ul data-testid="transactionsList">
        {transactions.map(item => {
            return ( <li key={item.transactionId}>Id: {item.id} Amount: {item.amount} Date: {item.date}</li>)
        })
        }
        </ul>
    )
}

TransactionsList.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            amount: PropTypes.number,
            date: PropTypes.string
        })
    )
}

export default TransactionsList