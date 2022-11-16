


<img width="1038" alt="image" src="https://user-images.githubusercontent.com/89888075/200133881-47f9cccf-d4c9-4939-b454-cde85c608f39.png">
유저 주문 정보를 조회하기위해 populate를 사용해서 아래코드와 같이 작성 하였는데 위와같은 에러가뜨는이유는뭘까요 url은 알맞게한거같고 파람으로 보내준 유저_id도 디비에 저장되어있는 걸로 요청했습니다. 

## 라우터
```js
//파일명 : user-router.js

//사용자 주문 정보 조회 -승빈 추가
userRouter.get("userOrders/:id", async (req, res, next) => {
  const userId = req.params.id;

  const orderInfo = userService.findUserOrderInfo(userId);

  res.status(200).json({ error: null, data: orderInfo });
});

```
## 서비스
```js
//파일명 : user-service.js
  //사용자 주문 정보 조회 -승빈 추가
  async getUserOrderInfo() {
    const userOrderInfo = await this.userModell.findUserOrderInfo();
    return userOrderInfo;
  }
```

## 모델
```js
//파일명 : user-model.js
  //사용자 주문 정보 조회 -승빈 추가
  async findUserOrderInfo(userId) {
    const userOrderInfo = await User.findById(userId).populate("orderInfo");

    return userOrderInfo;
  }

```

## 스키마
```js
//파일명 : user-schema.js
import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  address: {
    type: new Schema(
      {
        postalCode: String,
        address1: String,
        address2: String,
      },
      {
        _id: false,
      }
    ),
    required: false,
  },

  /* 승빈 추가내용  */
  orderInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "order-schema",
  },
  /* 끝 */
  role: {
    type: String,
    required: false,
    default: "basic-user",
  },
});

export { UserSchema };

```