class RegistrationsController < ApplicationController
  
  def create
    token = JsonWebToken.encode(user_params[:email])
    @user = User.new(user_params.merge!(token: token))
    if @user.save
      success(data: UserSerializer.new(@user), status: :created, message: I18n.t('users.created'))
    else
      render json: { errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def user_params
    params.permit(
      :name, :email, :password, :password_confirmation
    )
  end
end
