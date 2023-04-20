import PropTypes from 'prop-types'

const CustomerDropDownList = ({customers, selectedCustomer, onChange}) => {
    return (
        <select value={selectedCustomer} onChange={onChange} data-testid="customerList" id="customerList" className='dropDown'>
        {customers.map(item => {
            return ( <option key={item.id} value={item.id}>{item.First} {item.Last}</option>)
        })
        }
        </select>
    )
}

CustomerDropDownList.propTypes = {
    onChange: PropTypes.func,
    selectedCustomer: PropTypes.number,
    customers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            First: PropTypes.string,
            Last: PropTypes.string
        })
    )
}

export default CustomerDropDownList