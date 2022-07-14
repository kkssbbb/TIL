# 📌 서론
홈브로를 이용해서 mysql을 삭제하고 다시 설치하는데 아래와 같은
에러가 났다.
msql

~~~java
mac@macui-MacBookPro ~ % mysql.server start
Starting MySQL
 SUCCESS! 
mac@macui-MacBookPro ~ % 2022-07-14T07:57:06.6NZ mysqld_safe A mysqld process already exists
~~~
<br>
<br>

# 📌 과정
mysql 프로세서가 살아있어서 종료를 해주었지만
실패..
killall mysqld mysqld_safe
-  프로세서 종료
ps aux | grep mysqld
killall -9 mysqld mysqld_safe


~~~java
mac@macui-MacBookPro ~ % killall mysqld mysqld_safe
mac@macui-MacBookPro ~ % ps aux | grep mysqld
mac              22669   0.0  0.0 34122884    900 s000  S+    4:58PM   0:00.00 grep mysqld
mac              22666   0.0  2.3 34790872 386592   ??  S     4:57PM   0:00.54 /usr/local/opt/mysql/bin/mysqld --basedir=/usr/local/opt/mysql --datadir=/usr/local/var/mysql --plugin-dir=/usr/local/opt/mysql/lib/plugin --log-error=macui-MacBookPro.local.err --pid-file=macui-MacBookPro.local.pid
mac              22591   0.0  0.0 34127400   ]
mac@macui-MacBookPro ~ % killall -9 mysqld mysqld_safe
mac@macui-MacBookPro ~ % killall mysqld mysqld_safe   
mac@macui-MacBookPro ~ % mysql.server start
Starting MySQL
 SUCCESS! 
mac@macui-MacBookPro ~ % 2022-07-14T07:59:03.6NZ mysqld_safe A mysqld process already exists
~~~

<br>
<br>

# 📌 해결

더 검색을 해보니 홈브로를 실행 할때 두 가지 방법으로 실행 할 수 있었다.<br>
터미널에서 "mysql.server start"<br>
홈브로 데몬 실행 "brew services start mysql"<br>
<br>

그리고 종료를 할 땐,<br>
터미널로 실행했을 때  "mysql.server stop" <br>
데몬 으로 실행 했을 때  "brew services stop mysql" <br>
종료 줘야 한다고 해서 

"brew services list"명령어로 검색시 
데몬으로 mysql이 실행 되고 있었다.<br>
그래서 "brew services stop mysql" 명령어로 데몬으로 실행되던 mysql을 종료 해 주어 위 오류를 해결 할 수 있었다.

~~~java
brew services list
Name  Status  User File
mysql started mac  ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist

mac@macui-MacBookPro ~ % brew services stop mysql
Stopping `mysql`... (might take a while)
==> Successfully stopped `mysql` (label: homebrew.mxcl.mysql)

mac@macui-MacBookPro ~ % mysql.server start 
Starting MySQL
. SUCCESS! 
~~~

<br>
<br>

# 📌 정리
mac 터미널 에서 mysql 실행시  두가지 방법<br>

1. 터미널로 실행
- "mysql.server start" -> "mysql.server stop" 으로 종료 해준다
2. 홈브로 데모로 실행
- "brew services start mysql" -> "brew services stop mysql" 으로 종료해 준다.

데몬으로 실행 되는 프로그램 확인 하는 명령어
- "brew services list"