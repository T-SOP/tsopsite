import sbt._
import Keys._
import play.Project._

object ApplicationBuild extends Build {

    val appName         = "ssdemo-scala"
    val appVersion      = "1.0"
      
    val mandubianRepo = Seq(
	    "Mandubian repository snapshots" at "https://github.com/mandubian/mandubian-mvn/raw/master/snapshots/",
	    "Mandubian repository releases" at "https://github.com/mandubian/mandubian-mvn/raw/master/releases/"
    )

    val appDependencies = Seq(
    //"play"        %% "play-json" % "2.2-SNAPSHOT",
	    "com.cloudphysics" % "jerkson_2.10" % "0.6.3",
		"securesocial" %% "securesocial" % "2.1.2",
		"mysql" % "mysql-connector-java" % "5.1.26"
    )
    val main = play.Project(appName, appVersion, appDependencies).settings(
        
        resolvers ++= Seq(
        	"Codahale" at "http://repo.codahale.com",
            "sbt-plugin-releases" at "http://repo.scala-sbt.org/scalasbt/sbt-plugin-releases/",
            "Mandubian repository snapshots" at "https://github.com/mandubian/mandubian-mvn/raw/master/snapshots/",
            "Mandubian repository releases" at "https://github.com/mandubian/mandubian-mvn/raw/master/releases/"
        				)
        /*
        {
	      resolvers += Resolver.url("sbt-plugin-releases", new URL("http://repo.scala-sbt.org/scalasbt/sbt-plugin-releases/"))(Resolver.ivyStylePatterns)
	      resolvers += Resolver.url("Mandubian repository snapshots", new URL("https://github.com/mandubian/mandubian-mvn/raw/master/snapshots/"))(Resolver.ivyStylePatterns)
	      resolvers += Resolver.url("Mandubian repository releases", new URL("https://github.com/mandubian/mandubian-mvn/raw/master/releases/"))(Resolver.ivyStylePatterns)
	      resolvers
        }
        */
    )
}
