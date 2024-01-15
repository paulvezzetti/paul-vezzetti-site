<script lang="ts">
	import { Projects, type Project } from '$lib/data/projects';
	import { onMount } from 'svelte';
	import link from '../images/link.svg';
	import link_hover from '../images/link_hover.svg';

	let selectedProject: Project | undefined;
	let linkSrc: typeof link | typeof link_hover = link;

	function onProjectSelect(projectId: number) {
		selectedProject = Projects.find((p) => p.id === projectId);
	}

	onMount(() => {
		selectedProject = Projects[0];
	});
</script>

<section>
	<h1>Projects</h1>
	<div class="dual-pane">
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
	</div>
</section>

<style>
	.dual-pane {
		display: grid;
		grid-template-columns: auto 1fr;
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

	.project-type {
		font-family: 'Inter';
	}

	.project-date {
		font-family: Arial, Helvetica, sans-serif;
		font-size: min(2vmin, 14px);
		padding-top: 0.5vh;
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
	}

	.project-description > a:link {
		color: red;
	}

	.screenshot {
		height: 6vh;
		border-radius: 12px;
	}
</style>
