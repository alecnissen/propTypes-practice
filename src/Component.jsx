import PropTypes from 'prop-types'


function Component() { 
    return null
} 

Component.propTypes = { 
   state: PropTypes.oneOf(
    ['loading', 'ready']
   )
}

export default Component 