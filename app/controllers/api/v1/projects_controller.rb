class Api::V1::ProjectsController < ApplicationController
  before_action :set_project, only: %i[show update destroy]

  def index
    projects = paginate(Project.includes(:todos).order(updated_at: :desc), pagination_params)
    # projects = Project.all
    projects = ActiveModel::Serializer::CollectionSerializer
      .new(projects,
           each_serializer: ProjectSerializer)
    success(data: projects, message: I18n.t("projects.list"))
  end

  def create
    project = Project.create(project_params)
    success(data: ProjectSerializer.new(project), message: I18n.t("projects.created"))
  end

  def show
    success(data: ProjectSerializer.new(@project), message: I18n.t("projects.found"))
  end

  def update
    @project.update(project_update_params)
    puts @project
    puts ProjectSerializer.new(@project)
    success(data: ProjectSerializer.new(@project), message: I18n.t("projects.updated"))
  end

  def destroy
    @project.destroy!
    success(message: I18n.t("projects.deleted"))
  end

  private

  def set_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:name, :description, :start_date, todos_attributes: %i[name description _destroy])
  end

  def project_update_params
    params.require(:project).permit(:name, :description, :start_date, todos_attributes: %i[id name description _destroy])
  end
end
