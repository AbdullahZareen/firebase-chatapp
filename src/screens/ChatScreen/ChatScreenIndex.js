import React, {useState} from 'react';
import ChatScreen from './ChatScreen';
export default function ChatScreenIndex() {
  const onPressSend = () => {
    return null;
  };
  const [chatText, setChatText] = useState('');
  console.log(chatText);
  return (
    <ChatScreen
      chatText={chatText}
      setChatText={setChatText}
      onPressSend={onPressSend}
    />
  );
}
