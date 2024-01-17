<script lang="ts">
	import SectionBody from '$lib/components/SectionBody.svelte';
	import { Experiences, type Experience } from '$lib/data/experience';
	import { onMount } from 'svelte';
	import link from '../images/link.svg';
	import link_hover from '../images/link_hover.svg';

	let selectedProject: Experience | undefined;
	let linkSrc: typeof link | typeof link_hover = link;
	let clientWidth = 0;
	function onProjectSelect(projectId: number) {
		selectedProject = Experiences.find((p) => p.id === projectId);
	}

	onMount(() => {
		selectedProject = Experiences[0];
	});
</script>

<section bind:clientWidth>
	<div class="header-sticky">
		<h1>Experience</h1>
	</div>
	<SectionBody>
		<div class="dual-pane">
			{#if clientWidth > 768}
				<div class="project-list">
					{#each Experiences as experience (experience.id)}
						<button
							title={experience.company}
							class="project-button {experience.id === selectedProject?.id ? 'selected' : ''}"
							on:click={() => onProjectSelect(experience.id)}>{experience.company}</button
						>
					{/each}
				</div>
				<div class="project-details">
					<div class="header">
						<p class="title-text">{selectedProject?.title}</p>
						<img class="logo" src={selectedProject?.logo} alt={selectedProject?.company} />
						<p class="sub-title-text">{selectedProject?.company_full}</p>
						<p class="sub-title-text date">{selectedProject?.dates}</p>
					</div>
					<div class="bullets-container">
						<ul>
							{#each selectedProject?.bullets ?? [] as bullet}
								<li>{bullet}</li>
							{/each}
						</ul>
					</div>
				</div>
			{:else}
				{#each Experiences as experience (experience.id)}
					<div class="header">
						<p class="title-text">{experience.title}</p>
						<img class="logo" src={experience.logo} alt={experience.company} />
						<p class="sub-title-text">{experience.company_full}</p>
						<p class="sub-title-text date">{experience.dates}</p>
					</div>
					<div class="bullets-container">
						<ul>
							{#each experience.bullets ?? [] as bullet}
								<li>{bullet}</li>
							{/each}
						</ul>
					</div>
				{/each}
			{/if}
		</div>
	</SectionBody>
</section>

<style>
	.dual-pane {
		display: grid;
		grid-template-columns: auto 1fr;
	}

	@media only screen and (max-width: 768px) {
		.dual-pane {
			display: flex;
			flex-direction: column;
		}
	}

	.project-list {
		display: flex;
		flex-direction: column;
		row-gap: 1vh;
	}

	.project-button {
		background: transparent;
		border: none;
		border-bottom: 1px solid transparent;
		color: #9a9a9a;
		text-align: left;
		padding: 1vh 1vw;
		margin-left: 8px;
	}

	.project-button:hover {
		border-bottom: 1px solid #6d6d6d;
	}

	.project-button:active {
		border-bottom: 1px solid #cfcfcf;
	}

	.project-button.selected {
		color: #cfcfcf;
		font-weight: 600;
		border-bottom: 1px solid #999999;
	}

	.project-button::after {
		height: 1px;
		display: block;
		content: attr(title);
		font-weight: 600;
		color: transparent;
		overflow: hidden;
		visibility: hidden;
	}

	.project-details {
		display: flex;
		flex-direction: column;
		column-gap: 3vw;
		padding: 0.5vw 5vw;
		color: #333333;
	}

	.header {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-column-gap: 1vw;
		grid-row-gap: 2px;
		/* background: linear-gradient(to bottom, #083c99, #3671be); */
		padding: 0 2vmin;
		border-top-left-radius: 1.5vw;
		border-top-right-radius: 1.5vw;
		text-wrap: nowrap;
	}

	.logo {
		height: min(36px, 6vw);
		width: min(72px, 12vw);
		border: 1px solid #555555;
		border-radius: 3px;
		grid-row-start: 2;
		grid-row-end: 4;
		align-self: center;
	}

	.title-text {
		font-size: max(2.5vmin, 1rem);
		font-family: 'Inter';
		grid-column-start: 1;
		grid-column-end: 3;
	}

	.sub-title-text {
		font-family: 'Inter';
		font-size: max(1.5vmin, 0.75rem);
		font-weight: 400;
	}

	.date {
		font-family: Arial, Helvetica, sans-serif;
		font-size: max(1.4vmin, 0.6rem);
	}

	.bullets-container {
		padding: 2vh;
		min-height: 30vh;
		/* background-color: #5a5a5a; */
		border-bottom-left-radius: 1.5vw;
		border-bottom-right-radius: 1.5vw;
		color: #f0f0f0;
		font-size: 1rem;
	}

	.bullets-container > ul {
		padding-left: 0;
	}
</style>
