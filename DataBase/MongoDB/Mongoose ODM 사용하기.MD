## Mongoose ODM 사용 순서

1.	스키마 정의

2.	모델 만들기

3.	데이터베이스 연결

4.	모델 사용

## 스키마 정의

```jsx
const {Schema} = require('mongoose');
const PostSchema = new Schema({
    title: String, //형식을 미리 지정, 데이터 체크 해줌
    constent: String
}, {
    timestamps: true //timestamps 옵션은 생성 수정시간 자동으로 기록 해줌
}});

module.exports = PostSchma;
```

## 모델 만들기
~~~js
const mongoose = require('mongoose');
const PostSchema = require('작성된 스키마 주소')
exports.Post = mogoose.model('Post', PostSchema) //모델의 이름을 지정하여 Populate등에서 해당 이름으로 모델 호출이 가능하다.
~~~
mogoose의 model() 함수로 'Post'라는 이름으로 PostSchema를 만들어 줬다

## 데이터베이스 연결
~~~js
const mongoose = require('mongoose');
const {Post} = require('./modles');

mongoose.connect('mongodb://localhost:1234/app');
~~~
mongoose의 connect함수를 사용하여 데이터 베이스에 연결 가능하다.
mongoose는 자동으로 연결관리해주며, 모델 사용 시 연결 상태를 확인한다.

## 모델 사용
- 작성 된 모델을 사용하여 CRUD를 수행 가능하다.
- mongoose 에서 지원하는 CRUD 함수들이다.

|CRUD|함수명|
|------|---|
|CREATE|create|
|READ|find, findByld, findOne|
|UPDATE|updateOne, updateMany, findByIdAndUpdate, findOneAndUpdate|
|DELETE|deleteOne, deleteMany, findByAndDelete,findOneAndDelete|