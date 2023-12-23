import PropTypes from 'prop-types'


function Component() { 
  return null  
} 

Component.propTypes = { 
    person: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
    }),
}

export default Component 