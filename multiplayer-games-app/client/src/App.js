// client/src/App.js
import { useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server:', socket.id);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="App">
      <h1>Multiplayer Games App</h1>
      <p>Socket connected: {socket.connected ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default App;