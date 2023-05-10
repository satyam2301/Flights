const express = require('express');
const { ServerConfig, LoggerConfig } = require('./config');

const app = express();
const apiRoutes = require('./routes');

// app.get(path,middleware (optional),controller) same for app.use();
// Below apiRoutes will be of app.get(path,controller) and this path will be attach next to the current path
// E.g : app.use('/about',controller) ->from apiRoutes , So finally it will be as app.use('/api/about',controller)

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Site is up and running on PORT No. ${ServerConfig.PORT}`);
  // LoggerConfig.info('Successfully started server', {});
});
