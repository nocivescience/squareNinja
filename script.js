const pruebaEl=document.getElementById("prueba");
let gameSpeed = 1;
const GAME_MODE_RANKED=Symbol('GAME_MODEL_RANKED');
const GAME_MODE_CASUAL=Symbol('GAME_MODEL_CASUAL');
const MENU_MAIN=Symbol('MENU_MAIN');
const MENU_PAUSE=Symbol('MENU_PAUSE');
const MENU_SCORE=Symbol('MENU_SCORE');
const state = {
	game: {
		mode: GAME_MODE_RANKED,
		time: 0,
		score: 0,
		cubeCount: 0,
	},
	menu: {
		active: MENU_MAIN,
	},
};
// colors
const BLUE = { r: 0x67, g: 0x7, b: 0xf0 };
const GREEN = { r: 0xa6, g: 0xe0, b: 0x2c };
const PINK = { r: 0xfa, g: 0x24, b: 0x73 };
const ORNAGE = { r: 0xfe, g: 0x95, b: 0x22 };
const allColors = [BLUE, GREEN, PINK, ORNAGE];
const getSpawnDelay = () => {
	const spawnDelayMax=1400;
	const spawnDelayMin=550;
	const spawnDelay = spawnDelayMax - gameSpeed*3.1;
	return Math.max(spawnDelay, spawnDelayMin);
};
const doubleStrongEnableScore=2000;
const slowmoThreshold=10;
const strongThreshold=25;
const spinnerThreshold=25;
let pointerIsDown = false;

const highScoreKey = '__menja__highScore';
const getHighScore = () => {
	const raw=localStorage.getItem(highScoreKey);
	return raw ? parseInt(raw) : 0;
};
let _lastHighscore = getHighScore();
const setHighScore = (score) => {
	_lastHighscore=getHighScore();
	localStorage.setItem(highScoreKey, String(score)); // save highscore 
};
