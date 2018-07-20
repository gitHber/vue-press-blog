# linux安装mysql 5.*
> 官网安装教程: [使用通用二进制文件在Unix / Linux上安装MySQL](https://dev.mysql.com/doc/refman/5.7/en/binary-installation.html)

1. 下载安装包([5.7源码下载地址](https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.21-linux-glibc2.12-x86_64.tar.gz))
> 需要其他版本请官网自行下载
![image](https://img-blog.csdn.net/20180410120006330?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIyNjcyMjkx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
---
2. 安装

* 创建用户组和用户，赋权，解压
```
shell> groupadd mysql  
shell> useradd -r -g mysql -s /bin/false mysql  
shell> cd /usr/local  
shell> tar zxvf /path/to/mysql-VERSION-OS.tar.gz  
shell> ln -s full-path-to-mysql-VERSION-OS mysql  
shell> cd mysql  
shell> mkdir mysql-files  
shell> chown mysql:mysql mysql-files  
shell> chmod 750 mysql-files  
```
* 安装
```
shell> bin/mysqld --initialize --user=mysql   
shell> bin/mysql_ssl_rsa_setup                
shell> bin/mysqld_safe --user=mysql &  
# Next command is optional  
shell> cp support-files/mysql.server /etc/init.d/mysql.server 
```
> 执行bin/mysqld --initialize --user=mysql 生成的随机密码请记住，之后第一次登陆要用
![image](https://img-blog.csdn.net/20180410124255775?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIyNjcyMjkx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
* 启动服务
```
shell> service mysql restart  
```
**如果报错**
![image](https://img-blog.csdn.net/20180410120955481?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIyNjcyMjkx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
执行
```
shell> systemctl deamon-reload  
shell> service mysql restart
```
* 修改密码
```
shell> cd mysql/bin 
shell> ./mysql -uroot -p   
    enter password: （输入刚刚生成的密码）  
    mysql> set password for root@localhost=password('new password')  
```
#### 安装完成，其他安装方式请查看[官网安装教程](https://dev.mysql.com/doc/refman/5.7/en/preface.html)