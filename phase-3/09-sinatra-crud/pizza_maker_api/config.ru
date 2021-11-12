require_relative "./config/environment"

Allow CORS (Cross-Origin Resource Sharing) requests
use Rack::Cors do
    allow do
      origins '*'
      resource '*', headers: :any, methods: [:get, :post, :delete, :put, :patch, :options, :head]
    end
  end

run ApplicationController
use ToppingsController