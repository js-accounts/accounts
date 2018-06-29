import { IResolverContext } from '../types/graphql';
import AccountsServer from '@accounts/server';

export const getUser = (accountsServer: AccountsServer) => async (
  _: null,
  args: GQL.IGetUserOnQueryArguments,
  ctx: IResolverContext
) => {
  const { accessToken } = args;

  return accountsServer.resumeSession(accessToken);
};
