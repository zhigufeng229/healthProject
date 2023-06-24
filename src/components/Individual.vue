<template>
<div class="container-body">
      <div class="summary-column">
      <div class="profile-img" id="profileImage"><img src="https://placeimg.com/400/400/face"/>
        <div class="name">{{username}}</div>
      </div>
      <div class="statistics">
        <h2>summary</h2>
        <div class="age"><span class="title title-age">{{age}}</span></div>
        <div class="weight"><span class="title title-weight">{{weight}} kg</span></div>
        <div class="float-none"></div>
        <div class="height">
          <div class="icon"></div>
          <div class="data"><span>{{height}} cm</span></div>
        </div>
        <div class="bmi"><span class="title title-bmi">{{bmi}}</span></div>
        <div class="fat"><span class="title title-fat">11<span class="percentage">%</span></span></div>
        <div class="float-none"></div>
        <h2 class="allergies">allergies</h2>
        <div class="row">peanuts
          <div class="severity">
            <div class="fill" style="width: 45%; height: inherit;"></div>
          </div>
        </div>
        <div class="row">penicilin
          <div class="severity">
            <div class="fill" style="width: 80%; height: inherit;"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-column">
      <div class="header-container" id="headerContainer">
        <div class="nav">
          <div class="content">
            <p>
               hi <span class="name">{{username}}</span>, it seems you are in</p><span class="shape score">good</span><span class="shape"> shape</span>
          </div>
        </div>
        <div class="select-boxes">
          <div class="content">
            <div class="select-wrapper">
              <!-- <select>
                <option>Bl. Pressure</option>
              </select> -->
            </div>
            <div class="select-wrapper">
              <!-- <select>
                <option>Today</option>
              </select> -->
            </div>
          </div>
        </div>
        <div class="float-none"></div>
        <div class="graph">
          <canvas id="bpChart" style="position: relative; z-index: 100;"></canvas>
        </div>
      </div>
      <div class="split-container">
        <div class="split">
          <h3>温度</h3>
          <div class="temperature">{{temperature}}</div>
          <div class="split-graph">
            <canvas id="temperatureGraph"></canvas>
          </div>
        </div>
        <div class="split">
          <h3>燃烧的卡路里</h3>
          <div class="calories">{{calories}}</div>
          <div class="split-graph">
            <canvas id="calorieGraph"></canvas>
          </div>
        </div>
        <div class="split">
          <h3>心率</h3>
          <div class="heart-rate">{{heartRate}}</div>
          <div class="split-graph">
            <canvas id="heartRateGraph"></canvas>
          </div>
        </div>
      </div>
      <div class="sleep">
        <div class="totals">
          <div class="collective"><span class="hours">8</span><span class="minutes">25</span>
            <p>总的睡眠时间</p>
          </div>
          <div class="split first">6h 12m
            <p>深度</p>
          </div>
          <div class="split">2h 13m
            <p>轻度</p>
          </div>
        </div>
        <div class="sleep-graph">
          <div class="sleep-graph-container">
            <h2> 睡眠分析</h2>
            <div class="sleep-select-wrapper">
              <select>
                <option value="today">Today</option>
              </select>
            </div>
            <div class="chart-container">
              <canvas id="sleepChart"></canvas>
            </div>
          </div>
        </div>
      </div>
      <div class="float-none"></div>
      <div class="split-container">
        <div class="split bottom">
          <h2>约会</h2>
          <div class="appointments">
            <div class="calendar-container">
              <div class="calendar">25<span class="date">th</span><span class="month">Jul</span></div>
              <div class="content">
                <table class="appointment-table">
                  <tr>
                    <td id="time">13:00</td>
                  </tr>
                  <tr>
                    <td id="title">Dentist</td>
                  </tr>
                  <tr>
                    <td id="name">Jozef Novotny</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="split bottom">
          <h2>身边的医生</h2>
          <table class="doctor-grid">
            <tr>
              <td height="65"><img src="https://placeimg.com/65/65/people"/></td>
              <td><img src="https://placeimg.com/65/65/face"/></td>
              <td><img src="https://placeimg.com/65/65/people"/></td>
            </tr>
            <tr>
              <td><img src="https://placeimg.com/65/65/face"/></td>
              <td><img src="https://placeimg.com/65/65/people"/></td>
              <td id="expand">
                <div class="background">
                  +8
                  
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div class="split bottom">
          <div id="map"></div>
          <div class="map-overlay">
            <h2>今日步数</h2><span class="steps">4578</span><span class="distance">1.7 km</span>
          </div>
        </div>
      </div>
    </div>
</div>

</template>

<script>

export default{
  data(){
    return{
      age:23,
      steps:'',
      height:'',
      temperature:'',
      weight:'',
      calories:'',
      heartRate:'',
      username:'',
      bmi:''

    }
  },
  created(){
    this.username= window.sessionStorage.getItem("username");
    console.log(this.username);
    this.getIndividualMsg(this.username);
    

  },
  methods:{
    async getIndividualMsg(username){
      const { data: res } = await this.$http.get("individual?username="+username);
      this.age=res.data.age;
      this.steps=res.data.steps;
      this.height=res.data.height;
      this.temperature=res.data.temperature;
      this.weight=res.data.weight;
      this.calories=res.data.calories;
      this.heartRate=res.data.heartRate;
      //计算BMI
      var x=this.height*0.01;
      var tem=this.weight/(x*x);
      this.bmi=tem.toFixed(1);
      console.log(res);
    }

  }

}
</script>

<style scoped>
@import url(../assets/css/individual.css);

</style>