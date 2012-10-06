
lint:
	@./node_modules/.bin/jshint \
		./test ./prime ./types

test: lint
	@./node_modules/.bin/mocha --reporter spec \
		test/types/* \
		test/prime/*


.PHONY: test
