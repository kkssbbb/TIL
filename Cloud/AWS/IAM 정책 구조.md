# AWS IAM(Identity and Access Management)

IAM 은 AWS 리소스에 대한 액세스를 안전하게 관라하기위한 서비스이다.

- AWS 계정 내에서 다른 사용자와 그룹을 만들고, 제한을 할당하거나 제한할 수 있다.
- 누가 어떤 AWS 리소스에 액세스할 수 있는지를 제어할 수 있다.
  - 이를 통해 데이터 유출이나 해킹등의 보안 위협으로부터 AWS 리소스를 보호할 수 있다.

ex) IAM을 사용하여 특정 사용자에게 EC2 인스턴스를 생성하고 관리할 수 있는 권한을 부여할 수 있다.

IAM 은 최소 권한의 원칙을 적용한다

- 사용자가 필요이상으로 권한을주면 비용과 보안 문제가 발생하게떄

<br>
<br>

# IAM 정책 구조

- AWS IAM에서 사용하는 정책문서는 JSON 형식으로 작성된다. 이 문서는 AWS 서비스 및 리소스에 대한 권한을 정의하는 규칙들을 나타낸다.

```json
{
  "Version": "2012-10-17",
	"Id": "S3-Account-Permissions",
  "Statement": [
    {
			"sid" : "1",
      "Effect": "Allow",
			"Principal": ""
      "Action": "s3:*",
      "Resource": [
        "arn:aws:s3:::example-bucket",
        "arn:aws:s3:::example-bucket/*"
      ],
		"Principal": {
        "AWS": "arn:aws:iam::123456789012:user/example-user"
      }
    },
    {
      "Effect": "Allow",
      "Action": [
        "dynamodb:PutItem",
        "dynamodb:GetItem",
        "dynamodb:DeleteItem"
      ],
      "Resource": "arn:aws:dynamodb:us-east-1:123456789012:table/example-table"
    },
    {
      "Effect": "Deny",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::example-bucket",
      "Condition": {
        "IpAddress": {
          "aws:SourceIp": "203.0.113.0/24"
        }
      }
    }
  ]
}
```

<br>
<br>

# Consist of

## version

- JSON 형식의 정책 문서 버전을 나타내는 필드
- AWS에서는 2012년 10월 17일에 정책 문서 버전 1 출시
- 2012-10-17은 현재 사용 가능한 가장 최신버전이다.
  <br>

## Id

- 정책을 식별하는 ID이며 선택사항이다.
  <br>

## Statement[]

- 정책에 포함된 구문들의 배열
  <br>

## Sid(Statement Id)

- Statement를 식별할때 사용하며 선택사항이다.
- Sid 예제

  ```json
  {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Sid": "1",
        "Effect": "Allow",
        "Action": "s3:PutObject",
        "Resource": "arn:aws:s3:::example-bucket/*"
      },
      {
        "Sid": "2",
        "Effect": "Allow",
        "Action": ["dynamodb:GetItem", "dynamodb:PutItem"],
        "Resource": "arn:aws:dynamodb:us-east-1:123456789012:table/example-table"
      }
    ]
  }

  //Sid 1 == 첫번째 State먼트를 식별하는데 사용되는 ID
  //Sid 2 == 첫번째 State먼트를 식별하는데 사용되는 ID
  ```

## Effect

- 구문이 특정 API에 접근하는 걸 혀용할지 거부할지에대한 내용이다.
- 표시가 “Allow”이면 허용 “Deny”면 거부

## Principal

- AWS계정, IAM 사용자, 역할, AWS 서비스 등 , 권한 부여를 받을 수 있는 대상을 의미한다.

```json
{
  "Version": "2012-10-17",Q
  "Statement": [
    {
      "Sid": "1",
      "Effect": "Allow",
      "Action": "s3:PutObject",
      "Resource": "arn:aws:s3:::example-bucket/*",
      "Principal": {
        "AWS": "arn:aws:iam::123456789012:user/example-user"
      }
    }
  ]
}
```

- 위 예시의 Principal은 IAM 사용자 example-user에게 s3:PutObject 작업을 수행할 수 있는 권한을 부여 한다는 의미이다.

## Action

- AWS 리소스에 대해 수행할 수 있는 작업을 나타낸다.
- 단일 작업 또는 여러 작업을 배열 형태로 지정해줄 수 있다.

```json
"Action": [
    "s3:PutObject",
    "s3:GetObject",
    "ec2:StartInstance"
]
```

- 위의 예시에서는 S3 버킷 내 객체 업로드 및 다운로드, EC2 인스턴스 시작에 대한 권한을 부여하는 것이다.
- 이렇게 "Action" 필드를 사용하여 IAM 정책 문서에서 허용 또는 거부할 작업들을 명시함으로써, 보안상 필요한 권한만 부여하고, 불필요한 권한을 막아서 AWS 리소스에 대한 보안을 유지할 수 있다.

## Resource

- 작업이(Action) 수행될 수 있는 AWS 리소스를 지정한다.
- AWS 리소스는 AWS 계정 내의 모든 객체, 데이터, 서비스 등을 포함하며, 리소스 식별자는 각 리소스마다 고유한 Amazon Resource Name(ARN)으로 식별된다.

## Condition

- IAM 정책 문서에서 특정 작업이 수행될 때 필요한 추가적인 조건을 정의하는데 사용된다.
