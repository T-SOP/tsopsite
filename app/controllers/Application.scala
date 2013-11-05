package controllers

import play.api._
import play.api.mvc._

import models.Task

object Application extends Controller {

  val CLIENT_ID = "425874550737-rcq17uufrfphfdpl1sjdpb57331cgor4.apps.googleusercontent.com";
  val CLIENT_SECRET = "tB1w4J_r3bJa_bo6vgFiXcS6"
  def index = Action {
    Ok(views.html.index(CLIENT_ID))
  }
  
  def tasks = Action {
    println(Task.all());

    Ok(views.html.index(CLIENT_ID))
  }

  def newTask = TODO

  def deleteTask(id: Long) = Action {
    Task.delete(id)
    Redirect(routes.Application.tasks)
  }
}
