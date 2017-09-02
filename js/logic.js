function log_in(token){
      var urlws ='wss://ws.binaryws.com/websockets/v3?app_id=5414';
      ws= new WebSocket(urlws);
      ws.debug = true;
      ws.timeoutInterval = 5400;
      step_authtoken(token);
}
