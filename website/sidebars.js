/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: {
    'Getting started': ['getting-started', 'email'],
    Transports: ['transports/graphql', 'transports/rest'],
    Databases: ['databases/mongo', 'databases/redis', 'databases/typeorm'],
    Strategies: [
      'strategies/password',
      'strategies/facebook',
      'strategies/oauth',
      'strategies/twitter',
    ],
    // 'Api reference': [
    //   'api/database-mongo/api-readme',
    //   'api/password/api-readme',
    //   'api/server/api-readme',
    // ],
  },
  api: {
    'Api Docs': [
      'api/apollo-link-accounts/api-readme',
      'api/boost/api-readme',
      'api/client/api-readme',
      'api/client-password/api-readme',
      'api/database-manager/api-readme',
      'api/database-mongo/api-readme',
      'api/database-redis/api-readme',
      'api/express-session/api-readme',
      'api/graphql-api/api-readme',
      'api/graphql-client/api-readme',
      'api/oauth/api-readme',
      'api/oauth-instagram/api-readme',
      'api/oauth-twitter/api-readme',
      'api/server/api-readme',
      'api/password/api-readme',
      'api/rest-client/api-readme',
      'api/rest-express/api-readme',
      'api/two-factor/api-readme',
    ],
  },
};