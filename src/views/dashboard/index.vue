<template>
  <div class="cls-count">
    <div class="cls-count-date" style="background:linear-gradient(to bottom right, #11998e, #fffcdc)">
      <div class="cls-count-date-line-one">
        <div class="cls-count-date-text">访问量</div>
        <div class="cls-count-date-text-day">日</div>
      </div>
      <div class="cls-count-date-line-two">
        <div class="cls-count-date-num">{{ fwl.num }}</div>
        <div class="cls-count-date-rate">
          <div class="cls-count-date-rate-text" :style="{ background: fwl.icon == 'top' ? '#16e53f' : '#e56516' }">
            {{ fwl.rateText }}
          </div>
          <el-icon class="cls-count-date-rate-icon" :style="{ color: fwl.icon == 'top' ? '#16e53f' : '#e56516' }">
            <component :is="fwl.icon==='top' ? `Top` : `Bottom`" />
          </el-icon>
        </div>
      </div>
    </div>
    <div class="cls-count-date" style="background:linear-gradient(to bottom right, #c9ffbf, #ffafbd)">
      <div class="cls-count-date-line-one">
        <div class="cls-count-date-text">销售额</div>
        <div class="cls-count-date-text-day">周</div>
      </div>
      <div class="cls-count-date-line-two">
        <div class="cls-count-date-num">{{ xse.num }}</div>
        <div class="cls-count-date-rate">
          <div class="cls-count-date-rate-text" :style="{ background: xse.icon == 'top' ? '#16e53f' : '#e56516' }">
            {{ xse.rateText }}
          </div>
          <el-icon class="cls-count-date-rate-icon" :style="{ color: xse.icon == 'top' ? '#16e53f' : '#e56516' }">
            <component :is="xse.icon==='top' ? `Top` : `Bottom`" />
          </el-icon>
        </div>
      </div>
    </div>
    <div class="cls-count-date" style="background:linear-gradient(to bottom right, #cc95c0, #ffedbc)">
      <div class="cls-count-date-line-one">
        <div class="cls-count-date-text">订单量</div>
        <div class="cls-count-date-text-day">月</div>
      </div>
      <div class="cls-count-date-line-two">
        <div class="cls-count-date-num">{{ ddl.num }}</div>
        <div class="cls-count-date-rate">
          <div class="cls-count-date-rate-text" :style="{ background: ddl.icon == 'top' ? '#16e53f' : '#e56516' }">
            {{ ddl.rateText }}
          </div>
          <el-icon class="cls-count-date-rate-icon" :style="{ color: ddl.icon == 'top' ? '#16e53f' : '#e56516' }">
            <component :is="ddl.icon==='top' ? `Top` : `Bottom`" />
          </el-icon>
        </div>
      </div>
    </div>
    <div class="cls-count-date" style="background:linear-gradient(to bottom right, #c0c0aa, #1cefff)">
      <div class="cls-count-date-line-one">
        <div class="cls-count-date-text">成交额</div>
        <div class="cls-count-date-text-day">季度</div>
      </div>
      <div class="cls-count-date-line-two">
        <div class="cls-count-date-num">{{ cje.num }}</div>
        <div class="cls-count-date-rate">
          <div class="cls-count-date-rate-text" :style="{ background: cje.icon == 'top' ? '#16e53f' : '#e56516' }">
            {{ cje.rateText }}
          </div>
          <el-icon class="cls-count-date-rate-icon" :style="{ color: cje.icon == 'top' ? '#16e53f' : '#e56516' }">
            <component :is="cje.icon==='top' ? `Top` : `Bottom`" />
          </el-icon>
        </div>
      </div>
    </div>
  </div>
  <div class="cls-echarts">
    <div class="cls-pie">
      <pieChart />
    </div>
    <div class="cls-line">
      <lineChart />
    </div>
  </div>
</template>

<script setup lang="ts" name="Dashboard">
import { ref, onMounted } from "vue";
import pieChart from "@/views/dashboard/pieChart.vue"
import lineChart from "@/views/dashboard/lineChart.vue"

const fwl = ref({
  num: 153822,
  rateText: '+10%',
  icon: 'top',
})
const xse = ref({
  num: 63782,
  rateText: '-5%',
  icon: 'bottom',
})
const ddl = ref({
  num: 112344,
  rateText: '+35%',
  icon: 'top',
})
const cje = ref({
  num: 1933320,
  rateText: '-12%',
  icon: 'bottom',
})
</script>

<style lang="scss" scoped >
.cls-echarts {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;

  .cls-pie {
    height: 300px;
    width: 30%;
    margin-right: 14px;
  }

  .cls-line {
    height: 300px;
    width: 70%;
  }

}

.cls-count {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.cls-count-date {
  display: flex;
  height: 100px;
  width: 270px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 2px 3px 7px rgba(0, 0, 0, .2);
  flex-direction: column;
  align-items: center;



  .cls-count-date-line-one {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30%;
    width: 100%;
    padding-top: 20px;

    .cls-count-date-text {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-left: 20px;
    }

    .cls-count-date-text-day {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 17px;
    }
  }

  .cls-count-date-line-two {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70%;
    width: 100%;

    .cls-count-date-num {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 25px;
      margin-left: 20px;

    }

    .cls-count-date-rate {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 17px;

      .cls-count-date-rate-text {
        color: #fff;
        border-radius: 50px;
        padding: 2px 6px;
        margin-right: 8px;
      }
    }
  }
}
</style>