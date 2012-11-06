 /*jshint unused:false*/
 /*global console */
var chaussette = (function(){
    "use strict";
    // PRIVATE
    var socket,
        host,
        status;

    // PUBLIC
    return{

        "init": function(host, status, messages){
            this.host = host;
            this.status = status;
            this.messages = messages;
        },

        "connect": function(){
            // Create socket
            this.socket = new WebSocket(this.host, 'echo-protocol');

            //Add events on socket
            this.socket.addEventListener('open', function(event) {
                chaussette.status.html('Connected');
            });

            this.socket.addEventListener('message', function(event){
                chaussette.messages.append('<p>'  + event.data + '</p>');
            });

            this.socket.addEventListener("close", function(event) {
                chaussette.status.html("Disconnected");
            });

            this.socket.addEventListener("error", function(event) {
              chaussette.message.append("Error: " + event);
            });
        },

        "send": function(message){
            chaussette.socket.send(message);
        }
    };
    
})();