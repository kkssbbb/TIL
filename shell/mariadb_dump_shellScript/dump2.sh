#!/bin/bash

#오늘 날짜 포맷
today=$(date "+%Y%m%d" )
#실행시간
runTime=$(date)
# "어제날짜"
yesterday=$(date "--date=yesterday" "+%Y-%m-%d")

# 로그 파일 이름
log_file="/home/collector/backup/log/mysqldump_$today.log"

# 백업 파일 이름
backup_file="/home/collector/backup/collector_dump-$yesterday.sql"

# MySQL Dump 실행 - mariaDB는 mysql_config_editor 명령이 없기 때문에, 쉘에서 직접 계정과 패스워드를 입력해
mysqldump -u root -p[비밀번호] [테이블] --where "row_date='$yesterday'" > $backup_file --log-error=$log_file


# 로그 파일에 실행 결과 기록
echo "MySQL Dump 실행 결과" >> $log_file
echo "백업 파일: $backup_file" >> $log_file

# 1년치 로그 삭제
find / -mtime +365 -name 'mysqldump.log' -exec rm -f {} +

# 덤프 파일 압축
gzip $backup_file

# 압축된 파일 이름
compressed_backup_file=`echo $backup_file | sed 's/\.sql/.sql.gz/g'`

# 로그 파일에 압축 결과 기록
echo "실행시간"$runTime >> $log_file
echo "압축 결과" >> $log_file
echo "압축된 파일: $compressed_backup_file" >> $log_file

###
#backup_file z변수에 백업 파일 이름을 지정합니다. 백업 파일 이름은 collector-YYYYMMDD.sql 형식입니다.
#log_file 변수에 로그 파일 이름을 지정합니다. 로그 파일에는 MySQL Dump 실행 결과가 기록됩니다.
#mysqldump 명령을 사용하여 collector 데이터베이스의 모든 테이블을 백업합니다. 백업 파일은 backup_file 변수에 지정된 파일에 저장됩니다.
#log_file 변수에 지정된 로그 파일에 MySQL Dump 실행 결과를 기록합니다.
#find 명령을 사용하여 1년이 지난 mysqldump.log 파일을 모두 삭제합니다.
#gzip 명령을 사용하여 backup_file 파일을 압축합니다. 압축된 파일 이름은 compressed_backup_file 변수에 지정됩니다.
#log_file 변수에 지정된 로그 파일에 압축 결과를 기록합니다.

# 크론탭 매일 0시에 실행 스크립트 
# 0 0 * * 1 root /home/collector/backup/collector_backup.sh