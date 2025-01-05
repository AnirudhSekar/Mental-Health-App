import { FC } from 'react';
import { Message } from '../types';
import clsx from 'clsx';

interface MessageListProps {
  messages: Message[];
}

const MessageList: FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="h-[500px] overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={clsx(
            'max-w-[80%] rounded-lg p-4',
            message.isUser
              ? 'ml-auto bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-900'
          )}
        >
          {message.content}
        </div>
      ))}
    </div>
  );
}

export default MessageList;