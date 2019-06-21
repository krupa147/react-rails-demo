class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def success(status: 200, data: nil, message: I18n.t("success"))
    render json: { data: data, message: message }, status: status
  end
end
