class Project < ApplicationRecord
  validates :name, :description, presence: true
  has_many :todos, dependent: :destroy
end
