class ApplicationController < ActionController::API
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

private

    def current_user
        User.last
    end

    def record_not_found(error)
        render json: error.message, status: :not_found 
    end

    def record_invalid(invalid)
        render json: invalid.record.errors, status: :unprocessable_entity 
    end

end
