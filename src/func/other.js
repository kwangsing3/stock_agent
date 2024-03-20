
//特定來源的獲取資料公式
async function postCompareDataMopsfin(
    swi,
    stockid,
    Yseason
) {
    const host = 'https://mopsfin.twse.com.tw/compare/data';
    const query = `compareItem=${swi}&quarter=true&ylabel=%2&ys=${Yseason}5&revenue=true&bcodeAvg=true&companyAvg=false&companyId=${stockid}`;
    const raw = await POST(host, query);
    let result = raw['data']['json'];
    result = JSON.parse(raw['data']['json']);
    return result;
}
//特定來源的獲取資料公式
async function postCompareReportMopsfin(
    swi,
    stockid,
    Yseason
) {
    const requURL = 'https://mopsfin.twse.com.tw/compare/report';
    const query = `compareItem=${swi}&quarter=true&ys=${Yseason}&revenue=true&bcodeAvg=true&companyAvg=true&companyId=${stockid}`;
    const raw = await POST(requURL, query);
    let st = raw['data'];
    st = st.replace(new RegExp('\\r', 'g'), '');
    st = st.replace(new RegExp('\\n', 'g'), '');
    const json = json2html.html2json(st);
    let arr_tmp = json['child'][3]['child'];
    arr_tmp = arr_tmp[3]['child'];
    arr_tmp = arr_tmp[1]['child'];
    arr_tmp = arr_tmp[3]['child'];
    //數值
    const sampleList = [];
    for (const key of arr_tmp) {
        if (key['node'] === 'text') continue;
        let tar = key['child'][1]['child'][0]['text'];
        tar = tar.replace(new RegExp(',', 'g'), '');
        sampleList.push(Number(tar));
    }
    //項目
    arr_tmp = json['child'][3]['child'];
    arr_tmp = arr_tmp[1]['child'];
    arr_tmp = arr_tmp[1]['child'];
    arr_tmp = arr_tmp[3]['child'];
    const result = {};
    const assestList = [];
    for (const key of arr_tmp) {
        if (key['node'] === 'text') continue;
        let tar = key['child'][1]['child'][0]['text'];
        tar = tar.replace(new RegExp(' ', 'g'), '');
        tar = tar.replace(new RegExp('　', 'g'), '');
        assestList.push(tar);
    }
    for (const index in assestList) {
        result[assestList[index]] = sampleList[index];
    }
    return result;
}
