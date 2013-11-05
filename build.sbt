name := "tsop"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
				jdbc,
				anorm,
				cache,
				"mysql" % "mysql-connector-java" % "5.1.21"
				)     

		requireJs += "main.js"

		requireJsShim += "main.js"


		play.Project.playScalaSettings
