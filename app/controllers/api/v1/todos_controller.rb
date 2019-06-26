class Api::V1::TodosController < ApplicationController
    before_action :set_todo, only: %i[show update destroy]

  def index
    todos = ActiveModel::Serializer::CollectionSerializer
      .new(Todo.includes(:project).all,
           each_serializer: TodoSerializer)
    success(data: todos, message: I18n.t("todos.list"))
  end

  def create
    todo = Todo.create(todo_params)
    success(data: TodoSerializer.new(todo), message: I18n.t("todos.created"))
  end

  def show
    success(data: TodoSerializer.new(@todo), message: I18n.t("todos.found"))
  end

  def update
    @todo.update(todo_params)
    success(data: TodoSerializer.new(@todo), message: I18n.t("todos.updated"))
  end

  def destroy
    @todo.destroy!
    success(message: I18n.t("todos.deleted"))
  end

  private

  def set_todo
    @todo = Todo.find(params[:id])
  end

  def todo_params
    params.require(:todo).permit(:name, :description, :project_id)
  end
end
