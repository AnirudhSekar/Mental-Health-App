import { FC } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { useChat } from '../hooks/useChat';

const ChatInterface: FC = () => {
  const { messages, sendMessage, isLoading } = useChat();

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <MessageList messages={messages} />
      <MessageInput onSend={sendMessage} isLoading={isLoading} />
    </div>
  );
}

export default ChatInterface;