// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'ที่พักดอยอ่างขาง ยูนนานโฮมสเตย์ หมู่บ้านผาแดง',
	siteDescription:
		'หากคุณกำลังมองหาที่พักบนดอยอ่างขาง ยูนนานโฮมสเตย์ ตั้งอยู่ใจกลางชุมชนจีนยูนนาน หมู่บ้านผาแดง สะดวกในการเดินทาง ห้องพักสะอาด ปลอดภัย',
	ogImage: '/og.png',
	logo: {
		src: '/logo.png',
		alt: 'Yunnan Home Stay Logo'
	},
	canonical: true,
	noindex: false,
	mode: 'light',
	scrollAnimations: true
}
