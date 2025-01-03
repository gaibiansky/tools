var xuanzekuang1 = 1;
var xuanzekuang2 = 1;
var lpr = [

{time:'2019-08-20',lpr:4.25},
{time:'2019-09-20',lpr:4.2},
{time:'2019-10-21',lpr:4.2},
{time:'2019-11-20',lpr:4.15},
{time:'2019-12-20',lpr:4.15},
{time:'2020-01-20',lpr:4.15},
{time:'2020-02-20',lpr:4.05},
{time:'2020-03-20',lpr:4.05},
{time:'2020-04-20',lpr:3.85},
{time:'2020-05-20',lpr:3.85},
{time:'2020-06-22',lpr:3.85},
{time:'2020-07-20',lpr:3.85},
{time:'2020-08-20',lpr:3.85},
{time:'2020-09-21',lpr:3.85},
{time:'2020-10-20',lpr:3.85},
{time:'2020-11-20',lpr:3.85},
{time:'2020-12-21',lpr:3.85},
{time:'2021-01-20',lpr:3.85},
{time:'2021-02-20',lpr:3.85},
{time:'2021-03-22',lpr:3.85},
{time:'2021-04-20',lpr:3.85},
{time:'2021-05-20',lpr:3.85},
{time:'2021-06-21',lpr:3.85},
{time:'2021-07-20',lpr:3.85},
{time:'2021-08-20',lpr:3.85},
{time:'2021-09-22',lpr:3.85},
{time:'2021-10-20',lpr:3.85},
{time:'2021-11-22',lpr:3.85},
{time:'2021-12-20',lpr:3.80},
{time:'2022-01-20',lpr:3.70},
{time:'2022-02-21',lpr:3.70},
{time:'2022-03-21',lpr:3.70},
{time:'2022-04-20',lpr:3.70},
{time:'2022-05-20',lpr:3.70},
{time:'2022-06-20',lpr:3.70},
{time:'2022-07-20',lpr:3.70},
{time:'2022-08-22',lpr:3.65},
{time:'2022-09-20',lpr:3.65},
{time:'2022-10-20',lpr:3.65},
{time:'2022-11-20',lpr:3.65},
{time:'2022-12-20',lpr:3.65},
{time:'2023-01-20',lpr:3.65},
{time:'2023-02-20',lpr:3.65},
{time:'2023-03-20',lpr:3.65},
{time:'2023-04-20',lpr:3.65},
{time:'2023-05-22',lpr:3.65},
{time:'2023-06-20',lpr:3.55},
{time:'2023-07-20',lpr:3.55},
{time:'2023-08-21',lpr:3.45},
{time:'2023-09-20',lpr:3.45},
{time:'2023-10-20',lpr:3.45},
{time:'2023-11-20',lpr:3.45},
{time:'2023-12-20',lpr:3.45},
{time:'2024-01-22',lpr:3.45},
{time:'2024-02-20',lpr:3.45},
{time:'2024-03-20',lpr:3.45},
{time:'2024-04-22',lpr:3.45},
{time:'2024-05-20',lpr:3.45},
{time:'2024-06-20',lpr:3.45},
{time:'2024-07-22',lpr:3.35},
{time:'2024-08-20',lpr:3.35},
{time:'2024-09-20',lpr:3.35},
{time:'2024-10-21',lpr:3.1},
{time:'2024-11-20',lpr:3.1},

    {
        lpr: 0,
        time: '2099-01-01'
    }
];

/**
 * 选择框的事件处理程序。
 */
function onDropdownChange() {
    let dropdown = document.getElementById('select1');
    let selectedValue = dropdown.options[dropdown.selectedIndex].value;
    if (selectedValue == 2) {
        document.getElementById('ss2').style.display = 'none';
    } else {
        document.getElementById('ss2').style.display = 'block';
    }
    xuanzekuang1 = selectedValue;
    // console.log(xuanzekuang1);
    // console.log(xuanzekuang2);
}
function onDropdownChange1() {
    let dropdown = document.getElementById('select2');
    let selectedValue = dropdown.options[dropdown.selectedIndex].value;
    xuanzekuang2 = selectedValue;
    // console.log(xuanzekuang1);
    // console.log(xuanzekuang2);
}
/**
 * 计算两个日期之间的天数。
 */
