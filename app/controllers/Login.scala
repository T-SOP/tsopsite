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

object Login extends Controller {

  val CLIENT_ID = "425874550737-rcq17uufrfphfdpl1sjdpb57331cgor4.apps.googleusercontent.com";
  val CLIENT_SECRET = "tB1w4J_r3bJa_bo6vgFiXcS6"
  /**
   * Default HTTP transport to use to make HTTP requests.
   */
  val TRANSPORT: HttpTransport = new NetHttpTransport();
  /**
   * Default JSON factory to use to deserialize JSON.
   */
  val JSON_FACTORY: JacksonFactory = new JacksonFactory();
  
  def login = TODO;



  def connect(state: String) = Action(parse.json) { request =>
  (request.body \ "code").asOpt[String].map { code => {
    try{
      val tokenResponse:GoogleTokenResponse  =
              new GoogleAuthorizationCodeTokenRequest(TRANSPORT, JSON_FACTORY,
                  CLIENT_ID, CLIENT_SECRET, code, "postmessage").execute()
		  println("code is " + code);
          // You can read the Google user ID in the ID token.
          // This sample does not use the user ID.
         val idToken: GoogleIdToken  = tokenResponse.parseIdToken()
         val gplus_id: String  = idToken.getPayload().getUserId()
         println("token is " + tokenResponse.toString())
	  Redirect("/").withSession(
      request.session + ("state" -> state) + ( "token" -> tokenResponse.toString())
    )
    } catch{
      case e: Exception => println("connect error");
  	  Redirect("/").withSession(
      request.session + ("state" -> state)
    )
    }
  }
  }.getOrElse{
    println("code is not yet");
    BadRequest("error");
  }}

  def disconnect = Action { request =>
      request.session.get("token").map { token =>{
      try{
       println("disconnect : " + token);
      val credential: GoogleCredential = new GoogleCredential.Builder()
              .setJsonFactory(JSON_FACTORY)
              .setTransport(TRANSPORT)
              .setClientSecrets(CLIENT_ID, CLIENT_SECRET).build()
              .setFromTokenResponse(JSON_FACTORY.fromString(
                  token, classOf[GoogleTokenResponse]));
          // Execute HTTP GET request to revoke current token.
        val revokeResponse: HttpResponse  = TRANSPORT.createRequestFactory()
              .buildGetRequest(new GenericUrl(
                  "https://accounts.google.com/o/oauth2/revoke?token=" + credential.getAccessToken())).execute();		   
               println("disconnect ok!");
	Redirect("/").withSession(
		request.session - "state" - "token"
	)
             } catch{
                case e: Exception => println("exception caught : " + e); 
 	Redirect("/").withSession(
		request.session - "state" - "token"
	)             }
     } }.getOrElse{
       println("token not yet");
     	Redirect("/").withSession(
		request.session - "state"
	)
      }
  }
}