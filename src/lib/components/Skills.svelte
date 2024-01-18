<script lang="ts">
	import SectionBody from '$lib/components/SectionBody.svelte';
	import SkillChart from '$lib/components/SkillChart.svelte';

	let divWidth = 0;
	let divHeight = 0;
	let headerHeight = 0;
	let textHeight = 0;

	$: chartWidth = divWidth < 768 ? divWidth - (10 * divWidth / 100) : divWidth * 0.50;
	$: chartHeight = divHeight - headerHeight - (divWidth < 768 ? textHeight : 0);
</script>

<section bind:clientWidth={divWidth} bind:clientHeight={divHeight}>
	<div class="header-sticky" bind:clientHeight={headerHeight}>
		<h1>Skills</h1>
	</div>
	<SectionBody>
		<div class="skills-content">
			<SkillChart inputWidth={chartWidth} inputHeight={chartHeight}></SkillChart>
			<p class="skills-text" bind:clientHeight={textHeight}>
				My skills are always evolving as I continue to learn new languages, libraries and
				techniques. I'm always seeking to improve and deepen my understanding of software
				engineering. My most current skills are honed toward my recent work responsibilities.
			</p>
		</div>
	</SectionBody>
</section>

<style>
	.skills-content {
		display: flex;
		flex-direction: row;
		height: 100%;
	}

	@media only screen and (max-width: 768px) {
		.skills-content {
			flex-direction: column;
		}
	}

	.skills-text {
		font-size: 1rem;
		margin-right: 5vw;
	}
</style>
