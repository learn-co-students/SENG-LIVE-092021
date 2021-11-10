require "bundler/setup"

ENV["RACK_ENV"] ||= "development"

Bundler.require(:default, ENV["RACK_ENV"])

require "date"

require_all "app"
