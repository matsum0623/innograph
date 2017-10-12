import express from 'express';
import graphqlHTTP from 'express-graphql';

function init(path, _app, _ctrl, _schema) {
  const app = _app || express();
  path = path || '/graphql';
  app.use(path, (req, res) => {
    graphqlHTTP({
      schema: _schema,
      graphiql: true,
      context: { ctrl: _ctrl }
    })(req, res);
  });
  if (!_app) app.listen(1111);

}


module.exports = {init};