package controllers

import play.api._
import play.api.mvc._

import com.google.api.client.auth.oauth2.TokenResponseException;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeTokenRequest;
import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleTokenResponse;
import com.google.api.client.http.GenericUrl;
import com.google.api.client.http.HttpResponse;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.jackson.JacksonFactory;
import com.google.api.services.oauth2.Oauth2;
import com.google.api.services.oauth2.model.Tokeninfo;
import com.google.api.services.plus.Plus;
import com.google.api.services.plus.model.PeopleFeed;
import com.google.gson.Gson;

//import play.api.libs.json;
import java.math.BigInteger;
import java.security.SecureRandom;

import models.User

import models.Task
import securesocial.core.{Identity, Authorization}

object Application extends Controller with securesocial.core.SecureSocial {

  val CLIENT_ID = "425874550737-rcq17uufrfphfdpl1sjdpb57331cgor4.apps.googleusercontent.com";
  val CLIENT_SECRET = "tB1w4J_r3bJa_bo6vgFiXcS6"
  /**
   * Default HTTP transport to use to make HTTP requests.
   */

  def index = Action { request =>
  request.session.get("token").map { token =>{
    val state: String = new BigInteger(130, new SecureRandom()).toString(32);
   	println(state);Ok(views.html.index(CLIENT_ID , true , state )).withSession(
      request.session + ("state" -> state)
    )
  }
  }.getOrElse {
    println("token not yet");
    val state: String = new BigInteger(130, new SecureRandom()).toString(32);
    Ok(views.html.index(CLIENT_ID , false , state )).withSession(
      request.session + ("state" -> state)
    )
  }
	  
  }
  
}
// An Authorization implementation that only authorizes uses that logged in using twitter
case class WithProvider(provider: String) extends Authorization {
  def isAuthorized(user: Identity) = {
    user.identityId.providerId == provider
  }
}
