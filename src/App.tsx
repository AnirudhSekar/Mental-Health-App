import { FC } from 'react';
import ChatInterface from './components/ChatInterface';
import Header from './components/Header';

const App: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ChatInterface />
      </main>
    </div>
  );
}

export default App;