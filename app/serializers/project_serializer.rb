class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :start_date, :created_at
end
