.PHONY: help clean clean-build clean-pyc clean-testinstall install-dev
.DEFAULT_GOAL := help

commit: 
	git add .; git commit -m 'blog article updated'; git push

install:
	bundle install

run:
	bundle exec jekyll serve