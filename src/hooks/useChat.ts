import { useState } from 'react';
import { Message } from '../types';
import { chatService } from '../services/chatService';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hello! I'm here to listen and support you. How are you feeling today?",
      isUser: false,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = { content, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Get AI response
      const response = await chatService.sendMessage(content);
      const assistantMessage: Message = {
        content: response,
        isUser: false,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Failed to get response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, sendMessage, isLoading };
}