import PropTypes from 'prop-types'

const RewardsList = ({rewards}) => {
    return (
        <ul data-testid="rewardsList">
        {rewards.map(item => {
            return ( <li key={item.id}>Name: {item.Name} Total Points: {item.Points}</li>)
        })
        }
        </ul>
    )
}

RewardsList.propTypes = {
    rewards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            Name: PropTypes.string,
            Points: PropTypes.number
        })
    )
}

export default RewardsList