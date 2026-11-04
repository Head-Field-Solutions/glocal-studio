/*
 * Used by `npm run dev`: waits until the first Webpack builds have produced
 * the server bundle and the client stats file before nodemon starts the
 * server. Without this, a fresh clone (no build/ folder yet) starts nodemon
 * too early, the server crashes, and nodemon never restarts it.
 */
const fs = require('fs');
const path = require('path');

const required = [
	path.resolve(__dirname, '../build/public/server.js'),
	path.resolve(__dirname, '../build/public/loadable-stats.json'),
];

const timeoutMs = 10 * 60 * 1000;
const started = Date.now();
let announced = false;

const check = () => {
	if (required.every((file) => fs.existsSync(file))) {
		process.exit(0);
	}
	if (!announced) {
		console.log('[wait-for-build] Waiting for the first Webpack build to finish...');
		announced = true;
	}
	if (Date.now() - started > timeoutMs) {
		console.error('[wait-for-build] Timed out waiting for build/public. Check the Webpack output above for errors.');
		process.exit(1);
	}
	setTimeout(check, 1000);
};

check();
