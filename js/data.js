var tbar = {
    top: '工具箱',
    left: [
        {
            name: '保全执行费计算',
            code: `<fieldset class="by-item">
            <legend>受理保全执行费计算</legend>
                <span>案件标的</span>
                <input id="shuru1" maxlength="15" />
                <button id="jisuan1" onclick="jisuan1()">计算</button>
                <p id="p1">受理费用：&nbsp;<span style="color: #FF5722;">0.00</span>&nbsp;元</p>
                <p id="p2">保全费用：&nbsp;<span style="color: #FF5722;">0.00</span>&nbsp;元</p>
                <p id="p3">执行费用：&nbsp;<span style="color: #FF5722;">0.00</span>&nbsp;元</p>
                </fieldset>`
        },
        {
            name: '数字大写转换',
            code: `<fieldset class="by-item">
            <legend>数字大写转换</legend>
            <div style="margin:auto;">
                <span>输入数字</span>
                <input id="shuru2" value="" maxlength="15" />
                <button onclick="zhuanhuan()">转换</button>
                <p>阿拉伯数字：<span id="s1" style="color:#FF5722 ;">0.00</span></p>
                <p>数字汉字：<span id='s2' style="color:#FF5722 ;">零</span></p>
                <p>大写金额：<span id="s3" style="color:#FF5722 ;">零</span></p>
            </div>
            </fieldset>`
        },
        {
            name: '二维码生成',
            code: `<fieldset class="by-item">
            <legend>二维码生成</legend>
            <span>输入内容</span> 
            <input id="qrcodeText" value="" />
            <button onclick="makeCode()">生成</button>
            <div id="qrcode" style="margin: 20px 40px;"></div>
            </fieldset>`
        },
        {
            name: '利息计算',
            code: `<fieldset class="by-item">
            <legend>利息计算工具</legend>
                    <span>计算基数:&nbsp;</span>
                    <input id="jishu3" type="number" id="jishu">&nbsp;元
                    <p>
                    <span>利率类型:&nbsp;</span>
                    <select id="select1" onchange="onDropdownChange()">
                        <option value="1">自定义利率</option>
                        <option value="2">LPR分段利率</option>
                    </select>
                    <span>倍数:&nbsp;</span>
                    <input id="beishu" value=1 style="width: 50px;"></input>
                    <p id="ss2">
                    <span>利率大小:&nbsp;</span>
                    <select id="select2" onchange="onDropdownChange1()">
                        <option value="1">年</option>
                        <option value="2">月</option>
                    </select>
                    &nbsp;<input id="baifen" type="text" style="width: 50px;">%
                    </p>
                    <p>起止时间:&nbsp;<input type="date" id="startDate">&nbsp;至&nbsp;<input type="date" id="endDate"></p>
                    <button style="margin: 0 auto; width:100%;" onclick="lprjisuan()">开始计算</button>
                    <div id="results"></div>
                    </fieldset>`
        },
        {
            name: '超链接',
            code: ``
        },
    ]
};