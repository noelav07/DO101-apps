const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'This is version 2 of the app.' + '\n';

    var2 = 'Variable 2' + '\n';

    //send the response to the client
    res.send(response);
    res.send(var2);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
