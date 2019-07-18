class Api::V1::UsersController < ApplicationController
  before_action :authenticate_request

  def profile
    success(data: UserSerializer.new(current_user), message: I18n.t("users.found"))
  end
end
