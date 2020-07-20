require 'rest-client'
require 'json'

module Services
  module HyperledgerFabricClient

    extend self
    
    def query_todo todoId
      return client["query"].post(payload("queryTodo", todoId)).body
    end

    def all_todo
      return_json client["query"].post(payload("getAllTodo")).body
    end

    def add_todo(todo_id, action, done_at, owner_id)
      return_json client["invoke"].post(payload("addTodo", [todo_id, action, done_at, owner_id])).body
    end

    def edit_todo(todo_id, action, done_at, owner_id)
      return_json client["invoke"].post(payload("editTodo", [todo_id, action, done_at, owner_id])).body
    end

    def done_action(todo_id, done_at)
      return_json client["invoke"].post(payload("doneAction", [todo_id, done_at])).body
    end


    def enroll_admin
      return client["/enrollAdmin"].get.body
    end


    private

    def return_json(res)
      JSON.load res
    end

    def payload method, args = ''
      {
          "method": method, 
          "args": args
      }
    end

    def client
      @client ||= RestClient::Resource.new base_url, 'admin', 'adminpw'
    end

    def base_url
      "http://chaincode-rest-api:8080"
    end


  end

end