
test:
	@./node_modules/.bin/mocha --reporter spec \
		test/types/* \
		test/prime/*

.PHONY: test
