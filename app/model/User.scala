package models

import anorm._
import anorm.SqlParser._

import play.api.db._
import play.api.Play.current

case class User(name: String, eMail: String);

object User{


}