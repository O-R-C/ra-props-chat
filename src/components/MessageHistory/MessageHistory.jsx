import PropTypes from 'prop-types'
import getChildren from './getChildren'

const MessageHistory = ({ list = [] }) => {
  return <ul className='MessageHistory chat-data'>{getChildren(list)}</ul>
}

MessageHistory.propTypes = {
  list: PropTypes.array,
}

export default MessageHistory
