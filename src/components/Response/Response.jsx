import PropTypes from 'prop-types'

const Response = ({ message }) => {
  return (
    <li>
      <div className='message-data align-left'>
        <span className='message-data-name'>
          <i className='fa fa-circle online material-icons'>circle</i>
          {message.from.name}
        </span>
        <span className='message-data-time'>{message.time}</span>
      </div>
      <div className='message my-message'>{message.text}</div>
    </li>
  )
}

Response.propTypes = {
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

export default Response
