require "bundler/setup"
# DB = SQLite3::Database.new("db/development.db")
# DB.results_as_hash = true

ENV["RACK_ENV"] ||= "development"

require 'bundler/setup'
Bundler.require(:default, ENV["RACK_ENV"])

require_all "app"