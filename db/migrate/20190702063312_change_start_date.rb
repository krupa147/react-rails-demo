class ChangeStartDate < ActiveRecord::Migration[5.2]
  def change
    change_column :projects, :start_date, :datetime
  end
end
