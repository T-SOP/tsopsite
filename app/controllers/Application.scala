package controllers

import play.api._
import play.api.mvc._

import models.Task
import models.User

import securesocial.core.{Identity, Authorization}

object Application extends Controller with securesocial.core.SecureSocial {

  val CLIENT_ID = "425874550737-rcq17uufrfphfdpl1sjdpb57331cgor4.apps.googleusercontent.com";
  val CLIENT_SECRET = "tB1w4J_r3bJa_bo6vgFiXcS6"

  def index = Action { implicit request =>
	  request.session.get("user").map { user =>
	  	Ok(views.html.index(CLIENT_ID , new User(user,"")))
	  }.getOrElse {
		Ok(views.html.index(CLIENT_ID , new User("" , "")))
	  }
  }
  
  def onepage_index = Action{ 
    Ok( views.html.onepage_index("test","test") );
  }


  // Session Clear Page
  def sessionclear = Action { request =>

//	Ok("bye").withNewSession

	Redirect("/").withNewSession

  }
  
  /*
  def tasks = Action {
    println(Task.all());

    Ok(views.html.index(CLIENT_ID))
  }

  def newTask = TODO

  def deleteTask(id: Long) = Action {
    Task.delete(id)
    Redirect(routes.Application.tasks)
  }
  
  // Login page
  def loginPage = Action {
    
    Ok( views.html.login() );
    //request => Ok( "haha " + request );
    
  }
  */ 
}
// An Authorization implementation that only authorizes uses that logged in using twitter
case class WithProvider(provider: String) extends Authorization {
  def isAuthorized(user: Identity) = {
    user.identityId.providerId == provider
  }
}
