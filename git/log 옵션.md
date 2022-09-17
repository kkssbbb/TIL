# log 옵션
### git log -p -2
- -p.  --patch : 각 commit의 수정 결과를 보여주는 diff와 같은 역할을 수행한다.<br>
- -n : 상위  n개(두개)의 commit만 보여준다.

### git log --stat
- --stat :  어떤 파일이 커밋에서 수정되고 변경되었는지, 파일 내 라인이 추가되거나 삭제되었는지 확인한다.

### git log --pretty=oneline
- --pretty=online : 각 commit을 한 줄로 출력한다.

### git log --graph <br>
- -- graph : commit간의 연결된 관계를 아스키 그래프로 출력한다.

### git log -S function_name<br>
- -S: 코드에서 추가되거나 제건된 내용중 특정 텍스트(위에서는 function_name) 가 포함되어 있는지 검사