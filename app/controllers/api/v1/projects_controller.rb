class Api::V1::ProjectsController < ApplicationController
  before_action :set_project, only: %i[show update destroy]

  def index
    projects = ActiveModel::Serializer::CollectionSerializer
      .new(Project.all,
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
    @project.update(project_params)
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
    params.require(:project).permit(:name, :description, :start_date)
  end
end
