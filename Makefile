clean:
	rm -rf tmp && rm -rf node_modules 

setup: 
	npm install


start:
	npm run browserify && node start.js