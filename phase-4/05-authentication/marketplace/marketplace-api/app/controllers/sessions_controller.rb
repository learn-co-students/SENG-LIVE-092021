class SessionsController < ApplicationController

  # do i need strong params here? 

  # get '/login' 
  def create
    # find the user using the params username 
    # authenticate the user with the given password
    # if successful, respond with the user and we're going to set the session***

    # else render a error message, provide an unauthorized status 

    user = User.find_by_username(params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id # log user in, keep track of user
      render json: user, status: :okay 
    else 
      render json: "Invalid Credentials. Try again!", status: :unauthorized 
    end
  end

  def destroy
    session.delete :user_id
  end
end
