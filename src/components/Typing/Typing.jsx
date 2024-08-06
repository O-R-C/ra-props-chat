import PropTypes from 'prop-types'

const Typing = ({ message }) => {
  return (
    <li>
      <div className='message-data align-left'>
        <span className='message-data-name'>
          <i className='fa fa-circle online'></i>
          {message.from.name}
        </span>
        <span className='message-data-time'>{message.time}</span>
      </div>
      <div className='typing align-left material-icons'>
        <span className='first'>circle</span>
        <span className='second'>circle</span>
        <span className='third'>circle</span>
      </div>
    </li>
  )
}

Typing.propTypes = {
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

export default Typing
