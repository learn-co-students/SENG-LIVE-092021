class UsersController < ApplicationController

    def create 
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created 
        else 
            render json: user.errors.full_messages, status: :unprocessable_entity 
        end 
    end

    def destroy 
        user = User.find_by(id: params[:id])
        if user 
            user.destroy
            head :no_content 
        else  
            render json: "User does not exist", status: :not_found 
        end
    end

    private 

    def user_params 
        params.permit(:username, :email)
    end
end
