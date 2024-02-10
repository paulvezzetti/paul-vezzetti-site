<script lang="ts">
	import * as d3 from 'd3';
	import { onMount } from 'svelte';

	const skills: Array<{ skill: String; level: Number }> = [
		{ skill: 'Data Visualizations', level: 3.75 },
		{ skill: 'Angular/AngularJS', level: 3.5 },
		{ skill: 'Typescript', level: 3.9 },
		{ skill: 'JavaScript', level: 3.7 },
		{ skill: 'HTML/CSS', level: 3.8 },
		{ skill: 'Agile/Jira', level: 3.5},
		{ skill: 'Written/Verbal communication', level: 3.4},
		{ skill: 'C/C++', level: 3.5 },
		{ skill: 'GIT', level: 3.2 },
		{ skill: 'Java', level: 2.1 },
		{ skill: 'Svelte', level: 1.1 },
		{ skill: 'D3', level: 0.9 }
	];

	export let inputWidth = 0;
	export let inputHeight = 0;

	const marginTop = 0;
	$: marginRight = inputWidth * 0.1;
	$: marginBottom = inputHeight * 0.05;
	const marginLeft = 10;
	$: fontSize = inputWidth < 300 ? 'x-small' : inputWidth > 400 ? 'large' : 'small';

	const tickLabels = ['', 'Basics', 'Beginner', 'Advanced', 'Expert'];
	const gradColors = ['#3671BE', '#2B64B5', '#1F57AC', '#1449A2', '#083C99'];

	let vis;

	onMount(() => {
		redraw();
		window.addEventListener('resize', redraw);
	});

	function redraw() {
		d3.select(vis).html(null);

		// Create the scales.
		const x = d3
			.scaleLinear()
			.domain([0, d3.max(skills, (skill: { skill: String; level: Number }) => skill.level) + 0.5])
			.range([marginLeft, inputWidth - marginRight]);

		const y = d3
			.scaleBand()
			.domain(d3.map(skills, (skill: { skill: String; level: Number }) => skill.skill))
			.rangeRound([marginTop, inputHeight - marginBottom])
			.padding(0.1);

		// Create the plot area
		const svg = d3
			.select(vis)
			.append('svg')
			.attr('width', inputWidth + marginLeft + marginRight)
			.attr('height', inputHeight + marginTop + marginBottom)
			.append('g')
			.attr('transform', `translate(${[marginLeft, marginTop]})`);

		// Generate gradients
		gradColors.forEach((color, index) => {
			var grad = svg
				.append('defs')
				.append('linearGradient')
				.attr('id', `grad${index}`)
				.attr('x1', '0%')
				.attr('x2', '100%')
				.attr('y1', '0%')
				.attr('y2', '0%');

			grad
				.selectAll('stop')
				.data([gradColors[0], color])
				.enter()
				.append('stop')
				.style('stop-color', function (d) {
					return d;
				})
				.attr('offset', function (d, i) {
					return 100 * i + '%';
				});
		});

		svg
			.append('g')
			.attr('transform', `translate(0,${Math.max(0, inputHeight - marginBottom - 8)})`)
			.attr('color', '#333333')
			.call(
				d3.axisBottom(x).ticks(5).tickSize(-inputHeight)
				.tickFormat((d, i) => '')
			)
			.call((g) => g.select('.domain').remove());

		// Create the bars
		svg
			.append('g')
			// .attr('fill', '#67a1f9')
			.attr('stroke', '#f3f3f3')
			.selectAll()
			.data(skills)
			.join('rect')
			.attr('x', x(0))
			.attr('y', (d) => y(d.skill))
			.attr('width', (d) => Math.max(0, x(d.level) - x(0)))
			.attr('height', y.bandwidth())
			.style('fill', (d) => `url(#grad${Math.round(d.level)})`);

		// Append a label for each skill.
		svg
			.append('g')
			.attr('fill', '#d3d3d3')
			.attr('text-anchor', 'start')
			.selectAll()
			.data(skills)
			.join('text')
			.attr('x', x(0))
			.attr('y', (d) => y(d.skill) + y.bandwidth() / 2)
			.attr('dy', '0.35em')
			.attr('dx', 16)
			.style('font-size', `${fontSize}`)
			.text((d) => d.skill);

		// Create the x-axis
		svg
			.append('g')
			.attr('transform', `translate(0,${Math.max(0, inputHeight - marginBottom)})`)
			.attr('color', '#d3d3d3')
			.style('font-size', `${fontSize}`)
			.call(
				d3
					.axisBottom(x)
					.ticks(5)
					.tickSize(0)
					.tickFormat((d, i) => tickLabels[d])
			)
			.call((g) => g.select('.domain').remove());

		// Create the y-axis
		// svg
		// 	.append('g')
		// 	.attr('transform', `translate(${marginLeft},0)`)
		// 	.attr('color', '#d3d3d3')
		// 	.call(d3.axisLeft(y).tickSizeOuter(0));
	}
</script>

<div id="vis" bind:this={vis}></div>
