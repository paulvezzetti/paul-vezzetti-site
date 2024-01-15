<script lang="ts">
	import SectionBody from '$lib/components/SectionBody.svelte';
	import SkillChart from '$lib/components/SkillChart.svelte';

	let divWidth = 0;
	let divHeight = 0;
	let headerHeight = 0;

	$: chartWidth = divWidth * 0.65;
	$: chartHeight = divHeight * 0.8;
</script>

<section>
	<h1 bind:clientHeight={headerHeight}>Skills</h1>
	<SectionBody>
		<div class="skills-content" bind:clientWidth={divWidth} bind:clientHeight={divHeight}>
			<SkillChart inputWidth={chartWidth} inputHeight={chartHeight}></SkillChart>
			<p class="skills-text">
				My skills are always evolving as I continue to learn new languages, libraries and
				techniques. I'm always seeking to improve and deepen my understanding of software
				engineering. My most current skills are honed toward my recent work responsibilities.
			</p>
		</div>
	</SectionBody>
</section>

<style>
	section {
		height: 100vh;
	}

	.skills-content {
		display: flex;
		flex-direction: row;
		height: 100%;
	}

	.skills-text {
		font-size: 2vh;
		margin-right: 5vw;
	}
</style>
