import * as mariadb from 'mariadb';

//先實作每一次動作都重新連接，並在結束後斷開。
let pool: mariadb.Pool;

export function ConnectToDB(
  host: string,
  user: string,
  password: string,
  db: string
) {
  try {
    pool = mariadb.createPool({
      host: host,
      user: user,
      password: password,
      connectionLimit: 5,
      database: db,
      connectTimeout: 1000 * 10,
    });
  } catch (error) {
    console.log(`無法使用DBhandler服務:${error}`);
  }
}

/**
 * 向資料庫拉取語法要求的資料
 * @param query SQL命令
 * @returns 資料內容
 */
export async function GetContent(query: string): Promise<any> {
  const conn = await pool.getConnection();
  const data = await conn.query(query);
  if (conn) {
    conn.end();
  } else {
    throw new Error('GSS_hp_Agent: DataBase 連接錯誤');
  }

  return data;
}

/**
 * 關閉與資料庫的連線
 */
export async function CloseConnect() {
  await pool.end().catch((err: any) => {
    throw new Error(`GSS_hp_Agent: ${err}`);
  });
}
