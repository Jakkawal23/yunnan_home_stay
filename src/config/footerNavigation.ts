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
		title: 'Yunnan Home Stay',
		aboutText:
			'ยูนนานโฮมสเตย์ ที่พักดอยอ่างขางในหมู่บ้านผาแดง เส้นทางไชยปราการ–อ่างขาง และเส้นทางอรุโณทัย-อ่างขาง โฮมสเตย์บรรยากาศอบอุ่นใจกลางชุมชนจีนยูนนาน ใกล้แหล่งท่องเที่ยวสำคัญ เรียนรู้วิถีชีวิตและวัฒนธรรมที่สืบทอดมากว่า 50 ปี',
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
					subCategory: 'เบอร์โทร : 0910700484 (วาฬ)',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Line : @579lmqrb',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Facebook : ยูนนาน โฮมสเตย์ ห้องพักใกล้อ่างขาง ',
					subCategoryLink: '/contact'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© Yunnan Home Stay 2025. 21/12/2025 16:13'
	}
}
