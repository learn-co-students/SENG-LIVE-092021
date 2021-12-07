class ApplicationController < ActionController::API

    include ActionController::Cookies
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

private

    def current_user
       @current_user ||= User.find_by_id(session[:user_id])
    end

    def record_not_found(error)
        render json: error.message, status: :not_found 
    end

    def record_invalid(invalid)
        render json: invalid.record.errors, status: :unprocessable_entity 
    end

    def is_authenticated 
        render json: "Not logged in", status: :unauthorized unless current_user 
    end

end
