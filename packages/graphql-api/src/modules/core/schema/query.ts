import { gql } from 'graphql-modules'
import { AccountsModuleConfig } from '..';

export default (config: AccountsModuleConfig) => gql(`
    ${config.extendTypeDefs ? 'extend' : ''} type ${config.rootQueryName || 'Query'}  {
        getUser: User
    }
`);
