class TodosController < ApplicationController
  FILTERS = %w[all active completed].freeze

  def index
    session[:filter] = "all" unless filter_permitted?(session[:filter])
    @all_todos       =  Services::HyperledgerFabricClient.all_todo["data"]
    @filtered_todos  = @all_todos.sort_by { |todo| todo["Key"] }.reverse
  end

  private

  def filter_permitted?(filter)
    FILTERS.include? filter
  end
end
