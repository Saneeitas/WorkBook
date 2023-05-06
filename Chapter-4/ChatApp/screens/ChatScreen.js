import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import firebase from "../config/firebase"

const ChatScreen = ({ route }) => {
  const { name, phone } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Load messages from Firebase
    const messagesRef = firebase.database().ref('messages');
    messagesRef.on('value', snapshot => {
      const messageList = [];
      snapshot.forEach(child => {
        messageList.push(child.val());
      });
      setMessages(messageList.reverse());
    });

    // Remove listener on unmount
    return () => {
      messagesRef.off('value');
    };
  }, []);

  const handleSend = newMessages => {
    const timestamp = Date.now();
    const newMessage = {
      _id: timestamp,
      text: newMessages[0].text,
      createdAt: new Date(timestamp),
      user: {
        _id: phone,
        name,
      },
    };

    firebase.database().ref(`messages/${timestamp}`).set(newMessage);
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={handleSend}
      user={{
        _id: phone,
        name,
      }}
    />
  );
};

export default ChatScreen;
