import './tailwind-theme-format.js'

export default {
	"source": ["tokens/**/*.json"],
	"platforms": {
		"css": {
			"transformGroup": "css",
			"buildPath": "tokens/",
			"files": [
				{
					"destination": "generated.css",
					"format": "css/variables"
				},
				{
					"destination": "tw.css",
					"format": 'css/tailwind-theme'
				}
			]
		}
	}
}
