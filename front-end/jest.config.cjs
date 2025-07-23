module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom', // or node, if I dont need dom
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	roots: [
		'<rootDir>/src', 
		'<rootDir>/tests',
	],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1', // for @ alias
	},
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	globals: {
		'ts-jest': {
			useESM: true,
		},
	},
};
