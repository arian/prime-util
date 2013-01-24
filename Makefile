
lint:
	@./node_modules/.bin/jshint \
		./test ./prime ./shell

test: lint
	@./node_modules/.bin/mocha --reporter spec \
		test/shell/* \
		test/prime/*


.PHONY: test
