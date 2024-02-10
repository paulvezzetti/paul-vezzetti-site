import personal_website from '../images/personal_website.png';
import color_settings from '../images/color_settings.png';
import days_since from '../images/days_since.png';
import visual_explorer from '../images/visual_explorer.png';
import watchface from '../images/watchface.png';
import shared_axis from '../images/shared_axis.png';

export interface Project {
	id: number;
	title: string;
	screenshot: any;
	owner: string;
	date: string;
	link: string;
	description: string;
}

export const Projects: ReadonlyArray<Project> = [
	{
		id: 0,
		title: 'This website',
		screenshot: personal_website,
		owner: 'Personal',
		date: '2024',
		link: 'https://github.com/paulvezzetti',
		description:
			`This website is my first experience with Svelte/SvelteKit. I spend my work day with <span style="font-family:'Inter'">Angular</span>, ` +
			`often migrating old <span style="font-family:'Inter'">AngularJS</span> code to newer <span style="font-family:'Inter'">Angular</span>. ` +
			`This is a opportunity to try out a more modern framework built with many of the lessons of <span style="font-family:'Inter'">Angular</span> ` +
			`and <span style="font-family:'Inter'">React</span> in mind. ` +
			`I learned a lot as part of this project.<br><br>` +
			`First, while I'm not a <span style="font-family:'Inter'">Svelte</span> expert after this experiment, it is easy to see the parallels with <span style="font-family:'Inter'">Angular</span>. ` +
			`All the concepts that I'm used to using in <span style="font-family:'Inter'">Angular</span> are available in <span style="font-family:'Inter'">Svelte</span>, ` +
			`often with less boilerplate and more standard-based implementations. ` +
			`I really appreciate the simplicity compared to <span style="font-family:'Inter'">Angular</span>.<br><br>` +
			`I also learned that I'm not a designer and I have amazing appreciation for all of the talented designers that I've worked with. ` +
			`This site isn't particularly captivating from a design perspective. I modeled the appearance off of a typical IDE in Dark Mode. ` +
			`That is where I am most comfortable and I suspect most visitors to my site will be as well.`
	},
	{
		id: 1,
		title: 'Visual Explorer',
		screenshot: visual_explorer,
		owner: 'Work',
		date: '2021 - 2024',
		link: 'https://mode.com/visual-explorer',
		description:
			`I was hired at <span style="font-family:'Inter'">Mode</span> to help complete the new visualization builder ` +
			`tool called <span style="font-family:'Inter'">Visual Explorer</span>. This marked a transition for <span style="font-family:'Inter'">Mode</span> from ` +
			`being chart-type centric to a more flexible, Grammar-of-Graphics ` +
			`designer tool. We worked across two internal development teams plus a ` +
			`remote external company in India to deliver the first release.<br><br> ` +
			`With my background in business intelligence and data visualization, my primary ` +
			`focus was on configuring the underlying visualization library, driving ` +
			`API requirements to the external team for the rendering library, and ` +
			`setting overall visualization direction.<br><br>` +
			`Over time as resources and priorities have shifted, I've taken on more ` +
			`of a traditional front-end developer role, though still exclusively ` +
			`related to data visualization. I generally lead small teams in ` +
			`developing new features, provide insight into new feature planning, ` +
			`and review architecture across multiple teams.`
	},
	{
		id: 2,
		title: 'Shared Axis',
		screenshot: shared_axis,
		owner: 'Work',
		date: '2023',
		link: 'https://mode.com/help/articles/visual-explorer#shared-axis',
		description:
			`This project at <span style="font-family:'Inter'">Mode</span> enabled an entirely new class of ` +
			`visualizations to be created using the <span style="font-family:'Inter'">Visual Explorer</span> tool. ` +
			`It allows multiple visualization layers to be stacked on top of one another using the same cartesian axes. ` +
			`This enabled building complex visualizations using basic building blocks. For example, a bullet chart could be ` +
			`created by stacking multiple bar and shape layers representing the measure, range and target values.`
	},
	{
		id: 4,
		title: 'Color Enhancements',
		screenshot: color_settings,
		owner: 'Work',
		date: '2023 - 2024',
		link: 'https://mode.com/blog/enhanced-charts-color-optimization',
		description:
			`This was a major overhaul of color assignment in <span style="font-family:'Inter'">Visual Explorer</span>. ` +
			`I worked with Product and Design on defining requirements, UX interactions and planning and then lead a team of 2 other developers ` +
			`to completely revamp the color capabilities of the product.<br><br>` +
			`We added new features such as: <br>` +
			`<ul>` +
			`<li>A custom HSV color picker</li>` +
			`<li>Two and three color gradients</li>` +
			`<li>Gradient range customization</li>` +
			`<li>Stepped gradients</li>` +
			`<ul>`
	},
	{
		id: 5,
		title: 'Garmin WatchFace',
		screenshot: watchface,
		owner: 'Personal',
		date: '2024',
		link: 'https://github.com/paulvezzetti/Circles/',
		description:
			`I'm an avid runner and recently upgraded my <span style="font-family:'Inter'">Garmin</span> watch to a new model. ` +
			`The new model has an improved screen which much higher resolution and functionality. ` +
			`After trying out some of the available watch faces, I decided to try writing my own. ` +
			`The SDK and language are not the best and the project didn't give me any relevant skills, but it was a fun experiment anyway.`
	},
	{
		id: 6,
		title: 'Drill Anywhere',
		screenshot: visual_explorer,
		owner: 'Work',
		date: '2022 - 2023',
		link: 'https://updates.mode.com/more-explorable-reports-with-drill-anywhere-269598',
		description:
			`After just a few months at <span style="font-family:'Inter'">Mode</span>, I experienced my first Hack Day. ` +
			`This was always a big event for the company with a wide variety of projects. I developed a <span style="font-family:'Inter'">'Drill Anywhere'</span> ` +
			`feature as an enhancement to our <span style="font-style: italic">soon-to-be-released</span> <span style="font-family:'Inter'">Visual Explorer</span>.<br><br>` +
			`This feature allowed the user to explore the underlying data behind any data element in the visualization. It was a big success and ` +
			`won the coveted Hacker's Choice Award which is voted on by everyone at <span style="font-family:'Inter'">Mode</span>.<br><br>` +
			`Eventually, this feature was prioritized and added to the product as a standard feature. ` +
			`I had other Hack Day projects added as features such as <a href="https://updates.mode.com/label-controls-in-visual-explorer-255940" target="_blank">Text Settings</a> ` +
			`and <a href="https://updates.mode.com/greater-control-and-customization-of-visualizations-with-mark-settings-272720" target="_blank">Mark Settings</a>.<br><br>` +
			`My success at Hack Day plus my input on other visualization features earned me the Innovator Award at ThoughtSpot.`
	},
	{
		id: 3,
		title: 'DaysSince Mobile Apps',
		screenshot: days_since,
		owner: 'Personal',
		date: '2010 - 2020',
		link: 'https://github.com/paulvezzetti/days-since',
		description:
			`I originally began on this project when Android was first growing in popularity. ` +
			`I had just gotten my first Android phone and was excited by the ability to create my own apps. ` +
			`I created a fairly simple app that kept track of repeating scheduled tasks. Rather than setting reminders ` +
			`which would trigger on a set schedule, this app started the clock on the reminder once you performed the task. So, if ` +
			`you are a week late doing a task that should be done every 2 week, it would still remind you 2 weeks later.<br><br>` +
			`I published the app in the Android Store and experimented with some different delivery mechanisms. First, I simply charged $0.99. ` +
			`Then, I differentiated a 'free' and 'paid' version. Overall, this yielded me a whopping $136.<br><br>` +
			`Finally, I switched to a free + ads model. This drove a whole $36 in revenue. While I didn't become a millionaire, ` +
			`I had a surprisingly loyal following and lots of 5-star reviews. Unfortunately, over time it became really difficult to support ` +
			`the increasingly fragmented Android device market. Also, my entire family had moved to iPhones and I was the odd person out.<br><br>` +
			`After switching myself to iPhone, I ported the app to iOS for personal use only. I never published to the App Store based on my previous experience.<br><br>` +
			`Years after removing my App from the Android App Store, I was still getting contacted from former users. One user requested the source code so that they ` +
            `could recompile for their personal device.`
	}
];
