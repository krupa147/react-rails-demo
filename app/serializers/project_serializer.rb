class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :start_date, :created_at
  has_many :todos, key: :todos_attributes
end
