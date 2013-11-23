package models

import anorm._
import anorm.SqlParser._

import play.api.db._
import play.api.Play.current


case class User(id: Long, eMail: String)

object User {

  val user = {
    get[Long]("id") ~
    get[String]("eMail") map {
      case id~eMail =>User(id,eMail)
    }
  }

}
