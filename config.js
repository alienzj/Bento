// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Jie Zhu',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'e0fa5e345247d966f625468b5353020f',
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '22.596311', 
	defaultLongitude: '22.596311', 

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/alienzj',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://gmail.com/',
		},
	    {
			id: '3',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
	    //{
		//	id: '4',
		//	name: 'Mail',
		//	icon: 'mail',
		//	link: 'https://outlook.office365.com/mail',
		//},
		//{
		//	id: '5',
		//	name: 'Calendar',
		//  icon: 'calendar',
		//	link: 'https://outlook.office.com/calendar/view/month',
		//},
	    {
			id: '4',
			name: "PubMed",
			icon: "library",
			link: 'https://www.ncbi.nlm.nih.gov/',
		},
		{
			id: '5',
			name: 'Biostars',
			icon: 'help-circle',
			link: 'https://biostars.org',
		},
        {
            id: '6',
            name: 'Galaxy',
            icon: 'graduation-cap',
            link: 'https://training.galaxyproject.org/',
        },
],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'Reddit',
			icon: 'reddit',
			link: 'https://www.reddit.com',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: '野居青年Country Boys Official Channel',
					link: 'https://www.youtube.com/channel/UCeQYA2HCY1OIJXrCLSmylEg',
				},
				{
					name: 'Machine Learning Course',
					link: 'https://www.youtube.com/c/HungyiLeeNTU'
				},
				{
					name: 'BBC Learning English',
					link: 'https://www.youtube.com/c/bbclearningenglish',
				},
				{
					name: 'MIT OpenCourseWare',
					link: 'https://www.youtube.com/c/mitocw',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'OpenRice',
					link: 'https://www.openrice.com/en/hongkong',
				},
				{
					name: '小约翰可汗',
					link: 'https://www.youtube.com/channel/UCAeIZxbLS06qOpBTAGT1qxA',
				},
                {
                    name: 'EMBL-EBI',
                    link: 'https://www.youtube.com/user/EBImedia',
                },
				{
					name: 'Swiss Institute of Bioinformatics',
                    link: 'https://www.youtube.com/c/SIBSwissInstituteofBioinformatics',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Emacs',
					link: 'https://www.reddit.com/r/emacs/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Archlinux',
					link: 'https://www.reddit.com/r/archlinux/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/alienzj',
				},
			],
		},
	],
};
