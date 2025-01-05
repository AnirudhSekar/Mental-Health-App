import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Mental Health Assistant
        </h1>
        <p className="mt-2 text-gray-600">
          A safe space to talk and get support
        </p>
      </div>
    </header>
  );
}

export default Header;