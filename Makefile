
lint:
	@./node_modules/.bin/jshint \
		./test ./prime

test: lint
	@./node_modules/.bin/mocha --reporter spec \
		test/* \
		test/prime/*


.PHONY: test
