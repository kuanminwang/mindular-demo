<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  name: "LineChart",
  props: {
    data: {type: Array},
    yAxislabels: {type: Array},
    options: {type: Object}
  },
  mounted() {
    this.renderChart(
      {
        labels: this.yAxislabels,
        datasets: this.data,
      },
      this.options
    );
  },
};
</script>
