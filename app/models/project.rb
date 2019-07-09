class Project < ApplicationRecord
  validates :name, :description, presence: true
  has_many :todos, dependent: :destroy
  accepts_nested_attributes_for :todos, allow_destroy: true, reject_if: :all_blank
end
