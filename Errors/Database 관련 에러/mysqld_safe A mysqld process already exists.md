# π μλ‘ 
νλΈλ‘λ₯Ό μ΄μ©ν΄μ mysqlμ μ­μ νκ³  λ€μ μ€μΉνλλ° μλμ κ°μ
μλ¬κ° λ¬λ€.
msql

~~~java
mac@macui-MacBookPro ~ % mysql.server start
Starting MySQL
 SUCCESS! 
mac@macui-MacBookPro ~ % 2022-07-14T07:57:06.6NZ mysqld_safe A mysqld process already exists
~~~
<br>
<br>

# π κ³Όμ 
mysql νλ‘μΈμκ° μ΄μμμ΄μ μ’λ£λ₯Ό ν΄μ£Όμμ§λ§
μ€ν¨..
killall mysqld mysqld_safe
-  νλ‘μΈμ μ’λ£
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

# π ν΄κ²°

λ κ²μμ ν΄λ³΄λ νλΈλ‘λ₯Ό μ€ν ν λ λ κ°μ§ λ°©λ²μΌλ‘ μ€ν ν  μ μμλ€.<br>
ν°λ―Έλμμ "mysql.server start"<br>
νλΈλ‘ λ°λͺ¬ μ€ν "brew services start mysql"<br>
<br>

κ·Έλ¦¬κ³  μ’λ£λ₯Ό ν  λ,<br>
ν°λ―Έλλ‘ μ€ννμ λ  "mysql.server stop" <br>
λ°λͺ¬ μΌλ‘ μ€ν νμ λ  "brew services stop mysql" <br>
μ’λ£ μ€μΌ νλ€κ³  ν΄μ 

"brew services list"λͺλ Ήμ΄λ‘ κ²μμ 
λ°λͺ¬μΌλ‘ mysqlμ΄ μ€ν λκ³  μμλ€.<br>
κ·Έλμ "brew services stop mysql" λͺλ Ήμ΄λ‘ λ°λͺ¬μΌλ‘ μ€νλλ mysqlμ μ’λ£ ν΄ μ£Όμ΄ μ μ€λ₯λ₯Ό ν΄κ²° ν  μ μμλ€.

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

# π μ λ¦¬
mac ν°λ―Έλ μμ mysql μ€νμ  λκ°μ§ λ°©λ²<br>

1. ν°λ―Έλλ‘ μ€ν
- "mysql.server start" -> "mysql.server stop" μΌλ‘ μ’λ£ ν΄μ€λ€
2. νλΈλ‘ λ°λͺ¨λ‘ μ€ν
- "brew services start mysql" -> "brew services stop mysql" μΌλ‘ μ’λ£ν΄ μ€λ€.

λ°λͺ¬μΌλ‘ μ€ν λλ νλ‘κ·Έλ¨ νμΈ νλ λͺλ Ήμ΄
- "brew services list"