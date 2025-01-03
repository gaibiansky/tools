// 获取dom元素
var doms = {
    title: document.querySelector('.tbar-top h1'),
    left: document.querySelector('.content-left'),
    right: document.querySelector('.content-reight'),
}

/**
 * 显示右侧数据
 */
function renderRightData() {
    //创建文档片段
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < tbar.left.length; i++) {
        let div = document.createElement('div');
        div.className = 'by by-active'
        div.innerHTML = tbar.left[i].code;
        fragment.appendChild(div);
    }
    doms.right.appendChild(fragment);
}


//渲染页面数据
function renderPageData() {
    // 设置标题文本
    doms.title.innerText = tbar.top;
    //渲染右侧数据
    renderRightData();
    //设置左侧菜单
    let ul = document.createElement('ul');
    for(let i = 0; i < tbar.left.length; i++) {
        let li = document.createElement('li');
        li.innerText = tbar.left[i].name;
        //li标签注册点击事件
        li.addEventListener('click', function () {
            let act = doms.left.querySelector('.active');
            let by = document.querySelectorAll('.by')
            for(let k = 0; k < by.length; k++) {
                by[k].style.display = 'none';
            }
            by[i].style.display = 'block';
            if (act) {
                act.classList.remove('active');
            }
            li.classList.add('active');
        })
        ul.appendChild(li);
    }

    doms.left.appendChild(ul);
}

function indexs() {
    let li = doms.left.querySelector("li");
    let by = document.querySelector('.by');
    li.classList.add('active');
    by.style.display = 'block';
}

renderPageData();
indexs();