function calculateDaysBetweenDates(dateString1, dateString2) {
    // 解析日期字符串为Date对象
    var date1 = new Date(dateString1);
    var date2 = new Date(dateString2);

    // 确保date1早于date2
    if (date1 > date2) {
        var temp = date1;
        date1 = date2;
        date2 = temp;
    }

    // 计算毫秒差异
    var differenceInMilliseconds = date2 - date1;
    // 将毫秒转换为天数
    var differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    return Math.abs(differenceInDays);
}


/**
 * 固定利率计算
 * @param {number} sum 金额
 * @param {number} baifen 百分比
 * @param {number} str1 开始时间
 * @param {number} str2 结束时间
 * @param {number} bei 倍率
 * @param {number} y true为年，false为月
 */
function gdjisuan(num, str1, str2, baifen, bei,y) {
    let day = calculateDaysBetweenDates(str1, str2)+1;
    baifen = baifen * bei;
    if (y) {
        var res = (num * (baifen / 100 / 365) * day).toFixed(2);
        var data = {
            time1: str1,
            time2: str2,
            day: calculateDaysBetweenDates(str1, str2)+1,
            lilv: baifen,
            bei:bei,
            sum: res,
            str: `=${num}x(${baifen}%÷365)x${day}`
        }
    } else {
        var res = (num * (baifen / 100 * 12 / 365) * day).toFixed(2);
        var data = {
            time1: str1,
            time2: str2,
            day: calculateDaysBetweenDates(str1, str2)+1,
            lilv: baifen,
            bei:bei,
            sum: res,
            str: `=${num}x(${baifen}%x12÷365)x${day}`
        }
    }
    //渲染固定利率页面
    document.getElementById('results').innerHTML = `
    <div class="by-item-bottom">
                <div style="margin: 0 auto;">利息:&nbsp;${Number(res).toFixed(2)}&nbsp;元</div><div style="margin: 0 auto;">本息共计:&nbsp;${(+num + +res).toFixed(2)}&nbsp;元</div>
            </div>
            <div class="by-item-bottom">
                <div class="by-item-bottom-div">起至时间</div>
                <div class="by-item-bottom-div">天数</div>
                <div class="by-item-bottom-div">利率</div>
                <div class="by-item-bottom-div">计算结果</div>
            </div>
            <div class="by-item-bottom">
                <div class="by-item-bottom-div" style="line-height:32px;">
                    <div>${str1}</div>
                    <div>${str2}</div>
                </div>
                <div class="by-item-bottom-div">${data.day}</div>
                <div class="by-item-bottom-div">${data.lilv}%(${bei}倍)</div>
                <div class="by-item-bottom-div" style="line-height:16px;">
                    <div>${Number(res).toFixed(2)}</div><span style="font-size:12px;word-wrap: break-word;">${data.str}</span>
                </div>
            </div>
    `
}

/**
 * 根据传入的日期字符串，增加或减少一天，并返回新的日期字符串。
 * @param {string} dateString - 传入的日期字符串，格式为YYYY-MM-DD。
 * @param {boolean} [b=true] - 如果为true，则在传入日期的基础上加一天；如果为false，则减一天。
 * @returns {string} - 返回新的日期字符串，格式为YYYY-MM-DD。
 */
