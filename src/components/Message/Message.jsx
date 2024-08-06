import PropTypes from 'prop-types'

const Message = ({ message }) => {
  return (
    <li className='clearfix'>
      <div className='message-data align-right'>
        <span className='message-data-time'>{message.time}</span> &nbsp; &nbsp;
        <span className='message-data-name'>{message.from.name}</span>
        <i className='fa fa-circle me material-icons'>circle</i>
      </div>
      <div className='message other-message float-right'>{message.text}</div>
    </li>
  )
}

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.string,
    from: PropTypes.shape({
      name: PropTypes.string,
    }),
    type: PropTypes.string,
    time: PropTypes.string,
    text: PropTypes.string,
  }),
}

export default Message
