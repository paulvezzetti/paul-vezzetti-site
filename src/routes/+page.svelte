<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import SectionScroller from '$lib/components/SectionScroller.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import './styles.css';

	let scroller: HTMLElement | undefined;
	let sections = ['Intro', 'About', 'Skills', 'Experience', 'Projects'];
	let selectedSection = sections[0];

	function changeSection(event) {
		const section = event.detail.section;
		selectedSection = sections.find((s) => s === section) ?? section;

		const sectionIndex = sections.indexOf(section);
		if (sectionIndex >= 0 && scroller != null) {
			const scrollPos = sectionIndex * scroller.clientHeight;
			scroller.scrollTo({
				top: scrollPos,
				left: 0,
				behavior: 'smooth'
			});
		}
	}

	function onScroll() {
		if (scroller === undefined) {
			return;
		}
		const scrollIndex = Math.floor(scroller.scrollTop / scroller.clientHeight);
		selectedSection = sections[scrollIndex];
	}
</script>

<svelte:head>
	<title>Paul Vezzetti</title>
	<meta name="description" content="Personal Page for Paul Vezzetti" />
</svelte:head>

<div class="scroller" bind:this={scroller} on:scroll={onScroll}>
	<Intro></Intro>

	<About></About>

	<Skills></Skills>

	<Experience></Experience>

	<Projects></Projects>

	<div class="main-scroller">
		<SectionScroller {sections} selected={selectedSection} on:setSection={changeSection}
		></SectionScroller>
	</div>
</div>

<style>
	.scroller {
		overflow-y: scroll;
		overflow-x: hidden;
		scroll-snap-type: y mandatory;
		height: 100vh;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.scroller::-webkit-scrollbar {
		display: none;
	}

	.main-scroller {
		position: absolute;
		top: 50%;
		right: 18px;
		transform: translateY(-50%);
	}

	@media only screen and (max-width: 768px) {
		.scroller {
			scroll-snap-type: none; 
		}

		.main-scroller {
			display: none;
		}
	}
</style>
