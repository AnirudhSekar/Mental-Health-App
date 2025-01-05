import { mockResponses } from './responses';

let responseIndex = 0;

const getNextResponse = (): string => {
  const response = mockResponses[responseIndex];
  responseIndex = (responseIndex + 1) % mockResponses.length;
  return response;
};

const delay = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms));

export const chatService = {
  sendMessage: async (_message: string): Promise<string> => {
    await delay(1000); // Simulate API delay
    return getNextResponse();
  },
};