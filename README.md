TSOP 스터디 사이트
========

0. todo
--------

* 로그인 로직
     : 어떻게 User 정보를 받아오고, 다른 controller 이 알아 채는 표준 프로세스
     : 담당 - 봉성주

* Layout 정리 하기
     : 반응형 + 물리엔진 적용
     : controller 정의
          -> TsopMainCtrl - 전체 Layout 총괄
          -> TsopSideCtrl - SideBar 기능 총괄
          -> TsopLoginCtrl - 로그인 정보 표현
          -> 서브 컨텐츠 View 마다 다르게 컨트롤러를 등록 한다.
     : 담당 - 최민기

* Content 만들기
     : DB를 사용 함
     : 담당 - 봉성주

* Member 사진 만들기
     : 파일 기반 -> 링크 기반
     : 담당 - 서병선

** 설계 자료 document/20131108_design.png  참고

1. 사용 기술
--------

UI
* AngularJS  ( Single APP )
* pure CSS

Server

* PlayFrameWork 2 for Scala
* Mysql

2. 서버 정보
--------

play 설치 경로
* /usr/local/play-2.1.2
* /etc/profile 에서 경로 등록 하였음

mysql 설치 경로 및 계정
* /usr/bin/mysql
* 계정 : root  ( 비번은 시스템 계정과 동일 )
* DataBase Name : tsop 

TSOP root 경로
* /usr/local/tsop
     
TSOP 페이지 경로
* http://14.63.214.234:9000/
     
     
3. 업무 분담
--------

1) Layout 전체 ( 매인과 Sub )
* 공통

2) 소개 Page + 로그인 + about
* 서병선

3) 링크 페이지 ( content )
* 봉성주

4) 사진 ( member or photo )
* 최민기

4. 설계 자료 
--------
./document/design 파일 참조
