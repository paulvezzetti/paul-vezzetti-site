<script lang="ts">
	export let title: string;
	export let owner: string;
	export let date: string;
	export let link: string;
	export let description: string;
</script>

<div class="outer-container">
	<div class="header">
		<p class="title-text">{title}</p>
		<p class="sub-title-text">{owner}</p>
		<p class="sub-title-text">{date}</p>
		<p class="sub-title-text">{link}</p>
	</div>
	<div class="bullets-container">
        <div>{@html description}</div>
	</div>
</div>

<style>
	.outer-container {
		display: flex;
		flex-direction: column;
		flex: 0 0 min(600px, 41vw);
		border: 1px solid #5a5a5a;
		border-radius: 1.5vw;
		box-shadow: 0.5vw 0.5vh 1.2vw 0 rgba(0, 0, 0, 0.8);
		height: fit-content;
		margin-bottom: 1vh;
	}

	.header {
		display: flex;
		flex-direction: row;
		column-gap: 1vw;
		background: linear-gradient(to bottom, #083c99, #3671be);
		padding: 2vmin;
		border-top-left-radius: 1.5vw;
		border-top-right-radius: 1.5vw;
		text-wrap: nowrap;
	}

	.logo {
		height: min(32px, 6vw);
		width: min(32px, 6vw);
	}

	.title-text {
		font-size: min(2.5vmin, 24px);
		font-weight: 600;
	}

	.sub-title-text {
		font-size: min(1.5vmin, 16px);
		font-weight: 400;
	}

	.bullets-container {
		padding: 2vh;
		min-height: 30vh;
		background-color: #5a5a5a;
		border-bottom-left-radius: 1.5vw;
		border-bottom-right-radius: 1.5vw;
		color: #d3d3d3;
		letter-spacing: 0.05em;
		font-size: 1.6vmin;
	}
</style>
