class ApplicationController < ActionController::Base
  include Rails::Pagination

  skip_before_action :verify_authenticity_token

  def success(status: 200, data: nil, message: I18n.t("success"))
    render json: { data: data, message: message }, status: status
  end

  def pagination_params
    { per_page: (params[:per_page] || 10), page: (params[:page] || 1) }
  end
end
