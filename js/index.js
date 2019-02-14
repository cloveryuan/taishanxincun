function Index() {
    this.init()
}

// 初始化
Index.prototype.init = function() {
    this.getData()
}

// 获取数据
Index.prototype.getData = () => {

    $.post('./js/data.json',(data)=> {
    	data = JSON.parse(data)
        const html = $('#wrap .contain')[0];
        html.innerHTML = `
		<ul class="p1">
        		<li class="tit1">
        			<div class="block img"></div>
        			<div class="block">
        					<h4>市政供水压力</h4>
        					<p class="text">supply water pressure</p>
        			</div>
        		</li>
        		<li class="tit2"><h2>3.1</h2><h3>MPa</h3></li>
        		<li class="tit3">(参考范围0.7-3.8)</li>
        	</ul>
        	<ul class="p2">
        		<li class="tit1">
        			<div class="block img"></div>
        			<div class="block">
        					<h4>水箱液位</h4>
        					<p class="text">Water level</p>
        			</div>
        		</li>
        		<li class="tit2"><h2>3.1</h2><h3>Cm</h3></li>
        		<li class="tit3">(参考范围155-280)</li>
        	</ul>
        	<ul class="p3">
        		<li class="tit1">
        			<div class="block img"></div>
        			<div class="block">
        					<h4>泵房水浸</h4>
        					<p class="text">leakage</p>
        			</div>
        		</li>
        		<li class="tit2"><h2></h2><h3></h3></li>
        		<li class="tit3"></li>
        	</ul>
        	<ul class="p4">
        		<li class="tit1">
        			<div class="block img"></div>
        			<div class="block">
        					<h4>恒压泵压力</h4>
        					<p class="text">supply water pressure</p>
        			</div>
        		</li>
        		<li class="tit2"><h2>3.1</h2><h3>MPa</h3></li>
        		<li class="tit3">(参考范围0.7-3.8)</li>
        	</ul>
        	<ul class="p5">
        		<li class="tit1">
        			<div class="block img"></div>
        			<div class="block">
        					<h4>排污坑液位</h4>
        					<p class="text">Blowdown pit level</p>
        			</div>
        		</li>
        		<li class="tit2"><h2>3.1</h2><h3>Cm</h3></li>
        		<li class="tit3">(参考范围155-280)</li>
        	</ul>
	`

    })

}

new Index()