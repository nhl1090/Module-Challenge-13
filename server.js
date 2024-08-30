const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
const forceSync = process.env.FORCE_SYNC === 'true';

sequelize.sync({ force: forceSync }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
