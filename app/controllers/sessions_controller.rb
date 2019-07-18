class SessionsController < ApplicationController
  
  def create
    user = User.find_by_email(login_params[:email])
    if user && user.authenticate(login_params[:password])
      token = JsonWebToken.encode(email: user.email)
      user.update(token: token)
      success(data: UserSerializer.new(user), message: I18n.t("session.created"))
    else
      render json: { error: 'unauthorized' }, status: :not_found
    end
  end

  private

  def login_params
    params.permit(:email, :password)
  end
end
