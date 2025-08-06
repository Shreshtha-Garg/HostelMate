import { io } from 'socket.io-client';

const SOCKET_SERVER_URL = 'https://hostel-management-system-cdp3.onrender.com/'; // Replace with your server URL

const socket = io(SOCKET_SERVER_URL, {
    autoConnect: true,
    transports: ['websocket'],
});

export default socket;
