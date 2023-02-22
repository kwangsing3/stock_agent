/* eslint-disable @typescript-eslint/no-explicit-any */
import {POST} from './httpmethod.mod';

export default async (
  url: string,
  query: string,
  variables?: object
): Promise<any> => {
  const raw = await POST(
    url,
    {
      'Content-Type': 'application/json',
    },
    JSON.stringify({
      query: query,
      variables: variables,
    })
  );
  return raw;
};
