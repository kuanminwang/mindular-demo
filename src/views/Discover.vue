<template>
  <div class="content">
    <h3 class="diagram-title">Activities</h3>
    <div class="diagram-content">
      <CalendarHeatmap :values="activities" :end-date="endDate" />
    </div>
    <h3 class="diagram-title">Trend</h3>
    <div class="diagram-content">
      <LineChart :data="trendData" :yAxislabels="trendLabels" :options="chartOptions"/>
      <div class="mt-4 flex align-items-center">
        <div v-for="tag in tags" :key="tag.id" class="tag flex align-items-center mr-2" :style="{ 'border-color': tag.borderColor}">
          <span>{{ tag.icon }}</span>
          <span class="name">{{ tag.name }}</span>
          <span class="total pl-2">{{ tag.total }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-calendar-heatmap/dist/vue-calendar-heatmap.css'
import { CalendarHeatmap }  from 'vue-calendar-heatmap/dist/vue-calendar-heatmap.common'
import { ACTIVITIES, TREND_DATA, TREND_LABELS } from '@/mock/statistic';
import LineChart from '@/components/LineChart.vue';

export default {
    components: {
        CalendarHeatmap,
        LineChart
    },
    mounted() {
      this.initTags();
    },
    data() {
        return {
            activities: ACTIVITIES,
            endDate: new Date().toISOString().slice(0, 10).toString(), // end date is yesterday
            trendData: TREND_DATA,
            trendLabels: TREND_LABELS,
            chartOptions: {
              responsive: true,
              maintainAspectRatio: false
            },
            tags: []
        }
    },
    methods: {
      initTags() {
        this.tags = TREND_DATA.map((trend) => ({
          id: Math.floor(Math.random() * 100),
          name: trend.label,
          icon: this._getTagIcons(trend.label),
          borderColor: trend.borderColor,
          total: trend.data.reduce((a, b) => a + b, 0)
        }));
      },

      _getTagIcons(name) {
        if (name === 'Video Game') {
          return '🎮'
        } else if (name === 'Piano') {
          return '🎹'
        }  else if (name === 'Development') {
          return '💻'
        }

        return '😀'
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors.scss';

.diagram-title {
  font-size: 28px;
  font-weight: 700;
}

.diagram-content {
  padding: 24px;
  background-color: #fff;
  border-radius: 20px;
}

.tag {
  padding: 4px 8px;
  border-radius: 28px;
  border: 1.5px solid $denim-400;

  .name {
    color: $steel-600;
    padding-left: 8px;
    font-size: 16px;
  }

  .total {
    color: $steel-400;
    font-size: 12px;
  }
}

</style>>