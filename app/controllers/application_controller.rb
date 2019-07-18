class ApplicationController < ActionController::Base
  include Rails::Pagination
  include Authenticator

  def render_resource(resource)
    if resource.errors.empty?
      render json: resource
    else
      validation_error(resource)
    end
  end

  def validation_error(resource)
    render json: {
      errors: [
        {
          status: '400',
          title: 'Bad Request',
          detail: resource.errors,
          code: '100'
        }
      ]
    }, status: :bad_request
  end

  skip_before_action :verify_authenticity_token

  def success(status: 200, data: nil, message: I18n.t("success"))
    render json: { data: data, message: message }, status: status
  end

  def pagination_params
    { per_page: (params[:per_page] || 10), page: (params[:page] || 1) }
  end
end


