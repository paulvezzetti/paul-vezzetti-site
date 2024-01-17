<script lang="ts">
	import SectionBody from '$lib/components/SectionBody.svelte';
	import { Projects, type Project } from '$lib/data/projects';
	import { onMount } from 'svelte';
	import link from '../images/link.svg';
	import link_hover from '../images/link_hover.svg';

	let selectedProject: Project | undefined;
	let linkSrc: typeof link | typeof link_hover = link;
	let clientWidth = 0;

	function onProjectSelect(projectId: number) {
		selectedProject = Projects.find((p) => p.id === projectId);
	}

	onMount(() => {
		selectedProject = Projects[0];
	});
</script>

<section bind:clientWidth>
	<div class="header-sticky">
		<h1>Projects</h1>
	</div>
	<SectionBody>
		<div class="dual-pane">
			{#if clientWidth > 768}
				<div class="project-list">
					{#each Projects as project (project.id)}
						<button
							title={project.title}
							class="project-button {project.id === selectedProject?.id ? 'selected' : ''}"
							on:click={() => onProjectSelect(project.id)}>{project.title}</button
						>
					{/each}
				</div>
				<div class="project-details">
					<img src={selectedProject?.screenshot} alt="screenshot" class="screenshot" />
					<div class="project-content">
						<p>
							<span class="project-type">Project Type ·</span>
							<span>{selectedProject?.owner}</span>
							<span class="project-type">·</span>
							<a
								href={selectedProject?.link}
								target="_blank"
								on:mouseenter={() => (linkSrc = link_hover)}
								on:mouseleave={() => (linkSrc = link)}
								><img src={linkSrc} alt="link" class="link-icon" /></a
							>
						</p>
						<p class="project-date">{selectedProject?.date}</p>
						<p class="project-description">{@html selectedProject?.description}</p>
					</div>
				</div>
			{:else}
				{#each Projects as project (project.id)}
					<div class="project-header">
						<p class="project-title">{project.title}</p>
						<img src={project.screenshot} alt="screenshot" class="screenshot" />
						<p>
							<span class="project-type">Project Type ·</span>
							<span>{project.owner}</span>
							<span class="project-type">·</span>
							<a
								href={project.link}
								target="_blank"
								on:mouseenter={() => (linkSrc = link_hover)}
								on:mouseleave={() => (linkSrc = link)}
								><img src={linkSrc} alt="link" class="link-icon" /></a
							>
						</p>
						<p class="project-date">{project.date}</p>
					</div>
					<p class="project-description">{@html project.description}</p>
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

	.link-icon {
		height: 16px;
		width: 16px;
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
		font-size: 1.2rem;
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

	.project-title {
		display: flex;
		grid-column-start: 1;
		grid-column-end: 3;
		font-family: 'Inter';
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	.project-type {
		font-family: 'Inter';
	}

	.project-date {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 0.9rem;
	}

	.project-content {
		display: flex;
		flex-direction: column;
	}

	.project-details {
		display: flex;
		flex-direction: row;
		column-gap: 3vw;
		padding: 0.5vw 5vw;
		color: #333333;
	}

	.project-description {
		padding-top: 2vh;
		margin-bottom: 10vh;
	}

	.project-header {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-column-gap: 3vw;
	}

	.screenshot {
		height: 6vh;
		border-radius: 12px;
		border: 1px solid #555555;
	}

	.project-header > .screenshot {
		grid-row-start: 2;
		grid-row-end: 4;
	}
</style>
