/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://dev.domain.com';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'eu-west-1',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: '2k39fio740vbdlukaaghvud2mr',
  USER_POOL_ID: 'ap-southeast-2_XxTdv0krf',
  IDENTITY_POOL_ID: 'ap-southeast-2:96d82641-9786-4ac6-88b4-da9dace0317f',
  GRAPHQL_ENDPOINT: 'https://2l3kqs2exzh3xdk4sjn6hj6jyq.appsync-api.ap-southeast-2.amazonaws.com/graphql',
  
};

export default configDevelopment;
