class Api::V1::SessionsController < Devise::SessionsController
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format.include? 'application/json' }
  respond_to :json

  private
  def respond_with(resource, _opts = {})
    render json: resource
  end
  def respond_to_on_destroy
    head :ok
  end
end
