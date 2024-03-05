// import { useEffect, useState } from 'react';
// import { FaHandScissors, FaHandPaper, FaHandRock } from 'react-icons/fa';

// import Button from '../components/Button';
import tw from 'twin.macro';

import Button from '../components/Button';
import { Select } from '../components/Form';
import PortraitComponent from '../components/PortraitComponent';
import { Portrait, UiTheme } from '../contexts';
// import type { Nullable } from '../utils';

const IndexPage = () => {
  const { contrast, color, setter } = UiTheme.useThemeContext();
  // const [userChoice, setUserChoice] = useState('');
  // const [result, setResult] = useState('');
  // const [socket, setSocket] = useState<Nullable<WebSocket>>(null);

  // useEffect(() => {
  //   // Create a WebSocket connection when the component mounts
  //   const newSocket = new WebSocket('ws://localhost:8765'); // Replace with your WebSocket server URL

  //   newSocket.onopen = () => {
  //     console.log('WebSocket connection opened.');
  //     setSocket(newSocket);
  //   };

  //   newSocket.onmessage = event => {
  //     // Handle incoming messages from the server
  //     setResult(event.data);
  //   };

  //   newSocket.onclose = () => {
  //     console.log('WebSocket connection closed.');
  //   };

  //   return () => {
  //     // Close the WebSocket connection when the component unmounts
  //     if (socket) {
  //       socket.close();
  //     }
  //   };
  // }, []);

  // const playGame = (choice: 'rock' | 'paper' | 'scissors') => {
  //   if (socket && socket.readyState === WebSocket.OPEN) {
  //     // Send the user's choice to the server
  //     socket.send(choice);
  //   }
  // };
  return (
    <main css={{ ...tw`mt-20` }}>
      <Portrait.Provider>
        <PortraitComponent />
      </Portrait.Provider>
    </main>
  );
};

export default IndexPage;