function addOneDay(dateString, b = true) {
    // 解析日期字符串为Date对象
    const date = new Date(dateString);
    if (b) {
        // 加一天
        date.setDate(date.getDate() + 1);
    } else {
        // 减一天
        date.setDate(date.getDate() - 1);
    }
    // 将Date对象转换回YYYY-MM-DD格式的字符串
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，所以需要+1，并使用padStart确保总是两位数
    const day = String(date.getDate()).padStart(2, '0'); // 使用padStart确保总是两位数

    return `${year}-${month}-${day}`;
}
/**
 * lpr利率分段计算
 */
function lprFdjisuan(num, strats, end,bei) {
    let result = {
        sum: 0,
        arr: []
    }
    let start = strats;
    let currentEnd;
    console.log('开始是：'+ start + '结束是：' + end)
    for (let i=0; i < lpr.length - 1; i++) {
        const currentItem = lpr[i];
        const nextItem = lpr[i + 1];
        if (lpr[0].time > start) {
            alert('开始时间超出范围');
            break;
        }
        //检查当前区间是否在给定范围内
        if ((start >= lpr[i].time && start < nextItem.time) && end > lpr[i].time) {
            console.log(lpr[i]);
            //计算结束日期
            currentEnd = end > nextItem.time ? addOneDay(nextItem.time, false) : end;
            //计算天数
            let day = calculateDaysBetweenDates(currentEnd, start) + 1;
            const data = {
                strat: start,
                end: currentEnd,
                day: day,
                lprLv: (currentItem.lpr * bei).toFixed(2),
                sum: +(num * ((currentItem.lpr * bei).toFixed(2) / 100 / 365) * day).toFixed(2),
                str: `=${num}x(${(currentItem.lpr * bei).toFixed(2)}%÷365)x${day}`
            };
            result.arr.push(data);
            result.sum += +data.sum;
            // 更新起始日期
            start = nextItem.time;
        }
    }
    console.log(result)
    document.getElementById('results').innerHTML = `
    <div class="by-item-bottom">
    <div style="margin: 0 auto;">利息:&nbsp;${result.sum.toFixed(2)}&nbsp;元</div><div style="margin: 0 auto;">本息共计:&nbsp;${(+result.sum + +num).toFixed(2)}&nbsp;元</div>
    </div>
    <div class="by-item-bottom">
    <div class="by-item-bottom-div">起至时间</div>
    <div class="by-item-bottom-div">天数</div>
    <div class="by-item-bottom-div">LPR利率</div>
    <div class="by-item-bottom-div">计算结果</div>
    </div>`
    for(let i = 0; i < result.arr.length; i++) {
        document.getElementById('results').innerHTML += `
        <div class="by-item-bottom" id="xqInfo">
        <div class="by-item-bottom-div" style="line-height:32px;">
        <div>${result.arr[i].strat}</div>
        <div>${result.arr[i].end}</div>
        </div>
        <div class="by-item-bottom-div">${result.arr[i].day}</div>
        <div class="by-item-bottom-div">${result.arr[i].lprLv}%(${bei}倍)</div>
        <div class="by-item-bottom-div" style="line-height:16px;">
        <div>${result.arr[i].sum}</div><span style="font-size:12px;word-wrap: break-word;">${result.arr[i].str}</span>
        </div>
        </div>`
    }
}
// console.log(lprFdjisuan(10000,'2021-05-10','2024-03-11'));
function lprjisuan() {
    document.getElementById('results').innerHTML ="";
    let sum = document.getElementById('jishu3').value;
    let startDate = document.getElementById('startDate').value;
    let endDate = document.getElementById('endDate').value;
    let baifen = document.getElementById('baifen').value;
    let beishu = document.getElementById('beishu').value;
    // gdjisuan(+sum, startDate, endDate, +baifen, false)
    if (xuanzekuang1 == 1) {
        if (xuanzekuang2 == 1) {
            gdjisuan(+sum, startDate, endDate, +baifen,beishu, true)
        } else {
            gdjisuan(+sum, startDate, endDate, +baifen,beishu, false)
        }
    } else if (xuanzekuang1 == 2) {
        lprFdjisuan(sum, startDate, endDate,beishu);
    }
}