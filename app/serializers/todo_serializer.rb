class TodoSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :created_at
  belongs_to :project
end
