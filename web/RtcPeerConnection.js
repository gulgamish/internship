const rc = new RTCPeerConnection({
    'iceServers': [
        { urls: 'stun:stun.l.google.com:19302' },
        {
            urls: 'turn:numb.viagenie.ca',
            username: 'aymanelamrani9@gmail.com',
            credential: 'lofihiphop'
        }
    ]
});
