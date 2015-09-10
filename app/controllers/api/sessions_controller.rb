class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username],
                                     params[:user][:password])
    if @user
      login!(@user)
      render json: @user
    else
      render json: {errors: "Invalid credentials"}
    end
  end

  def destroy
    current_user.reset_session_toke!
    session[:session_toke] = nil
    render json: current_user
  end
end
