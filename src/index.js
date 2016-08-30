import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var socket = io('http://localhost:1357');

var form = document.getElementsByTagName('form')[0]
var inputTag = document.getElementById('m');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  socket.emit('chat message', inputTag.value)
  inputTag.value = '';
});

var messageList = document.getElementById('messages');

socket.on('chat message', function(msg){
  var li = document.createElement('li');
  li.textContent = msg;
  messageList.appendChild(li);
});

ReactDOM.render(<App />, document.getElementById('root'));
