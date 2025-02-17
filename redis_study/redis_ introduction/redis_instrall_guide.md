도커로 레디스 설치

```shell
docker run --name redis-container -d -p 6379:6379 redis
```

접속

- docker로 설치한 redis접속

```shell
docker ps → container ID확인
docker exec -it <containerID> redis-cli
```

exec

- 도커 실행 옵션

-it \<containerID> redis-cli  
-it : 도커에서 실행중인 containerID 아이디 프로세서에 redis-cli 명령어 전달

- 즉 redis-cli 명령어를 실행
