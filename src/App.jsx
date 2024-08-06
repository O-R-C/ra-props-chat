import MessageHistory from './components/MessageHistory/MessageHistory'
import messages from './js/messages'

function App() {
  return (
    <div>
      <div className='clearfix container'>
        <div className='people-list'>People List</div>
        <div className='chat'>
          <div className='chat-history'>
            <MessageHistory list={messages} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
