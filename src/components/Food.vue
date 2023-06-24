<template>
    <div>
    <div class="header">
  <h1>饮食搭配</h1>
  <p>介绍：一日三餐的食谱里面饮食上面的搭配一定要均衡，不能过于油腻或者是过于清淡，蛋白质、矿物质以及脂肪的摄入一定要均衡，这样子才能保证每日人体所需。下面为您详细介绍一日三餐的食谱搭配方式。</p>
</div>

<div class="topnav">
  <a href="https://baike.baidu.com/item/%E6%97%A9%E9%A4%90/617" target="_blank">早餐</a>
  <a href="https://baike.baidu.com/item/%E5%8D%88%E9%A4%90/84473" target="_blank">午餐</a>
  <a href="https://baike.baidu.com/item/%E6%99%9A%E9%A4%90/84439" target="_blank">晚餐</a>
  <a href="#" style="float:right">链接</a>
</div>

<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>加餐加餐！！！</h2>
      <h5>2020 年 11 月 29日</h5>
      <div class="b" style="height:500px;"><img class="a" src="../assets/images/17.jpg" alt=""></div>
      <p>除了正餐(一日三餐)，适量加餐。餐后10点左右，补充适当的低脂肪的碳水化合物，如水果;午餐后15点左右，这时人体中葡萄糖的含量已经降至午餐后的最低点。因此，你可以吃一些坚果、爆米花、干鲜水果等食物补充。 晚餐后不建议加餐，因为晚餐吃得太撑，不益于食物的消化，对肠胃也不好。</p>
      
    </div>
      
    <div class="card">
      <h2>磊哥元气满满的一天</h2>
      <h5>2022 年 10 月 17日</h5>
      <div class="column">
        <h2>早餐</h2>
        <div calss="b" style="height:250px"><img class="a" src="../assets/images/包子.jpg" alt=""></div>
        
      </div>
      <div class="column">
        <h2>午餐</h2>
        <div calss="b" style="height:250px"><img class="a" src="../assets/images/面条.jpg" alt=""></div>
      </div>
      <div class="column">
        <h2>晚餐</h2>
        <div calss="b" style="height:250px"><img class="a"></div>
      </div>
      <br />
      <br />
      <p>早餐不但要注意数量，而且还要讲究质量。</p>
      <p>午餐应适当多吃一些，而且质量要高。</p>
      <p>晚餐要吃得少，以清淡、容易消化为原则，至少要在就寝两个小时前进餐。</p>
    </div>
  </div>
  <div class="rightcolumn">
    <div class="card">
      <h2>关于早餐</h2>
      <div class="fakeimg" style="height:150px;">早餐不但要注意数量，而且还要讲究质量。主食一般吃含淀粉的食物，如馒头、豆包、玉米面窝头等，还要适当地增加一些含蛋白质丰富的食物，如牛奶、豆浆、鸡蛋等。</div>
      <p></p>
    </div>
    <div class="card">
      <h3>热门文章</h3>
      <div class="fakeimg"><a href="https://baijiahao.baidu.com/s?id=1606155636981641022" target="_blank">全面简单的一日三餐健康养生食谱搭配大全</a></div>
      <div class="fakeimg"><a href="http://health.people.com.cn/n1/2020/0622/c14739-31755076.html" target="_blank">一日三餐怎么吃出健康？八大饮食建议来了</a></div>
      <div class="fakeimg"><a href="https://zhuanlan.zhihu.com/p/87139055" target="_blank">人类为什么需要一日三餐？这种进食频率科学吗？</a></div>
    </div>
    <div class="card">
      <h3>关注我</h3>
      <p>让你更好地健康饮食</p>
    </div>
  </div>

</div>

<div class="footer">
  <h2>由磊哥友情提供</h2>
</div>
</div>


</template>

<script>
export default{

}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
 
body {
  font-family: Arial;
  padding: 10px;
  background: #f1f1f1;
}
 
/* 头部标题 */
.header {
  padding: 30px;
  text-align: center;
  background: white;
}
 
.header h1 {
  font-size: 50px;
}
 
/* 导航条 */
.topnav {
  overflow: hidden;
  background-color: #333;
}
 
/* 导航条链接 */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
 
/* 链接颜色修改 */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
 
/* 创建两列 */
/* Left column */
.leftcolumn {   
  float: left;
  width: 75%;
}
 
/* 右侧栏 */
.rightcolumn {
  float: left;
  width: 25%;
  background-color: #f1f1f1;
  padding-left: 20px;
}
 
/* 图像部分 */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 10px;
}
 
/* 文章卡片效果 */
.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}
 
/* 列后面清除浮动 */
.row:after {
  content: "";
  display: table;
  clear: both;
}
 
/* 底部 */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  margin-top: 20px;
}
 
/* 响应式布局 - 屏幕尺寸小于 800px 时，两列布局改为上下布局 */
@media screen and (max-width: 800px) {
  .leftcolumn, .rightcolumn {   
    width: 100%;
    padding: 0;
  }
}
 
/* 响应式布局 -屏幕尺寸小于 400px 时，导航等布局改为上下布局 */
@media screen and (max-width: 400px) {
  .topnav a {
    float: none;
    width: 100%;
  }
}

.a{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.b{
    width: auto;
    height: auto;

}

/* 创建三列 */
.column {
  float: left;
  width: 33.33%;
}

</style>