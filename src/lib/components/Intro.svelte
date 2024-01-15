<script lang="ts"></script>

<section class="intro">
	<div class="main-block">
		<p class="subtle">Hello! My name is</p>
		<p class="attention">Paul Vezzetti</p>
	</div>
	<div class="detail">
		<div class="left-bar"></div>
		<p class="long-text">
			I am a Front-End software engineer specializing in Data Visualization for Business
			Intelligence and Data Exploration applications.
		</p>
	</div>
</section>

<style>
	section {
		height: 100vh;
		margin: 0;
		padding: 0;
	}

	.intro {
		position: relative;
		background-image: url('../images/abstract-background.png');
		background-size: cover;
	}

	.main-block {
		margin-left: 10vw;
		margin-top: 5vh;
		display: flex;
		flex-direction: column;
	}

	.subtle {
		font-family: 'Courier New', Courier, monospace;
		font-size: 1.6vmax;
	}

	.attention {
		font-family: 'Inter';
		font-size: 10vmax;
	}

	.detail {
		display: flex;
		column-gap: 10px;
		position: absolute;
		left: 10vw;
		bottom: 10vh;
	}

	.left-bar {
		width: 4px;
		background: linear-gradient(to bottom, #a09cd0, #0831ff);
	}

	.long-text {
		font-size: 2vmax;
		color: #f3f3f3;
		max-width: 60vw;
	}
</style>
