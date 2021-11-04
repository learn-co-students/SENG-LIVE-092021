require "bundler/setup"
# DB = SQLite3::Database.new("db/development.db")
# DB.results_as_hash = true

ENV["RACK_ENV"] ||= "development"

Bundler.require(:default, ENV["RACK_ENV"])

require "date"
require "active_support/core_ext/integer/time"
require "active_support/core_ext/date/calculations"
require_all "app"
