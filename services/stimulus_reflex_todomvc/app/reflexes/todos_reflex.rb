class TodosReflex < StimulusReflex::Reflex
  def create
    Services::HyperledgerFabricClient.add_todo("todoId#{rand(1000)}", element[:value], "", "1")
  end

  def edit
    @edit_id = element.dataset[:id]
  end

  def cancel_edit
    @edit_id = nil
  end

  def update
    Services::HyperledgerFabricClient.edit_todo(element.dataset[:id], element[:value], "", "1")
  end

  def toggle
    if element[:checked]
      Services::HyperledgerFabricClient.done_action(element.dataset[:id], Time.now.to_i)
    else
      Services::HyperledgerFabricClient.done_action(element.dataset[:id], "")
    end
  end

  def destroy
    #
  end

  def toggle_all
    #
  end
    #
  def destroy_completed
    #
  end

  def filter
    session[:filter] = element.dataset[:filter]
  end
end
