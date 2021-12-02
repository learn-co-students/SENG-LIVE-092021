class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        render json: user, status: :created 
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity    
    end

    private

    def user_params 
        params.permit(:username, :email)
    end
end
