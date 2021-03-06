var fs = require('fs');
var path = require('path');
var handlers = require('./../handlers/handlers');

function router(request, response) {
  var url = request.url;

  if (url === '/') {
    handlers.serveLanding(request, response);
  } else if (url.indexOf('public') !== -1) {
    handlers.servePublic(request, response);
  } else if (url === '/secret') {
    handlers.serveSecret(request, response);
  } else {
    handlers.pageNotFound(request, response);
  }
}



module.exports = router;
