class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

  #def new
  #end

  def create
    post = Post.create(content: params[:content])
    render json: { post: post } #変数postの値をpostというキーとセットでJavascriptに送信
  end
end
