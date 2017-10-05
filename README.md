# Pool Pro.

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

## My Node version when I started this. Also this works on Node version 6.11.+
	version: 7.8.0
	npm: 4.2.0

## Install yo, grunt-cli and bower globally for all users on your machine
	sudo npm install -g yo grunt-cli bower
	sudo npm install -g generator-angular generator-karma
	sudo npm install -g generator-angular generator-karma

## Install the compass gems from via ruby
	We will need compass - https://github.com/Compass/compass
	Install compass
	  sudo apt-get install ruby-compass
	  sudo gem install compass

## Clone this project
	git clone git@github.com:devchuckcamp/poolpros-angularjs.git
	cd poolpros-angularjs/
	npm install
	grunt serve	


## Build & development

Run `grunt build` for building and `grunt serve` for preview.
Default port is on :9000

## Testing
	npm install grunt-karma karma-phantomjs-launcher karma-jasmine --save-dev
	Running `grunt test` will run the unit tests with karma.

## Running Build file in dist/ folder

Run `grunt serve:dist`
	If your not getting the data from storage/dealers.json
	Just Copy storage/dealers.json to dist/ then refresh your browser.
	Note: No need to run `grunt serve:dist` after copying the folder. 






