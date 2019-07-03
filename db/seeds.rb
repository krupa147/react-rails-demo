# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

(100..150).each do |i|
  project = Project.create(name: "Project#{i}", description: "Description for project#{i}")
  (1...2).each do |j|
    project.todos.create!(name: "Proj#{i}_ToDo#{j}", description: "Description for todo#{j} of project#{i}")
  end
end
