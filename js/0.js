/**
 * 受理保全执行费计算相关
 * 
 */
function jisuan1() {
    let result = 0
    let shuru = Number(document.getElementById('shuru1').value);
    //计算受理费用
    if ((shuru > 0) && (shuru <= 10000)) {
        result = 50;
    }
    else if ((shuru > 10000) && (shuru <= 100000)) {
        result = shuru * 0.025 - 200;
    }
    else if ((shuru > 100000) && (shuru <= 200000)) {
        result = shuru * 0.02 + 300
    }
    else if ((shuru > 200000) && (shuru <= 500000)) {
        result = shuru * 0.015 + 1300
    }
    else if ((shuru > 500000) && (shuru <= 1000000)) {
        result = shuru * 0.01 + 3800
    }
    else if ((shuru > 1000000) && (shuru <= 2000000)) {
        result = shuru * 0.009 + 4800
    }
    else if ((shuru > 2000000) && (shuru <= 5000000)) {
        result = shuru * 0.008 + 6800
    }
    else if ((shuru > 5000000) && (shuru <= 10000000)) {
        result = shuru * 0.007 + 11800
    }
    else if ((shuru > 10000000) && (shuru <= 20000000)) {
        result = shuru * 0.006 + 21800
    }
    else if (shuru > 20000000) {
        result = shuru * 0.005 + 41800
    }
    document.getElementById('p1').innerHTML = '受理费用：&nbsp;<span style="color: #FF5722;">' + result.toFixed(2) + '</span>&nbsp;元'
    //计算保全费用
    result = 0;
    if ((shuru > 0) && (shuru <= 1000)) {
        result = 30
    }
    else if ((shuru > 1000) && (shuru <= 100000)) {
        result = shuru * 0.01 + 20
    }
    else if (shuru > 100000) {
        result = shuru * 0.005 + 520
    }
    if ((result >= 5000)) {
        result = 5000
    }
    document.getElementById('p2').innerHTML = '保全费用：&nbsp;<span style="color: #FF5722;">' + result.toFixed(2) + '</span>&nbsp;元'
    //计算执行费用
    result = 0;
    if ((shuru > 0) && (shuru < 10000)) {
        result = 50
    }
    else if ((shuru >= 10000) && (shuru <= 500000)) {
        result = shuru * 0.015 - 100
    }
    else if ((shuru >= 500000) && (shuru <= 5000000)) {
        result = shuru * 0.01 + 2400
    }
    else if (shuru > 10000000) {
        result = shuru * 0.001 + 67400
    }
    document.getElementById('p3').innerHTML = '执行费用：&nbsp;<span style="color: #FF5722;">' + result.toFixed(2) + '</span>&nbsp;元'
}

/**
 * 数字大小写转换
 */
const chnNum = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
const chUnits = ["", "十", "百", "千"];
const bigUnits = ["", "万", "亿"];
const map = {
    零: '零',
    一: '壹',
    二: '贰',
    三: '叁',
    四: '肆',
    五: '伍',
    六: '陆',
    七: '柒',
    八: '捌',
    九: '玖',
    十: '拾',
    百: '佰',
    千: '仟',
    万: '萬',
    亿: '亿'
}
//按钮被点击事件
function zhuanhuan() {
    let shuru = document.getElementById('shuru2').value;
    if (shuru == '') {
        alert('请输入数字！');
        return
    }
    //小数点分割
    let shuruArr = shuru.split('.');
    //中文数字
    let zh = zuhe(shuruArr[0]);
    let bigZh = zh.split('').map(s => map[s]).join('');
    if (shuruArr.length > 1) {
        let xs = chnNum[shuruArr[1][0]] + chnNum[shuruArr[1][1]];
        let bigxs = '';
        zh += '点' + xs;
        if (shuruArr[1][0] == 0 && shuruArr[1][1] == 0) {
            bigZh += '圆整'
        } else if (shuruArr[1][0] == 0 && shuruArr[1][1] != 0) {
            bigxs = '零' + chnNum[shuruArr[1][1]].split('').map(s => map[s]).join('') + '分';
        } else if (shuruArr[1][0] != 0 && shuruArr[1][1] == 0) {
            bigxs = chnNum[shuruArr[1][0]].split('').map(s => map[s]).join('') + '角';
        } else if (shuruArr[1][0] != 0 && shuruArr[1][1] != 0) {
            bigxs = chnNum[shuruArr[1][0]].split('').map(s => map[s]).join('') + '角';
            bigxs += chnNum[shuruArr[1][1]].split('').map(s => map[s]).join('') + '分';
        }
        bigZh += bigxs ? '圆' + bigxs : '';
    }
    document.getElementById('s1').innerHTML = shuru;
    document.getElementById('s2').innerHTML = zh;
    document.getElementById('s3').innerHTML = bigZh+'圆整';
}
//把数字拆分成4个一组
function zuhe(num) {
    const strs = num.toString().replace(/(?=(\d{4})+$)/g, ",").split(",").filter(Boolean);
    let result = '';
    for (let i = 0; i < strs.length; i++) {
        const a = toChinese(strs[i]);
        const b = a ? bigUnits[strs.length - i - 1] : '';
        result += a + b;
    }
    return result;
}
//数字大写转换
function toChinese(numStr) {
    let result = '';
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] == 0) {
            if (result[result.length - 1] !== chnNum[0]) {
                result += chnNum[numStr[i]];
            }
        } else {
            result += chnNum[numStr[i]];
            result += chUnits[numStr.length - i - 1];
        }
    }
    if (result[result.length - 1] == chnNum[0]) {
        result = result.substr(0, result.length - 1);
    }
    return result;
}
/**
 * 二维码生成
 */
 function makeCode() {
    document.getElementById("qrcode").innerHTML = "";
    var qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 200,
    height: 200
});
    var elText = document.getElementById("qrcodeText")
    if (!elText.value) {
        alert("输入内容不能为空");
        elText.focus();
        return;
    }
    qrcode.makeCode(elText.value);
}