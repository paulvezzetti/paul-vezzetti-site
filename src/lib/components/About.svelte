<script lang="ts">
	import SectionBody from '$lib/components/SectionBody.svelte';
	import LILogo from '../images/LILogo.png';
	import GitHubLogo from '../images/GitHubLogo.png';

	const paragraphs = [
		' ...which lead me to my original degree in Mechanical Engineering and has continued through a lifetime of woodworking, home improvement projects, photography and, most importantly, Software Engineering.',
		'In my early career, writing code was a tool. I could use it to solve a problem or be more productive. Over time, software became my best outlet for producing tangible products that reached real people. ',
		"Initially, I moved from hardware production to software testing. Later, I provided development customer support and saw, first-hand, how providing customers were using our software and my fixes. I've now been in Software Engineering for over 20 years. I love the feeling of seeing customers use features that I've developed.",
		"For the past 15 years, I've been working in Data Visualization and Business Intelligence software. I've built web-based data exploration tools from the ground up, built data visualization components, worked on a desktop statistical analysis tool and everything in between. Along the way, I've written code in Java, JavaScript/TypeScript, ActionScript, C/C++, Python, etc. along with a host of libraries."
	];
</script>

<section>
	<div class="header-sticky">
		<h1>About me</h1>
	</div>
	<SectionBody>
		<p class="lead-text">I like to make <span style="font-style:italic">things...</span></p>
		{#each paragraphs as para}
			<p class="main-text">{para}</p>
		{/each}
		<div class="contacts">
			<a href="https://www.linkedin.com/in/paul-vezzetti-613a6660/" target="_blank"
				><img class="link-button" src={LILogo} alt="LinkedIn" /></a
			>
			<a href="https://github.com/paulvezzetti" target="_blank"
				><img class="link-button" src={GitHubLogo} alt="GitHub" /></a
			>
		</div>
	</SectionBody>
</section>

<style>
	p {
		font-size: 1rem;
		margin: 1vh 0;
	}

	.lead-text {
		color: #bdd7ff;
	}

	.contacts {
		flex: 1;
		display: flex;
		justify-content: space-around;
		align-items: end;
		margin-bottom: 4vh;
	}

	.link-button {
		width: 12vmin;
		background-color: white;
		padding: 2vmin;
		border-radius: 2.5vmin;
	}
</style>
