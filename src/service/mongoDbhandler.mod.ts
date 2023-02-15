////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 資料庫內容相關操作
////////////////////////////////////////////////////////////////////////////////

import config from '../config';
import 公司 from '../model/公司.inter';
import graphqlFunc from '../utility/graphql.func';

export async function GetStockByCode(code: string): Promise<公司> {
  const query = `
    query {
      stock(code: "${code}"){
        code
        name
      }
    }
  `;
  const data: 公司 = (await graphqlFunc(config.GraphQLHost, query))['data'][
    'data'
  ];
  return data;
}
