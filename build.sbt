name := "tsop"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache
)     

requireJs += "main.js"

requireJsShim += "main.js"


play.Project.playScalaSettings
