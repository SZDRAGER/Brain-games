install: install-deps

install-deps:
	npm ci

brain-games:
	node bin/brain-games.js

publish: --dry-run