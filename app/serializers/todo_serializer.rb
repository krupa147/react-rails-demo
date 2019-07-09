class TodoSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  # belongs_to :project
end
