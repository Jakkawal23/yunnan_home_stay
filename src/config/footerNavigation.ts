// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Foxi.',
		aboutText:
			'ยูนนานโฮมสเตย์ ห้องพักดอยอ่างขาง ตั้งอยู่ใจกลางชุมชนบ้านผาแดง เส้นทางดอยอ่างขาง ใกล้แหล่งท่องเที่ยวสำคัญต่างๆ เรียนรู้วิธีชุมชนจีนยูนนาน ทีมีประวัติศาสตร์มากกว่า 50 ปี',
		logo: {
			src: '/logo_title.png',
			alt: 'Yunnan Home Stay',
			text: 'Yunnan Home Stay'
		}
	},
	footerColumns: [
		{
			category: 'เกี่ยวกับโฮมสเตย์',
			subCategories: [
				{
					subCategory: 'หน้าแรก',
					subCategoryLink: '/'
				},
				{
					subCategory: 'ราคา',
					subCategoryLink: '/pricing'
				},
				{
					subCategory: 'บริการ',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'คำถามที่พบบ่อย',
					subCategoryLink: '/faq'
				},
			]
		},
		{
			category: 'บทความ',
			subCategories: [
				{
					subCategory: 'ยูนนานโฮมสเตย์',
					subCategoryLink: '/blog'
				},
				{
					subCategory: 'หมู่บ้านผาแดง',
					subCategoryLink: '/blog'
				},
				{
					subCategory: 'สถานที่ท่องเที่ยวใกล้เคียง',
					subCategoryLink: '/blog'
				},
				{
					subCategory: 'เดินทางไปโฮมสเตย์ยังไง',
					subCategoryLink: '/blog'
				}
			]
		},
		{
			category: 'ติดต่อจองห้องพัก',
			subCategories: [
				{
					subCategory: 'เบอร์โทร : 0624266052 (เจ็หอม)',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'เบอร์โทร : 0624266052 (วาฬ)',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Line : @xxxxxx',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Facebook : ยูนนานโฮมสเตย์',
					subCategoryLink: '/contact'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© Yunnan Home Stay 2025.'
	}
}
