import { onDeactivated, onBeforeUnmount } from "vue";
import * as echarts from "echarts";

export const useEcharts = (myChart: echarts.ECharts, options: echarts.EChartsCoreOption) => {
	if (options && typeof options === "object") {
		myChart.setOption(options);
	}
	const echartsResize = () => {
		myChart && myChart.resize();
	};

	window.addEventListener("resize", echartsResize);

	// 防止 echarts 页面 keepAlive 时，还在继续监听页面
	onDeactivated(() => {
		window.removeEventListener("resize", echartsResize);
	});

	onBeforeUnmount(() => {
		window.removeEventListener("resize", echartsResize);
	});
};