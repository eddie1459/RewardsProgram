import PropTypes from 'prop-types'

const Button = ({color, children, onClick}) => {
    return (
        <button className="btn" onClick={onClick} color={color}>{children}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.string,
    width: PropTypes.string
}

export default Button