// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo_title.png',
		alt: 'The tailwind astro theme',
		text: 'Yunnan Home Stay'
	},
	navItems: [
		{ name: 'หน้าแรก', link: '/' },
		{ name: 'ราคา', link: '/pricing' },
		{ name: 'บริการ', link: '/features' },
		{
			name: 'ข้อมูลเพิ่มเติม',
			link: '#',
			submenu: [
				{ name: 'บทความ', link: '/blog' },
				// { name: 'Changelog', link: '/changelog' },
				{ name: 'คำถามที่พบบ่อย', link: '/faq' },
				// { name: 'Terms', link: '/terms' }
			]
		},
		{ name: 'ต่อต่อ', link: '/contact' }
	],
	navActions: [{ name: 'ติดต่อ/จองห้องพัก', link: '/', style: 'primary', size: 'lg' }]
}
