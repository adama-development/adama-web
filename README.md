# Adama-toolkit

## Prerequisite

This project requires Node, Gulp
Gulp is a Node application that requires a global insstall :

	npm install gulp -g



## Getting Started

You have to retrieve the project dependencies in order to make it work :

	git clone git@bitbucket.org:adama/adama_toolkit.git
	cd adama_toolkit
	npm install

Then, you'll need to trigger the development workflow :

	gulp serve  

Application is available on http://localhost:9000.



## How to release

Before release, don't forget to do a full build in order to validate all code base !

	grunt

The release process tag the source control and update project version :

	grunt release

The project use [grunt-release](https://github.com/geddski/grunt-release) for its versionning an tag process.
