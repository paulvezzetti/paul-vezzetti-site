import mode_ts from '../images/mode_ts.png';
import jmp_wide from '../images/jmp_wide.png';
import sas_wide from '../images/sas-wide.png';
import ibm from '../images/ibm.png';

export interface Experience {
	id: number;
	title: string;
	company: string;
	company_full: string;
	dates: string;
	logo: any;
	bullets: string[];
}

export const Experiences: Array<Experience> = [
	{
		id: 0,
		title: 'Senior Visualizations Engineer',
		company: 'Mode Analytics',
		company_full: 'Mode Analytics/ThoughtSpot',
		dates: 'MAY 2021 - PRESENT',
		logo: mode_ts,
		bullets: [
			'Visualization expert driving expansion of Visual Explorer graphics tool. Continually improving the Grammar-of-Graphics capabilities to provide flexible, powerful charting.',
			'Technical team lead directing small engineering teams. Worked with Product and Design on feature requirements, feasibility and technical direction. Performed story and task breakdown into small units with clear objectives. Mentored team members through pairing and code review to ensure code standards and quality.',
			'Personally drove integration of innovative new features such as overlaying multiple chart layers on a shared axis and dynamic drill anywhere. Integrated multiple award winning Hack Day projects into production.',
			'Guided execution of new features in the component graphics library and implemented early application integration prototypes. Architected and implemented method to transition from a legacy chart provider to the new Visual Explorer renderer while maintaining backward compatibility for customers.',
			'Tackled a variety of issues around large data and high cardinality to increase the number of charts that could be rendered.',
			'Developed Typescript Angular components for a SaaS based product on a daily deployment schedule. Migrated legacy AngularJS components to Angular.'
		]
	},
	{
		id: 1,
		title: 'Principle Software Engineer',
		company: 'JMP',
		company_full: 'JMP',
		dates: '2018 - MAY 2021',
		logo: jmp_wide,
		bullets: [
			'Provided new features for graphical data exploration in desktop statistical software application using C++.',
			'Rewrote Area Chart to combine code and features with Line Chart.',
			'Provided new features and support for Histograms, Heatmaps, Tree Maps, Mosaic plots and Box plots.',
			'Created a hexagonal Heatmap.',
			'Improved usability of tool to compare data visualizations across many data columns.',
			'Added utility to provide custom binning of continuous column ranges.',
			'Rewrote Pareto analytics platform with new components including Bar, Line and Marker plots and improved usability.'
		]
	},
	{
		id: 2,
		title: 'Principle Software Engineer',
		company: 'SAS Institute',
		company_full: 'SAS Institute',
		dates: '2006 - 2018',
		logo: sas_wide,
		bullets: [
			'Developed core data visualization components in portable C++ framework for consumption by SAS applications in HTML/Wasm, iOS, Android and Windows platforms.',
			'Implemented component rendering using Canvas, OpenGL, SVG and PDF. Led effort to redesign component lifecycle.',
			'Wrote Sankey diagram visualization. Provided support and new features for Network Plot, Process Flow Diagram, Bar, Area, and Line Charts. Implemented basic spring force layout algorithm for Network Diagram.',
			'Developed Python tool to visualize acceptance test output differences.',
			'Developed user interface to backend text analytics in JavaScript and TypeScript.',
			'Architected, designed and implemented completely new data exploration product in Flex/ActionScript. Product provided approachable data exploration with easy data loading, visualization and publishing. Integrated more complex statistical analysis such as text analytics, forecasting, correlation and regression.',
			'Ported Flex client code to Java backend code for migrating saved exploration content. Integrated two separate Flex products into a single offering.'
		]
	},
	{
		id: 3,
		title: 'Senior Development Engineer',
		company: 'IBM',
		company_full: 'IBM',
		dates: '1997 - 2006',
		logo: ibm,
		bullets: [
			'Developed, tested and provided customer support for system management software from Tivoli and IBM Server group.'
		]
	}
];
