module.exports = {
	content: ['./app/**/*.{ts,tsx,js,jsx}'],
	theme: {
    colors: {
      'lips-pink': '#E05A7A',
      'eye-brown': '#AD7C5D',
      'low-power-white': 'rgba(255, 255, 255,0.8)',
      'skin-tone': '#DBAAA4',
      'shirt-purple': '#5E5E80',
      'white': '#ffffff',
      'twitter-blue': 'rgb(29, 155, 240)',
      'black': '#000000'
    }
	},
	variants: {
		textColor: ['hover', 'dark', 'light'],
		backgroundColor: ['hover', 'dark', 'light'],
	},
	plugins: [],
}
