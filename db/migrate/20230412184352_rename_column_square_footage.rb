class RenameColumnSquareFootage < ActiveRecord::Migration[7.0]
  def change
    rename_column :apartments, :sqaure_footage, :square_footage
  end
end
