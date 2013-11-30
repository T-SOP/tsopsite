package controllers

import play.api._
import play.api.mvc._

import play.api.db._
import play.api.Play.current

import anorm._
import anorm.SqlParser._

import com.codahale.jerkson.Json._

object Member extends Controller  {

  def index = Action {

    case class Project( name: String, auther: String, descript: String, imgurl: String );
    
  /**
   * Parse a Computer from a ResultSet
   */
    val simple = {
		  get[String]("Project.name") ~
		  get[String]("Project.auther") ~
		  get[String]("Project.descript") ~
		  get[String]("Project.imgurl") map {
		  case name~auther~descript~imgurl => Project( name, auther, descript, imgurl)
		  }
	  };
    
    var temp = DB.withConnection { implicit connection =>
    	SQL("select name, auther, descript, imgurl from project order by idx").as( simple * );
    }
    
    
    
    Ok( generate(temp) )
    .as("text/json")
  }
  
  
}
