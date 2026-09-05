import { io } from 'socket.io-client';
import { API_BASE_URL } from '../constants.jsx';

const SOCKET_SERVER_URL = API_BASE_URL; // Uses localhost:3000 by default

const socket = io(SOCKET_SERVER_URL, {
    autoConnect: true,
    transports: ['websocket'],
});

export default socket;
