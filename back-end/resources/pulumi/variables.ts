import { Output } from '@pulumi/pulumi';

export const variables = {
  region: 'ap-southeast-2' as const, // <-- change this to your region
  dynamoDBTables: {} as Record<string, Output<string>>,
};
