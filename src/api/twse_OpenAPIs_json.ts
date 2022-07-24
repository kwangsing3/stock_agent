//https://openapi.twse.com.tw/#/
export const twseAPI = {
  //swagger: '2.0',
  info: {
    description:
      '本平臺提供臺灣證券交易所服務API，歡迎各位介接使用。<br><br>[使用條款](https://www.twse.com.tw/zh/page/terms/use.html)',
    version: '1.0',
    title: '臺灣證券交易所 OpenAPI',
  },
  host: 'openapi.twse.com.tw',
  basePath: '/v1',
  // tags: [
  //   {
  //     name: '公司治理',
  //   },
  //   {
  //     name: '證券交易',
  //   },
  //   {
  //     name: '財務報表',
  //   },
  //   {
  //     name: '指數',
  //   },
  //   {
  //     name: '權證',
  //   },
  //   {
  //     name: '其他',
  //   },
  //   {
  //     name: '券商資料',
  //   },
  // ],
  schemes: ['https'],
  paths: {
    '/opendata/t187ap46_L_7': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司企業ESG資訊揭露彙總資料-投資人溝通',
        description: '上市公司企業ESG資訊揭露彙總資料-投資人溝通',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                報告年度: {
                  type: 'string',
                  description: '報告年度',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                '公司年度召開法說會次數(次)': {
                  type: 'string',
                  description: '公司年度召開法說會次數(次)',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap46_L_6': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司企業ESG資訊揭露彙總資料-董事會',
        description: '上市公司企業ESG資訊揭露彙總資料-董事會',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                報告年度: {
                  type: 'number',
                  description: '報告年度',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                '董事席次(含獨立董事)(席)': {
                  type: 'string',
                  description: '董事席次(含獨立董事)(席)',
                },
                '獨立董事席次(席)': {
                  type: 'string',
                  description: '獨立董事席次(席)',
                },
                '女性董事席次及比率-席': {
                  type: 'string',
                  description: '女性董事席次及比率-席',
                },
                '女性董事席次及比率-比率': {
                  type: 'string',
                  description: '女性董事席次及比率-比率',
                },
                董事出席董事會出席率: {
                  type: 'string',
                  description: '董事出席董事會出席率',
                },
                董監事進修時數符合進修要點比率: {
                  type: 'string',
                  description: '董監事進修時數符合進修要點比率',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap46_L_5': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司企業ESG資訊揭露彙總資料-人力發展',
        description: '上市公司企業ESG資訊揭露彙總資料-人力發展',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                報告年度: {
                  type: 'number',
                  description: '報告年度',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                '員工福利平均數(仟元/人)': {
                  type: 'string',
                  description: '員工福利平均數(仟元/人)',
                },
                '員工薪資平均數(仟元/人) ': {
                  type: 'string',
                  description: '員工薪資平均數(仟元/人) ',
                },
                '非擔任主管職務之全時員工薪資平均數(仟元/人) ': {
                  type: 'string',
                  description: '非擔任主管職務之全時員工薪資平均數(仟元/人) ',
                },
                '非擔任主管之全時員工薪資中位數(仟元/人) ': {
                  type: 'string',
                  description: '非擔任主管之全時員工薪資中位數(仟元/人) ',
                },
                管理職女性主管佔比: {
                  type: 'string',
                  description: '管理職女性主管佔比',
                },
                '職業災害人數及比率-人數': {
                  type: 'string',
                  description: '職業災害人數及比率-人數',
                },
                '職業災害人數及比率-比率': {
                  type: 'string',
                  description: '職業災害人數及比率-比率',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap46_L_4': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司企業ESG資訊揭露彙總資料-廢棄物管理',
        description: '上市公司企業ESG資訊揭露彙總資料-廢棄物管理',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                報告年度: {
                  type: 'string',
                  description: '報告年度',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                '有害廢棄物量-數據(公噸) ': {
                  type: 'string',
                  description: '有害廢棄物量-數據(公噸) ',
                },
                '有害廢棄物量-資料範圍': {
                  type: 'string',
                  description: '有害廢棄物量-資料範圍',
                },
                '非有害廢棄物量-數據(公噸)': {
                  type: 'string',
                  description: '非有害廢棄物量-數據(公噸)',
                },
                '非有害廢棄物量-資料範圍': {
                  type: 'string',
                  description: '非有害廢棄物量-資料範圍',
                },
                '總重量(有害+非有害)-數據(公噸)': {
                  type: 'string',
                  description: '總重量(有害+非有害)-數據(公噸)',
                },
                '總重量(有害+非有害)-資料範圍': {
                  type: 'string',
                  description: '總重量(有害+非有害)-資料範圍',
                },
                '廢棄物密集度-密集度(公噸/單位) ': {
                  type: 'string',
                  description: '廢棄物密集度-密集度(公噸/單位) ',
                },
                '廢棄物密集度-單位': {
                  type: 'string',
                  description: '廢棄物密集度-單位',
                },
                取得驗證: {
                  type: 'string',
                  description: '取得驗證',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap46_L_3': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司企業ESG資訊揭露彙總資料-水資源管理',
        description: '上市公司企業ESG資訊揭露彙總資料-水資源管理',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                報告年度: {
                  type: 'string',
                  description: '報告年度',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                '用水量(公噸)': {
                  type: 'string',
                  description: '用水量(公噸)',
                },
                資料範圍: {
                  type: 'string',
                  description: '資料範圍',
                },
                '用水密集度-密集度(公噸/單位) ': {
                  type: 'string',
                  description: '用水密集度-密集度(公噸/單位) ',
                },
                '用水密集度-單位': {
                  type: 'string',
                  description: '用水密集度-單位',
                },
                取得驗證: {
                  type: 'string',
                  description: '取得驗證',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap46_L_2': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司企業ESG資訊揭露彙總資料-能源管理',
        description: '上市公司企業ESG資訊揭露彙總資料-能源管理',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                報告年度: {
                  type: 'string',
                  description: '報告年度',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                '使用率(再生能源/總能源)': {
                  type: 'string',
                  description: '使用率(再生能源/總能源)',
                },
                資料範圍: {
                  type: 'string',
                  description: '資料範圍',
                },
                取得驗證: {
                  type: 'string',
                  description: '取得驗證',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap46_L_1': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司企業ESG資訊揭露彙總資料-溫室氣體排放',
        description: '上市公司企業ESG資訊揭露彙總資料-溫室氣體排放',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                報告年度: {
                  type: 'string',
                  description: '報告年度',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                '範疇一排放量(噸CO2e)': {
                  type: 'string',
                  description: '範疇一排放量(噸CO2e)',
                },
                範疇一資料邊界: {
                  type: 'string',
                  description: '範疇一資料邊界',
                },
                範疇一取得驗證: {
                  type: 'string',
                  description: '範疇一取得驗證',
                },
                '範疇二排放量(噸CO2e)': {
                  type: 'string',
                  description: '範疇二排放量(噸CO2e)',
                },
                範疇二資料邊界: {
                  type: 'string',
                  description: '範疇二資料邊界',
                },
                範疇二取得驗證: {
                  type: 'string',
                  description: '範疇二取得驗證',
                },
                '範疇三排放量(噸CO2e)': {
                  type: 'string',
                  description: '範疇三排放量(噸CO2e)',
                },
                範疇三資料邊界: {
                  type: 'string',
                  description: '範疇三資料邊界',
                },
                範疇三取得驗證: {
                  type: 'string',
                  description: '範疇三取得驗證',
                },
                '溫室氣體排放密集度(噸CO2e/單位)': {
                  type: 'string',
                  description: '溫室氣體排放密集度(噸CO2e/單位)',
                },
                溫室氣體排放密集度單位: {
                  type: 'string',
                  description: '溫室氣體排放密集度單位',
                },
              },
            },
          },
        },
      },
    },
    '/ETFReport/ETFRank': {
      get: {
        tags: ['券商資料'],
        summary: '定期定額交易戶數統計排行月報表',
        description: '定期定額交易戶數統計排行月報表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                No: {
                  type: 'string',
                  description: '排序',
                },
                STOCKsSecurityCode: {
                  type: 'string',
                  description: '股票代號',
                },
                STOCKsName: {
                  type: 'string',
                  description: '股票名稱',
                },
                STOCKsNumberofTradingAccounts: {
                  type: 'string',
                  description: '股票交易戶數',
                },
                ETFsSecurityCode: {
                  type: 'string',
                  description: 'ETF代號',
                },
                ETFsName: {
                  type: 'string',
                  description: 'ETF名稱',
                },
                ETFsNumberofTradingAccounts: {
                  type: 'string',
                  description: 'ETF交易戶數',
                },
              },
            },
          },
        },
      },
    },
    '/brokerService/secRegData': {
      get: {
        tags: ['券商資料'],
        summary: '證券商辦理定期定額業務資料',
        description: '證券商辦理定期定額業務資料',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                SecuritiesFirmCode: {
                  type: 'string',
                  description: '證券商代號',
                },
                Name: {
                  type: 'string',
                  description: '證券商簡稱',
                },
                BrokerageBusinessStartingDate: {
                  type: 'string',
                  description: '經紀業務開始辦理日期',
                },
                WealthManagementBusinessStartingDate: {
                  type: 'string',
                  description: '財富管理業務開始辦理日期',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap07_X_ci': {
      get: {
        tags: ['財務報表'],
        summary: '公發公司資產負債表-一般業',
        description: '公發公司資產負債表-一般業',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                流動資產: {
                  type: 'string',
                  description: '流動資產',
                },
                非流動資產: {
                  type: 'string',
                  description: '非流動資產',
                },
                資產總計: {
                  type: 'string',
                  description: '資產總計',
                },
                流動負債: {
                  type: 'string',
                  description: '流動負債',
                },
                非流動負債: {
                  type: 'string',
                  description: '非流動負債',
                },
                負債總計: {
                  type: 'string',
                  description: '負債總計',
                },
                股本: {
                  type: 'string',
                  description: '股本',
                },
                '權益─具證券性質之虛擬通貨': {
                  type: 'string',
                  description: '權益─具證券性質之虛擬通貨',
                },
                資本公積: {
                  type: 'string',
                  description: '資本公積',
                },
                保留盈餘: {
                  type: 'string',
                  description: '保留盈餘',
                },
                其他權益: {
                  type: 'string',
                  description: '其他權益',
                },
                庫藏股票: {
                  type: 'string',
                  description: '庫藏股票',
                },
                歸屬於母公司業主之權益合計: {
                  type: 'string',
                  description: '歸屬於母公司業主之權益合計',
                },
                共同控制下前手權益: {
                  type: 'string',
                  description: '共同控制下前手權益',
                },
                合併前非屬共同控制股權: {
                  type: 'string',
                  description: '合併前非屬共同控制股權',
                },
                非控制權益: {
                  type: 'string',
                  description: '非控制權益',
                },
                權益總計: {
                  type: 'string',
                  description: '權益總計',
                },
                '待註銷股本股數（單位：股）': {
                  type: 'string',
                  description: '待註銷股本股數（單位：股）',
                },
                '預收股款（權益項下）之約當發行股數（單位：股）': {
                  type: 'string',
                  description: '預收股款（權益項下）之約當發行股數（單位：股）',
                },
                '母公司暨子公司所持有之母公司庫藏股股數（單位：股）': {
                  type: 'string',
                  description:
                    '母公司暨子公司所持有之母公司庫藏股股數（單位：股）',
                },
                每股參考淨值: {
                  type: 'string',
                  description: '每股參考淨值',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap07_X_mim': {
      get: {
        tags: ['財務報表'],
        summary: '公發公司資產負債表-異業',
        description: '公發公司資產負債表-異業',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                流動資產: {
                  type: 'string',
                  description: '流動資產',
                },
                非流動資產: {
                  type: 'string',
                  description: '非流動資產',
                },
                資產總計: {
                  type: 'string',
                  description: '資產總計',
                },
                流動負債: {
                  type: 'string',
                  description: '流動負債',
                },
                非流動負債: {
                  type: 'string',
                  description: '非流動負債',
                },
                負債總計: {
                  type: 'string',
                  description: '負債總計',
                },
                股本: {
                  type: 'string',
                  description: '股本',
                },
                '權益－具證券性質之虛擬通貨': {
                  type: 'string',
                  description: '權益－具證券性質之虛擬通貨',
                },
                資本公積: {
                  type: 'string',
                  description: '資本公積',
                },
                保留盈餘: {
                  type: 'string',
                  description: '保留盈餘',
                },
                其他權益: {
                  type: 'string',
                  description: '其他權益',
                },
                庫藏股票: {
                  type: 'string',
                  description: '庫藏股票',
                },
                歸屬於母公司業主之權益合計: {
                  type: 'string',
                  description: '歸屬於母公司業主之權益合計',
                },
                共同控制下前手權益: {
                  type: 'string',
                  description: '共同控制下前手權益',
                },
                非控制權益: {
                  type: 'string',
                  description: '非控制權益',
                },
                權益總額: {
                  type: 'string',
                  description: '權益總額',
                },
                '待註銷股本股數（單位：股）': {
                  type: 'string',
                  description: '待註銷股本股數（單位：股）',
                },
                '預收股款（權益項下）之約當發行股數（單位：股）': {
                  type: 'string',
                  description: '預收股款（權益項下）之約當發行股數（單位：股）',
                },
                '母公司暨子公司所持有之母公司庫藏股股數（單位：股）': {
                  type: 'string',
                  description:
                    '母公司暨子公司所持有之母公司庫藏股股數（單位：股）',
                },
                每股參考淨值: {
                  type: 'string',
                  description: '每股參考淨值',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap06_X_basi': {
      get: {
        tags: ['財務報表'],
        summary: '公發公司綜合損益表-金融業',
        description: '公發公司綜合損益表-金融業',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                利息淨收益: {
                  type: 'string',
                  description: '利息淨收益',
                },
                利息以外淨損益: {
                  type: 'string',
                  description: '利息以外淨損益',
                },
                '呆帳費用、承諾及保證責任準備提存': {
                  type: 'string',
                  description: '呆帳費用、承諾及保證責任準備提存',
                },
                營業費用: {
                  type: 'string',
                  description: '營業費用',
                },
                '繼續營業單位稅前淨利（淨損）': {
                  type: 'string',
                  description: '繼續營業單位稅前淨利（淨損）',
                },
                '所得稅費用（利益）': {
                  type: 'string',
                  description: '所得稅費用（利益）',
                },
                '繼續營業單位本期稅後淨利（淨損）': {
                  type: 'string',
                  description: '繼續營業單位本期稅後淨利（淨損）',
                },
                停業單位損益: {
                  type: 'string',
                  description: '停業單位損益',
                },
                合併前非屬共同控制股權損益: {
                  type: 'string',
                  description: '合併前非屬共同控制股權損益',
                },
                '本期稅後淨利（淨損）': {
                  type: 'string',
                  description: '本期稅後淨利（淨損）',
                },
                '其他綜合損益（稅後）': {
                  type: 'string',
                  description: '其他綜合損益（稅後）',
                },
                合併前非屬共同控制股權綜合損益淨額: {
                  type: 'string',
                  description: '合併前非屬共同控制股權綜合損益淨額',
                },
                '本期綜合損益總額（稅後）': {
                  type: 'string',
                  description: '本期綜合損益總額（稅後）',
                },
                '淨利（損）歸屬於母公司業主': {
                  type: 'string',
                  description: '淨利（損）歸屬於母公司業主',
                },
                '淨利（損）歸屬於共同控制下前手權益': {
                  type: 'string',
                  description: '淨利（損）歸屬於共同控制下前手權益',
                },
                '淨利（損）歸屬於非控制權益': {
                  type: 'string',
                  description: '淨利（損）歸屬於非控制權益',
                },
                綜合損益總額歸屬於母公司業主: {
                  type: 'string',
                  description: '綜合損益總額歸屬於母公司業主',
                },
                綜合損益總額歸屬於共同控制下前手權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於共同控制下前手權益',
                },
                綜合損益總額歸屬於非控制權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於非控制權益',
                },
                '基本每股盈餘（元）': {
                  type: 'string',
                  description: '基本每股盈餘（元）',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap06_X_bd': {
      get: {
        tags: ['財務報表'],
        summary: '公發公司綜合損益表-證券期貨業',
        description: '公發公司綜合損益表-證券期貨業',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                收益: {
                  type: 'string',
                  description: '收益',
                },
                支出及費用: {
                  type: 'string',
                  description: '支出及費用',
                },
                營業利益: {
                  type: 'string',
                  description: '營業利益',
                },
                營業外損益: {
                  type: 'string',
                  description: '營業外損益',
                },
                '稅前淨利（淨損）': {
                  type: 'string',
                  description: '稅前淨利（淨損）',
                },
                '所得稅費用（利益）': {
                  type: 'string',
                  description: '所得稅費用（利益）',
                },
                '繼續營業單位本期淨利（淨損）': {
                  type: 'string',
                  description: '繼續營業單位本期淨利（淨損）',
                },
                停業單位損益: {
                  type: 'string',
                  description: '停業單位損益',
                },
                合併前非屬共同控制股權損益: {
                  type: 'string',
                  description: '合併前非屬共同控制股權損益',
                },
                '本期淨利（淨損）': {
                  type: 'string',
                  description: '本期淨利（淨損）',
                },
                '本期其他綜合損益（稅後淨額）': {
                  type: 'string',
                  description: '本期其他綜合損益（稅後淨額）',
                },
                合併前非屬共同控制股權綜合損益淨額: {
                  type: 'string',
                  description: '合併前非屬共同控制股權綜合損益淨額',
                },
                本期綜合損益總額: {
                  type: 'string',
                  description: '本期綜合損益總額',
                },
                '淨利（損）歸屬於母公司業主': {
                  type: 'string',
                  description: '淨利（損）歸屬於母公司業主',
                },
                '淨利（淨損）歸屬於共同控制下前手權益': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於共同控制下前手權益',
                },
                '淨利（損）歸屬於非控制權益': {
                  type: 'string',
                  description: '淨利（損）歸屬於非控制權益',
                },
                綜合損益總額歸屬於母公司業主: {
                  type: 'string',
                  description: '綜合損益總額歸屬於母公司業主',
                },
                綜合損益總額歸屬於共同控制下前手權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於共同控制下前手權益',
                },
                綜合損益總額歸屬於非控制權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於非控制權益',
                },
                '基本每股盈餘（元）': {
                  type: 'string',
                  description: '基本每股盈餘（元）',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap06_X_ci': {
      get: {
        tags: ['財務報表'],
        summary: '公發公司綜合損益表-一般業',
        description: '公發公司綜合損益表-一般業',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                營業收入: {
                  type: 'string',
                  description: '營業收入',
                },
                營業成本: {
                  type: 'string',
                  description: '營業成本',
                },
                '原始認列生物資產及農產品之利益（損失）': {
                  type: 'string',
                  description: '原始認列生物資產及農產品之利益（損失）',
                },
                '生物資產當期公允價值減出售成本之變動利益（損失）': {
                  type: 'string',
                  description:
                    '生物資產當期公允價值減出售成本之變動利益（損失）',
                },
                '營業毛利（毛損）': {
                  type: 'string',
                  description: '營業毛利（毛損）',
                },
                '未實現銷貨（損）益': {
                  type: 'string',
                  description: '未實現銷貨（損）益',
                },
                '已實現銷貨（損）益': {
                  type: 'string',
                  description: '已實現銷貨（損）益',
                },
                '營業毛利（毛損）淨額': {
                  type: 'string',
                  description: '營業毛利（毛損）淨額',
                },
                營業費用: {
                  type: 'string',
                  description: '營業費用',
                },
                其他收益及費損淨額: {
                  type: 'string',
                  description: '其他收益及費損淨額',
                },
                '營業利益（損失）': {
                  type: 'string',
                  description: '營業利益（損失）',
                },
                營業外收入及支出: {
                  type: 'string',
                  description: '營業外收入及支出',
                },
                '稅前淨利（淨損）': {
                  type: 'string',
                  description: '稅前淨利（淨損）',
                },
                '所得稅費用（利益）': {
                  type: 'string',
                  description: '所得稅費用（利益）',
                },
                '繼續營業單位本期淨利（淨損）': {
                  type: 'string',
                  description: '繼續營業單位本期淨利（淨損）',
                },
                停業單位損益: {
                  type: 'string',
                  description: '停業單位損益',
                },
                合併前非屬共同控制股權損益: {
                  type: 'string',
                  description: '合併前非屬共同控制股權損益',
                },
                '本期淨利（淨損）': {
                  type: 'string',
                  description: '本期淨利（淨損）',
                },
                '其他綜合損益（淨額）': {
                  type: 'string',
                  description: '其他綜合損益（淨額）',
                },
                合併前非屬共同控制股權綜合損益淨額: {
                  type: 'string',
                  description: '合併前非屬共同控制股權綜合損益淨額',
                },
                本期綜合損益總額: {
                  type: 'string',
                  description: '本期綜合損益總額',
                },
                '淨利（淨損）歸屬於母公司業主': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於母公司業主',
                },
                '淨利（淨損）歸屬於共同控制下前手權益': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於共同控制下前手權益',
                },
                '淨利（淨損）歸屬於非控制權益': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於非控制權益',
                },
                綜合損益總額歸屬於母公司業主: {
                  type: 'string',
                  description: '綜合損益總額歸屬於母公司業主',
                },
                綜合損益總額歸屬於共同控制下前手權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於共同控制下前手權益',
                },
                綜合損益總額歸屬於非控制權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於非控制權益',
                },
                '基本每股盈餘（元）': {
                  type: 'string',
                  description: '基本每股盈餘（元）',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap06_X_fh': {
      get: {
        tags: ['財務報表'],
        summary: '公發公司綜合損益表-金控業',
        description: '公發公司綜合損益表-金控業',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                利息淨收益: {
                  type: 'string',
                  description: '利息淨收益',
                },
                利息以外淨收益: {
                  type: 'string',
                  description: '利息以外淨收益',
                },
                淨收益: {
                  type: 'string',
                  description: '淨收益',
                },
                '呆帳費用、承諾及保證責任準備提存': {
                  type: 'string',
                  description: '呆帳費用、承諾及保證責任準備提存',
                },
                保險負債準備淨變動: {
                  type: 'string',
                  description: '保險負債準備淨變動',
                },
                營業費用: {
                  type: 'string',
                  description: '營業費用',
                },
                繼續營業單位稅前損益: {
                  type: 'string',
                  description: '繼續營業單位稅前損益',
                },
                '所得稅（費用）利益': {
                  type: 'string',
                  description: '所得稅（費用）利益',
                },
                '繼續營業單位本期淨利（淨損）': {
                  type: 'string',
                  description: '繼續營業單位本期淨利（淨損）',
                },
                停業單位損益: {
                  type: 'string',
                  description: '停業單位損益',
                },
                '本期稅後淨利（淨損）': {
                  type: 'string',
                  description: '本期稅後淨利（淨損）',
                },
                '本期其他綜合損益（稅後淨額）': {
                  type: 'string',
                  description: '本期其他綜合損益（稅後淨額）',
                },
                本期綜合損益總額: {
                  type: 'string',
                  description: '本期綜合損益總額',
                },
                '淨利（淨損）歸屬於母公司業主': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於母公司業主',
                },
                '淨利（淨損）歸屬於共同控制下前手權益': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於共同控制下前手權益',
                },
                '淨利（淨損）歸屬於非控制權益': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於非控制權益',
                },
                綜合損益總額歸屬於母公司業主: {
                  type: 'string',
                  description: '綜合損益總額歸屬於母公司業主',
                },
                綜合損益總額歸屬於共同控制下前手權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於共同控制下前手權益',
                },
                綜合損益總額歸屬於非控制權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於非控制權益',
                },
                '基本每股盈餘（元）': {
                  type: 'string',
                  description: '基本每股盈餘（元）',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap06_X_ins': {
      get: {
        tags: ['財務報表'],
        summary: '公發公司綜合損益表-保險業',
        description: '公發公司綜合損益表-保險業',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                營業收入: {
                  type: 'string',
                  description: '營業收入',
                },
                營業成本: {
                  type: 'string',
                  description: '營業成本',
                },
                營業費用: {
                  type: 'string',
                  description: '營業費用',
                },
                '營業利益（損失）': {
                  type: 'string',
                  description: '營業利益（損失）',
                },
                營業外收入及支出: {
                  type: 'string',
                  description: '營業外收入及支出',
                },
                '繼續營業單位稅前純益（純損）': {
                  type: 'string',
                  description: '繼續營業單位稅前純益（純損）',
                },
                '所得稅費用（利益）': {
                  type: 'string',
                  description: '所得稅費用（利益）',
                },
                '繼續營業單位本期純益（純損）': {
                  type: 'string',
                  description: '繼續營業單位本期純益（純損）',
                },
                停業單位損益: {
                  type: 'string',
                  description: '停業單位損益',
                },
                合併前非屬共同控制股權損益: {
                  type: 'string',
                  description: '合併前非屬共同控制股權損益',
                },
                '本期淨利（淨損）': {
                  type: 'string',
                  description: '本期淨利（淨損）',
                },
                '其他綜合損益（稅後淨額）': {
                  type: 'string',
                  description: '其他綜合損益（稅後淨額）',
                },
                合併前非屬共同控制股權綜合損益淨額: {
                  type: 'string',
                  description: '合併前非屬共同控制股權綜合損益淨額',
                },
                本期綜合損益總額: {
                  type: 'string',
                  description: '本期綜合損益總額',
                },
                '淨利（淨損）歸屬於母公司業主': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於母公司業主',
                },
                '淨利（淨損）歸屬於共同控制下前手權益': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於共同控制下前手權益',
                },
                '淨利（淨損）歸屬於非控制權益': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於非控制權益',
                },
                綜合損益總額歸屬於母公司業主: {
                  type: 'string',
                  description: '綜合損益總額歸屬於母公司業主',
                },
                綜合損益總額歸屬於共同控制下前手權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於共同控制下前手權益',
                },
                綜合損益總額歸屬於非控制權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於非控制權益',
                },
                '基本每股盈餘（元）': {
                  type: 'string',
                  description: '基本每股盈餘（元）',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap06_X_mim': {
      get: {
        tags: ['財務報表'],
        summary: '公發公司綜合損益表-異業',
        description: '公發公司綜合損益表-異業',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                收入: {
                  type: 'string',
                  description: '收入',
                },
                支出: {
                  type: 'string',
                  description: '支出',
                },
                '繼續營業單位稅前淨利（淨損）': {
                  type: 'string',
                  description: '繼續營業單位稅前淨利（淨損）',
                },
                '所得稅費用（利益）': {
                  type: 'string',
                  description: '所得稅費用（利益）',
                },
                '繼續營業單位本期淨利（淨損）': {
                  type: 'string',
                  description: '繼續營業單位本期淨利（淨損）',
                },
                停業單位損益: {
                  type: 'string',
                  description: '停業單位損益',
                },
                '本期淨利（淨損）': {
                  type: 'string',
                  description: '本期淨利（淨損）',
                },
                其他綜合損益: {
                  type: 'string',
                  description: '其他綜合損益',
                },
                本期綜合損益總額: {
                  type: 'string',
                  description: '本期綜合損益總額',
                },
                '淨利（淨損）歸屬於母公司業主': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於母公司業主',
                },
                '淨利（淨損）歸屬於共同控制下前手權益': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於共同控制下前手權益',
                },
                '淨利（淨損）歸屬於非控制權益': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於非控制權益',
                },
                綜合損益總額歸屬於母公司業主: {
                  type: 'string',
                  description: '綜合損益總額歸屬於母公司業主',
                },
                綜合損益總額歸屬於共同控制下前手權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於共同控制下前手權益',
                },
                綜合損益總額歸屬於非控制權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於非控制權益',
                },
                '基本每股盈餘（元）': {
                  type: 'string',
                  description: '基本每股盈餘（元）',
                },
              },
            },
          },
        },
      },
    },
    '/news/eventList': {
      get: {
        tags: ['其他'],
        summary: '證交所活動訊息',
        description: '證交所活動訊息',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                No: {
                  type: 'string',
                  description: 'No',
                },
                Title: {
                  type: 'string',
                  description: '活動主題',
                },
                Details: {
                  type: 'string',
                  description: '詳細內容',
                },
              },
            },
          },
        },
      },
    },
    '/company/applylistingForeign': {
      get: {
        tags: ['公司治理'],
        summary: '外國公司向證交所申請第一上市之公司',
        description: '外國公司向證交所申請第一上市之公司',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                No: {
                  type: 'string',
                  description: '索引',
                },
                Code: {
                  type: 'string',
                  description: '公司代號',
                },
                Company: {
                  type: 'string',
                  description: '公司簡稱',
                },
                ApplicationDate: {
                  type: 'string',
                  description: '申請日期',
                },
                Chairman: {
                  type: 'string',
                  description: '董事長',
                },
                'AmountofCapital ': {
                  type: 'string',
                  description: '申請時股本(仟元)',
                },
                CommitteeDate: {
                  type: 'string',
                  description: '上市審議委員會審議日期',
                },
                ApprovedDate: {
                  type: 'string',
                  description: '交易所董事會通過上市日期',
                },
                AgreementDate: {
                  type: 'string',
                  description: '上市契約報請主管機關備查(主管機關核准)日期',
                },
                ListingDate: {
                  type: 'string',
                  description: '股票上市買賣日期',
                },
                Underwriter: {
                  type: 'string',
                  description: '承銷商',
                },
                UnderwritingPrice: {
                  type: 'string',
                  description: '承銷價',
                },
                Note: {
                  type: 'string',
                  description: '備註',
                },
              },
            },
          },
        },
      },
    },
    '/company/newlisting': {
      get: {
        tags: ['公司治理'],
        summary: '最近上市公司',
        description: '最近上市公司',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Code: {
                  type: 'string',
                  description: '公司代號',
                },
                Company: {
                  type: 'string',
                  description: '公司簡稱',
                },
                ApplicationDate: {
                  type: 'string',
                  description: '申請日期',
                },
                Chairman: {
                  type: 'string',
                  description: '董事長',
                },
                'AmountofCapital ': {
                  type: 'string',
                  description: '申請時股本(仟元)',
                },
                CommitteeDate: {
                  type: 'string',
                  description: '上市審議委員會審議日期',
                },
                ApprovedDate: {
                  type: 'string',
                  description: '交易所董事會通過上市日期',
                },
                AgreementDate: {
                  type: 'string',
                  description: '上市契約報請主管機關備查日期',
                },
                ListingDate: {
                  type: 'string',
                  description: '證期局核准上市契約日期',
                },
                ApprovedListingDate: {
                  type: 'string',
                  description: '股票上市買賣日期',
                },
                Underwriter: {
                  type: 'string',
                  description: '承銷商',
                },
                UnderwritingPrice: {
                  type: 'string',
                  description: '承銷價',
                },
                Note: {
                  type: 'string',
                  description: '備註',
                },
              },
            },
          },
        },
      },
    },
    '/company/suspendListingCsvAndHtml': {
      get: {
        tags: ['公司治理'],
        summary: '終止上市公司',
        description: '終止上市公司',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                DelistingDate: {
                  type: 'string',
                  description: '終止上市日期',
                },
                Company: {
                  type: 'string',
                  description: '公司名稱',
                },
                Code: {
                  type: 'string',
                  description: '上市編號',
                },
              },
            },
          },
        },
      },
    },
    '/brokerService/brokerList': {
      get: {
        tags: ['券商資料'],
        summary: '證券商總公司基本資料',
        description: '證券商總公司基本資料',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Code: {
                  type: 'string',
                  description: '證券商代號',
                },
                Name: {
                  type: 'string',
                  description: '證券商名稱',
                },
                EstablishmentDate: {
                  type: 'string',
                  description: '開業日',
                },
                Address: {
                  type: 'string',
                  description: '地址',
                },
                Telephone: {
                  type: 'string',
                  description: '電話',
                },
              },
            },
          },
        },
      },
    },
    '/news/newsList': {
      get: {
        tags: ['其他'],
        summary: '證交所新聞',
        description: '證交所新聞',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Title: {
                  type: 'string',
                  description: '標題',
                },
                Url: {
                  type: 'string',
                  description: '連結',
                },
                Date: {
                  type: 'string',
                  description: '日期',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/BWIBBU_ALL': {
      get: {
        tags: ['證券交易'],
        summary: '上市個股日本益比、殖利率及股價淨值比（依代碼查詢）',
        description: '上市個股日本益比、殖利率及股價淨值比（依代碼查詢）',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Code: {
                  type: 'string',
                  description: '股票代號',
                },
                Name: {
                  type: 'string',
                  description: '股票名稱',
                },
                PEratio: {
                  type: 'string',
                  description: '本益比',
                },
                DividendYield: {
                  type: 'string',
                  description: '殖利率(%)',
                },
                PBratio: {
                  type: 'string',
                  description: '股價淨值比',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/STOCK_DAY_AVG_ALL': {
      get: {
        tags: ['證券交易'],
        summary: '上市個股日收盤價及月平均價',
        description: '上市個股日收盤價及月平均價',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Code: {
                  type: 'string',
                  description: '股票代號',
                },
                Name: {
                  type: 'string',
                  description: '股票名稱',
                },
                ClosingPrice: {
                  type: 'string',
                  description: '收盤價',
                },
                MonthlyAveragePrice: {
                  type: 'string',
                  description: '月平均價',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/STOCK_DAY_ALL': {
      get: {
        tags: ['證券交易'],
        summary: '上市個股日成交資訊',
        description: '上市個股日成交資訊',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Code: {
                  type: 'string',
                  description: '證券代號',
                },
                Name: {
                  type: 'string',
                  description: '證券名稱',
                },
                TradeVolume: {
                  type: 'string',
                  description: '成交股數',
                },
                TradeValue: {
                  type: 'string',
                  description: '成交金額',
                },
                OpeningPrice: {
                  type: 'string',
                  description: '開盤價',
                },
                HighestPrice: {
                  type: 'string',
                  description: '最高價',
                },
                LowestPrice: {
                  type: 'string',
                  description: '最低價',
                },
                ClosingPrice: {
                  type: 'string',
                  description: '收盤價',
                },
                Change: {
                  type: 'string',
                  description: '漲跌價差',
                },
                Transaction: {
                  type: 'string',
                  description: '成交筆數',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/FMSRFK_ALL': {
      get: {
        tags: ['證券交易'],
        summary: '上市個股月成交資訊',
        description: '上市個股月成交資訊',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Code: {
                  type: 'string',
                  description: '股票代號',
                },
                Name: {
                  type: 'string',
                  description: '股票名稱',
                },
                HighestPrice: {
                  type: 'string',
                  description: '最高價',
                },
                LowestPrice: {
                  type: 'string',
                  description: '最低價',
                },
                WeightedAvgPriceAB: {
                  type: 'string',
                  description: '加權(A/B)平均價',
                },
                Transaction: {
                  type: 'string',
                  description: '成交筆數',
                },
                TradeValueA: {
                  type: 'string',
                  description: '成交金額(A)',
                },
                TradeVolumeB: {
                  type: 'string',
                  description: '成交股數(B)',
                },
                TurnoverRatio: {
                  type: 'string',
                  description: '週轉率(%)',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/FMNPTK_ALL': {
      get: {
        tags: ['證券交易'],
        summary: '上市個股年成交資訊',
        description: '上市個股年成交資訊',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Code: {
                  type: 'string',
                  description: '股票代號',
                },
                Name: {
                  type: 'string',
                  description: '股票名稱',
                },
                TradeVolume: {
                  type: 'string',
                  description: '成交股數',
                },
                TradeValue: {
                  type: 'string',
                  description: '成交金額',
                },
                Transaction: {
                  type: 'string',
                  description: '成交筆數',
                },
                HighestPrice: {
                  type: 'string',
                  description: '最高價',
                },
                HDate: {
                  type: 'string',
                  description: '日期',
                },
                LowestPrice: {
                  type: 'string',
                  description: '最低價',
                },
                LDate: {
                  type: 'string',
                  description: '日期',
                },
                AvgClosingPrice: {
                  type: 'string',
                  description: '收盤平均價',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/MI_INDEX': {
      get: {
        tags: ['證券交易'],
        summary: '每日收盤行情-大盤統計資訊',
        description: '每日收盤行情-大盤統計資訊',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                指數: {
                  type: 'string',
                  description: '指數',
                },
                收盤指數: {
                  type: 'string',
                  description: '收盤指數',
                },
                漲跌: {
                  type: 'string',
                  description: '漲跌(+/-)',
                },
                漲跌點數: {
                  type: 'string',
                  description: '漲跌點數',
                },
                漲跌百分比: {
                  type: 'string',
                  description: '漲跌百分比(%)',
                },
                特殊處理註記: {
                  type: 'string',
                  description: '特殊處理註記',
                },
              },
            },
          },
        },
      },
    },
    '/company/applylistingLocal': {
      get: {
        tags: ['公司治理'],
        summary: '申請上市之本國公司',
        description: '申請上市之本國公司',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Code: {
                  type: 'string',
                  description: '公司代號',
                },
                Company: {
                  type: 'string',
                  description: '公司簡稱',
                },
                ApplicationDate: {
                  type: 'string',
                  description: '申請日期',
                },
                Chairman: {
                  type: 'string',
                  description: '董事長',
                },
                'AmountofCapital ': {
                  type: 'string',
                  description: '申請時股本(仟元)',
                },
                CommitteeDate: {
                  type: 'string',
                  description: '上市審議委員會審議日期',
                },
                ApprovedDate: {
                  type: 'string',
                  description: '交易所董事會通過上市日期',
                },
                AgreementDate: {
                  type: 'string',
                  description: '上市契約報請主管機關備查日期',
                },
                ListingDate: {
                  type: 'string',
                  description: '證期局核准上市契約日期',
                },
                ApprovedListingDate: {
                  type: 'string',
                  description: '股票上市買賣日期',
                },
                Underwriter: {
                  type: 'string',
                  description: '承銷商',
                },
                UnderwritingPrice: {
                  type: 'string',
                  description: '承銷價',
                },
                Note: {
                  type: 'string',
                  description: '備註',
                },
              },
            },
          },
        },
      },
    },
    '/fund/MI_QFIIS_cat': {
      get: {
        tags: ['證券交易'],
        summary: '集中市場外資及陸資投資類股持股比率表',
        description: '集中市場外資及陸資投資類股持股比率表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                IndustryCat: {
                  type: 'string',
                  description: '產業別',
                },
                Numbers: {
                  type: 'string',
                  description: '家數',
                },
                ShareNumber: {
                  type: 'string',
                  description: '總發行股數',
                },
                ForeignMainlandAreaShare: {
                  type: 'string',
                  description: '僑外資及陸資持有總股數',
                },
                Percentage: {
                  type: 'string',
                  description: '僑外資及陸資持股比率',
                },
              },
            },
          },
        },
      },
    },
    '/fund/MI_QFIIS_sort_20': {
      get: {
        tags: ['證券交易'],
        summary: '集中市場外資及陸資持股前 20 名彙總表',
        description: '集中市場外資及陸資持股前 20 名彙總表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Rank: {
                  type: 'string',
                  description: '排行',
                },
                Code: {
                  type: 'string',
                  description: '證券代號',
                },
                Name: {
                  type: 'string',
                  description: '證券名稱',
                },
                ShareNumber: {
                  type: 'string',
                  description: '發行股數',
                },
                AvailableShare: {
                  type: 'string',
                  description: '外資及陸資尚可投資股數',
                },
                SharesHeld: {
                  type: 'string',
                  description: '全體外資及陸資持有股數',
                },
                AvailableInvestPer: {
                  type: 'string',
                  description: '全體外資及陸資尚可投資比率',
                },
                SharesHeldPer: {
                  type: 'string',
                  description: '全體外資及陸資持股比率',
                },
                Upperlimit: {
                  type: 'string',
                  description: '法令投資上限比率',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/BFI61U': {
      get: {
        tags: ['其他'],
        summary: '中央登錄公債補息資料表',
        description: '中央登錄公債補息資料表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Code: {
                  type: 'string',
                  description: '債券代號',
                },
                Name: {
                  type: 'string',
                  description: '債券簡稱',
                },
                IssuedDate: {
                  type: 'string',
                  description: '發行日期',
                },
                StartingDate: {
                  type: 'string',
                  description: '起息日',
                },
                CouponRate: {
                  type: 'string',
                  description: '票面利率',
                },
                DailyAccInterest: {
                  type: 'string',
                  description: '每日補息金額 (以面額十萬元計算)',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/TWT88U': {
      get: {
        tags: ['證券交易'],
        summary: '上市個股首五日無漲跌幅',
        description: '上市個股首五日無漲跌幅',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                SecurCode: {
                  type: 'string',
                  description: '證券代號',
                },
                SecurName: {
                  type: 'string',
                  description: '號證券名稱',
                },
                '1stTradingDate': {
                  type: 'string',
                  description: '稱執行起始日始',
                },
                '5thTradingDate': {
                  type: 'string',
                  description: '始執行到期日期',
                },
                PriceUnderwritten: {
                  type: 'string',
                  description: '期承銷價',
                },
                OverAllotmentShares: {
                  type: 'string',
                  description: '過額配售數量',
                },
                Code: {
                  type: 'string',
                  description: '代碼別',
                },
                Name: {
                  type: 'string',
                  description: '承銷商名稱',
                },
                BuySell: {
                  type: 'string',
                  description: '買賣別',
                },
                TradingPrice: {
                  type: 'string',
                  description: '成交價',
                },
                TradingVolume: {
                  type: 'string',
                  description: '成交數量',
                },
                AccTradingVolume: {
                  type: 'string',
                  description: '累積成交數量',
                },
              },
            },
          },
        },
      },
    },
    '/Announcement/BFZFZU_T': {
      get: {
        tags: ['證券交易'],
        summary: '投資理財節目異常推介個股',
        description: '投資理財節目異常推介個股',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Number: {
                  type: 'string',
                  description: '編號',
                },
                Code: {
                  type: 'string',
                  description: '異常推介股票證券代號',
                },
                Name: {
                  type: 'string',
                  description: '異常推介股票證券名稱',
                },
                Date: {
                  type: 'string',
                  description: '日期',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/TWTB4U': {
      get: {
        tags: ['證券交易'],
        summary: '上市股票每日當日沖銷交易標的及統計',
        description: '上市股票每日當日沖銷交易標的及統計',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Code: {
                  type: 'string',
                  description: '證券代號',
                },
                Name: {
                  type: 'string',
                  description: '證券名稱',
                },
                Suspension: {
                  type: 'string',
                  description: '暫停現股賣出後現款買進當沖註記',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/TWTBAU1': {
      get: {
        tags: ['證券交易'],
        summary: '集中市場暫停先賣後買當日沖銷交易標的預告表',
        description: '集中市場暫停先賣後買當日沖銷交易標的預告表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Code: {
                  type: 'string',
                  description: '證券代號',
                },
                Name: {
                  type: 'string',
                  description: '證券名稱',
                },
                StartDate: {
                  type: 'string',
                  description: '停止先賣後買開始日',
                },
                EndDate: {
                  type: 'string',
                  description: '停止先賣後買結束日',
                },
                Reason: {
                  type: 'string',
                  description: '原因',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/TWTBAU2': {
      get: {
        tags: ['證券交易'],
        summary: '集中市場暫停先賣後買當日沖銷交易歷史查詢',
        description: '集中市場暫停先賣後買當日沖銷交易歷史查詢',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Code: {
                  type: 'string',
                  description: '股票代號',
                },
                Name: {
                  type: 'string',
                  description: '股票名稱',
                },
                StartDate: {
                  type: 'string',
                  description: '停止先賣後買開始日',
                },
                EndDate: {
                  type: 'string',
                  description: '停止先賣後買結束日',
                },
                Reason: {
                  type: 'string',
                  description: '原因',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/MI_INDEX4': {
      get: {
        tags: ['指數'],
        summary: '每日上市上櫃跨市場成交資訊',
        description: '每日上市上櫃跨市場成交資訊',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Date: {
                  type: 'string',
                  description: '日期',
                },
                TradeValue: {
                  type: 'string',
                  description: '成交金額(元)',
                },
                FormosaIndex: {
                  type: 'string',
                  description: '寶島股價指數',
                },
                Change: {
                  type: 'string',
                  description: '漲跌點數',
                },
              },
            },
          },
        },
      },
    },
    '/indicesReport/FRMSA': {
      get: {
        tags: ['指數'],
        summary: '寶島股價指數歷史資料',
        description: '寶島股價指數歷史資料',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Date: {
                  type: 'string',
                  description: '日期',
                },
                FormosaIndex: {
                  type: 'string',
                  description: '寶島股價指數',
                },
                FormosaTotalReturnIndex: {
                  type: 'string',
                  description: '寶島股價報酬指數',
                },
              },
            },
          },
        },
      },
    },
    '/indicesReport/TAI50I': {
      get: {
        tags: ['指數'],
        summary: '臺灣 50 指數歷史資料',
        description: '臺灣 50 指數歷史資料',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Date: {
                  type: 'string',
                  description: '日期',
                },
                Taiwan50Index: {
                  type: 'string',
                  description: '臺灣50指數',
                },
                Taiwan50TotalReturnIndex: {
                  type: 'string',
                  description: '臺灣50報酬指數',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/MI_5MINS': {
      get: {
        tags: ['證券交易'],
        summary: '每 5 秒委託成交統計',
        description: '每 5 秒委託成交統計',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Time: {
                  type: 'string',
                  description: '時間',
                },
                AccBidOrders: {
                  type: 'string',
                  description: '累積委託買進筆數',
                },
                AccBidVolume: {
                  type: 'string',
                  description: '累積委託買進數量',
                },
                AccAskOrders: {
                  type: 'string',
                  description: '累積委託賣出筆數',
                },
                AccAskVolume: {
                  type: 'string',
                  description: '累積委託賣出數量',
                },
                AccTransaction: {
                  type: 'string',
                  description: '累積成交筆數',
                },
                AccTradeVolume: {
                  type: 'string',
                  description: '累積成交數量',
                },
                AccTradeValue: {
                  type: 'string',
                  description: '累積成交金額',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/FMTQIK': {
      get: {
        tags: ['證券交易'],
        summary: '集中市場每日市場成交資訊',
        description: '集中市場每日市場成交資訊',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Date: {
                  type: 'string',
                  description: '日期',
                },
                TradeVolume: {
                  type: 'string',
                  description: '成交股數',
                },
                TradeValue: {
                  type: 'string',
                  description: '成交金額',
                },
                Transaction: {
                  type: 'string',
                  description: '成交筆數',
                },
                TAIEX: {
                  type: 'string',
                  description: '發行量加權股價指數',
                },
                Change: {
                  type: 'string',
                  description: '漲跌點數',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/MI_INDEX20': {
      get: {
        tags: ['證券交易'],
        summary: '集中市場每日成交量前二十名證券',
        description: '集中市場每日成交量前二十名證券',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Rank: {
                  type: 'string',
                  description: '排名',
                },
                Code: {
                  type: 'string',
                  description: '證券代號',
                },
                Name: {
                  type: 'string',
                  description: '證券名稱',
                },
                TradeVolume: {
                  type: 'string',
                  description: '成交股數',
                },
                Transaction: {
                  type: 'string',
                  description: '成交筆數',
                },
                OpeningPrice: {
                  type: 'string',
                  description: '開盤價',
                },
                HighestPrice: {
                  type: 'string',
                  description: '最高價',
                },
                LowestPrice: {
                  type: 'string',
                  description: '最低價',
                },
                ClosingPrice: {
                  type: 'string',
                  description: '收盤價',
                },
                Dir: {
                  type: 'string',
                  description: '漲跌(+/-)',
                },
                Change: {
                  type: 'string',
                  description: '漲跌價差',
                },
                LastBestBidPrice: {
                  type: 'string',
                  description: '最後揭示買價',
                },
                LastBestAskPrice: {
                  type: 'string',
                  description: '最後揭示賣價',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/TWT53U': {
      get: {
        tags: ['證券交易'],
        summary: '集中市場零股交易行情單',
        description: '集中市場零股交易行情單',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Code: {
                  type: 'string',
                  description: '證券代號',
                },
                Name: {
                  type: 'string',
                  description: '證券名稱',
                },
                TradeVolume: {
                  type: 'string',
                  description: '成交股數',
                },
                Transaction: {
                  type: 'string',
                  description: '成交筆數',
                },
                TradeValue: {
                  type: 'string',
                  description: '成交金額',
                },
                TradePrice: {
                  type: 'string',
                  description: '成交價',
                },
                BestBidPrice: {
                  type: 'string',
                  description: '最後揭示買價',
                },
                BestBidVolume: {
                  type: 'string',
                  description: '最後揭示買量',
                },
                BestAskPrice: {
                  type: 'string',
                  description: '最後揭示賣價',
                },
                BestAskVolume: {
                  type: 'string',
                  description: '最後揭示賣量',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/TWTAWU': {
      get: {
        tags: ['證券交易'],
        summary: '集中市場暫停交易證券',
        description: '集中市場暫停交易證券',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Number: {
                  type: 'string',
                  description: '編號',
                },
                Code: {
                  type: 'string',
                  description: '證券代號',
                },
                Name: {
                  type: 'string',
                  description: '證券名稱',
                },
                TradingHaltDate: {
                  type: 'string',
                  description: '暫停交易日期',
                },
                TradingHaltTime: {
                  type: 'string',
                  description: '暫停交易時間',
                },
                TradingResumptionDate: {
                  type: 'string',
                  description: '恢復交易日期',
                },
                TradingResumptionTime: {
                  type: 'string',
                  description: '恢復交易時間',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/BFT41U': {
      get: {
        tags: ['證券交易'],
        summary: '集中市場盤後定價交易',
        description: '集中市場盤後定價交易',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Code: {
                  type: 'string',
                  description: '證券代號',
                },
                Name: {
                  type: 'string',
                  description: '證券名稱',
                },
                TradeVolume: {
                  type: 'string',
                  description: '成交數量',
                },
                Transaction: {
                  type: 'string',
                  description: '成交筆數',
                },
                TradeValue: {
                  type: 'string',
                  description: '成交金額',
                },
                TradePrice: {
                  type: 'string',
                  description: '成交價',
                },
                BidVolume: {
                  type: 'string',
                  description: '最後揭示買量',
                },
                AskVolume: {
                  type: 'string',
                  description: '最後揭示賣量',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/BFI84U': {
      get: {
        tags: ['證券交易'],
        summary: '集中市場停資停券預告表',
        description: '集中市場停資停券預告表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Code: {
                  type: 'string',
                  description: '股票代號',
                },
                Name: {
                  type: 'string',
                  description: '股票名稱',
                },
                StartDate: {
                  type: 'string',
                  description: '停券日(最後回補日)',
                },
                EndDate: {
                  type: 'string',
                  description: '停券迄日',
                },
                Reason: {
                  type: 'string',
                  description: '原因',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/MI_MARGN': {
      get: {
        tags: ['證券交易'],
        summary: '集中市場融資融券餘額',
        description: '集中市場融資融券餘額',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                股票代號: {
                  type: 'string',
                  description: '股票代號',
                },
                股票名稱: {
                  type: 'string',
                  description: '股票名稱',
                },
                融資買進: {
                  type: 'string',
                  description: '融資買進',
                },
                融資賣出: {
                  type: 'string',
                  description: '融資賣出',
                },
                融資現金償還: {
                  type: 'string',
                  description: '融資現金償還',
                },
                融資前日餘額: {
                  type: 'string',
                  description: '融資前日餘額',
                },
                融資今日餘額: {
                  type: 'string',
                  description: '融資今日餘額',
                },
                融資限額: {
                  type: 'string',
                  description: '融資限額',
                },
                融券買進: {
                  type: 'string',
                  description: '融券買進',
                },
                融券賣出: {
                  type: 'string',
                  description: '融券賣出',
                },
                融券現券償還: {
                  type: 'string',
                  description: '融券現券償還',
                },
                融券前日餘額: {
                  type: 'string',
                  description: '融券前日餘額',
                },
                融券今日餘額: {
                  type: 'string',
                  description: '融券今日餘額',
                },
                融券限額: {
                  type: 'string',
                  description: '融券限額',
                },
                資券互抵: {
                  type: 'string',
                  description: '資券互抵',
                },
                註記: {
                  type: 'string',
                  description: '註記',
                },
              },
            },
          },
        },
      },
    },
    '/indicesReport/MI_5MINS_HIST': {
      get: {
        tags: ['指數'],
        summary: '發行量加權股價指數歷史資料',
        description: '發行量加權股價指數歷史資料',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Date: {
                  type: 'string',
                  description: '日期',
                },
                OpeningIndex: {
                  type: 'string',
                  description: '開盤指數',
                },
                HighestIndex: {
                  type: 'string',
                  description: '最高指數',
                },
                LowestIndex: {
                  type: 'string',
                  description: '最低指數',
                },
                ClosingIndex: {
                  type: 'string',
                  description: '收盤指數',
                },
              },
            },
          },
        },
      },
    },
    '/block/BFIAUU_d': {
      get: {
        tags: ['證券交易'],
        summary: '集中市場鉅額交易日成交量值統計',
        description: '集中市場鉅額交易日成交量值統計',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Date: {
                  type: 'string',
                  description: '日期',
                },
                Class: {
                  type: 'string',
                  description: '交易別',
                },
                Type: {
                  type: 'string',
                  description: '類別',
                },
                TradeVolume: {
                  type: 'string',
                  description: '成交股數',
                },
                MarketSharePer: {
                  type: 'string',
                  description: '成交金額占市場比重%',
                },
                TradeValue: {
                  type: 'string',
                  description: '成交金額',
                },
              },
            },
          },
        },
      },
    },
    '/block/BFIAUU_m': {
      get: {
        tags: ['證券交易'],
        summary: '集中市場鉅額交易月成交量值統計',
        description: '集中市場鉅額交易月成交量值統計',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Month: {
                  type: 'string',
                  description: '成交月份',
                },
                Class: {
                  type: 'string',
                  description: '交易別',
                },
                TradeVolume: {
                  type: 'string',
                  description: '成交股數',
                },
                MarketSharePer: {
                  type: 'string',
                  description: '成交金額占市場比重%',
                },
                TradeValue: {
                  type: 'string',
                  description: '成交金額',
                },
              },
            },
          },
        },
      },
    },
    '/block/BFIAUU_y': {
      get: {
        tags: ['證券交易'],
        summary: '集中市場鉅額交易年成交量值統計',
        description: '集中市場鉅額交易年成交量值統計',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Month: {
                  type: 'string',
                  description: '成交月份',
                },
                TradeVolume: {
                  type: 'string',
                  description: '成交股數',
                },
                MarketSharePer: {
                  type: 'string',
                  description: '成交金額占市場比重%',
                },
                TradeValue: {
                  type: 'string',
                  description: '成交金額',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/STOCK_FIRST': {
      get: {
        tags: ['證券交易'],
        summary: '每日第一上市外國股票成交量值',
        description: '每日第一上市外國股票成交量值',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Code: {
                  type: 'string',
                  description: '證券代號',
                },
                Name: {
                  type: 'string',
                  description: '證券名稱',
                },
                TradeVolume: {
                  type: 'string',
                  description: '成交股數',
                },
                Transaction: {
                  type: 'string',
                  description: '成交筆數',
                },
                TradeValue: {
                  type: 'string',
                  description: '成交金額',
                },
                OpeningPrice: {
                  type: 'string',
                  description: '開盤價',
                },
                HighestPrice: {
                  type: 'string',
                  description: '最高價',
                },
                LowestPrice: {
                  type: 'string',
                  description: '最低價',
                },
                ClosingPrice: {
                  type: 'string',
                  description: '收盤價',
                },
                Dir: {
                  type: 'string',
                  description: '+/-',
                },
                Change: {
                  type: 'string',
                  description: '漲跌價',
                },
                LastBestBidPrice: {
                  type: 'string',
                  description: '最後揭示買價',
                },
                LastBestBidVolume: {
                  type: 'string',
                  description: '買進揭示委託數量',
                },
                LastBestAskPrice: {
                  type: 'string',
                  description: '最後揭示賣價',
                },
                LastBestAskVolume: {
                  type: 'string',
                  description: '賣出揭示委託數量',
                },
                PriceEarningRatio: {
                  type: 'string',
                  description: '本益比',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/TWT85U': {
      get: {
        tags: ['證券交易'],
        summary: '集中市場證券變更交易',
        description: '集中市場證券變更交易',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Code: {
                  type: 'string',
                  description: '證券代號',
                },
                Name: {
                  type: 'string',
                  description: '證券名稱',
                },
                PeriodicCallAuctionTrading: {
                  type: 'string',
                  description: '分盤集合競價',
                },
              },
            },
          },
        },
      },
    },
    '/holidaySchedule/holidaySchedule': {
      get: {
        tags: ['證券交易'],
        summary: '有價證券集中交易市場開（休）市日期',
        description: '有價證券集中交易市場開（休）市日期',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Name: {
                  type: 'string',
                  description: '名稱',
                },
                Date: {
                  type: 'string',
                  description: '日期',
                },
                Day: {
                  type: 'string',
                  description: '星期',
                },
                Description: {
                  type: 'string',
                  description: '說明',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/BWIBBU_d': {
      get: {
        tags: ['證券交易'],
        summary: '上市個股日本益比、殖利率及股價淨值比（依日期查詢）',
        description: '上市個股日本益比、殖利率及股價淨值比（依日期查詢）',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Code: {
                  type: 'string',
                  description: '證券代號',
                },
                Name: {
                  type: 'string',
                  description: '證券名稱',
                },
                DividendYield: {
                  type: 'string',
                  description: '殖利率(%)',
                },
                DividendYear: {
                  type: 'string',
                  description: '股利年度',
                },
                PEratio: {
                  type: 'string',
                  description: '本益比',
                },
                PBratio: {
                  type: 'string',
                  description: '股價淨值比',
                },
                FiscalYearQuarter: {
                  type: 'string',
                  description: '財報年/季',
                },
              },
            },
          },
        },
      },
    },
    '/indicesReport/MFI94U': {
      get: {
        tags: ['指數'],
        summary: '發行量加權股價報酬指數',
        description: '發行量加權股價報酬指數',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Date: {
                  type: 'string',
                  description: '日期',
                },
                TAIEXTotalReturnIndex: {
                  type: 'string',
                  description: '發行量加權股價報酬指數',
                },
              },
            },
          },
        },
      },
    },
    '/SBL/TWT96U': {
      get: {
        tags: ['證券交易'],
        summary: '集中交易市場融資融券額度調整之有價證券',
        description: '集中交易市場融資融券額度調整之有價證券',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                TWSECode: {
                  type: 'string',
                  description: '上市證券代號',
                },
                TWSEAvailableVolume: {
                  type: 'string',
                  description: '上市可借券賣出股數',
                },
                GRETAICode: {
                  type: 'string',
                  description: '上櫃證券代號',
                },
                GRETAIAvailableVolume: {
                  type: 'string',
                  description: '上櫃可借券賣出股數',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/TWT84U': {
      get: {
        tags: ['證券交易'],
        summary: '上市個股股價升降幅度',
        description: '上市個股股價升降幅度',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Code: {
                  type: 'string',
                  description: '證券代號',
                },
                Name: {
                  type: 'string',
                  description: '證券名稱',
                },
                TodayLimitUp: {
                  type: 'string',
                  description: '本日漲停價',
                },
                TodayOpeningRefPrice: {
                  type: 'string',
                  description: '本日開盤競價基準',
                },
                TodayLimitDown: {
                  type: 'string',
                  description: '本日跌停價',
                },
                PreviousDayOpeningRefPrice: {
                  type: 'string',
                  description: '前日開盤競價基準',
                },
                PreviousDayPrice: {
                  type: 'string',
                  description: '前日收盤價',
                },
                PreviousDayLimitUp: {
                  type: 'string',
                  description: '前日買進揭示價',
                },
                PreviousDayLimitDown: {
                  type: 'string',
                  description: '前日賣出揭示價',
                },
                LastTradingDay: {
                  type: 'string',
                  description: '最近成交日',
                },
                AllowOddLotTrade: {
                  type: 'string',
                  description: '可否零股交易',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/twtazu_od': {
      get: {
        tags: ['證券交易'],
        summary: '集中市場漲跌證券數統計表',
        description: '集中市場漲跌證券數統計表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                類型: {
                  type: 'string',
                  description: '類型',
                },
                上漲: {
                  type: 'string',
                  description: '上漲',
                },
                漲停: {
                  type: 'string',
                  description: '漲停',
                },
                下跌: {
                  type: 'string',
                  description: '下跌',
                },
                跌停: {
                  type: 'string',
                  description: '跌停',
                },
                持平: {
                  type: 'string',
                  description: '持平',
                },
                未成交: {
                  type: 'string',
                  description: '未成交',
                },
                無比價: {
                  type: 'string',
                  description: '無比價',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap04_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司每日重大訊息',
        description: '上市公司每日重大訊息',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                發言日期: {
                  type: 'string',
                  description: '發言日期',
                },
                發言時間: {
                  type: 'string',
                  description: '發言時間',
                },
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                '主旨 ': {
                  type: 'string',
                  description: '主旨 ',
                },
                符合條款: {
                  type: 'string',
                  description: '符合條款',
                },
                事實發生日: {
                  type: 'string',
                  description: '事實發生日',
                },
                說明: {
                  type: 'string',
                  description: '說明',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap03_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司基本資料',
        description: '上市公司基本資料',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                公司簡稱: {
                  type: 'string',
                  description: '公司簡稱',
                },
                外國企業註冊地國: {
                  type: 'string',
                  description: '外國企業註冊地國',
                },
                產業別: {
                  type: 'string',
                  description: '產業別',
                },
                住址: {
                  type: 'string',
                  description: '住址',
                },
                營利事業統一編號: {
                  type: 'string',
                  description: '營利事業統一編號',
                },
                董事長: {
                  type: 'string',
                  description: '董事長',
                },
                總經理: {
                  type: 'string',
                  description: '總經理',
                },
                發言人: {
                  type: 'string',
                  description: '發言人',
                },
                發言人職稱: {
                  type: 'string',
                  description: '發言人職稱',
                },
                代理發言人: {
                  type: 'string',
                  description: '代理發言人',
                },
                總機電話: {
                  type: 'string',
                  description: '總機電話',
                },
                成立日期: {
                  type: 'string',
                  description: '成立日期',
                },
                上市日期: {
                  type: 'string',
                  description: '上市日期',
                },
                普通股每股面額: {
                  type: 'string',
                  description: '普通股每股面額',
                },
                實收資本額: {
                  type: 'string',
                  description: '實收資本額',
                },
                私募股數: {
                  type: 'string',
                  description: '私募股數',
                },
                特別股: {
                  type: 'string',
                  description: '特別股',
                },
                編制財務報表類型: {
                  type: 'string',
                  description: '編制財務報表類型',
                },
                股票過戶機構: {
                  type: 'string',
                  description: '股票過戶機構',
                },
                過戶電話: {
                  type: 'string',
                  description: '過戶電話',
                },
                過戶地址: {
                  type: 'string',
                  description: '過戶地址',
                },
                簽證會計師事務所: {
                  type: 'string',
                  description: '簽證會計師事務所',
                },
                簽證會計師1: {
                  type: 'string',
                  description: '簽證會計師1',
                },
                簽證會計師2: {
                  type: 'string',
                  description: '簽證會計師2',
                },
                英文簡稱: {
                  type: 'string',
                  description: '英文簡稱',
                },
                英文通訊地址: {
                  type: 'string',
                  description: '英文通訊地址',
                },
                傳真機號碼: {
                  type: 'string',
                  description: '傳真機號碼',
                },
                電子郵件信箱: {
                  type: 'string',
                  description: '電子郵件信箱',
                },
                網址: {
                  type: 'string',
                  description: '網址',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap05_L': {
      get: {
        tags: ['財務報表'],
        summary: '上市公司每月營業收入彙總表',
        description: '上市公司每月營業收入彙總表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                資料年月: {
                  type: 'string',
                  description: '資料年月',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                產業別: {
                  type: 'string',
                  description: '產業別',
                },
                '營業收入-當月營收': {
                  type: 'string',
                  description: '營業收入-當月營收',
                },
                '營業收入-上月營收': {
                  type: 'string',
                  description: '營業收入-上月營收',
                },
                '營業收入-去年當月營收': {
                  type: 'string',
                  description: '營業收入-去年當月營收',
                },
                '營業收入-上月比較增減(%)': {
                  type: 'string',
                  description: '營業收入-上月比較增減(%)',
                },
                '營業收入-去年同月增減(%)': {
                  type: 'string',
                  description: '營業收入-去年同月增減(%)',
                },
                '累計營業收入-當月累計營收': {
                  type: 'string',
                  description: '累計營業收入-當月累計營收',
                },
                '累計營業收入-去年累計營收': {
                  type: 'string',
                  description: '累計營業收入-去年累計營收',
                },
                '累計營業收入-前期比較增減(%)': {
                  type: 'string',
                  description: '累計營業收入-前期比較增減(%)',
                },
                備註: {
                  type: 'string',
                  description: '備註',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap01': {
      get: {
        tags: ['券商資料'],
        summary: '券商業務別人員數',
        description: '券商業務別人員數',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                職位: {
                  type: 'string',
                  description: '職位',
                },
                受託買賣: {
                  type: 'string',
                  description: '受託買賣',
                },
                '受託買賣（衍生性商品銷售）': {
                  type: 'string',
                  description: '受託買賣（衍生性商品銷售）',
                },
                內部稽核: {
                  type: 'string',
                  description: '內部稽核',
                },
                融資融券: {
                  type: 'string',
                  description: '融資融券',
                },
                證券借貸: {
                  type: 'string',
                  description: '證券借貸',
                },
                自行買賣: {
                  type: 'string',
                  description: '自行買賣',
                },
                其他人員: {
                  type: 'string',
                  description: '其他人員',
                },
                結算交割: {
                  type: 'string',
                  description: '結算交割',
                },
                股務人員: {
                  type: 'string',
                  description: '股務人員',
                },
                承銷人員: {
                  type: 'string',
                  description: '承銷人員',
                },
                法令遵循: {
                  type: 'string',
                  description: '法令遵循',
                },
                '風險管理-模型管理': {
                  type: 'string',
                  description: '風險管理-模型管理',
                },
                '驗證人員-模型管理': {
                  type: 'string',
                  description: '驗證人員-模型管理',
                },
                '內部稽核-模型管理': {
                  type: 'string',
                  description: '內部稽核-模型管理',
                },
                共同行銷: {
                  type: 'string',
                  description: '共同行銷',
                },
                合作推廣: {
                  type: 'string',
                  description: '合作推廣',
                },
                開戶: {
                  type: 'string',
                  description: '開戶',
                },
                徵信: {
                  type: 'string',
                  description: '徵信',
                },
                營業櫃檯輸單: {
                  type: 'string',
                  description: '營業櫃檯輸單',
                },
                主辦會計: {
                  type: 'string',
                  description: '主辦會計',
                },
                財富管理: {
                  type: 'string',
                  description: '財富管理',
                },
                '風險管理-其他': {
                  type: 'string',
                  description: '風險管理-其他',
                },
                公司治理人員: {
                  type: 'string',
                  description: '公司治理人員',
                },
                受託管理私募股權基金人員: {
                  type: 'string',
                  description: '受託管理私募股權基金人員',
                },
                合計: {
                  type: 'string',
                  description: '合計',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap02_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司持股逾 10% 大股東名單',
        description: '上市公司持股逾 10% 大股東名單',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                大股東名稱: {
                  type: 'string',
                  description: '大股東名稱',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap14_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司各產業EPS統計資訊',
        description: '上市公司各產業EPS統計資訊',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                產業別: {
                  type: 'string',
                  description: '產業別',
                },
                '基本每股盈餘(元)': {
                  type: 'string',
                  description: '基本每股盈餘(元)',
                },
                普通股每股面額: {
                  type: 'string',
                  description: '普通股每股面額',
                },
                營業收入: {
                  type: 'string',
                  description: '營業收入',
                },
                營業利益: {
                  type: 'string',
                  description: '營業利益',
                },
                營業外收入及支出: {
                  type: 'string',
                  description: '營業外收入及支出',
                },
                稅後淨利: {
                  type: 'string',
                  description: '稅後淨利',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap15_L': {
      get: {
        tags: ['財務報表'],
        summary: '上市公司截至各季綜合損益財測達成情形(簡式)',
        description: '上市公司截至各季綜合損益財測達成情形(簡式)',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                財測序號: {
                  type: 'string',
                  description: '財測序號',
                },
                涵蓋期間: {
                  type: 'string',
                  description: '涵蓋期間',
                },
                截至該季經會計師查核或核閱數: {
                  type: 'string',
                  description: '截至該季經會計師查核或核閱數',
                },
                截至該季綜合損益預測數: {
                  type: 'string',
                  description: '截至該季綜合損益預測數',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap16_L': {
      get: {
        tags: ['財務報表'],
        summary:
          '上市公司當季綜合損益經會計師查核(核閱)數與當季預測數差異達百分之十以上者，或截至當季累計差異達百分之二十以上者(簡式)',
        description:
          '上市公司當季綜合損益經會計師查核(核閱)數與當季預測數差異達百分之十以上者，或截至當季累計差異達百分之二十以上者(簡式)',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                財測序號: {
                  type: 'string',
                  description: '財測序號',
                },
                涵蓋期間: {
                  type: 'string',
                  description: '涵蓋期間',
                },
                當季經會計師查核或核閱數: {
                  type: 'string',
                  description: '當季經會計師查核或核閱數',
                },
                截至當季經會計師查核或核閱數: {
                  type: 'string',
                  description: '截至當季經會計師查核或核閱數',
                },
                '當季稅前(綜合)損益預測數': {
                  type: 'string',
                  description: '當季稅前(綜合)損益預測數',
                },
                '截至當季稅前(綜合)損益預測數': {
                  type: 'string',
                  description: '截至當季稅前(綜合)損益預測數',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap17_L': {
      get: {
        tags: ['財務報表'],
        summary: '上市公司營益分析查詢彙總表(全體公司彙總報表)',
        description: '上市公司營益分析查詢彙總表(全體公司彙總報表)',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                '營業收入(百萬元)': {
                  type: 'string',
                  description: '營業收入(百萬元)',
                },
                '毛利率(%)(營業毛利)/(營業收入)': {
                  type: 'string',
                  description: '毛利率(%)(營業毛利)/(營業收入)',
                },
                '營業利益率(%)(營業利益)/(營業收入)': {
                  type: 'string',
                  description: '營業利益率(%)(營業利益)/(營業收入)',
                },
                '稅前純益率(%)(稅前純益)/(營業收入)': {
                  type: 'string',
                  description: '稅前純益率(%)(稅前純益)/(營業收入)',
                },
                '稅後純益率(%)(稅後純益)/(營業收入)': {
                  type: 'string',
                  description: '稅後純益率(%)(稅後純益)/(營業收入)',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap20': {
      get: {
        tags: ['券商資料'],
        summary: '各券商每月月計表',
        description: '各券商每月月計表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                券商代號: {
                  type: 'string',
                  description: '券商代號',
                },
                券商名稱: {
                  type: 'string',
                  description: '券商名稱',
                },
                科目: {
                  type: 'string',
                  description: '科目',
                },
                會計科目名稱: {
                  type: 'string',
                  description: '會計科目名稱',
                },
                本月借方總額: {
                  type: 'string',
                  description: '本月借方總額',
                },
                本月貸方總額: {
                  type: 'string',
                  description: '本月貸方總額',
                },
                借方餘額: {
                  type: 'string',
                  description: '借方餘額',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap21': {
      get: {
        tags: ['券商資料'],
        summary: '各券商收支概況表資料',
        description: '各券商收支概況表資料',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                券商代號: {
                  type: 'string',
                  description: '券商代號',
                },
                券商名稱: {
                  type: 'string',
                  description: '券商名稱',
                },
                科目: {
                  type: 'string',
                  description: '科目',
                },
                會計科目名稱: {
                  type: 'string',
                  description: '會計科目名稱',
                },
                本月金額: {
                  type: 'string',
                  description: '本月金額',
                },
                累進金額: {
                  type: 'string',
                  description: '累進金額',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap18': {
      get: {
        tags: ['券商資料'],
        summary: '證券商基本資料',
        description: '證券商基本資料',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                證券代號: {
                  type: 'string',
                  description: '證券代號',
                },
                '券商(證券IB)簡稱': {
                  type: 'string',
                  description: '券商(證券IB)簡稱',
                },
                '登記資本額（仟元）': {
                  type: 'string',
                  description: '登記資本額（仟元）',
                },
                '實收資本額（仟元）': {
                  type: 'string',
                  description: '實收資本額（仟元）',
                },
                '指撥營運金（仟元）': {
                  type: 'string',
                  description: '指撥營運金（仟元）',
                },
                營利事業統一編號: {
                  type: 'string',
                  description: '營利事業統一編號',
                },
                變更日期: {
                  type: 'string',
                  description: '變更日期',
                },
                區域代碼: {
                  type: 'string',
                  description: '區域代碼',
                },
                融資融券開辦日期: {
                  type: 'string',
                  description: '融資融券開辦日期',
                },
                設立日期: {
                  type: 'string',
                  description: '設立日期',
                },
                開業日期: {
                  type: 'string',
                  description: '開業日期',
                },
                電話: {
                  type: 'string',
                  description: '電話',
                },
                傳真: {
                  type: 'string',
                  description: '傳真',
                },
                交割金融機構: {
                  type: 'string',
                  description: '交割金融機構',
                },
                交割專戶帳號: {
                  type: 'string',
                  description: '交割專戶帳號',
                },
                違約專戶: {
                  type: 'string',
                  description: '違約專戶',
                },
                錯帳專戶帳號: {
                  type: 'string',
                  description: '錯帳專戶帳號',
                },
                權證履約專戶帳號: {
                  type: 'string',
                  description: '權證履約專戶帳號',
                },
                '代辦交割證券商(證券IB)代號': {
                  type: 'string',
                  description: '代辦交割證券商(證券IB)代號',
                },
                營業保證金保管銀行: {
                  type: 'string',
                  description: '營業保證金保管銀行',
                },
                發行狀況: {
                  type: 'string',
                  description: '發行狀況',
                },
                業務種類: {
                  type: 'string',
                  description: '業務種類',
                },
                負責人: {
                  type: 'string',
                  description: '負責人',
                },
                總經理: {
                  type: 'string',
                  description: '總經理',
                },
                營業部經理: {
                  type: 'string',
                  description: '營業部經理',
                },
                財務部經理: {
                  type: 'string',
                  description: '財務部經理',
                },
                行政部門地址: {
                  type: 'string',
                  description: '行政部門地址',
                },
                '營業處所－經': {
                  type: 'string',
                  description: '營業處所－經',
                },
                '營業處所－經代表號': {
                  type: 'string',
                  description: '營業處所－經代表號',
                },
                營業廳: {
                  type: 'string',
                  description: '營業廳',
                },
                '營業處所－自': {
                  type: 'string',
                  description: '營業處所－自',
                },
                '營業處所－自代表號': {
                  type: 'string',
                  description: '營業處所－自代表號',
                },
                '營業處所－承': {
                  type: 'string',
                  description: '營業處所－承',
                },
                '營業處所－承代表號': {
                  type: 'string',
                  description: '營業處所－承代表號',
                },
                股務代理商地址: {
                  type: 'string',
                  description: '股務代理商地址',
                },
                備註: {
                  type: 'string',
                  description: '備註',
                },
                營業項目1: {
                  type: 'string',
                  description: '營業項目1',
                },
                營業項目2: {
                  type: 'string',
                  description: '營業項目2',
                },
                營業項目3: {
                  type: 'string',
                  description: '營業項目3',
                },
                營業項目4: {
                  type: 'string',
                  description: '營業項目4',
                },
                營業項目5: {
                  type: 'string',
                  description: '營業項目5',
                },
                營業項目6: {
                  type: 'string',
                  description: '營業項目6',
                },
                營業項目7: {
                  type: 'string',
                  description: '營業項目7',
                },
                營業項目8: {
                  type: 'string',
                  description: '營業項目8',
                },
                營業項目9: {
                  type: 'string',
                  description: '營業項目9',
                },
                營業項目10: {
                  type: 'string',
                  description: '營業項目10',
                },
                營業項目11: {
                  type: 'string',
                  description: '營業項目11',
                },
                營業項目12: {
                  type: 'string',
                  description: '營業項目12',
                },
                營業項目13: {
                  type: 'string',
                  description: '營業項目13',
                },
                營業項目14: {
                  type: 'string',
                  description: '營業項目14',
                },
                營業項目15: {
                  type: 'string',
                  description: '營業項目15',
                },
                營業項目16: {
                  type: 'string',
                  description: '營業項目16',
                },
                營業項目17: {
                  type: 'string',
                  description: '營業項目17',
                },
                營業項目18: {
                  type: 'string',
                  description: '營業項目18',
                },
                營業項目19: {
                  type: 'string',
                  description: '營業項目19',
                },
                營業項目20: {
                  type: 'string',
                  description: '營業項目20',
                },
                營業項目21: {
                  type: 'string',
                  description: '營業項目21',
                },
                營業項目22: {
                  type: 'string',
                  description: '營業項目22',
                },
                營業項目23: {
                  type: 'string',
                  description: '營業項目23',
                },
                營業項目24: {
                  type: 'string',
                  description: '營業項目24',
                },
                營業項目25: {
                  type: 'string',
                  description: '營業項目25',
                },
                營業項目26: {
                  type: 'string',
                  description: '營業項目26',
                },
                營業項目27: {
                  type: 'string',
                  description: '營業項目27',
                },
                營業項目28: {
                  type: 'string',
                  description: '營業項目28',
                },
                營業項目29: {
                  type: 'string',
                  description: '營業項目29',
                },
                營業項目30: {
                  type: 'string',
                  description: '營業項目30',
                },
                營業項目31: {
                  type: 'string',
                  description: '營業項目31',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap19': {
      get: {
        tags: ['證券交易'],
        summary: '電子式交易統計資訊',
        description: '電子式交易統計資訊',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                成交月份: {
                  type: 'string',
                  description: '成交月份',
                },
                本月新增戶數: {
                  type: 'string',
                  description: '本月新增戶數',
                },
                本月註銷戶數: {
                  type: 'string',
                  description: '本月註銷戶數',
                },
                累計開戶數: {
                  type: 'string',
                  description: '累計開戶數',
                },
                本月交易戶數: {
                  type: 'string',
                  description: '本月交易戶數',
                },
                本月交易人數: {
                  type: 'string',
                  description: '本月交易人數',
                },
                委託筆數: {
                  type: 'string',
                  description: '委託筆數',
                },
                委託金額: {
                  type: 'string',
                  description: '委託金額',
                },
                成交筆數: {
                  type: 'string',
                  description: '成交筆數',
                },
                成交金額: {
                  type: 'string',
                  description: '成交金額',
                },
                平均每筆成交金額: {
                  type: 'string',
                  description: '平均每筆成交金額',
                },
                公司總成交筆數: {
                  type: 'string',
                  description: '公司總成交筆數',
                },
                公司總成交金額: {
                  type: 'string',
                  description: '公司總成交金額',
                },
                '占公司成交比率(筆數)': {
                  type: 'string',
                  description: '占公司成交比率(筆數)',
                },
                '占公司成交比率(金額)': {
                  type: 'string',
                  description: '占公司成交比率(金額)',
                },
                '市場成交總筆數(買賣合計)': {
                  type: 'string',
                  description: '市場成交總筆數(買賣合計)',
                },
                '市場成交總金額(買賣合計)': {
                  type: 'string',
                  description: '市場成交總金額(買賣合計)',
                },
                '占市場成交比率(筆數)': {
                  type: 'string',
                  description: '占市場成交比率(筆數)',
                },
                '占市場成交比率(金額)': {
                  type: 'string',
                  description: '占市場成交比率(金額)',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap08_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司董事、監察人持股不足法定成數彙總表',
        description: '上市公司董事、監察人持股不足法定成數彙總表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                已發行股份總額: {
                  type: 'string',
                  description: '已發行股份總額',
                },
                全體董事應持有股數: {
                  type: 'string',
                  description: '全體董事應持有股數',
                },
                全體董事本人實際持有股數: {
                  type: 'string',
                  description: '全體董事本人實際持有股數',
                },
                全體董事法人代表人分戶集保股數: {
                  type: 'string',
                  description: '全體董事法人代表人分戶集保股數',
                },
                全體董事保留運用決定權信託股數: {
                  type: 'string',
                  description: '全體董事保留運用決定權信託股數',
                },
                全體董事不足股數: {
                  type: 'string',
                  description: '全體董事不足股數',
                },
                全體監察人應持有股數: {
                  type: 'string',
                  description: '全體監察人應持有股數',
                },
                全體監察人本人實際持有股數: {
                  type: 'string',
                  description: '全體監察人本人實際持有股數',
                },
                全體監察人法人代表人分戶集保股數: {
                  type: 'string',
                  description: '全體監察人法人代表人分戶集保股數',
                },
                全體監察人保留運用決定權信託股數: {
                  type: 'string',
                  description: '全體監察人保留運用決定權信託股數',
                },
                全體監察人不足股數: {
                  type: 'string',
                  description: '全體監察人不足股數',
                },
                持股不足已通知其董監: {
                  type: 'string',
                  description: '持股不足已通知其董監',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap11_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司董監事持股餘額明細資料',
        description: '上市公司董監事持股餘額明細資料',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                資料年月: {
                  type: 'string',
                  description: '資料年月',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                職稱: {
                  type: 'string',
                  description: '職稱',
                },
                姓名: {
                  type: 'string',
                  description: '姓名',
                },
                '選任時持股 ': {
                  type: 'string',
                  description: '選任時持股 ',
                },
                目前持股: {
                  type: 'string',
                  description: '目前持股',
                },
                設質股數: {
                  type: 'string',
                  description: '設質股數',
                },
                設質股數佔持股比例: {
                  type: 'string',
                  description: '設質股數佔持股比例',
                },
                內部人關係人目前持股合計: {
                  type: 'string',
                  description: '內部人關係人目前持股合計',
                },
                內部人關係人設質股數: {
                  type: 'string',
                  description: '內部人關係人設質股數',
                },
                內部人關係人設質比例: {
                  type: 'string',
                  description: '內部人關係人設質比例',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap12_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司每日內部人持股轉讓事前申報表-持股轉讓日報表',
        description: '上市公司每日內部人持股轉讓事前申報表-持股轉讓日報表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                申報人身分: {
                  type: 'string',
                  description: '申報人身分',
                },
                姓名: {
                  type: 'string',
                  description: '姓名',
                },
                '預定轉讓方式及股數-轉讓方式': {
                  type: 'string',
                  description: '預定轉讓方式及股數-轉讓方式',
                },
                '預定轉讓方式及股數-轉讓股數': {
                  type: 'string',
                  description: '預定轉讓方式及股數-轉讓股數',
                },
                每日於盤中交易最大得轉讓股數: {
                  type: 'string',
                  description: '每日於盤中交易最大得轉讓股數',
                },
                受讓人: {
                  type: 'string',
                  description: '受讓人',
                },
                '目前持有股數-自有持股': {
                  type: 'string',
                  description: '目前持有股數-自有持股',
                },
                '目前持有股數-保留運用決定權信託股數': {
                  type: 'string',
                  description: '目前持有股數-保留運用決定權信託股數',
                },
                '預定轉讓總股數-自有持股': {
                  type: 'string',
                  description: '預定轉讓總股數-自有持股',
                },
                '預定轉讓總股數-保留運用決定權信託股數': {
                  type: 'string',
                  description: '預定轉讓總股數-保留運用決定權信託股數',
                },
                '預定轉讓後持股-自有持股': {
                  type: 'string',
                  description: '預定轉讓後持股-自有持股',
                },
                '預定轉讓後持股-保留運用決定權信託股數': {
                  type: 'string',
                  description: '預定轉讓後持股-保留運用決定權信託股數',
                },
                有效轉讓期間: {
                  type: 'string',
                  description: '有效轉讓期間',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap13_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司每日內部人持股轉讓事前申報表-持股未轉讓日報表',
        description: '上市公司每日內部人持股轉讓事前申報表-持股未轉讓日報表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                申報人身分: {
                  type: 'string',
                  description: '申報人身分',
                },
                姓名: {
                  type: 'string',
                  description: '姓名',
                },
                '未轉讓股數-自有持股': {
                  type: 'string',
                  description: '未轉讓股數-自有持股',
                },
                '未轉讓股數-保留運用決定權信託股數': {
                  type: 'string',
                  description: '未轉讓股數-保留運用決定權信託股數',
                },
                '目前持股-自有持股': {
                  type: 'string',
                  description: '目前持股-自有持股',
                },
                '目前持股-保留運用決定權信託股數': {
                  type: 'string',
                  description: '目前持股-保留運用決定權信託股數',
                },
                '原申報預定轉讓股數-自有持股': {
                  type: 'string',
                  description: '原申報預定轉讓股數-自有持股',
                },
                '原申報預定轉讓股數-保留運用決定權信託股數': {
                  type: 'string',
                  description: '原申報預定轉讓股數-保留運用決定權信託股數',
                },
                未轉讓理由: {
                  type: 'string',
                  description: '未轉讓理由',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap22_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司金管會證券期貨局裁罰案件專區',
        description: '上市公司金管會證券期貨局裁罰案件專區',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                發函日期: {
                  type: 'string',
                  description: '發函日期',
                },
                股票代號: {
                  type: 'string',
                  description: '股票代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                違規事由: {
                  type: 'string',
                  description: '違規事由',
                },
                違反法規: {
                  type: 'string',
                  description: '違反法規',
                },
                裁處情形: {
                  type: 'string',
                  description: '裁處情形',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap30_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司獨立董監事兼任情形彙總表',
        description: '上市公司獨立董監事兼任情形彙總表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                序號: {
                  type: 'string',
                  description: '序號',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                職稱: {
                  type: 'string',
                  description: '職稱',
                },
                姓名: {
                  type: 'string',
                  description: '姓名',
                },
                就任日期: {
                  type: 'string',
                  description: '就任日期',
                },
                主要現職: {
                  type: 'string',
                  description: '主要現職',
                },
                主要經歷: {
                  type: 'string',
                  description: '主要經歷',
                },
                目前兼任其他公司名稱: {
                  type: 'string',
                  description: '目前兼任其他公司名稱',
                },
                其他公司職稱: {
                  type: 'string',
                  description: '其他公司職稱',
                },
                備註: {
                  type: 'string',
                  description: '備註',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap29_A_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司董事酬金相關資訊 ',
        description: '上市公司董事酬金相關資訊 ',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                產業類別: {
                  type: 'string',
                  description: '產業類別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                '董事酬金-前年支付': {
                  type: 'string',
                  description: '董事酬金-前年支付',
                },
                '董事酬金-今年支付': {
                  type: 'string',
                  description: '董事酬金-今年支付',
                },
                '董事酬金-合計': {
                  type: 'string',
                  description: '董事酬金-合計',
                },
                '董事酬金加計兼任員工酬金-前年支付': {
                  type: 'string',
                  description: '董事酬金加計兼任員工酬金-前年支付',
                },
                '董事酬金加計兼任員工酬金-今年支付': {
                  type: 'string',
                  description: '董事酬金加計兼任員工酬金-今年支付',
                },
                '加計兼任員工酬金-合計': {
                  type: 'string',
                  description: '加計兼任員工酬金-合計',
                },
                '酬金總額占稅後損益百分比(%)-董事酬金': {
                  type: 'string',
                  description: '酬金總額占稅後損益百分比(%)-董事酬金',
                },
                '酬金總額占稅後損益百分比(%)-加計兼任員工酬金': {
                  type: 'string',
                  description: '酬金總額占稅後損益百分比(%)-加計兼任員工酬金',
                },
                '平均每位董事酬金-董事酬金': {
                  type: 'string',
                  description: '平均每位董事酬金-董事酬金',
                },
                '平均每位董事酬金-加計兼任員工酬金': {
                  type: 'string',
                  description: '平均每位董事酬金-加計兼任員工酬金',
                },
                領取來自子公司以外轉投資事業或母公司酬金: {
                  type: 'string',
                  description: '領取來自子公司以外轉投資事業或母公司酬金',
                },
                稅後純益: {
                  type: 'string',
                  description: '稅後純益',
                },
                每股盈餘: {
                  type: 'string',
                  description: '每股盈餘',
                },
                '股東權益報酬率(%)': {
                  type: 'string',
                  description: '股東權益報酬率(%)',
                },
                '實收資本額(仟元)': {
                  type: 'string',
                  description: '實收資本額(仟元)',
                },
                稅後損益與董監酬金變動之關聯性與合理性說明: {
                  type: 'string',
                  description: '稅後損益與董監酬金變動之關聯性與合理性說明',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap29_B_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司監察人酬金相關資訊 ',
        description: '上市公司監察人酬金相關資訊 ',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                產業類別: {
                  type: 'string',
                  description: '產業類別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                '監察人酬金-前年支付': {
                  type: 'string',
                  description: '監察人酬金-前年支付',
                },
                '監察人酬金-今年支付': {
                  type: 'string',
                  description: '監察人酬金-今年支付',
                },
                '監察人酬金-合計': {
                  type: 'string',
                  description: '監察人酬金-合計',
                },
                '酬金總額占稅後損益百分比(%)': {
                  type: 'string',
                  description: '酬金總額占稅後損益百分比(%)',
                },
                平均每位監察人酬金: {
                  type: 'string',
                  description: '平均每位監察人酬金',
                },
                領取來自子公司以外轉投資事業或母公司酬金: {
                  type: 'string',
                  description: '領取來自子公司以外轉投資事業或母公司酬金',
                },
                稅後純益: {
                  type: 'string',
                  description: '稅後純益',
                },
                每股盈餘: {
                  type: 'string',
                  description: '每股盈餘',
                },
                '股東權益報酬率(%)': {
                  type: 'string',
                  description: '股東權益報酬率(%)',
                },
                '實收資本額(仟元)': {
                  type: 'string',
                  description: '實收資本額(仟元)',
                },
                稅後損益與董監酬金變動之關聯性與合理性說明: {
                  type: 'string',
                  description: '稅後損益與董監酬金變動之關聯性與合理性說明',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap29_C_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司合併報表董事酬金相關資訊 ',
        description: '上市公司合併報表董事酬金相關資訊 ',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                產業類別: {
                  type: 'string',
                  description: '產業類別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                '董事酬金-前年支付': {
                  type: 'string',
                  description: '董事酬金-前年支付',
                },
                '董事酬金-今年支付': {
                  type: 'string',
                  description: '董事酬金-今年支付',
                },
                '董事酬金-合計': {
                  type: 'string',
                  description: '董事酬金-合計',
                },
                '董事酬金加計兼任員工酬金-前年支付': {
                  type: 'string',
                  description: '董事酬金加計兼任員工酬金-前年支付',
                },
                '董事酬金加計兼任員工酬金-今年支付': {
                  type: 'string',
                  description: '董事酬金加計兼任員工酬金-今年支付',
                },
                '加計兼任員工酬金-合計': {
                  type: 'string',
                  description: '加計兼任員工酬金-合計',
                },
                '酬金總額占稅後損益百分比(%)-董事酬金': {
                  type: 'string',
                  description: '酬金總額占稅後損益百分比(%)-董事酬金',
                },
                '酬金總額占稅後損益百分比(%)-加計兼任員工酬金': {
                  type: 'string',
                  description: '酬金總額占稅後損益百分比(%)-加計兼任員工酬金',
                },
                '平均每位董事酬金-董事酬金': {
                  type: 'string',
                  description: '平均每位董事酬金-董事酬金',
                },
                '平均每位董事酬金-加計兼任員工酬金': {
                  type: 'string',
                  description: '平均每位董事酬金-加計兼任員工酬金',
                },
                領取來自子公司以外轉投資事業或母公司酬金: {
                  type: 'string',
                  description: '領取來自子公司以外轉投資事業或母公司酬金',
                },
                稅後純益: {
                  type: 'string',
                  description: '稅後純益',
                },
                每股盈餘: {
                  type: 'string',
                  description: '每股盈餘',
                },
                '股東權益報酬率(%)': {
                  type: 'string',
                  description: '股東權益報酬率(%)',
                },
                '實收資本額(仟元)': {
                  type: 'string',
                  description: '實收資本額(仟元)',
                },
                稅後損益與董監酬金變動之關聯性與合理性說明: {
                  type: 'string',
                  description: '稅後損益與董監酬金變動之關聯性與合理性說明',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap29_D_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司合併報表監察人酬金相關資訊 ',
        description: '上市公司合併報表監察人酬金相關資訊 ',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                產業類別: {
                  type: 'string',
                  description: '產業類別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                '監察人酬金-前年支付': {
                  type: 'string',
                  description: '監察人酬金-前年支付',
                },
                '監察人酬金-今年支付': {
                  type: 'string',
                  description: '監察人酬金-今年支付',
                },
                '監察人酬金-合計': {
                  type: 'string',
                  description: '監察人酬金-合計',
                },
                '酬金總額占稅後損益百分比(%)': {
                  type: 'string',
                  description: '酬金總額占稅後損益百分比(%)',
                },
                平均每位監察人酬金: {
                  type: 'string',
                  description: '平均每位監察人酬金',
                },
                領取來自子公司以外轉投資事業或母公司酬金: {
                  type: 'string',
                  description: '領取來自子公司以外轉投資事業或母公司酬金',
                },
                稅後純益: {
                  type: 'string',
                  description: '稅後純益',
                },
                每股盈餘: {
                  type: 'string',
                  description: '每股盈餘',
                },
                '股東權益報酬率(%)': {
                  type: 'string',
                  description: '股東權益報酬率(%)',
                },
                '實收資本額(仟元)': {
                  type: 'string',
                  description: '實收資本額(仟元)',
                },
                稅後損益與董監酬金變動之關聯性與合理性說明: {
                  type: 'string',
                  description: '稅後損益與董監酬金變動之關聯性與合理性說明',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap23_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司違反資訊申報、重大訊息及說明記者會規定專區',
        description: '上市公司違反資訊申報、重大訊息及說明記者會規定專區',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                發函日期: {
                  type: 'string',
                  description: '發函日期',
                },
                股票代號: {
                  type: 'string',
                  description: '股票代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                違規事由: {
                  type: 'string',
                  description: '違規事由',
                },
                違反資訊申報作業辦法條款: {
                  type: 'string',
                  description: '違反資訊申報作業辦法條款',
                },
                違反重大訊息之查證暨公開處理程序條款: {
                  type: 'string',
                  description: '違反重大訊息之查證暨公開處理程序條款',
                },
                '裁罰金額(萬)': {
                  type: 'string',
                  description: '裁罰金額(萬)',
                },
              },
            },
          },
        },
      },
    },
    '/static/20151104/CSR103': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司 103 年應編製與申報 CSR 報告書名單',
        description: '上市公司 103 年應編製與申報 CSR 報告書名單',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                序號: {
                  type: 'string',
                  description: '序號',
                },
                公司代碼: {
                  type: 'string',
                  description: '公司代碼',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                股本達100億: {
                  type: 'string',
                  description: '股本達100億',
                },
                產業別: {
                  type: 'string',
                  description: '產業別',
                },
                '餐飲收入達50％': {
                  type: 'string',
                  description: '餐飲收入達50％',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap31_L': {
      get: {
        tags: ['財務報表'],
        summary: '上市公司財務報告經監察人承認情形',
        description: '上市公司財務報告經監察人承認情形',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                是否設置審計委員會: {
                  type: 'string',
                  description: '是否設置審計委員會',
                },
                出具本次財務報告審查報告書之監察人姓名: {
                  type: 'string',
                  description: '出具本次財務報告審查報告書之監察人姓名',
                },
                監察人實際在任席次: {
                  type: 'string',
                  description: '監察人實際在任席次',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap36_L': {
      get: {
        tags: ['權證'],
        summary: '上市認購(售)權證年度發行量概況統計表',
        description: '上市認購(售)權證年度發行量概況統計表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                發行人代號: {
                  type: 'string',
                  description: '發行人代號',
                },
                發行人名稱: {
                  type: 'string',
                  description: '發行人名稱',
                },
                權證代號: {
                  type: 'string',
                  description: '權證代號',
                },
                名稱: {
                  type: 'string',
                  description: '名稱',
                },
                標的代號: {
                  type: 'string',
                  description: '標的代號',
                },
                標的名稱: {
                  type: 'string',
                  description: '標的名稱',
                },
                申請發行日期: {
                  type: 'string',
                  description: '申請發行日期',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap03_P': {
      get: {
        tags: ['公司治理'],
        summary: '公開發行公司基本資料',
        description: '公開發行公司基本資料',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                公司簡稱: {
                  type: 'string',
                  description: '公司簡稱',
                },
                外國企業註冊地國: {
                  type: 'string',
                  description: '外國企業註冊地國',
                },
                產業別: {
                  type: 'string',
                  description: '產業別',
                },
                住址: {
                  type: 'string',
                  description: '住址',
                },
                營利事業統一編號: {
                  type: 'string',
                  description: '營利事業統一編號',
                },
                董事長: {
                  type: 'string',
                  description: '董事長',
                },
                總經理: {
                  type: 'string',
                  description: '總經理',
                },
                發言人: {
                  type: 'string',
                  description: '發言人',
                },
                發言人職稱: {
                  type: 'string',
                  description: '發言人職稱',
                },
                代理發言人: {
                  type: 'string',
                  description: '代理發言人',
                },
                總機電話: {
                  type: 'string',
                  description: '總機電話',
                },
                成立日期: {
                  type: 'string',
                  description: '成立日期',
                },
                上市日期: {
                  type: 'string',
                  description: '上市日期',
                },
                普通股每股面額: {
                  type: 'string',
                  description: '普通股每股面額',
                },
                實收資本額: {
                  type: 'string',
                  description: '實收資本額',
                },
                私募股數: {
                  type: 'string',
                  description: '私募股數',
                },
                特別股: {
                  type: 'string',
                  description: '特別股',
                },
                編制財務報表類型: {
                  type: 'string',
                  description: '編制財務報表類型',
                },
                股票過戶機構: {
                  type: 'string',
                  description: '股票過戶機構',
                },
                過戶電話: {
                  type: 'string',
                  description: '過戶電話',
                },
                過戶地址: {
                  type: 'string',
                  description: '過戶地址',
                },
                簽證會計師事務所: {
                  type: 'string',
                  description: '簽證會計師事務所',
                },
                簽證會計師1: {
                  type: 'string',
                  description: '簽證會計師1',
                },
                簽證會計師2: {
                  type: 'string',
                  description: '簽證會計師2',
                },
                英文簡稱: {
                  type: 'string',
                  description: '英文簡稱',
                },
                英文通訊地址: {
                  type: 'string',
                  description: '英文通訊地址',
                },
                傳真機號碼: {
                  type: 'string',
                  description: '傳真機號碼',
                },
                電子郵件信箱: {
                  type: 'string',
                  description: '電子郵件信箱',
                },
                網址: {
                  type: 'string',
                  description: '網址',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap43_L': {
      get: {
        tags: ['權證'],
        summary: '上市認購(售)權證交易人數檔',
        description: '上市認購(售)權證交易人數檔',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                日期: {
                  type: 'string',
                  description: '日期',
                },
                人數: {
                  type: 'string',
                  description: '人數',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap42_L': {
      get: {
        tags: ['權證'],
        summary: '上市認購(售)權證每日成交資料檔',
        description: '上市認購(售)權證每日成交資料檔',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                交易日期: {
                  type: 'string',
                  description: '交易日期',
                },
                權證代號: {
                  type: 'string',
                  description: '權證代號',
                },
                權證名稱: {
                  type: 'string',
                  description: '權證名稱',
                },
                成交金額: {
                  type: 'string',
                  description: '成交金額',
                },
                成交張數: {
                  type: 'string',
                  description: '成交張數',
                },
              },
            },
          },
        },
      },
    },
    '/announcement/punish': {
      get: {
        tags: ['公司治理'],
        summary: '集中市場公布處置股票',
        description: '集中市場公布處置股票',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Number: {
                  type: 'string',
                  description: '編號',
                },
                Date: {
                  type: 'string',
                  description: '公布日期',
                },
                Code: {
                  type: 'string',
                  description: '證券代號',
                },
                Name: {
                  type: 'string',
                  description: '證券名稱',
                },
                NumberOfAnnouncement: {
                  type: 'string',
                  description: '累計',
                },
                ReasonsOfDisposition: {
                  type: 'string',
                  description: '處置條件',
                },
                DispositionPeriod: {
                  type: 'string',
                  description: '處置起迄時間',
                },
                DispositionMeasures: {
                  type: 'string',
                  description: '處置措施',
                },
                Detail: {
                  type: 'string',
                  description: '處置內容',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap10_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司董事、監察人持股不足法定成數連續達3個月以上彙總表',
        description:
          '上市公司董事、監察人持股不足法定成數連續達3個月以上彙總表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                連續不足達3個月: {
                  type: 'string',
                  description: '連續不足達3個月',
                },
                連續不足達4個月: {
                  type: 'string',
                  description: '連續不足達4個月',
                },
                連續不足達5個月: {
                  type: 'string',
                  description: '連續不足達5個月',
                },
                連續不足達6個月: {
                  type: 'string',
                  description: '連續不足達6個月',
                },
                連續不足達7個月: {
                  type: 'string',
                  description: '連續不足達7個月',
                },
                連續不足達8個月: {
                  type: 'string',
                  description: '連續不足達8個月',
                },
                連續不足達9個月: {
                  type: 'string',
                  description: '連續不足達9個月',
                },
                連續不足達10個月: {
                  type: 'string',
                  description: '連續不足達10個月',
                },
                連續不足達11個月: {
                  type: 'string',
                  description: '連續不足達11個月',
                },
                連續不足達12個月: {
                  type: 'string',
                  description: '連續不足達12個月',
                },
                連續不足逾1年以上: {
                  type: 'string',
                  description: '連續不足逾1年以上',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap38_L': {
      get: {
        tags: ['公司治理'],
        summary:
          '上市公司股東會公告-召集股東常(臨時)會公告資料彙總表(95年度起適用)',
        description:
          '上市公司股東會公告-召集股東常(臨時)會公告資料彙總表(95年度起適用)',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                '股東常(臨時)會日期-常或臨時': {
                  type: 'string',
                  description: '股東常(臨時)會日期-常或臨時',
                },
                '股東常(臨時)會日期-日期': {
                  type: 'string',
                  description: '股東常(臨時)會日期-日期',
                },
                '停止過戶起訖日期-起': {
                  type: 'string',
                  description: '停止過戶起訖日期-起',
                },
                '停止過戶起訖日期-訖': {
                  type: 'string',
                  description: '停止過戶起訖日期-訖',
                },
                '預擬配發現金(股利)(元/股)-盈餘': {
                  type: 'string',
                  description: '預擬配發現金(股利)(元/股)-盈餘',
                },
                '預擬配發現金(股利)(元/股)-法定盈餘公積、資本公積': {
                  type: 'string',
                  description:
                    '預擬配發現金(股利)(元/股)-法定盈餘公積、資本公積',
                },
                '預擬配股(元/股)-盈餘': {
                  type: 'string',
                  description: '預擬配股(元/股)-盈餘',
                },
                '預擬配股(元/股)-法定盈餘公積、資本公積': {
                  type: 'string',
                  description: '預擬配股(元/股)-法定盈餘公積、資本公積',
                },
                '擬現金增資金額(元)': {
                  type: 'string',
                  description: '擬現金增資金額(元)',
                },
                '現金增資認購率(%)': {
                  type: 'string',
                  description: '現金增資認購率(%)',
                },
                '員工紅利-現金紅利(元)': {
                  type: 'string',
                  description: '員工紅利-現金紅利(元)',
                },
                '員工紅利-股票紅利(股)': {
                  type: 'string',
                  description: '員工紅利-股票紅利(股)',
                },
                '特別股股利(元/股)': {
                  type: 'string',
                  description: '特別股股利(元/股)',
                },
                '董監酬勞(元)': {
                  type: 'string',
                  description: '董監酬勞(元)',
                },
                公告日期: {
                  type: 'string',
                  description: '公告日期',
                },
                公告時間: {
                  type: 'string',
                  description: '公告時間',
                },
                種類: {
                  type: 'string',
                  description: '種類',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap39_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司股利分派情形-董事會通過',
        description: '上市公司股利分派情形-董事會通過',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                股利年度: {
                  type: 'string',
                  description: '股利年度',
                },
                期別: {
                  type: 'string',
                  description: '期別',
                },
                董事會決議通過股利分派日: {
                  type: 'string',
                  description: '董事會決議通過股利分派日',
                },
                '股東會日期配盈餘/待彌補虧損(元)': {
                  type: 'string',
                  description: '股東會日期配盈餘/待彌補虧損(元)',
                },
                '期初未分配盈餘/待彌補虧損(元)': {
                  type: 'string',
                  description: '期初未分配盈餘/待彌補虧損(元)',
                },
                '本期淨利(淨損)(元)': {
                  type: 'string',
                  description: '本期淨利(淨損)(元)',
                },
                '可分配盈餘(元)': {
                  type: 'string',
                  description: '可分配盈餘(元)',
                },
                '分配後期末未分配盈餘(元)': {
                  type: 'string',
                  description: '分配後期末未分配盈餘(元)',
                },
                '股東配發內容-盈餘分配之現金股利(元/股)': {
                  type: 'string',
                  description: '股東配發內容-盈餘分配之現金股利(元/股)',
                },
                '股東配發內容-法定盈餘公積、資本公積發放之現金(元/股)': {
                  type: 'string',
                  description:
                    '股東配發內容-法定盈餘公積、資本公積發放之現金(元/股)',
                },
                '股東配發內容-股東配發之現金(股利)總金額(元)': {
                  type: 'string',
                  description: '股東配發內容-股東配發之現金(股利)總金額(元)',
                },
                '股東配發內容-盈餘轉增資配股(元/股)': {
                  type: 'string',
                  description: '股東配發內容-盈餘轉增資配股(元/股)',
                },
                '股東配發內容-法定盈餘公積、資本公積轉增資配股(元/股)': {
                  type: 'string',
                  description:
                    '股東配發內容-法定盈餘公積、資本公積轉增資配股(元/股)',
                },
                '股東配發內容-股東配股總股數(股)': {
                  type: 'string',
                  description: '股東配發內容-股東配股總股數(股)',
                },
                '董監酬勞(元)': {
                  type: 'string',
                  description: '董監酬勞(元)',
                },
                '員工紅利-現金紅利金額(元)H': {
                  type: 'string',
                  description: '員工紅利-現金紅利金額(元)H',
                },
                '員工紅利-股票紅利金額(元)I': {
                  type: 'string',
                  description: '員工紅利-股票紅利金額(元)I',
                },
                有無全數分派員工股票紅利而股東未配發股票股利之情事: {
                  type: 'string',
                  description:
                    '有無全數分派員工股票紅利而股東未配發股票股利之情事',
                },
                '摘錄公司章程-股利分派部分': {
                  type: 'string',
                  description: '摘錄公司章程-股利分派部分',
                },
                備註: {
                  type: 'string',
                  description: '備註',
                },
                普通股每股面額: {
                  type: 'string',
                  description: '普通股每股面額',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap24_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司經營權及營業範圍異(變)動專區-經營權異動公司',
        description: '上市公司經營權及營業範圍異(變)動專區-經營權異動公司',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                經營權異動日期: {
                  type: 'string',
                  description: '經營權異動日期',
                },
                經營權異動說明: {
                  type: 'string',
                  description: '經營權異動說明',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap37_L': {
      get: {
        tags: ['證券交易'],
        summary: '上市權證基本資料彙總表',
        description: '上市權證基本資料彙總表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                權證代號: {
                  type: 'string',
                  description: '權證代號',
                },
                權證簡稱: {
                  type: 'string',
                  description: '權證簡稱',
                },
                權證類型: {
                  type: 'string',
                  description: '權證類型',
                },
                類別: {
                  type: 'string',
                  description: '類別',
                },
                流動量提供者報價方式: {
                  type: 'string',
                  description: '流動量提供者報價方式',
                },
                履約開始日: {
                  type: 'string',
                  description: '履約開始日',
                },
                最後交易日: {
                  type: 'string',
                  description: '最後交易日',
                },
                履約截止日: {
                  type: 'string',
                  description: '履約截止日',
                },
                '發行單位數量(仟單位)': {
                  type: 'string',
                  description: '發行單位數量(仟單位)',
                },
                '結算方式(詳附註編號說明)': {
                  type: 'string',
                  description: '結算方式(詳附註編號說明)',
                },
                '標的證券/指數': {
                  type: 'string',
                  description: '標的證券/指數',
                },
                '最新標的履約配發數量(每仟單位權證)': {
                  type: 'string',
                  description: '最新標的履約配發數量(每仟單位權證)',
                },
                '原始履約價格(元)/履約指數': {
                  type: 'string',
                  description: '原始履約價格(元)/履約指數',
                },
                '原始上限價格(元)/上限指數': {
                  type: 'string',
                  description: '原始上限價格(元)/上限指數',
                },
                '原始下限價格(元)/下限指數': {
                  type: 'string',
                  description: '原始下限價格(元)/下限指數',
                },
                '最新履約價格(元)/履約指數': {
                  type: 'string',
                  description: '最新履約價格(元)/履約指數',
                },
                '最新上限價格(元)/上限指數': {
                  type: 'string',
                  description: '最新上限價格(元)/上限指數',
                },
                '最新下限價格(元)/下限指數': {
                  type: 'string',
                  description: '最新下限價格(元)/下限指數',
                },
                備註: {
                  type: 'string',
                  description: '備註',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap40_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司股利分派情形-經股東會確認',
        description: '上市公司股利分派情形-經股東會確認',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                股利年度: {
                  type: 'string',
                  description: '股利年度',
                },
                股東會日期: {
                  type: 'string',
                  description: '股東會日期',
                },
                期別: {
                  type: 'string',
                  description: '期別',
                },
                '期初未分配盈餘/待彌補虧損(元)': {
                  type: 'string',
                  description: '期初未分配盈餘/待彌補虧損(元)',
                },
                '本期淨利(淨損)(元)': {
                  type: 'string',
                  description: '本期淨利(淨損)(元)',
                },
                '可分配盈餘(元)': {
                  type: 'string',
                  description: '可分配盈餘(元)',
                },
                '分配後期末未分配盈餘(元)': {
                  type: 'string',
                  description: '分配後期末未分配盈餘(元)',
                },
                '股東配發內容-盈餘分配之現金股利(元/股)': {
                  type: 'string',
                  description: '股東配發內容-盈餘分配之現金股利(元/股)',
                },
                '股東配發內容-法定盈餘公積、資本公積發放之現金(元/股)': {
                  type: 'string',
                  description:
                    '股東配發內容-法定盈餘公積、資本公積發放之現金(元/股)',
                },
                '股東配發內容-股東配發之現金(股利)總金額(元)': {
                  type: 'string',
                  description: '股東配發內容-股東配發之現金(股利)總金額(元)',
                },
                '股東配發內容-盈餘轉增資配股(元/股)': {
                  type: 'string',
                  description: '股東配發內容-盈餘轉增資配股(元/股)',
                },
                '股東配發內容-法定盈餘公積、資本公積轉增資配股(元/股)': {
                  type: 'string',
                  description:
                    '股東配發內容-法定盈餘公積、資本公積轉增資配股(元/股)',
                },
                '股東配發內容-股東配股總股數(股)': {
                  type: 'string',
                  description: '股東配發內容-股東配股總股數(股)',
                },
                '董監酬勞(元)': {
                  type: 'string',
                  description: '董監酬勞(元)',
                },
                '員工紅利-現金紅利金額(元)H': {
                  type: 'string',
                  description: '員工紅利-現金紅利金額(元)H',
                },
                '員工紅利-股票紅利金額(元)I': {
                  type: 'string',
                  description: '員工紅利-股票紅利金額(元)I',
                },
                '員工紅利-股票紅利股數(股)': {
                  type: 'string',
                  description: '員工紅利-股票紅利股數(股)',
                },
                '員工紅利-股票紅利股數佔盈餘轉增資之比例(%)': {
                  type: 'string',
                  description: '員工紅利-股票紅利股數佔盈餘轉增資之比例(%)',
                },
                '有無全數分派員工股票紅利而股東未配發股票股利之情事 ': {
                  type: 'string',
                  description:
                    '有無全數分派員工股票紅利而股東未配發股票股利之情事 ',
                },
                股東會對於員工紅利及董監酬勞之決議情形與原董事會通過擬議內容之差異原因及合理性:
                  {
                    type: 'string',
                    description:
                      '股東會對於員工紅利及董監酬勞之決議情形與原董事會通過擬議內容之差異原因及合理性',
                  },
                '摘錄公司章程-股利分派部分': {
                  type: 'string',
                  description: '摘錄公司章程-股利分派部分',
                },
                普通股每股面額: {
                  type: 'string',
                  description: '普通股每股面額',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap26_L': {
      get: {
        tags: ['公司治理'],
        summary:
          '上市公司經營權及營業範圍異(變)動專區-經營權異動且營業範圍重大變更停止買賣公司',
        description:
          '上市公司經營權及營業範圍異(變)動專區-經營權異動且營業範圍重大變更停止買賣公司',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                停止買賣開始日: {
                  type: 'string',
                  description: '停止買賣開始日',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap41_L': {
      get: {
        tags: ['公司治理'],
        summary:
          '上市公司召開股東常 (臨時) 會日期、地點及採用電子投票情形等資料彙總表',
        description:
          '上市公司召開股東常 (臨時) 會日期、地點及採用電子投票情形等資料彙總表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                公司地址: {
                  type: 'string',
                  description: '公司地址',
                },
                '股東常(臨時)會': {
                  type: 'string',
                  description: '股東常(臨時)會',
                },
                開會日期: {
                  type: 'string',
                  description: '開會日期',
                },
                開會地點: {
                  type: 'string',
                  description: '開會地點',
                },
                是否改選董監: {
                  type: 'string',
                  description: '是否改選董監',
                },
                聯絡電話: {
                  type: 'string',
                  description: '聯絡電話',
                },
                股務單位: {
                  type: 'string',
                  description: '股務單位',
                },
                股務單位電話: {
                  type: 'string',
                  description: '股務單位電話',
                },
                是否採電子投票: {
                  type: 'string',
                  description: '是否採電子投票',
                },
              },
            },
          },
        },
      },
    },
    '/announcement/notetrans': {
      get: {
        tags: ['證券交易'],
        summary: '集中市場公布注意累計次數異常資訊',
        description: '集中市場公布注意累計次數異常資訊',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Number: {
                  type: 'string',
                  description: '編號',
                },
                Code: {
                  type: 'string',
                  description: '證券代號',
                },
                Name: {
                  type: 'string',
                  description: '證券名稱',
                },
                RecentlyMetAttentionSecuritiesCriteria: {
                  type: 'string',
                  description: '近期達本公司「公布注意交易資訊」標準之情形',
                },
              },
            },
          },
        },
      },
    },
    '/announcement/notice': {
      get: {
        tags: ['證券交易'],
        summary: '集中市場當日公布注意股票',
        description: '集中市場當日公布注意股票',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Number: {
                  type: 'string',
                  description: '編號',
                },
                Code: {
                  type: 'string',
                  description: '證券代號',
                },
                Name: {
                  type: 'string',
                  description: '證券名稱',
                },
                NumberOfAnnouncement: {
                  type: 'string',
                  description: '累計次數',
                },
                TradingInfoForAttention: {
                  type: 'string',
                  description: '注意交易資訊',
                },
                Date: {
                  type: 'string',
                  description: '日期',
                },
                ClosingPrice: {
                  type: 'string',
                  description: '收盤價',
                },
                PE: {
                  type: 'string',
                  description: '本益比',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap25_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司經營權及營業範圍異(變)動專區-營業範圍重大變更公司',
        description:
          '上市公司經營權及營業範圍異(變)動專區-營業範圍重大變更公司',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                序號: {
                  type: 'string',
                  description: '序號',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                營業範圍重大變更說明: {
                  type: 'string',
                  description: '營業範圍重大變更說明',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap27_L': {
      get: {
        tags: ['公司治理'],
        summary:
          '上市公司經營權及營業範圍異(變)動專區-經營權異動且營業範圍重大變更列為變更交易公司',
        description:
          '上市公司經營權及營業範圍異(變)動專區-經營權異動且營業範圍重大變更列為變更交易公司',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                變更交易開始日: {
                  type: 'string',
                  description: '變更交易開始日',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap32_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司公司治理之相關規程規則',
        description: '上市公司公司治理之相關規程規則',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                公司治理之相關規程規則: {
                  type: 'string',
                  description: '公司治理之相關規程規則',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap33_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司董事長是否兼任總經理',
        description: '上市公司董事長是否兼任總經理',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                董事長: {
                  type: 'string',
                  description: '董事長',
                },
                總經理: {
                  type: 'string',
                  description: '總經理',
                },
                董事長是否兼任總經理: {
                  type: 'string',
                  description: '董事長是否兼任總經理',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap09_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司董事、監察人質權設定占董事及監察人實際持有股數彙總表',
        description:
          '上市公司董事、監察人質權設定占董事及監察人實際持有股數彙總表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                公司董監事質權設定佔董事及監察人實際持有股數百分比: {
                  type: 'string',
                  description:
                    '公司董監事質權設定佔董事及監察人實際持有股數百分比',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/OpenData_BRK01': {
      get: {
        tags: ['券商資料'],
        summary: '證券商營業員男女人數統計資料',
        description: '證券商營業員男女人數統計資料',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                證券商代號: {
                  type: 'string',
                  description: '證券商代號',
                },
                男性員工人數: {
                  type: 'string',
                  description: '男性員工人數',
                },
                女性員工人數: {
                  type: 'string',
                  description: '女性員工人數',
                },
                總人數: {
                  type: 'string',
                  description: '總人數',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/OpenData_BRK02': {
      get: {
        tags: ['券商資料'],
        summary: '證券商分公司基本資料',
        description: '證券商分公司基本資料',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                證券商代號: {
                  type: 'string',
                  description: '證券商代號',
                },
                證券商名稱: {
                  type: 'string',
                  description: '證券商名稱',
                },
                開業日: {
                  type: 'string',
                  description: '開業日',
                },
                地址: {
                  type: 'string',
                  description: '地址',
                },
                電話: {
                  type: 'string',
                  description: '電話',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap34_L': {
      get: {
        tags: ['公司治理'],
        summary:
          '上市公司採累積投票制、全額連記法、候選人提名制選任董監事及當選資料彙總表',
        description:
          '上市公司採累積投票制、全額連記法、候選人提名制選任董監事及當選資料彙總表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                '股東常(臨時)會日期-常或臨時': {
                  type: 'string',
                  description: '股東常(臨時)會日期-常或臨時',
                },
                '股東常(臨時)會日期-日期': {
                  type: 'string',
                  description: '股東常(臨時)會日期-日期',
                },
                是否選任董監事: {
                  type: 'string',
                  description: '是否選任董監事',
                },
                董監事選任方式: {
                  type: 'string',
                  description: '董監事選任方式',
                },
                是否採候選人提名制選任董監事: {
                  type: 'string',
                  description: '是否採候選人提名制選任董監事',
                },
                '採候選人提名制選任董監事相關公告-提名受理期間': {
                  type: 'string',
                  description: '採候選人提名制選任董監事相關公告-提名受理期間',
                },
                提名受理處所: {
                  type: 'string',
                  description: '提名受理處所',
                },
                候選人類別: {
                  type: 'string',
                  description: '候選人類別',
                },
                候選人姓名: {
                  type: 'string',
                  description: '候選人姓名',
                },
                是否當選: {
                  type: 'string',
                  description: '是否當選',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap35_L': {
      get: {
        tags: ['公司治理'],
        summary: '上市公司股東行使提案權情形彙總表',
        description: '上市公司股東行使提案權情形彙總表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                召開股東會日期: {
                  type: 'string',
                  description: '召開股東會日期',
                },
                '股東依公司法第172條之1行使提案權-提案受理期間': {
                  type: 'string',
                  description: '股東依公司法第172條之1行使提案權-提案受理期間',
                },
                提案受理處所: {
                  type: 'string',
                  description: '提案受理處所',
                },
                提案內容: {
                  type: 'string',
                  description: '提案內容',
                },
              },
            },
          },
        },
      },
    },
    '/exchangeReport/TWT48U_ALL': {
      get: {
        tags: ['證券交易'],
        summary: '上市股票除權除息預告表',
        description: '上市股票除權除息預告表',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                Date: {
                  type: 'string',
                  description: '除權息日期',
                },
                Code: {
                  type: 'string',
                  description: '股票代號',
                },
                Name: {
                  type: 'string',
                  description: '名稱',
                },
                Exdividend: {
                  type: 'string',
                  description: '除權息',
                },
                StockDividendRatio: {
                  type: 'string',
                  description: '無償配股率',
                },
                SubscriptionRatio: {
                  type: 'string',
                  description: '現金增資配股率',
                },
                SubscriptionPricePerShare: {
                  type: 'string',
                  description: '現金增資認購價',
                },
                CashDividend: {
                  type: 'string',
                  description: '現金股利',
                },
                SharesOffered: {
                  type: 'string',
                  description: '公開承銷股數',
                },
                SharesEmpOwner: {
                  type: 'string',
                  description: '員工認購股數',
                },
                SharesholderOwner: {
                  type: 'string',
                  description: '原股東認購股數',
                },
                StockHoldingRatio: {
                  type: 'string',
                  description: '按持股比例仟股認購',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap06_L_bd': {
      get: {
        tags: ['財務報表'],
        summary: '上市公司綜合損益表(證券期貨業)',
        description: '上市公司綜合損益表(證券期貨業)',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                收益: {
                  type: 'string',
                  description: '收益',
                },
                支出及費用: {
                  type: 'string',
                  description: '支出及費用',
                },
                營業利益: {
                  type: 'string',
                  description: '營業利益',
                },
                營業外損益: {
                  type: 'string',
                  description: '營業外損益',
                },
                '稅前淨利（淨損）': {
                  type: 'string',
                  description: '稅前淨利（淨損）',
                },
                '所得稅費用（利益）': {
                  type: 'string',
                  description: '所得稅費用（利益）',
                },
                '繼續營業單位本期淨利（淨損）': {
                  type: 'string',
                  description: '繼續營業單位本期淨利（淨損）',
                },
                停業單位損益: {
                  type: 'string',
                  description: '停業單位損益',
                },
                合併前非屬共同控制股權損益: {
                  type: 'string',
                  description: '合併前非屬共同控制股權損益',
                },
                '本期淨利（淨損）': {
                  type: 'string',
                  description: '本期淨利（淨損）',
                },
                '本期其他綜合損益（稅後淨額）': {
                  type: 'string',
                  description: '本期其他綜合損益（稅後淨額）',
                },
                合併前非屬共同控制股權綜合損益淨額: {
                  type: 'string',
                  description: '合併前非屬共同控制股權綜合損益淨額',
                },
                本期綜合損益總額: {
                  type: 'string',
                  description: '本期綜合損益總額',
                },
                '淨利（損）歸屬於母公司業主': {
                  type: 'string',
                  description: '淨利（損）歸屬於母公司業主',
                },
                '淨利（淨損）歸屬於共同控制下前手權益': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於共同控制下前手權益',
                },
                '淨利（損）歸屬於非控制權益': {
                  type: 'string',
                  description: '淨利（損）歸屬於非控制權益',
                },
                綜合損益總額歸屬於母公司業主: {
                  type: 'string',
                  description: '綜合損益總額歸屬於母公司業主',
                },
                綜合損益總額歸屬於共同控制下前手權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於共同控制下前手權益',
                },
                綜合損益總額歸屬於非控制權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於非控制權益',
                },
                '基本每股盈餘（元）': {
                  type: 'string',
                  description: '基本每股盈餘（元）',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap06_L_ci': {
      get: {
        tags: ['財務報表'],
        summary: '上市公司綜合損益表(一般業)',
        description: '上市公司綜合損益表(一般業)',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                營業收入: {
                  type: 'string',
                  description: '營業收入',
                },
                營業成本: {
                  type: 'string',
                  description: '營業成本',
                },
                '原始認列生物資產及農產品之利益（損失）': {
                  type: 'string',
                  description: '原始認列生物資產及農產品之利益（損失）',
                },
                '生物資產當期公允價值減出售成本之變動利益（損失）': {
                  type: 'string',
                  description:
                    '生物資產當期公允價值減出售成本之變動利益（損失）',
                },
                '營業毛利（毛損）': {
                  type: 'string',
                  description: '營業毛利（毛損）',
                },
                '未實現銷貨（損）益': {
                  type: 'string',
                  description: '未實現銷貨（損）益',
                },
                '已實現銷貨（損）益': {
                  type: 'string',
                  description: '已實現銷貨（損）益',
                },
                '營業毛利（毛損）淨額': {
                  type: 'string',
                  description: '營業毛利（毛損）淨額',
                },
                營業費用: {
                  type: 'string',
                  description: '營業費用',
                },
                其他收益及費損淨額: {
                  type: 'string',
                  description: '其他收益及費損淨額',
                },
                '營業利益（損失）': {
                  type: 'string',
                  description: '營業利益（損失）',
                },
                營業外收入及支出: {
                  type: 'string',
                  description: '營業外收入及支出',
                },
                '稅前淨利（淨損）': {
                  type: 'string',
                  description: '稅前淨利（淨損）',
                },
                '所得稅費用（利益）': {
                  type: 'string',
                  description: '所得稅費用（利益）',
                },
                '繼續營業單位本期淨利（淨損）': {
                  type: 'string',
                  description: '繼續營業單位本期淨利（淨損）',
                },
                停業單位損益: {
                  type: 'string',
                  description: '停業單位損益',
                },
                合併前非屬共同控制股權損益: {
                  type: 'string',
                  description: '合併前非屬共同控制股權損益',
                },
                '本期淨利（淨損）': {
                  type: 'string',
                  description: '本期淨利（淨損）',
                },
                '其他綜合損益（淨額）': {
                  type: 'string',
                  description: '其他綜合損益（淨額）',
                },
                合併前非屬共同控制股權綜合損益淨額: {
                  type: 'string',
                  description: '合併前非屬共同控制股權綜合損益淨額',
                },
                本期綜合損益總額: {
                  type: 'string',
                  description: '本期綜合損益總額',
                },
                '淨利（淨損）歸屬於母公司業主': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於母公司業主',
                },
                '淨利（淨損）歸屬於共同控制下前手權益': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於共同控制下前手權益',
                },
                '淨利（淨損）歸屬於非控制權益': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於非控制權益',
                },
                綜合損益總額歸屬於母公司業主: {
                  type: 'string',
                  description: '綜合損益總額歸屬於母公司業主',
                },
                綜合損益總額歸屬於共同控制下前手權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於共同控制下前手權益',
                },
                綜合損益總額歸屬於非控制權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於非控制權益',
                },
                '基本每股盈餘（元）': {
                  type: 'string',
                  description: '基本每股盈餘（元）',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap06_L_fh': {
      get: {
        tags: ['財務報表'],
        summary: '上市公司綜合損益表(金控業)',
        description: '上市公司綜合損益表(金控業)',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                利息淨收益: {
                  type: 'string',
                  description: '利息淨收益',
                },
                其他收益及費損淨額: {
                  type: 'string',
                  description: '其他收益及費損淨額',
                },
                利息以外淨收益: {
                  type: 'string',
                  description: '利息以外淨收益',
                },
                淨收益: {
                  type: 'string',
                  description: '淨收益',
                },
                '呆帳費用、承諾及保證責任準備提存': {
                  type: 'string',
                  description: '呆帳費用、承諾及保證責任準備提存',
                },
                保險負債準備淨變動: {
                  type: 'string',
                  description: '保險負債準備淨變動',
                },
                營業費用: {
                  type: 'string',
                  description: '營業費用',
                },
                繼續營業單位稅前損益: {
                  type: 'string',
                  description: '繼續營業單位稅前損益',
                },
                '繼續營業單位本期淨利（淨損）': {
                  type: 'string',
                  description: '繼續營業單位本期淨利（淨損）',
                },
                停業單位損益: {
                  type: 'string',
                  description: '停業單位損益',
                },
                '本期稅後淨利（淨損）': {
                  type: 'string',
                  description: '本期稅後淨利（淨損）',
                },
                '本期其他綜合損益（稅後淨額）': {
                  type: 'string',
                  description: '本期其他綜合損益（稅後淨額）',
                },
                本期綜合損益總額: {
                  type: 'string',
                  description: '本期綜合損益總額',
                },
                '淨利（淨損）歸屬於母公司業主': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於母公司業主',
                },
                '淨利（淨損）歸屬於共同控制下前手權益': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於共同控制下前手權益',
                },
                '淨利（淨損）歸屬於非控制權益': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於非控制權益',
                },
                綜合損益總額歸屬於母公司業主: {
                  type: 'string',
                  description: '綜合損益總額歸屬於母公司業主',
                },
                綜合損益總額歸屬於共同控制下前手權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於共同控制下前手權益',
                },
                綜合損益總額歸屬於非控制權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於非控制權益',
                },
                '基本每股盈餘（元）': {
                  type: 'string',
                  description: '基本每股盈餘（元）',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap06_L_ins': {
      get: {
        tags: ['財務報表'],
        summary: '上市公司綜合損益表(保險業)',
        description: '上市公司綜合損益表(保險業)',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                營業收入: {
                  type: 'string',
                  description: '營業收入',
                },
                營業成本: {
                  type: 'string',
                  description: '營業成本',
                },
                營業費用: {
                  type: 'string',
                  description: '營業費用',
                },
                '營業利益（損失）': {
                  type: 'string',
                  description: '營業利益（損失）',
                },
                營業外收入及支出: {
                  type: 'string',
                  description: '營業外收入及支出',
                },
                '繼續營業單位稅前純益（純損）': {
                  type: 'string',
                  description: '繼續營業單位稅前純益（純損）',
                },
                '所得稅費用（利益）': {
                  type: 'string',
                  description: '所得稅費用（利益）',
                },
                '繼續營業單位本期純益（純損）': {
                  type: 'string',
                  description: '繼續營業單位本期純益（純損）',
                },
                停業單位損益: {
                  type: 'string',
                  description: '停業單位損益',
                },
                合併前非屬共同控制股權損益: {
                  type: 'string',
                  description: '合併前非屬共同控制股權損益',
                },
                '本期淨利（淨損）': {
                  type: 'string',
                  description: '本期淨利（淨損）',
                },
                '其他綜合損益（淨額）': {
                  type: 'string',
                  description: '其他綜合損益（淨額）',
                },
                合併前非屬共同控制股權綜合損益淨額: {
                  type: 'string',
                  description: '合併前非屬共同控制股權綜合損益淨額',
                },
                本期綜合損益總額: {
                  type: 'string',
                  description: '本期綜合損益總額',
                },
                '淨利（淨損）歸屬於母公司業主': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於母公司業主',
                },
                '淨利（淨損）歸屬於共同控制下前手權益': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於共同控制下前手權益',
                },
                '淨利（淨損）歸屬於非控制權益': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於非控制權益',
                },
                綜合損益總額歸屬於母公司業主: {
                  type: 'string',
                  description: '綜合損益總額歸屬於母公司業主',
                },
                綜合損益總額歸屬於共同控制下前手權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於共同控制下前手權益',
                },
                綜合損益總額歸屬於非控制權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於非控制權益',
                },
                '基本每股盈餘（元）': {
                  type: 'string',
                  description: '基本每股盈餘（元）',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap06_L_mim': {
      get: {
        tags: ['財務報表'],
        summary: '上市公司綜合損益表(異業)',
        description: '上市公司綜合損益表(異業)',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                收入: {
                  type: 'string',
                  description: '收入',
                },
                支出: {
                  type: 'string',
                  description: '支出',
                },
                '繼續營業單位稅前淨利（淨損）': {
                  type: 'string',
                  description: '繼續營業單位稅前淨利（淨損）',
                },
                '所得稅費用（利益）': {
                  type: 'string',
                  description: '所得稅費用（利益）',
                },
                '繼續營業單位本期淨利（淨損）': {
                  type: 'string',
                  description: '繼續營業單位本期淨利（淨損）',
                },
                停業單位損益: {
                  type: 'string',
                  description: '停業單位損益',
                },
                '本期淨利（淨損）': {
                  type: 'string',
                  description: '本期淨利（淨損）',
                },
                其他綜合損益: {
                  type: 'string',
                  description: '其他綜合損益',
                },
                本期綜合損益總額: {
                  type: 'string',
                  description: '本期綜合損益總額',
                },
                '淨利（淨損）歸屬於母公司業主': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於母公司業主',
                },
                '淨利（淨損）歸屬於共同控制下前手權益': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於共同控制下前手權益',
                },
                '淨利（淨損）歸屬於非控制權益': {
                  type: 'string',
                  description: '淨利（淨損）歸屬於非控制權益',
                },
                綜合損益總額歸屬於母公司業主: {
                  type: 'string',
                  description: '綜合損益總額歸屬於母公司業主',
                },
                綜合損益總額歸屬於共同控制下前手權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於共同控制下前手權益',
                },
                綜合損益總額歸屬於非控制權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於非控制權益',
                },
                '基本每股盈餘（元）': {
                  type: 'string',
                  description: '基本每股盈餘（元）',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap07_L_bd': {
      get: {
        tags: ['財務報表'],
        summary: '上市公司資產負債表(證券期貨業)',
        description: '上市公司資產負債表(證券期貨業)',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                流動資產: {
                  type: 'string',
                  description: '流動資產',
                },
                非流動資產: {
                  type: 'string',
                  description: '非流動資產',
                },
                資產總額: {
                  type: 'string',
                  description: '資產總額',
                },
                流動負債: {
                  type: 'string',
                  description: '流動負債',
                },
                非流動負債: {
                  type: 'string',
                  description: '非流動負債',
                },
                負債總額: {
                  type: 'string',
                  description: '負債總額',
                },
                股本: {
                  type: 'string',
                  description: '股本',
                },
                '權益－具證券性質之虛擬通貨': {
                  type: 'string',
                  description: '權益－具證券性質之虛擬通貨',
                },
                資本公積: {
                  type: 'string',
                  description: '資本公積',
                },
                保留盈餘: {
                  type: 'string',
                  description: '保留盈餘',
                },
                其他權益: {
                  type: 'string',
                  description: '其他權益',
                },
                庫藏股票: {
                  type: 'string',
                  description: '庫藏股票',
                },
                歸屬於母公司業主之權益合計: {
                  type: 'string',
                  description: '歸屬於母公司業主之權益合計',
                },
                共同控制下前手權益: {
                  type: 'string',
                  description: '共同控制下前手權益',
                },
                合併前非屬共同控制股權: {
                  type: 'string',
                  description: '合併前非屬共同控制股權',
                },
                非控制權益: {
                  type: 'string',
                  description: '非控制權益',
                },
                權益總額: {
                  type: 'string',
                  description: '權益總額',
                },
                '預收股款（權益項下）之約當發行股數': {
                  type: 'string',
                  description: '預收股款（權益項下）之約當發行股數',
                },
                待註銷股本股數: {
                  type: 'string',
                  description: '待註銷股本股數',
                },
                母公司暨子公司所持有之母公司庫藏股股數: {
                  type: 'string',
                  description: '母公司暨子公司所持有之母公司庫藏股股數',
                },
                每股參考淨值: {
                  type: 'string',
                  description: '每股參考淨值',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap07_L_ci': {
      get: {
        tags: ['財務報表'],
        summary: '上市公司資產負債表(一般業)',
        description: '上市公司資產負債表(一般業)',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                流動資產: {
                  type: 'string',
                  description: '流動資產',
                },
                非流動資產: {
                  type: 'string',
                  description: '非流動資產',
                },
                資產總額: {
                  type: 'string',
                  description: '資產總額',
                },
                流動負債: {
                  type: 'string',
                  description: '流動負債',
                },
                非流動負債: {
                  type: 'string',
                  description: '非流動負債',
                },
                負債總額: {
                  type: 'string',
                  description: '負債總額',
                },
                股本: {
                  type: 'string',
                  description: '股本',
                },
                '權益─具證券性質之虛擬通貨': {
                  type: 'string',
                  description: '權益─具證券性質之虛擬通貨',
                },
                資本公積: {
                  type: 'string',
                  description: '資本公積',
                },
                保留盈餘: {
                  type: 'string',
                  description: '保留盈餘',
                },
                其他權益: {
                  type: 'string',
                  description: '其他權益',
                },
                庫藏股票: {
                  type: 'string',
                  description: '庫藏股票',
                },
                歸屬於母公司業主之權益合計: {
                  type: 'string',
                  description: '歸屬於母公司業主之權益合計',
                },
                共同控制下前手權益: {
                  type: 'string',
                  description: '共同控制下前手權益',
                },
                合併前非屬共同控制股權: {
                  type: 'string',
                  description: '合併前非屬共同控制股權',
                },
                非控制權益: {
                  type: 'string',
                  description: '非控制權益',
                },
                權益總額: {
                  type: 'string',
                  description: '權益總額',
                },
                '預收股款（權益項下）之約當發行股數': {
                  type: 'string',
                  description: '預收股款（權益項下）之約當發行股數',
                },
                待註銷股本股數: {
                  type: 'string',
                  description: '待註銷股本股數',
                },
                母公司暨子公司所持有之母公司庫藏股股數: {
                  type: 'string',
                  description: '母公司暨子公司所持有之母公司庫藏股股數',
                },
                每股參考淨值: {
                  type: 'string',
                  description: '每股參考淨值',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap07_L_fh': {
      get: {
        tags: ['財務報表'],
        summary: '上市公司資產負債表(金控業)',
        description: '上市公司資產負債表(金控業)',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                現金及約當現金: {
                  type: 'string',
                  description: '現金及約當現金',
                },
                存放央行及拆借金融同業: {
                  type: 'string',
                  description: '存放央行及拆借金融同業',
                },
                透過損益按公允價值衡量之金融資產: {
                  type: 'string',
                  description: '透過損益按公允價值衡量之金融資產',
                },
                透過其他綜合損益按公允價值衡量之金融資產: {
                  type: 'string',
                  description: '透過其他綜合損益按公允價值衡量之金融資產',
                },
                按攤銷後成本衡量之債務工具投資: {
                  type: 'string',
                  description: '按攤銷後成本衡量之債務工具投資',
                },
                避險之金融資產: {
                  type: 'string',
                  description: '避險之金融資產',
                },
                附賣回票券及債券投資: {
                  type: 'string',
                  description: '附賣回票券及債券投資',
                },
                '應收款項－淨額': {
                  type: 'string',
                  description: '應收款項－淨額',
                },
                本期所得稅資產: {
                  type: 'string',
                  description: '本期所得稅資產',
                },
                '待出售資產－淨額': {
                  type: 'string',
                  description: '待出售資產－淨額',
                },
                '待分配予業主之資產－淨額': {
                  type: 'string',
                  description: '待分配予業主之資產－淨額',
                },
                '貼現及放款－淨額': {
                  type: 'string',
                  description: '貼現及放款－淨額',
                },
                '再保險合約資產－淨額': {
                  type: 'string',
                  description: '再保險合約資產－淨額',
                },
                '採用權益法之投資－淨額': {
                  type: 'string',
                  description: '採用權益法之投資－淨額',
                },
                '受限制資產－淨額': {
                  type: 'string',
                  description: '受限制資產－淨額',
                },
                '其他金融資產－淨額': {
                  type: 'string',
                  description: '其他金融資產－淨額',
                },
                '投資性不動產－淨額': {
                  type: 'string',
                  description: '投資性不動產－淨額',
                },
                '不動產及設備－淨額': {
                  type: 'string',
                  description: '不動產及設備－淨額',
                },
                '使用權資產－淨額': {
                  type: 'string',
                  description: '使用權資產－淨額',
                },
                '無形資產－淨額': {
                  type: 'string',
                  description: '無形資產－淨額',
                },
                遞延所得稅資產: {
                  type: 'string',
                  description: '遞延所得稅資產',
                },
                '其他資產－淨額': {
                  type: 'string',
                  description: '其他資產－淨額',
                },
                資產總計: {
                  type: 'string',
                  description: '資產總計',
                },
                央行及金融同業存款: {
                  type: 'string',
                  description: '央行及金融同業存款',
                },
                央行及同業融資: {
                  type: 'string',
                  description: '央行及同業融資',
                },
                透過損益按公允價值衡量之金融負債: {
                  type: 'string',
                  description: '透過損益按公允價值衡量之金融負債',
                },
                避險之金融負債: {
                  type: 'string',
                  description: '避險之金融負債',
                },
                附買回票券及債券負債: {
                  type: 'string',
                  description: '附買回票券及債券負債',
                },
                '應付商業本票－淨額': {
                  type: 'string',
                  description: '應付商業本票－淨額',
                },
                應付款項: {
                  type: 'string',
                  description: '應付款項',
                },
                本期所得稅負債: {
                  type: 'string',
                  description: '本期所得稅負債',
                },
                與待出售資產直接相關之負債: {
                  type: 'string',
                  description: '與待出售資產直接相關之負債',
                },
                存款及匯款: {
                  type: 'string',
                  description: '存款及匯款',
                },
                應付債券: {
                  type: 'string',
                  description: '應付債券',
                },
                其他借款: {
                  type: 'string',
                  description: '其他借款',
                },
                特別股負債: {
                  type: 'string',
                  description: '特別股負債',
                },
                負債準備: {
                  type: 'string',
                  description: '負債準備',
                },
                其他金融負債: {
                  type: 'string',
                  description: '其他金融負債',
                },
                租賃負債: {
                  type: 'string',
                  description: '租賃負債',
                },
                遞延所得稅負債: {
                  type: 'string',
                  description: '遞延所得稅負債',
                },
                其他負債: {
                  type: 'string',
                  description: '其他負債',
                },
                負債總計: {
                  type: 'string',
                  description: '負債總計',
                },
                股本: {
                  type: 'string',
                  description: '股本',
                },
                資本公積: {
                  type: 'string',
                  description: '資本公積',
                },
                保留盈餘: {
                  type: 'string',
                  description: '保留盈餘',
                },
                其他權益: {
                  type: 'string',
                  description: '其他權益',
                },
                庫藏股票: {
                  type: 'string',
                  description: '庫藏股票',
                },
                共同控制下前手權益: {
                  type: 'string',
                  description: '共同控制下前手權益',
                },
                歸屬於母公司業主之權益: {
                  type: 'string',
                  description: '歸屬於母公司業主之權益',
                },
                非控制權益: {
                  type: 'string',
                  description: '非控制權益',
                },
                權益總計: {
                  type: 'string',
                  description: '權益總計',
                },
                '待註銷股本股數（單位：股）': {
                  type: 'string',
                  description: '待註銷股本股數（單位：股）',
                },
                '預收股款（權益項下）之約當發行股數（單位：股）': {
                  type: 'string',
                  description: '預收股款（權益項下）之約當發行股數（單位：股）',
                },
                '母公司暨子公司所持有之母公司庫藏股股數（單位：股）': {
                  type: 'string',
                  description:
                    '母公司暨子公司所持有之母公司庫藏股股數（單位：股）',
                },
                每股參考淨值: {
                  type: 'string',
                  description: '每股參考淨值',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap07_L_ins': {
      get: {
        tags: ['財務報表'],
        summary: '上市公司資產負債表(保險業)',
        description: '上市公司資產負債表(保險業)',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                現金及約當現金: {
                  type: 'string',
                  description: '現金及約當現金',
                },
                應收款項: {
                  type: 'string',
                  description: '應收款項',
                },
                本期所得稅資產: {
                  type: 'string',
                  description: '本期所得稅資產',
                },
                待出售資產: {
                  type: 'string',
                  description: '待出售資產',
                },
                '待分配予業主之資產（或處分群組）': {
                  type: 'string',
                  description: '待分配予業主之資產（或處分群組）',
                },
                投資: {
                  type: 'string',
                  description: '投資',
                },
                再保險合約資產: {
                  type: 'string',
                  description: '再保險合約資產',
                },
                不動產及設備: {
                  type: 'string',
                  description: '不動產及設備',
                },
                使用權資產: {
                  type: 'string',
                  description: '使用權資產',
                },
                無形資產: {
                  type: 'string',
                  description: '無形資產',
                },
                遞延所得稅資產: {
                  type: 'string',
                  description: '遞延所得稅資產',
                },
                其他資產: {
                  type: 'string',
                  description: '其他資產',
                },
                分離帳戶保險商品資產: {
                  type: 'string',
                  description: '分離帳戶保險商品資產',
                },
                資產總計: {
                  type: 'string',
                  description: '資產總計',
                },
                短期債務: {
                  type: 'string',
                  description: '短期債務',
                },
                應付款項: {
                  type: 'string',
                  description: '應付款項',
                },
                本期所得稅負債: {
                  type: 'string',
                  description: '本期所得稅負債',
                },
                與待出售資產直接相關之負債: {
                  type: 'string',
                  description: '與待出售資產直接相關之負債',
                },
                透過損益按公允價值衡量之金融負債: {
                  type: 'string',
                  description: '透過損益按公允價值衡量之金融負債',
                },
                避險之金融負債: {
                  type: 'string',
                  description: '避險之金融負債',
                },
                應付債券: {
                  type: 'string',
                  description: '應付債券',
                },
                特別股負債: {
                  type: 'string',
                  description: '特別股負債',
                },
                其他金融負債: {
                  type: 'string',
                  description: '其他金融負債',
                },
                租賃負債: {
                  type: 'string',
                  description: '租賃負債',
                },
                保險負債: {
                  type: 'string',
                  description: '保險負債',
                },
                具金融商品性質之保險契約準備: {
                  type: 'string',
                  description: '具金融商品性質之保險契約準備',
                },
                外匯價格變動準備: {
                  type: 'string',
                  description: '外匯價格變動準備',
                },
                負債準備: {
                  type: 'string',
                  description: '負債準備',
                },
                遞延所得稅負債: {
                  type: 'string',
                  description: '遞延所得稅負債',
                },
                其他負債: {
                  type: 'string',
                  description: '其他負債',
                },
                分離帳戶保險商品負債: {
                  type: 'string',
                  description: '分離帳戶保險商品負債',
                },
                負債總計: {
                  type: 'string',
                  description: '負債總計',
                },
                股本: {
                  type: 'string',
                  description: '股本',
                },
                '權益─具證券性質之虛擬通貨': {
                  type: 'string',
                  description: '權益─具證券性質之虛擬通貨',
                },
                資本公積: {
                  type: 'string',
                  description: '資本公積',
                },
                保留盈餘: {
                  type: 'string',
                  description: '保留盈餘',
                },
                其他權益: {
                  type: 'string',
                  description: '其他權益',
                },
                庫藏股票: {
                  type: 'string',
                  description: '庫藏股票',
                },
                歸屬於母公司業主之權益合計: {
                  type: 'string',
                  description: '歸屬於母公司業主之權益合計',
                },
                共同控制下前手權益: {
                  type: 'string',
                  description: '共同控制下前手權益',
                },
                合併前非屬共同控制股權: {
                  type: 'string',
                  description: '合併前非屬共同控制股權',
                },
                非控制權益: {
                  type: 'string',
                  description: '非控制權益',
                },
                權益總計: {
                  type: 'string',
                  description: '權益總計',
                },
                負債及權益總計: {
                  type: 'string',
                  description: '負債及權益總計',
                },
                '待註銷股本股數（單位：股）': {
                  type: 'string',
                  description: '待註銷股本股數（單位：股）',
                },
                '母公司暨子公司所持有之母公司庫藏股股數（單位：股）': {
                  type: 'string',
                  description:
                    '母公司暨子公司所持有之母公司庫藏股股數（單位：股）',
                },
                '預收股款（權益項下）之約當發行股數（單位：股）': {
                  type: 'string',
                  description: '預收股款（權益項下）之約當發行股數（單位：股）',
                },
                每股參考淨值: {
                  type: 'string',
                  description: '每股參考淨值',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap07_L_mim': {
      get: {
        tags: ['財務報表'],
        summary: '上市公司資產負債表(異業)',
        description: '上市公司資產負債表(異業)',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                流動資產: {
                  type: 'string',
                  description: '流動資產',
                },
                非流動資產: {
                  type: 'string',
                  description: '非流動資產',
                },
                資產總額: {
                  type: 'string',
                  description: '資產總額',
                },
                流動負債: {
                  type: 'string',
                  description: '流動負債',
                },
                非流動負債: {
                  type: 'string',
                  description: '非流動負債',
                },
                負債總額: {
                  type: 'string',
                  description: '負債總額',
                },
                股本: {
                  type: 'string',
                  description: '股本',
                },
                '權益－具證券性質之虛擬通貨': {
                  type: 'string',
                  description: '權益－具證券性質之虛擬通貨',
                },
                資本公積: {
                  type: 'string',
                  description: '資本公積',
                },
                保留盈餘: {
                  type: 'string',
                  description: '保留盈餘',
                },
                其他權益: {
                  type: 'string',
                  description: '其他權益',
                },
                庫藏股票: {
                  type: 'string',
                  description: '庫藏股票',
                },
                歸屬於母公司業主之權益合計: {
                  type: 'string',
                  description: '歸屬於母公司業主之權益合計',
                },
                共同控制下前手權益: {
                  type: 'string',
                  description: '共同控制下前手權益',
                },
                非控制權益: {
                  type: 'string',
                  description: '非控制權益',
                },
                權益總額: {
                  type: 'string',
                  description: '權益總額',
                },
                '待註銷股本股數（單位：股）': {
                  type: 'string',
                  description: '待註銷股本股數（單位：股）',
                },
                '預收股款（權益項下）之約當發行股數（單位：股）': {
                  type: 'string',
                  description: '預收股款（權益項下）之約當發行股數（單位：股）',
                },
                '母公司暨子公司所持有之母公司庫藏股股數（單位：股）': {
                  type: 'string',
                  description:
                    '母公司暨子公司所持有之母公司庫藏股股數（單位：股）',
                },
                每股參考淨值: {
                  type: 'string',
                  description: '每股參考淨值',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap07_X_basi': {
      get: {
        tags: ['財務報表'],
        summary: '公發公司資產負債表-金融業',
        description: '公發公司資產負債表-金融業',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                現金及約當現金: {
                  type: 'string',
                  description: '現金及約當現金',
                },
                存放央行及拆借銀行同業: {
                  type: 'string',
                  description: '存放央行及拆借銀行同業',
                },
                透過損益按公允價值衡量之金融資產: {
                  type: 'string',
                  description: '透過損益按公允價值衡量之金融資產',
                },
                透過其他綜合損益按公允價值衡量之金融資產: {
                  type: 'string',
                  description: '透過其他綜合損益按公允價值衡量之金融資產',
                },
                按攤銷後成本衡量之債務工具投資: {
                  type: 'string',
                  description: '按攤銷後成本衡量之債務工具投資',
                },
                避險之衍生金融資產淨額: {
                  type: 'string',
                  description: '避險之衍生金融資產淨額',
                },
                附賣回票券及債券投資淨額: {
                  type: 'string',
                  description: '附賣回票券及債券投資淨額',
                },
                '應收款項－淨額': {
                  type: 'string',
                  description: '應收款項－淨額',
                },
                當期所得稅資產: {
                  type: 'string',
                  description: '當期所得稅資產',
                },
                '待出售資產－淨額': {
                  type: 'string',
                  description: '待出售資產－淨額',
                },
                '待分配予業主之資產－淨額': {
                  type: 'string',
                  description: '待分配予業主之資產－淨額',
                },
                '貼現及放款－淨額': {
                  type: 'string',
                  description: '貼現及放款－淨額',
                },
                '採用權益法之投資－淨額': {
                  type: 'string',
                  description: '採用權益法之投資－淨額',
                },
                '受限制資產－淨額': {
                  type: 'string',
                  description: '受限制資產－淨額',
                },
                '其他金融資產－淨額': {
                  type: 'string',
                  description: '其他金融資產－淨額',
                },
                '不動產及設備－淨額': {
                  type: 'string',
                  description: '不動產及設備－淨額',
                },
                '使用權資產－淨額': {
                  type: 'string',
                  description: '使用權資產－淨額',
                },
                '投資性不動產投資－淨額': {
                  type: 'string',
                  description: '投資性不動產投資－淨額',
                },
                '無形資產－淨額': {
                  type: 'string',
                  description: '無形資產－淨額',
                },
                遞延所得稅資產: {
                  type: 'string',
                  description: '遞延所得稅資產',
                },
                '其他資產－淨額': {
                  type: 'string',
                  description: '其他資產－淨額',
                },
                資產總額: {
                  type: 'string',
                  description: '資產總額',
                },
                央行及銀行同業存款: {
                  type: 'string',
                  description: '央行及銀行同業存款',
                },
                央行及同業融資: {
                  type: 'string',
                  description: '央行及同業融資',
                },
                透過損益按公允價值衡量之金融負債: {
                  type: 'string',
                  description: '透過損益按公允價值衡量之金融負債',
                },
                '避險之衍生金融負債－淨額': {
                  type: 'string',
                  description: '避險之衍生金融負債－淨額',
                },
                附買回票券及債券負債: {
                  type: 'string',
                  description: '附買回票券及債券負債',
                },
                應付款項: {
                  type: 'string',
                  description: '應付款項',
                },
                當期所得稅負債: {
                  type: 'string',
                  description: '當期所得稅負債',
                },
                與待出售資產直接相關之負債: {
                  type: 'string',
                  description: '與待出售資產直接相關之負債',
                },
                存款及匯款: {
                  type: 'string',
                  description: '存款及匯款',
                },
                應付金融債券: {
                  type: 'string',
                  description: '應付金融債券',
                },
                應付公司債: {
                  type: 'string',
                  description: '應付公司債',
                },
                特別股負債: {
                  type: 'string',
                  description: '特別股負債',
                },
                其他金融負債: {
                  type: 'string',
                  description: '其他金融負債',
                },
                負債準備: {
                  type: 'string',
                  description: '負債準備',
                },
                租賃負債: {
                  type: 'string',
                  description: '租賃負債',
                },
                遞延所得稅負債: {
                  type: 'string',
                  description: '遞延所得稅負債',
                },
                其他負債: {
                  type: 'string',
                  description: '其他負債',
                },
                負債總額: {
                  type: 'string',
                  description: '負債總額',
                },
                股本: {
                  type: 'string',
                  description: '股本',
                },
                '權益─具證券性質之虛擬通貨': {
                  type: 'string',
                  description: '權益─具證券性質之虛擬通貨',
                },
                資本公積: {
                  type: 'string',
                  description: '資本公積',
                },
                保留盈餘: {
                  type: 'string',
                  description: '保留盈餘',
                },
                其他權益: {
                  type: 'string',
                  description: '其他權益',
                },
                庫藏股票: {
                  type: 'string',
                  description: '庫藏股票',
                },
                歸屬於母公司業主之權益合計: {
                  type: 'string',
                  description: '歸屬於母公司業主之權益合計',
                },
                共同控制下前手權益: {
                  type: 'string',
                  description: '共同控制下前手權益',
                },
                合併前非屬共同控制股權: {
                  type: 'string',
                  description: '合併前非屬共同控制股權',
                },
                非控制權益: {
                  type: 'string',
                  description: '非控制權益',
                },
                權益總額: {
                  type: 'string',
                  description: '權益總額',
                },
                '待註銷股本股數（單位：股）': {
                  type: 'string',
                  description: '待註銷股本股數（單位：股）',
                },
                '母公司暨子公司所持有之母公司庫藏股股數（單位：股）': {
                  type: 'string',
                  description:
                    '母公司暨子公司所持有之母公司庫藏股股數（單位：股）',
                },
                '預收股款（權益項下）之約當發行股數（單位：股）': {
                  type: 'string',
                  description: '預收股款（權益項下）之約當發行股數（單位：股）',
                },
                每股參考淨值: {
                  type: 'string',
                  description: '每股參考淨值',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap07_X_bd': {
      get: {
        tags: ['財務報表'],
        summary: '公發公司資產負債表-證券期貨業',
        description: '公發公司資產負債表-證券期貨業',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                流動資產: {
                  type: 'string',
                  description: '流動資產',
                },
                非流動資產: {
                  type: 'string',
                  description: '非流動資產',
                },
                資產總計: {
                  type: 'string',
                  description: '資產總計',
                },
                流動負債: {
                  type: 'string',
                  description: '流動負債',
                },
                非流動負債: {
                  type: 'string',
                  description: '非流動負債',
                },
                負債總計: {
                  type: 'string',
                  description: '負債總計',
                },
                股本: {
                  type: 'string',
                  description: '股本',
                },
                '權益－具證券性質之虛擬通貨': {
                  type: 'string',
                  description: '權益－具證券性質之虛擬通貨',
                },
                資本公積: {
                  type: 'string',
                  description: '資本公積',
                },
                '保留盈餘（或累積虧損）': {
                  type: 'string',
                  description: '保留盈餘（或累積虧損）',
                },
                其他權益: {
                  type: 'string',
                  description: '其他權益',
                },
                庫藏股票: {
                  type: 'string',
                  description: '庫藏股票',
                },
                歸屬於母公司業主權益合計: {
                  type: 'string',
                  description: '歸屬於母公司業主權益合計',
                },
                共同控制下前手權益: {
                  type: 'string',
                  description: '共同控制下前手權益',
                },
                合併前非屬共同控制股權: {
                  type: 'string',
                  description: '合併前非屬共同控制股權',
                },
                非控制權益: {
                  type: 'string',
                  description: '非控制權益',
                },
                權益總計: {
                  type: 'string',
                  description: '權益總計',
                },
                '待註銷股本股數（單位：股）': {
                  type: 'string',
                  description: '待註銷股本股數（單位：股）',
                },
                '預收股款（權益項下）之約當發行股數（單位：股）': {
                  type: 'string',
                  description: '預收股款（權益項下）之約當發行股數（單位：股）',
                },
                '母公司暨子公司持有之母公司庫藏股股數（單位：股）': {
                  type: 'string',
                  description:
                    '母公司暨子公司持有之母公司庫藏股股數（單位：股）',
                },
                每股參考淨值: {
                  type: 'string',
                  description: '每股參考淨值',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap07_X_fh': {
      get: {
        tags: ['財務報表'],
        summary: '公發公司資產負債表-金控業',
        description: '公發公司資產負債表-金控業',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                現金及約當現金: {
                  type: 'string',
                  description: '現金及約當現金',
                },
                存放央行及拆借金融同業: {
                  type: 'string',
                  description: '存放央行及拆借金融同業',
                },
                透過損益按公允價值衡量之金融資產: {
                  type: 'string',
                  description: '透過損益按公允價值衡量之金融資產',
                },
                透過其他綜合損益按公允價值衡量之金融資產: {
                  type: 'string',
                  description: '透過其他綜合損益按公允價值衡量之金融資產',
                },
                按攤銷後成本衡量之債務工具投資: {
                  type: 'string',
                  description: '按攤銷後成本衡量之債務工具投資',
                },
                避險之衍生金融資產: {
                  type: 'string',
                  description: '避險之衍生金融資產',
                },
                附賣回票券及債券投資: {
                  type: 'string',
                  description: '附賣回票券及債券投資',
                },
                '應收款項－淨額': {
                  type: 'string',
                  description: '應收款項－淨額',
                },
                當期所得稅資產: {
                  type: 'string',
                  description: '當期所得稅資產',
                },
                '待出售資產－淨額': {
                  type: 'string',
                  description: '待出售資產－淨額',
                },
                空格: {
                  type: 'string',
                  description: '空格',
                },
                '貼現及放款－淨額': {
                  type: 'string',
                  description: '貼現及放款－淨額',
                },
                '再保險合約資產－淨額': {
                  type: 'string',
                  description: '再保險合約資產－淨額',
                },
                '採用權益法之投資－淨額': {
                  type: 'string',
                  description: '採用權益法之投資－淨額',
                },
                '受限制資產－淨額': {
                  type: 'string',
                  description: '受限制資產－淨額',
                },
                '其他金融資產－淨額': {
                  type: 'string',
                  description: '其他金融資產－淨額',
                },
                '投資性不動產－淨額': {
                  type: 'string',
                  description: '投資性不動產－淨額',
                },
                '不動產及設備－淨額': {
                  type: 'string',
                  description: '不動產及設備－淨額',
                },
                '使用權資產－淨額': {
                  type: 'string',
                  description: '使用權資產－淨額',
                },
                '無形資產－淨額': {
                  type: 'string',
                  description: '無形資產－淨額',
                },
                遞延所得稅資產: {
                  type: 'string',
                  description: '遞延所得稅資產',
                },
                '其他資產－淨額': {
                  type: 'string',
                  description: '其他資產－淨額',
                },
                資產總額: {
                  type: 'string',
                  description: '資產總額',
                },
                央行及金融同業存款: {
                  type: 'string',
                  description: '央行及金融同業存款',
                },
                央行及同業融資: {
                  type: 'string',
                  description: '央行及同業融資',
                },
                透過損益按公允價值衡量之金融負債: {
                  type: 'string',
                  description: '透過損益按公允價值衡量之金融負債',
                },
                避險之衍生金融負債: {
                  type: 'string',
                  description: '避險之衍生金融負債',
                },
                附買回票券及債券負債: {
                  type: 'string',
                  description: '附買回票券及債券負債',
                },
                '應付商業本票－淨額': {
                  type: 'string',
                  description: '應付商業本票－淨額',
                },
                應付款項: {
                  type: 'string',
                  description: '應付款項',
                },
                當期所得稅負債: {
                  type: 'string',
                  description: '當期所得稅負債',
                },
                與待出售資產直接相關之負債: {
                  type: 'string',
                  description: '與待出售資產直接相關之負債',
                },
                存款及匯款: {
                  type: 'string',
                  description: '存款及匯款',
                },
                應付債券: {
                  type: 'string',
                  description: '應付債券',
                },
                其他借款: {
                  type: 'string',
                  description: '其他借款',
                },
                特別股負債: {
                  type: 'string',
                  description: '特別股負債',
                },
                負債準備: {
                  type: 'string',
                  description: '負債準備',
                },
                其他金融負債: {
                  type: 'string',
                  description: '其他金融負債',
                },
                租賃負債: {
                  type: 'string',
                  description: '租賃負債',
                },
                遞延所得稅負債: {
                  type: 'string',
                  description: '遞延所得稅負債',
                },
                其他負債: {
                  type: 'string',
                  description: '其他負債',
                },
                負債總額: {
                  type: 'string',
                  description: '負債總額',
                },
                股本: {
                  type: 'string',
                  description: '股本',
                },
                資本公積: {
                  type: 'string',
                  description: '資本公積',
                },
                保留盈餘: {
                  type: 'string',
                  description: '保留盈餘',
                },
                其他權益: {
                  type: 'string',
                  description: '其他權益',
                },
                庫藏股票: {
                  type: 'string',
                  description: '庫藏股票',
                },
                共同控制下前手權益: {
                  type: 'string',
                  description: '共同控制下前手權益',
                },
                歸屬於母公司業主之權益: {
                  type: 'string',
                  description: '歸屬於母公司業主之權益',
                },
                非控制權益: {
                  type: 'string',
                  description: '非控制權益',
                },
                權益總額: {
                  type: 'string',
                  description: '權益總額',
                },
                '待註銷股本股數（單位：股）': {
                  type: 'string',
                  description: '待註銷股本股數（單位：股）',
                },
                '預收股款（權益項下）之約當發行股數（單位：股）': {
                  type: 'string',
                  description: '預收股款（權益項下）之約當發行股數（單位：股）',
                },
                '母公司暨子公司所持有之母公司庫藏股股數（單位：股）': {
                  type: 'string',
                  description:
                    '母公司暨子公司所持有之母公司庫藏股股數（單位：股）',
                },
                每股參考淨值: {
                  type: 'string',
                  description: '每股參考淨值',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap07_X_ins': {
      get: {
        tags: ['財務報表'],
        summary: '公發公司資產負債表-保險業',
        description: '公發公司資產負債表-保險業',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                現金及約當現金: {
                  type: 'string',
                  description: '現金及約當現金',
                },
                應收款項: {
                  type: 'string',
                  description: '應收款項',
                },
                本期所得稅資產: {
                  type: 'string',
                  description: '本期所得稅資產',
                },
                待出售資產: {
                  type: 'string',
                  description: '待出售資產',
                },
                '待分配予業主之資產（或處分群組）': {
                  type: 'string',
                  description: '待分配予業主之資產（或處分群組）',
                },
                投資: {
                  type: 'string',
                  description: '投資',
                },
                再保險合約資產: {
                  type: 'string',
                  description: '再保險合約資產',
                },
                不動產及設備: {
                  type: 'string',
                  description: '不動產及設備',
                },
                使用權資產: {
                  type: 'string',
                  description: '使用權資產',
                },
                無形資產: {
                  type: 'string',
                  description: '無形資產',
                },
                遞延所得稅資產: {
                  type: 'string',
                  description: '遞延所得稅資產',
                },
                其他資產: {
                  type: 'string',
                  description: '其他資產',
                },
                分離帳戶保險商品資產: {
                  type: 'string',
                  description: '分離帳戶保險商品資產',
                },
                資產總計: {
                  type: 'string',
                  description: '資產總計',
                },
                短期債務: {
                  type: 'string',
                  description: '短期債務',
                },
                應付款項: {
                  type: 'string',
                  description: '應付款項',
                },
                本期所得稅負債: {
                  type: 'string',
                  description: '本期所得稅負債',
                },
                與待出售資產直接相關之負債: {
                  type: 'string',
                  description: '與待出售資產直接相關之負債',
                },
                透過損益按公允價值衡量之金融負債: {
                  type: 'string',
                  description: '透過損益按公允價值衡量之金融負債',
                },
                避險之衍生金融負債: {
                  type: 'string',
                  description: '避險之衍生金融負債',
                },
                應付債券: {
                  type: 'string',
                  description: '應付債券',
                },
                特別股負債: {
                  type: 'string',
                  description: '特別股負債',
                },
                其他金融負債: {
                  type: 'string',
                  description: '其他金融負債',
                },
                租賃負債: {
                  type: 'string',
                  description: '租賃負債',
                },
                保險負債: {
                  type: 'string',
                  description: '保險負債',
                },
                具金融商品性質之保險契約準備: {
                  type: 'string',
                  description: '具金融商品性質之保險契約準備',
                },
                外匯價格變動準備: {
                  type: 'string',
                  description: '外匯價格變動準備',
                },
                負債準備: {
                  type: 'string',
                  description: '負債準備',
                },
                遞延所得稅負債: {
                  type: 'string',
                  description: '遞延所得稅負債',
                },
                其他負債: {
                  type: 'string',
                  description: '其他負債',
                },
                分離帳戶保險商品負債: {
                  type: 'string',
                  description: '分離帳戶保險商品負債',
                },
                負債總計: {
                  type: 'string',
                  description: '負債總計',
                },
                股本: {
                  type: 'string',
                  description: '股本',
                },
                '權益─具證券性質之虛擬通貨': {
                  type: 'string',
                  description: '權益─具證券性質之虛擬通貨',
                },
                資本公積: {
                  type: 'string',
                  description: '資本公積',
                },
                保留盈餘: {
                  type: 'string',
                  description: '保留盈餘',
                },
                其他權益: {
                  type: 'string',
                  description: '其他權益',
                },
                庫藏股票: {
                  type: 'string',
                  description: '庫藏股票',
                },
                歸屬於母公司業主之權益合計: {
                  type: 'string',
                  description: '歸屬於母公司業主之權益合計',
                },
                共同控制下前手權益: {
                  type: 'string',
                  description: '共同控制下前手權益',
                },
                合併前非屬共同控制股權: {
                  type: 'string',
                  description: '合併前非屬共同控制股權',
                },
                非控制權益: {
                  type: 'string',
                  description: '非控制權益',
                },
                權益總計: {
                  type: 'string',
                  description: '權益總計',
                },
                '待註銷股本股數（單位：股）': {
                  type: 'string',
                  description: '待註銷股本股數（單位：股）',
                },
                '母公司暨子公司所持有之母公司庫藏股股數（單位：股）': {
                  type: 'string',
                  description:
                    '母公司暨子公司所持有之母公司庫藏股股數（單位：股）',
                },
                '預收股款（權益項下）之約當發行股數（單位：股）': {
                  type: 'string',
                  description: '預收股款（權益項下）之約當發行股數（單位：股）',
                },
                每股參考淨值: {
                  type: 'string',
                  description: '每股參考淨值',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap11_P': {
      get: {
        tags: ['財務報表'],
        summary: '公發公司董監事持股餘額明細',
        description: '公發公司董監事持股餘額明細',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                資料年月: {
                  type: 'string',
                  description: '資料年月',
                },
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                職稱: {
                  type: 'string',
                  description: '職稱',
                },
                姓名: {
                  type: 'string',
                  description: '姓名',
                },
                選任時持股: {
                  type: 'string',
                  description: '選任時持股',
                },
                目前持股: {
                  type: 'string',
                  description: '目前持股',
                },
                設質股數: {
                  type: 'string',
                  description: '設質股數',
                },
                設質股數佔持股比例: {
                  type: 'string',
                  description: '設質股數佔持股比例',
                },
                內部人關係人目前持股合計: {
                  type: 'string',
                  description: '內部人關係人目前持股合計',
                },
                內部人關係人設質股數: {
                  type: 'string',
                  description: '內部人關係人設質股數',
                },
                內部人關係人設質比例: {
                  type: 'string',
                  description: '內部人關係人設質比例',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap06_L_basi': {
      get: {
        tags: ['財務報表'],
        summary: '上市公司綜合損益表(金融業)',
        description: '上市公司綜合損益表(金融業)',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                利息淨收益: {
                  type: 'string',
                  description: '利息淨收益',
                },
                利息以外淨損益: {
                  type: 'string',
                  description: '利息以外淨損益',
                },
                '呆帳費用、承諾及保證責任準備提存': {
                  type: 'string',
                  description: '呆帳費用、承諾及保證責任準備提存',
                },
                營業費用: {
                  type: 'string',
                  description: '營業費用',
                },
                '繼續營業單位稅前淨利（淨損）': {
                  type: 'string',
                  description: '繼續營業單位稅前淨利（淨損）',
                },
                '所得稅費用（利益）': {
                  type: 'string',
                  description: '所得稅費用（利益）',
                },
                '繼續營業單位本期淨利（淨損）': {
                  type: 'string',
                  description: '繼續營業單位本期淨利（淨損）',
                },
                停業單位損益: {
                  type: 'string',
                  description: '停業單位損益',
                },
                合併前非屬共同控制股權損益: {
                  type: 'string',
                  description: '合併前非屬共同控制股權損益',
                },
                '本期淨利（淨損）': {
                  type: 'string',
                  description: '本期淨利（淨損）',
                },
                '其他綜合損益（稅後）': {
                  type: 'string',
                  description: '其他綜合損益（稅後）',
                },
                合併前非屬共同控制股權綜合損益淨額: {
                  type: 'string',
                  description: '合併前非屬共同控制股權綜合損益淨額',
                },
                '本期綜合損益總額（稅後）': {
                  type: 'string',
                  description: '本期綜合損益總額（稅後）',
                },
                '淨利（損）歸屬於母公司業主': {
                  type: 'string',
                  description: '淨利（損）歸屬於母公司業主',
                },
                '淨利（損）歸屬於共同控制下前手權益': {
                  type: 'string',
                  description: '淨利（損）歸屬於共同控制下前手權益',
                },
                '淨利（損）歸屬於非控制權益': {
                  type: 'string',
                  description: '淨利（損）歸屬於非控制權益',
                },
                綜合損益總額歸屬於母公司業主: {
                  type: 'string',
                  description: '綜合損益總額歸屬於母公司業主',
                },
                綜合損益總額歸屬於共同控制下前手權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於共同控制下前手權益',
                },
                綜合損益總額歸屬於非控制權益: {
                  type: 'string',
                  description: '綜合損益總額歸屬於非控制權益',
                },
                '基本每股盈餘（元）': {
                  type: 'string',
                  description: '基本每股盈餘（元）',
                },
              },
            },
          },
        },
      },
    },
    '/opendata/t187ap07_L_basi': {
      get: {
        tags: ['財務報表'],
        summary: '上市公司資產負債表(金融業)',
        description: '上市公司資產負債表(金融業)',
        produces: ['application/json', 'text/csv'],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                出表日期: {
                  type: 'string',
                  description: '出表日期',
                },
                年度: {
                  type: 'string',
                  description: '年度',
                },
                季別: {
                  type: 'string',
                  description: '季別',
                },
                公司代號: {
                  type: 'string',
                  description: '公司代號',
                },
                公司名稱: {
                  type: 'string',
                  description: '公司名稱',
                },
                現金及約當現金: {
                  type: 'string',
                  description: '現金及約當現金',
                },
                存放央行及拆借銀行同業: {
                  type: 'string',
                  description: '存放央行及拆借銀行同業',
                },
                透過損益按公允價值衡量之金融資產: {
                  type: 'string',
                  description: '透過損益按公允價值衡量之金融資產',
                },
                透過其他綜合損益按公允價值衡量之金融資產: {
                  type: 'string',
                  description: '透過其他綜合損益按公允價值衡量之金融資產',
                },
                按攤銷後成本衡量之債務工具投資: {
                  type: 'string',
                  description: '按攤銷後成本衡量之債務工具投資',
                },
                避險之金融資產: {
                  type: 'string',
                  description: '避險之金融資產',
                },
                附賣回票券及債券投資淨額: {
                  type: 'string',
                  description: '附賣回票券及債券投資淨額',
                },
                '應收款項－淨額': {
                  type: 'string',
                  description: '應收款項－淨額',
                },
                本期所得稅資產: {
                  type: 'string',
                  description: '本期所得稅資產',
                },
                '待出售資產－淨額': {
                  type: 'string',
                  description: '待出售資產－淨額',
                },
                '待分配予業主之資產－淨額': {
                  type: 'string',
                  description: '待分配予業主之資產－淨額',
                },
                '貼現及放款－淨額': {
                  type: 'string',
                  description: '貼現及放款－淨額',
                },
                '採用權益法之投資－淨額': {
                  type: 'string',
                  description: '採用權益法之投資－淨額',
                },
                '受限制資產－淨額': {
                  type: 'string',
                  description: '受限制資產－淨額',
                },
                '其他金融資產－淨額': {
                  type: 'string',
                  description: '其他金融資產－淨額',
                },
                '不動產及設備－淨額': {
                  type: 'string',
                  description: '不動產及設備－淨額',
                },
                '使用權資產－淨額': {
                  type: 'string',
                  description: '使用權資產－淨額',
                },
                '投資性不動產－淨額': {
                  type: 'string',
                  description: '投資性不動產－淨額',
                },
                '無形資產－淨額': {
                  type: 'string',
                  description: '無形資產－淨額',
                },
                遞延所得稅資產: {
                  type: 'string',
                  description: '遞延所得稅資產',
                },
                '其他資產－淨額': {
                  type: 'string',
                  description: '其他資產－淨額',
                },
                資產總計: {
                  type: 'string',
                  description: '資產總計',
                },
                央行及銀行同業存款: {
                  type: 'string',
                  description: '央行及銀行同業存款',
                },
                央行及同業融資: {
                  type: 'string',
                  description: '央行及同業融資',
                },
                透過損益按公允價值衡量之金融負債: {
                  type: 'string',
                  description: '透過損益按公允價值衡量之金融負債',
                },
                避險之金融負債: {
                  type: 'string',
                  description: '避險之金融負債',
                },
                附買回票券及債券負債: {
                  type: 'string',
                  description: '附買回票券及債券負債',
                },
                應付款項: {
                  type: 'string',
                  description: '應付款項',
                },
                本期所得稅負債: {
                  type: 'string',
                  description: '本期所得稅負債',
                },
                與待出售資產直接相關之負債: {
                  type: 'string',
                  description: '與待出售資產直接相關之負債',
                },
                存款及匯款: {
                  type: 'string',
                  description: '存款及匯款',
                },
                應付金融債券: {
                  type: 'string',
                  description: '應付金融債券',
                },
                應付公司債: {
                  type: 'string',
                  description: '應付公司債',
                },
                特別股負債: {
                  type: 'string',
                  description: '特別股負債',
                },
                其他金融負債: {
                  type: 'string',
                  description: '其他金融負債',
                },
                負債準備: {
                  type: 'string',
                  description: '負債準備',
                },
                租賃負債: {
                  type: 'string',
                  description: '租賃負債',
                },
                遞延所得稅負債: {
                  type: 'string',
                  description: '遞延所得稅負債',
                },
                其他負債: {
                  type: 'string',
                  description: '其他負債',
                },
                負債總計: {
                  type: 'string',
                  description: '負債總計',
                },
                股本: {
                  type: 'string',
                  description: '股本',
                },
                '權益─具證券性質之虛擬通貨': {
                  type: 'string',
                  description: '權益─具證券性質之虛擬通貨',
                },
                資本公積: {
                  type: 'string',
                  description: '資本公積',
                },
                保留盈餘: {
                  type: 'string',
                  description: '保留盈餘',
                },
                其他權益: {
                  type: 'string',
                  description: '其他權益',
                },
                庫藏股票: {
                  type: 'string',
                  description: '庫藏股票',
                },
                歸屬於母公司業主之權益合計: {
                  type: 'string',
                  description: '歸屬於母公司業主之權益合計',
                },
                共同控制下前手權益: {
                  type: 'string',
                  description: '共同控制下前手權益',
                },
                合併前非屬共同控制股權: {
                  type: 'string',
                  description: '合併前非屬共同控制股權',
                },
                非控制權益: {
                  type: 'string',
                  description: '非控制權益',
                },
                權益總計: {
                  type: 'string',
                  description: '權益總計',
                },
                '待註銷股本股數（單位：股）': {
                  type: 'string',
                  description: '待註銷股本股數（單位：股）',
                },
                '母公司暨子公司所持有之母公司庫藏股股數（單位：股）': {
                  type: 'string',
                  description:
                    '母公司暨子公司所持有之母公司庫藏股股數（單位：股）',
                },
                '預收股款（權益項下）之約當發行股數（單位：股）': {
                  type: 'string',
                  description: '預收股款（權益項下）之約當發行股數（單位：股）',
                },
                每股參考淨值: {
                  type: 'string',
                  description: '每股參考淨值',
                },
              },
            },
          },
        },
      },
    },
  },
};
