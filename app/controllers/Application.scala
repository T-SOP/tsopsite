package controllers

import play.api._
import play.api.mvc._

import models.Task
import securesocial.core.{Identity, Authorization}

object Application extends Controller with securesocial.core.SecureSocial {

  val CLIENT_ID = "425874550737-rcq17uufrfphfdpl1sjdpb57331cgor4.apps.googleusercontent.com";
  val CLIENT_SECRET = "tB1w4J_r3bJa_bo6vgFiXcS6"

  def index = Action { request =>
   
request.session.get("username").map { username =>
  	Ok(views.html.index(CLIENT_ID, "" + username ))
  }.getOrElse {
	Ok(views.html.index(CLIENT_ID, "" ))
  }
	  
  }


  // Session Clear Page
  def sessionclear = Action { request =>

//	Ok("bye").withNewSession

	Redirect(routes.Application.default()).withNewSession

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
  * */ 
}
// An Authorization implementation that only authorizes uses that logged in using twitter
case class WithProvider(provider: String) extends Authorization {
  def isAuthorized(user: Identity) = {
    user.identityId.providerId == provider
  }
}
