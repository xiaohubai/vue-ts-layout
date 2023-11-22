<template>
	<el-card>
		<div ref="echartsRef" class="cls-pieChart"></div>
	</el-card>
</template>

<script setup lang="ts" name="pieChart">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import { useEcharts } from "@/hooks/useEcharts";
const echartsRef = ref<HTMLElement>();
onMounted(() => {
	let myChart: echarts.ECharts = echarts.init(echartsRef.value as HTMLElement);
	let option: echarts.EChartsOption = {
		title: {
			text: 'Popular'
		},
		tooltip: {
			trigger: "item",
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		toolbox: {
			iconStyle: {
				borderColor: "#5ABE64",
			},
			feature: {
				saveAsImage: {
					title: "保存为图片"
				}
			}
		},
		series: [
			{
				name: "Popular",
				type: "pie",
				radius: "55%",
				center: ["50%", "50%"],
				roseType: "radius",
				itemStyle: {
					borderRadius: 5
				},
				label: {
					show: true
				},
				emphasis: {
					label: {
						show: true
					}
				},
				data: [
					{ value: 40, name: "typeScript" },
					{ value: 33, name: "vue3" },
					{ value: 28, name: "pinia" },
					{ value: 22, name: "echarts" },
					{ value: 20, name: "eslint" },
					{ value: 15, name: "sass" },
					{ value: 12, name: "axios" },
					{ value: 10, name: "vite" }
				]
			}
		]
	};
	useEcharts(myChart, option);
});
</script>

<style lang="scss" scoped>
.cls-pieChart {
	height: 300px;
	width: 100%;
}
</style>