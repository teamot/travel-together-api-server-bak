## 목차

- [Resources](#resources)
  - [TravelRoom](#travelroom)
  - [User](#user)
  - [Setting](#setting)
  - [SimpleNotice](#simplenotice)
  - [Notice](#notice)
  - [Plan](#plan)
  - [Place](#place)
- [1. Travel Rooms API](#1-travel-rooms-api)
  - [1.1 여행방 리스트 조회](#11-여행방-리스트-조회)
    - [1.1.1 설명](#111-설명)
    - [1.1.2 Endpoint](#112-endpoint)
    - [1.1.3 요청-응답 정보](#113-요청-응답-정보)
  - [1.2 새로운 여행방 개설](#12-새로운-여행방-개설)
    - [1.2.1 설명](#121-설명)
    - [1.2.2 Endpoint](#122-endpoint)
    - [1.2.3 요청-응답 정보](#123-요청-응답-정보)
  - [1.3 여행방 퇴장](#13-여행방-퇴장)
    - [1.3.1 설명](#131-설명)
    - [1.3.2 Endpoint](#132-endpoint)
    - [1.3.3 요청-응답 정보](#133-요청-응답-정보)
  - [1.4 여행방 정보 수정](#14-여행방-정보-수정)
    - [1.4.1 설명](#141-설명)
    - [1.4.2 Endpoint](#142-endpoint)
    - [1.4.3 요청-응답 정보](#143-요청-응답-정보)
  - [1.5 나만의 여행방 커버 이미지 설정](#15-나만의-여행방-커버-이미지-설정)
    - [1.5.1 설명](#151-설명)
    - [1.5.2 Endpoint](#152-endpoint)
    - [1.5.3 요청-응답 정보](#153-요청-응답-정보)
  - [1.6 여행방 멤버 리스트 조회](#16-여행방-멤버-리스트-조회)
    - [1.6.1 설명](#161-설명)
    - [1.6.2 Endpoint](#162-endpoint)
    - [1.6.3 요청-응답 정보](#163-요청-응답-정보)
  - [1.7 여행방에 멤버 초대](#17-여행방에-멤버-초대)
    - [1.7.1 설명](#171-설명)
    - [1.7.2 Endpoint](#172-endpoint)
    - [1.7.3 요청-응답 정보](#173-요청-응답-정보)
  - [1.8 여행방 입장](#18-여행방-입장)
    - [1.8.1 설명](#181-설명)
    - [1.8.2 Endpoint](#182-endpoint)
    - [1.8.3 요청-응답 정보](#183-요청-응답-정보)
  - [1.9 여행방 공지사항 리스트 조회](#19-여행방-공지사항-리스트-조회)
    - [1.9.1 설명](#191-설명)
    - [1.9.2 Endpoint](#192-endpoint)
    - [1.9.3 요청-응답 정보](#193-요청-응답-정보)
  - [1.10 여행방 일정 조회](#110-여행방-일정-조회)
    - [1.10.1 설명](#1101-설명)
    - [1.10.2 Endpoint](#1102-endpoint)
    - [1.10.3 요청-응답 정보](#1103-요청-응답-정보)
  - [1.11 상세 계획 등록](#111-상세-계획-등록)
    - [1.11.1 설명](#1111-설명)
    - [1.11.2 Endpoint](#1112-endpoint)
    - [1.11.3 요청-응답 정보](#1113-요청-응답-정보)
  - [1.12 상세 계획 순서 변경](#112-상세-계획-순서-변경)
    - [1.12.1 설명](#1121-설명)
    - [1.12.2 Endpoint](#1122-endpoint)
    - [1.12.3 요청-응답 정보](#1123-요청-응답-정보)
- [2. Plans API](#2-plans-api)
  - [2.1 상세 계획 수정](#21-상세-계획-수정)
    - [2.1.1 설명](#211-설명)
    - [2.1.2 Endpoint](#212-endpoint)
    - [2.1.3 요청-응답 정보](#213-요청-응답-정보)
  - [2.3 상세 일정 삭제(비활성화)](#23-상세-일정-삭제비활성화)
    - [2.3.1 설명](#231-설명)
    - [2.3.2 Endpoint](#232-endpoint)
    - [2.3.3 요청-응답 정보](#233-요청-응답-정보)
- [3. Notices API](#3-notices-api)
  - [3.1 공지사항 상세 조회](#31-공지사항-상세-조회)
    - [3.1.1 설명](#311-설명)
    - [3.1.2 Endpoint](#312-endpoint)
    - [3.1.3 요청-응답 정보](#313-요청-응답-정보)
- [4. Users API](#4-users-api)
  - [4.1 유저 프로필 상세 조회](#41-유저-프로필-상세-조회)
    - [4.1.1 설명](#411-설명)
    - [4.1.2 Endpoint](#412-endpoint)
    - [4.1.3 요청-응답 정보](#413-요청-응답-정보)
  - [4.2 내 프로필 상세 조회](#42-내-프로필-상세-조회)
    - [4.2.1 설명](#421-설명)
    - [4.2.2 Endpoint](#422-endpoint)
    - [4.2.3 요청-응답 정보](#423-요청-응답-정보)
  - [4.3 내 프로필 수정](#43-내-프로필-수정)
    - [4.3.1 설명](#431-설명)
    - [4.3.2 Endpoint](#432-endpoint)
    - [4.3.3 요청-응답 정보](#433-요청-응답-정보)
  - [4.4 내 설정 조회](#44-내-설정-조회)
    - [4.4.1 설명](#441-설명)
    - [4.4.2 Endpoint](#442-endpoint)
    - [4.4.3 요청-응답 정보](#443-요청-응답-정보)
  - [4.5 내 설정 변경](#45-내-설정-변경)
    - [4.5.1 설명](#451-설명)
    - [4.5.2 Endpoint](#452-endpoint)
    - [4.5.3 요청-응답 정보](#453-요청-응답-정보)

# Resources

## TravelRoom

| Path        | Type   | 설명                                                                  | Constraints         | Optional |
| ----------- | ------ | --------------------------------------------------------------------- | ------------------- | -------- |
| id          | String | 여행방 아이디                                                         |                     | false    |
| name        | String | 여행방 이름                                                           | 길이는 1이상 63이하 | false    |
| memberCount | Int    | 소속 된 멤버 수                                                       | 0 이상 정수         | false    |
| firstDate   | String | 여행 시작 일. UTC시간을 ISO8601 포맷으로 일 단위 까지 표시            |                     | false    |
| lastDate    | String | 여행 마지막 일. UTC시간을 ISO8601 포맷으로 일 단위 까지 표시          |                     | false    |
| ThumbUri    | String | 커버 이미지 uri                                                       |                     | true     |
| created     | String | 여행방 생성 일시. UTC 시간을 ISO8601 포맷으로 밀리세컨드까지 표시     |                     | false    |
| updated     | String | 여행방 업데이트 일시. UTC 시간을 ISO8601 포맷으로 밀리세컨드까지 표시 |                     | false    |

## User

| Path       | Type     | 설명                   | Constraints         | Optional |
| ---------- | -------- | ---------------------- | ------------------- | -------- |
| id         | Int      | 사용자 아이디          |                     | false    |
| username   | String   | 사용자 이름            | 길이는 0이상 63이하 | false    |
| pictureUri | String   | 프로필 이미지 요청 uri |                     | true     |
| location   | [String] | 사는 곳                |                     | false    |
| tags       | [String] | 사용자 해시태그        |                     | false    |

## Setting

| Path     | Type    | 설명                               | Constraints | Optional |
| -------- | ------- | ---------------------------------- | ----------- | -------- |
| showTime | boolean | 일정 시간 표시 여부. 기본 값 false |             | false    |

## SimpleNotice

| Path    | Type     | 설명                 | Constraints         | Optional |
| ------- | -------- | -------------------- | ------------------- | -------- |
| id      | Int      | 공지사항 아이디      |                     | false    |
| author  | User     | 작성자 정보          |                     | false    |
| title   | String   | 제목                 | 길이는 0이상 63이하 | false    |
| tags    | [String] | 태그                 |                     | false    |
| created | String   | 최초 등록 일시       |                     | false    |
| updated | String   | 마지막 업데이트 일시 |                     | false    |

## Notice

| Path    | Type     | 설명                 | Constraints         | Optional |
| ------- | -------- | -------------------- | ------------------- | -------- |
| id      | Int      | 공지사항 아이디      |                     | false    |
| author  | User     | 작성자 정보          |                     | false    |
| title   | String   | 제목                 | 길이는 0이상 63이하 | false    |
| content | String   | 내용                 |                     | false    |
| tags    | [String] | 태그                 |                     | false    |
| created | String   | 최초 등록 일시       |                     | false    |
| updated | String   | 마지막 업데이트 일시 |                     | false    |

## Plan

| Path      | Type     | 설명                | Constraints | Optional |
| --------- | -------- | ------------------- | ----------- | -------- |
| id        | Int      | 계획 아이디         |             | false    |
| date      | String   | 예정 일(시)         |             | false    |
| timeSet   | Boolean  | 예정 시간 표시 여부 |             | false    |
| name      | String   | 공지사항 아이디     |             | false    |
| photoUris | [String] | 공지사항 아이디     |             | false    |
| place     | String   | 공지사항 아이디     |             | false    |
| memo      | String   | 공지사항 아이디     |             | false    |

## Place

| Path | Type | 설명 | Constraints | Optional |
| ---- | ---- | ---- | ----------- | -------- |


# 1. Travel Rooms API

## 1.1 여행방 리스트 조회

### 1.1.1 설명

사용자가 소속되어있는 모든 여행방 리스트를 조회한다.

### 1.1.2 Endpoint

`GET /api/v1/travel-rooms`

### 1.1.3 요청-응답 정보

#### 요청

**헤더**  
없음

**경로 파라미터**  
없음

**쿼리 파라미터**

| Parameter | 설명                                                                                                                 | Value |
| --------- | -------------------------------------------------------------------------------------------------------------------- | ----- |
| finished  | true이면 완료된 여행방만 조회하고 false이면 완료되지 않은 여행방만 조회한다. 지정하지 않으면 모든 여행방을 조회한다. | true  |  | false |

**페이로드**  
없음

#### 응답

**헤더**

| Name         | 설명             |
| ------------ | ---------------- |
| Content-Type | application/json |

**페이로드**

| Path            | Type   | 설명                                                                  | Constraints         | Optional |
| --------------- | ------ | --------------------------------------------------------------------- | ------------------- | -------- |
| [i].id          | String | 여행방 아이디                                                         |                     | false    |
| [i].name        | String | 여행방 이름                                                           | 길이는 1이상 63이하 | false    |
| [i].memberCount | Int    | 소속 된 멤버 수                                                       | 0 이상 정수         | false    |
| [i].firstDate   | String | 여행 시작 일. UTC시간을 ISO8601 포맷으로 일 단위 까지 표시            |                     | false    |
| [i].lastDate    | String | 여행 마지막 일. UTC시간을 ISO8601 포맷으로 일 단위 까지 표시          |                     | false    |
| [i].thumbUri    | String | 커버 이미지 uri                                                       |                     | true     |
| [i].created     | String | 여행방 생성 일시. UTC 시간을 ISO8601 포맷으로 밀리세컨드까지 표시     |                     | false    |
| [i].updated     | String | 여행방 업데이트 일시. UTC 시간을 ISO8601 포맷으로 밀리세컨드까지 표시 |                     | false    |

#### 요청 예시

```
GET /api/v1/travel-rooms?finished=false
```

#### 응답 예시

```
200 OK
Content-Type application/json

[
  {
    id: 13,
    name: "일본 여행"
    memberCount: 4,
    firstDate: "2020-01-01",
    lastDate: "2020-01-10",
    thumbUri: https://s3.aws.wt/travel-rooms/thumbs/13.png
    created: "2019-10-21"
    updated: "2019-10-25"
  },
  {
    id: 21,
    name: "중국 여행"
    memberCount: 3,
    firstDate: "2020-02-13",
    lastDate: "2020-02-21",
    thumbUri: https://s3.aws.wt/travel-rooms/thumbs/21.png
    created: "2019-09-02"
    updated: "2019-09-02"
  }
]
```

## 1.2 새로운 여행방 개설

### 1.2.1 설명

새로운 여행방을 개설한다.

### 1.2.2 Endpoint

`POST /api/v1/travel-rooms`

### 1.2.3 요청-응답 정보

#### 요청

**헤더**

| Name         | 설명                |
| ------------ | ------------------- |
| Content-Type | multipart/form-data |

**경로 파라미터**  
없음

**쿼리 파라미터**  
없음

**페이로드**

| Path      | Type   | 설명                                                         | Constraints         | Optional |
| --------- | ------ | ------------------------------------------------------------ | ------------------- | -------- |
| name      | String | 여행방 이름                                                  | 길이는 1이상 63이하 | false    |
| firstDate | String | 여행 시작 일. UTC시간을 ISO8601 포맷으로 일 단위 까지 표시   |                     | false    |
| lastDate  | String | 여행 마지막 일. UTC시간을 ISO8601 포맷으로 일 단위 까지 표시 |                     | false    |
| thumb     | binary | 여행방 썸네일 이미지                                         |                     | true     |

#### 응답

**헤더**

| Name         | 설명             |
| ------------ | ---------------- |
| Content-Type | application/json |

**페이로드**

| Path        | Type   | 설명                                                                  | Constraints         | Optional |
| ----------- | ------ | --------------------------------------------------------------------- | ------------------- | -------- |
| id          | String | 여행방 아이디                                                         |                     | false    |
| name        | String | 여행방 이름                                                           | 길이는 1이상 63이하 | false    |
| memberCount | Int    | 소속 된 멤버 수                                                       | 0 이상 정수         | false    |
| firstDate   | String | 여행 시작 일. UTC시간을 ISO8601 포맷으로 일 단위 까지 표시            |                     | false    |
| lastDate    | String | 여행 마지막 일. UTC시간을 ISO8601 포맷으로 일 단위 까지 표시          |                     | false    |
| thumbUri    | String | 커버 이미지 uri                                                       |                     | true     |
| created     | String | 여행방 생성 일시. UTC 시간을 ISO8601 포맷으로 밀리세컨드까지 표시     |                     | false    |
| updated     | String | 여행방 업데이트 일시. UTC 시간을 ISO8601 포맷으로 밀리세컨드까지 표시 |                     | false    |

#### 요청 예시

```
POST /api/v1/travel-rooms
Content-Type: multipart/form-data

name: "일본 여행",
firstDate: "2020-01-01",
lastDate: "2020-01-10",
thumb: (binary)
```

#### 응답 예시

```
201 OK
Content-Type application/json

{
  id: 13,
  name: "일본 여행",
  memberCount: 1,
  firstDate: "2020-01-01",
  lastDate: "2020-01-10",
  thumbUri: https://s3.aws.wt/travel-rooms/thumbs/13.png
  created: "2019-10-21"
  updated: "2019-10-21"
}
```

## 1.3 여행방 퇴장

### 1.3.1 설명

특정 여행방에서 퇴장한다.

### 1.3.2 Endpoint

`DELETE /api/v1/travel-rooms/{id}/me`

### 1.3.3 요청-응답 정보

#### 요청

**헤더**

없음

**경로 파라미터**

| Parameter | 설명          |
| --------- | ------------- |
| id        | 여행방 아이디 |

**쿼리 파라미터**  
없음

**페이로드**

없음

#### 응답

**헤더**

없음

**페이로드**

없음

#### 요청 예시

```
DELETE /api/v1/travel-rooms
```

#### 응답 예시

```
204 No Content
```

## 1.4 여행방 정보 수정

### 1.4.1 설명

특정 여행방의 정보를 수정한다.
변경된 데이터로 요청하고 수정된 여행방 정보를 응답한다.

### 1.4.2 Endpoint

`PUT /api/v1/travel-rooms/{id}`

### 1.4.3 요청-응답 정보

#### 요청

**헤더**

| Name         | 설명                |
| ------------ | ------------------- |
| Content-Type | multipart/form-data |

**경로 파라미터**

| Parameter | 설명          |
| --------- | ------------- |
| id        | 여행방 아이디 |

**쿼리 파라미터**  
없음

**페이로드**

| Path         | Type    | 설명                                                         | Constraints         | Optional |
| ------------ | ------- | ------------------------------------------------------------ | ------------------- | -------- |
| name         | String  | 여행방 이름                                                  | 길이는 1이상 63이하 | false    |
| firstDate    | String  | 여행 시작 일. UTC시간을 ISO8601 포맷으로 일 단위 까지 표시   |                     | false    |
| lastDate     | String  | 여행 마지막 일. UTC시간을 ISO8601 포맷으로 일 단위 까지 표시 |                     | false    |
| thumb        | binary  | 여행방 썸네일 이미지                                         |                     | true     |
| thumbUpdated | boolean | 여행방 썸네일 이미지 업데이트 여부                           |                     | false    |

#### 응답

**헤더**

| Name         | 설명             |
| ------------ | ---------------- |
| Content-Type | application/json |

**페이로드**

| Path        | Type   | 설명                                                                  | Constraints         | Optional |
| ----------- | ------ | --------------------------------------------------------------------- | ------------------- | -------- |
| id          | String | 여행방 아이디                                                         |                     | false    |
| name        | String | 여행방 이름                                                           | 길이는 1이상 63이하 | false    |
| memberCount | Int    | 소속 된 멤버 수                                                       | 0 이상 정수         | false    |
| firstDate   | String | 여행 시작 일. UTC시간을 ISO8601 포맷으로 일 단위 까지 표시            |                     | false    |
| lastDate    | String | 여행 마지막 일. UTC시간을 ISO8601 포맷으로 일 단위 까지 표시          |                     | false    |
| ThumbUri    | String | 커버 이미지 uri                                                       |                     | true     |
| created     | String | 여행방 생성 일시. UTC 시간을 ISO8601 포맷으로 밀리세컨드까지 표시     |                     | false    |
| updated     | String | 여행방 업데이트 일시. UTC 시간을 ISO8601 포맷으로 밀리세컨드까지 표시 |                     | false    |

#### 요청 예시

```
PUT /api/v1/travel-rooms/13
Content-Type: multipart/form-data

name: "일본 여행",
firstDate: "2020-01-01",
lastDate: "2020-01-13",
thumb: (binary),
thumbUpdated: true
```

#### 응답 예시

```
200 OK
Content-Type application/json

{
  id: 13,
  name: "일본 여행",
  memberCount: 3,
  firstDate: "2020-01-01",
  lastDate: "2020-01-13",
  thumbUri: https://s3.aws.wt/travel-rooms/thumbs/13.png
  created: "2019-10-21"
  updated: "2019-10-23"
}
```

`PUT /api/v1/travel-rooms/{id}/my-cover-image`
여행방 개인 커버 이미지 등록 / 수정

## 1.5 나만의 여행방 커버 이미지 설정

### 1.5.1 설명

여행방의 나만의 썸네일 이미지를 변경한다. 등록된 이미지는 등록한 사용자에게만 보인다. 나만의 썸네일이 등록되어있지 않은 경우, 여행방 공식 썸네일 이미지를 보여준다.
이미지 데이터를 요청하고 이미지 요청 uri를 응답한다.

### 1.5.2 Endpoint

`PUT /api/v1/travel-rooms/{id}/my-cover-image`

### 1.5.3 요청-응답 정보

#### 요청

**헤더**

| Name         | 설명                |
| ------------ | ------------------- |
| Content-Type | multipart/form-data |

**경로 파라미터**

| Parameter | 설명          |
| --------- | ------------- |
| id        | 여행방 아이디 |

**쿼리 파라미터**

없음

**페이로드**

| Path  | Type   | 설명                                                                                        | Constraints | Optional |
| ----- | ------ | ------------------------------------------------------------------------------------------- | ----------- | -------- |
| thumb | binary | 변경할 나만의 썸네일 이미지. 이미지 데이터가 존재하지 않을 경우(null) 기본 이미지로 변경함. |             | false    |

#### 응답

**헤더**

| Name         | 설명             |
| ------------ | ---------------- |
| Content-Type | application/json |

**페이로드**

| Path     | Type   | 설명            | Constraints | Optional |
| -------- | ------ | --------------- | ----------- | -------- |
| thumbUri | string | 커버 이미지 uri |             | false    |

#### 요청 예시

```
PUT /api/v1/travel-rooms/13/my-cover-image

{
  thumb: (binary)
}
```

#### 응답 예시

```
200 OK
Content-Type application/json

{
  thumbUri: https://s3.aws.wt/travel-rooms/thumbs/13/user-162.png
}
```

## 1.6 여행방 멤버 리스트 조회

### 1.6.1 설명

특정 여행방의 멤버 리스트를 조회한다. 사용자가 소속되어있는 여행방에 대해서만 권한이 있다.
각 멤버의 기본 정보(아이디, 이름, 해시태그, 프로필 이미지)를 응답한다.

### 1.6.2 Endpoint

`GET /api/v1/travel-rooms/{id}/members`

### 1.6.3 요청-응답 정보

#### 요청

**헤더**

없음

**경로 파라미터**

| Parameter | 설명          |
| --------- | ------------- |
| id        | 여행방 아이디 |

**쿼리 파라미터**

| Parameter | 설명                                                       |
| --------- | ---------------------------------------------------------- |
| orderBy   | 정렬 대상이 되는 항목 이름. "word" 중 하나의 값을 가짐     |
| orderDir  | 오름차순, 내림차순 여부. "asc", "desc" 중 하나의 값을 가짐 |

**페이로드**

없음

#### 응답

**헤더**

| Name         | 설명             |
| ------------ | ---------------- |
| Content-Type | application/json |

**페이로드**

| Path           | Type     | 설명                   | Constraints         | Optional |
| -------------- | -------- | ---------------------- | ------------------- | -------- |
| [i].id         | Int      | 사용자 아이디          |                     | false    |
| [i].username   | String   | 사용자 이름            | 길이는 0이상 63이하 | false    |
| [i].pictureUri | String   | 프로필 이미지 요청 uri |                     | true     |
| [i].location   | [String] | 사는 곳                |                     | false    |
| [i].tags       | [String] | 사용자 해시태그        |                     | false    |

#### 요청 예시

```
GET /api/v1/travel-rooms/{id}/members?orderBy=word&orderDir=asc
```

#### 응답 예시

```
200 OK
Content-Type application/json

[
  {
    id: 257,
    username: "김예지"
    tags: ["태그1", "태그2"],
    location: ["서울시","서대문구"],
    pictureUri: "https://s3.aws.wt/users/257/profile.png"
  },
  {
    id: 121,
    username: "김정우"
    tags: [],
    location: ["서울시","동대문구"],
    pictureUri: "https://s3.aws.wt/users/121/profile.png"
  },
  {
    id: 548,
    username: "정연희"
    tags: ["태그1", "태그2", "태그3", "태그4"],
    location: ["경기도","구리시"],
    pictureUri: "https://s3.aws.wt/users/548/profile.png"
  },
]
```

## 1.7 여행방에 멤버 초대

### 1.7.1 설명

특정 여행방에 특정 멤버를 초대(등록)한다. 사용자가 소속되어있는 여행방에 대해서만 권한이 있다.
(요청 수락하는 페이지의 URI??, 카카오톡에서 애플리케이션으로 이동하게 하려면??)를 응답한다.

### 1.7.2 Endpoint

`POST /api/v1/travel-rooms/{id}/invite/members`

### 1.7.3 요청-응답 정보

#### 요청

**헤더**

| Name         | 설명                  |
| ------------ | --------------------- |
| Content-Type | x-www-form-urlencoded |

**경로 파라미터**

| Parameter | 설명          |
| --------- | ------------- |
| id        | 여행방 아이디 |

**쿼리 파라미터**

없음

**페이로드**

| Parameter | 설명   |
| --------- | ------ |
| _미정_    | _미정_ |

#### 응답

**헤더**

| Name         | 설명             |
| ------------ | ---------------- |
| Content-Type | application/json |

**페이로드**

| Path           | Type     | 설명                   | Constraints         | Optional |
| -------------- | -------- | ---------------------- | ------------------- | -------- |
| [i].id         | Int      | 사용자 아이디          |                     | false    |
| [i].username   | String   | 사용자 이름            | 길이는 0이상 63이하 | false    |
| [i].pictureUri | String   | 프로필 이미지 요청 uri |                     | true     |
| [i].location   | [String] | 사용자 해시태그        |                     | false    |
| [i].tags       | [String] | 사용자 해시태그        |                     | false    |

#### 요청 예시

```
GET /api/v1/travel-rooms/{id}/invite/members?orderBy=word&orderDir=asc
```

#### 응답 예시

```
200 OK
Content-Type application/json

[
  {
    id: 257,
    name: "김예지"
    tags: ["태그1", "태그2"],
    pictureUri: "https://s3.aws.wt/users/257/profile.png"
  },
  {
    id: 121,
    name: "김정우"
    tags: [],
    pictureUri: "https://s3.aws.wt/users/121/profile.png"
  },
  {
    id: 548,
    name: "정연희"
    tags: ["태그1", "태그2", "태그3", "태그4"],
    pictureUri: "https://s3.aws.wt/users/548/profile.png"
  },
]
```

## 1.8 여행방 입장

### 1.8.1 설명

여행방에 초대받은 사용자가 수락할 경우 호출하여 해당 여행방의 멤버로 등록한다.
등록된 여행방 정보를 응답한다.

### 1.8.2 Endpoint

`POST /api/v1/travel-rooms/{id}/members/me`

### 1.8.3 요청-응답 정보

#### 요청

**헤더**

없음

**경로 파라미터**

| Parameter | 설명          |
| --------- | ------------- |
| id        | 여행방 아이디 |

**쿼리 파라미터**

없음

**페이로드**

없음

#### 응답

**헤더**

| Name         | 설명             |
| ------------ | ---------------- |
| Content-Type | application/json |

**페이로드**

| Path        | Type   | 설명                                                                  | Constraints         | Optional |
| ----------- | ------ | --------------------------------------------------------------------- | ------------------- | -------- |
| id          | String | 여행방 아이디                                                         |                     | false    |
| name        | String | 여행방 이름                                                           | 길이는 1이상 63이하 | false    |
| memberCount | Int    | 소속 된 멤버 수                                                       | 0 이상 정수         | false    |
| firstDate   | String | 여행 시작 일. UTC시간을 ISO8601 포맷으로 일 단위 까지 표시            |                     | false    |
| lastDate    | String | 여행 마지막 일. UTC시간을 ISO8601 포맷으로 일 단위 까지 표시          |                     | false    |
| ThumbUri    | String | 커버 이미지 uri                                                       |                     | true     |
| created     | String | 여행방 생성 일시. UTC 시간을 ISO8601 포맷으로 밀리세컨드까지 표시     |                     | false    |
| updated     | String | 여행방 업데이트 일시. UTC 시간을 ISO8601 포맷으로 밀리세컨드까지 표시 |                     | false    |

#### 요청 예시

```
POST /api/v1/travel-rooms/13/register/me
```

#### 응답 예시

```
200 OK
Content-Type application/json

{
  id: 13,
  name: "일본 여행"
  memberCount: 4,
  firstDate: "2020-01-01",
  lastDate: "2020-01-10",
  thumbUri: https://s3.aws.wt/travel-rooms/thumbs/13.png
  created: "2019-10-21"
  updated: "2019-10-25"
},
```

## 1.9 여행방 공지사항 리스트 조회

### 1.9.1 설명

여행방의 공지사항 리스트를 조회한다. 여행방 멤버만 호출할 수 있다.
여행방 리스트를 응답한다.

### 1.9.2 Endpoint

`GET /api/v1/travel-rooms/{id}/notices`

### 1.9.3 요청-응답 정보

#### 요청

**헤더**  
없음

**경로 파라미터**

| Parameter | 설명          |
| --------- | ------------- |
| id        | 여행방 아이디 |

**쿼리 파라미터**

| Parameter      | 설명                                                      |
| -------------- | --------------------------------------------------------- |
| minCreatedDate | 최소 등록 일. UTC시간을 ISO8601 포맷으로 밀리 초 단위까지 |
| maxCreatedDate | 최대 등록 일. UTC시간을 ISO8601 포맷으로 밀리 초 단위까지 |
| orderDir       | 등록 날짜 정렬 방향. "asc", "desc" 중 하나의 값을 가짐    |
| author         | 작성자 아이디                                             |
| count          | 공지사항 최대 갯수                                        |

**페이로드**  
없음

#### 응답

**헤더**

| Name         | 설명             |
| ------------ | ---------------- |
| Content-Type | application/json |

**페이로드**

| Path        | Type     | 설명                 | Constraints         | Optional |
| ----------- | -------- | -------------------- | ------------------- | -------- |
| [i].id      | Int      | 공지사항 아이디      |                     | false    |
| [i].author  | User     | 작성자 정보          |                     | false    |
| [i].title   | String   | 제목                 | 길이는 0이상 63이하 | false    |
| [i].tags    | [String] | 태그                 |                     | false    |
| [i].created | String   | 최초 등록 일시       |                     | false    |
| [i].updated | String   | 마지막 업데이트 일시 |                     | false    |

#### 요청 예시

```
GET /api/v1/travel-rooms/{id}/notices?minDate=2019-10-05T18:40:00.000Z&count=2
```

#### 응답 예시

```
200 OK
Content-Type application/json

[
  {
    id: 110
    author: {
      id: 257
      name: "김예지"
      tags: ["태그1", "태그2"]
      pictureUri: "https://s3.aws.wt/users/257/profile.png"
    },
    title: "준비물 봐라",
    tags: ["준비물", "필독"],
    created: "2019-10-05T18:43:58.330Z",
    updated: "2019-10-05T18:43:58.330Z"
  },
  {
    id: 112
    author: {
      id: 257
      name: "김예지"
      tags: ["태그1", "태그2"]
      pictureUri: "https://s3.aws.wt/users/257/profile.png"
    },
    title: "버스 시간표",
    tags: ["교통편", "필독"],
    created: "2019-10-05T19:01:58.170Z",
    updated: "2019-10-05T19:03:11.020Z"
  }
]
```

## 1.10 여행방 일정 조회

### 1.10.1 설명

여행방 상세 일정을 조회한다. 날짜, 활성화 여부로 필터링할 수 있다.
상세 일정 리스트를 응답한다.

### 1.10.2 Endpoint

`GET /api/v1/travel-rooms/{id}/plans?enabled=true`

### 1.10.3 요청-응답 정보

#### 요청

**헤더**

없음

**경로 파라미터**

| Parameter | 설명          |
| --------- | ------------- |
| id        | 여행방 아이디 |

**쿼리 파라미터**

| Parameter | 설명                                                        |
| --------- | ----------------------------------------------------------- |
| enabled   | 활성화 여부                                                 |
| minDate   | 최소 예정 일시. UTC시간을 ISO8601 포맷으로 밀리 초 단위까지 |
| maxDate   | 최대 예정 일시. UTC시간을 ISO8601 포맷으로 밀리 초 단위까지 |
| search    | 검색어 (임시)                                               |

**페이로드**  
없음

#### 응답

**헤더**

| Name         | 설명             |
| ------------ | ---------------- |
| Content-Type | application/json |

**페이로드**

| Path    | Type     | 설명                 | Constraints         | Optional |
| ------- | -------- | -------------------- | ------------------- | -------- |
| id      | Int      | 공지사항 아이디      |                     | false    |
| author  | User     | 작성자 정보          |                     | false    |
| title   | String   | 제목                 | 길이는 0이상 63이하 | false    |
| content | String   | 내용                 |                     | false    |
| tags    | [String] | 태그                 |                     | false    |
| created | String   | 최초 등록 일시       |                     | false    |
| updated | String   | 마지막 업데이트 일시 |                     | false    |

#### 요청 예시

```
GET /api/v1/travel-rooms/{id}/plans?enabled=true&minDate=2019-10-05T00:00:00.000Z&maxDate=2019-10-05T23:59:59.999Z&enabled=true
```

#### 응답 예시

```
200 OK
Content-Type application/json

[
  {
    id: 10,
    date: "2019-10-05T010:00:00.000Z",
    timeSet: true
    name: "밥 먹기"
    photoUris: []
    place: Place????
    memo: "라면"
  },
  {
    id: 3,
    date: "2019-10-05T08:00:00.000Z",
    timeSet: true,
    name: "기상",
    photoUris: [],
    place: Place????
    memo: ""
  },
  {
    id: 4,
    date: "2019-10-05T12:00:00.000Z",
    timeSet: true,
    name: "퇴실",
    photoUris: [],
    place: Place????
    memo: "보증금 돌려받기"
  }
]
```

## 1.11 상세 계획 등록

### 1.11.1 설명

상세 일정을 등록한다.
등록된 상세 일정을 응답한다.

### 1.11.2 Endpoint

`POST /api/v1/travel-rooms/{id}/plans`

### 1.11.3 요청-응답 정보

#### 요청

**헤더**

| Name         | 설명                |
| ------------ | ------------------- |
| Content-Type | multipart/form-data |

**경로 파라미터**

| Parameter | 설명          |
| --------- | ------------- |
| id        | 여행방 아이디 |

**쿼리 파라미터**  
없음

**페이로드**

| Path    | Type       | 설명             | Constraints | Optional |
| ------- | ---------- | ---------------- | ----------- | -------- |
| date    | String     | 예정 일(시)      |             | false    |
| timeSet | Boolean    | 시간 활성화 여부 |             | false    |
| name    | String     | 이름             |             | false    |
| photos  | [(binary)] | 사진             |             | false    |
| place   | Place????  | 장소             |             | false    |
| memo    | String     | 메모             |             | false    |

#### 응답

**헤더**

| Name         | 설명             |
| ------------ | ---------------- |
| Content-Type | application/json |

**페이로드**

| Path      | Type     | 설명                | Constraints | Optional |
| --------- | -------- | ------------------- | ----------- | -------- |
| id        | Int      | 계획 아이디         |             | false    |
| date      | String   | 예정 일(시)         |             | false    |
| timeSet   | Boolean  | 예정 시간 표시 여부 |             | false    |
| name      | String   | 공지사항 아이디     |             | false    |
| photoUris | [String] | 공지사항 아이디     |             | false    |
| place     | String   | 공지사항 아이디     |             | false    |
| memo      | String   | 공지사항 아이디     |             | false    |

#### 요청 예시

```
POST /api/v1/travel-rooms/{id}/plans
Content-Type: multipart/form-data

date: "2019-10-12T04:37:05+00:00"
timeSet: false
name: "잠자기"
photos:
  (image1 binary data)
  (image2 binary data)
  (image3 binary data)
place: "숙소"
memo: "늦게 자지 말기"
```

#### 응답 예시

```
201 OK
Content-Type application/json

{
  id: 17,
  date: "2019-10-12T04:37:05+00:00",
  timeSet: false,
  name: "잠자기",
  photoUrls: [(이미지1의 s3 uri), (이미지2의 s3 uri), (이미지3의 s3 uri)],
  place: (미정),
  memo: "늦게 자지 말기"
}
```

## 1.12 상세 계획 순서 변경

### 1.12.1 설명

여행방의 계획 순서를 변경한다.

### 1.12.2 Endpoint

`PUT /api/v1/travel-rooms/{id}/plans`

### 1.12.3 요청-응답 정보

#### 요청

**헤더**

| Name         | 설명                  |
| ------------ | --------------------- |
| Content-Type | x-www-form-urlencoded |

**경로 파라미터**

| Parameter | 설명          |
| --------- | ------------- |
| id        | 여행방 아이디 |

**쿼리 파라미터**

없음

**페이로드**

| Path | Type | 설명                 | Constraints | Optional |
| ---- | ---- | -------------------- | ----------- | -------- |
| [i]  | int  | i번 째 일정의 아이디 |             | false    |

#### 응답

**헤더**

없음

**페이로드**

| Path        | Type                 | 설명                                                                                                                                                     | Constraints | Optional |
| ----------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------- |
| [i].id      | int                  | 일정 아이디                                                                                                                                              |             | false    |
| [i].date    | String               | 예정 일(시)                                                                                                                                              |             | false    |
| [i].timeSet | Boolean              | 시간 활성화 여부                                                                                                                                         |             | false    |
| [i].name    | String               | 이름                                                                                                                                                     |             | false    |
| [i].photos  | [(binary) \| String] | 사진 혹은 사진의 s3 uri. 기존에 등록되어있는 이미지를 사용하려면 기존 이미지의 s3 uri를 사용하면되고, 새로 등록하는 이미지는 바이너리 데이터를 사용한다. |             | false    |
| [i].place   | String               | 장소 이름                                                                                                                                                |             | false    |
| [i].memo    | String               | 메모                                                                                                                                                     |             | false    |

#### 요청 예시

```
PUT /api/v1/travel-rooms/{id}/plans
```

#### 응답 예시

```
204  OK
```

# 2. Plans API

## 2.1 상세 계획 수정

### 2.1.1 설명

상세 일정을 수정한다.
수정된 상세 일정을 응답한다.

### 2.1.2 Endpoint

`PUT /api/v1/plans/{id}`

### 2.1.3 요청-응답 정보

#### 요청

**헤더**

| Name         | 설명                |
| ------------ | ------------------- |
| Content-Type | multipart/form-data |

**경로 파라미터**

| Parameter | 설명          |
| --------- | ------------- |
| id        | 여행방 아이디 |

**쿼리 파라미터**

없음

**페이로드**

| Path    | Type                 | 설명                                                                                                                                                     | Constraints | Optional |
| ------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------- |
| id      | int                  | 일정 아이디                                                                                                                                              |             | false    |
| date    | String               | 예정 일(시)                                                                                                                                              |             | false    |
| timeSet | Boolean              | 시간 활성화 여부                                                                                                                                         |             | false    |
| name    | String               | 이름                                                                                                                                                     |             | false    |
| photos  | [(binary) \| String] | 사진 혹은 사진의 s3 uri. 기존에 등록되어있는 이미지를 사용하려면 기존 이미지의 s3 uri를 사용하면되고, 새로 등록하는 이미지는 바이너리 데이터를 사용한다. |             | false    |
| place   | String               | 장소 이름                                                                                                                                                |             | false    |
| memo    | String               | 메모                                                                                                                                                     |             | false    |

#### 응답

**헤더**

| Name         | 설명             |
| ------------ | ---------------- |
| Content-Type | application/json |

**페이로드**

| Path      | Type     | 설명                | Constraints | Optional |
| --------- | -------- | ------------------- | ----------- | -------- |
| id        | Int      | 계획 아이디         |             | false    |
| date      | String   | 예정 일(시)         |             | false    |
| timeSet   | Boolean  | 예정 시간 표시 여부 |             | false    |
| name      | String   | 공지사항 아이디     |             | false    |
| photoUris | [String] | 공지사항 아이디     |             | false    |
| place     | String   | 공지사항 아이디     |             | false    |
| memo      | String   | 공지사항 아이디     |             | false    |

#### 요청 예시

```
PUT /api/v1/plans/17

아래 데이터를 multipart/form-data 형식으로 보내야함

date: "2019-10-12T04:37:05+00:00"
timeSet: false
name: "잠자기"
photos:
  (새로운 이미지의 binary data)
  (기존 이미지의 s3 uri)
  (새로운 이미지의 binary data)
place: "텐트"
memo: "늦게 자지 말기"
```

#### 응답 예시

```
200 OK
Content-Type application/json

{
  id: 17,
  date: "2019-10-12T04:37:05+00:00",
  timeSet: false,
  name: "잠자기",
  photoUrls: [(이미지1의 s3 uri), (이미지2의 s3 uri), (이미지3의 s3 uri)],
  place: "텐트",
  memo: "늦게 자지 말기"
}
```

## 2.3 상세 일정 삭제(비활성화)

### 2.3.1 설명

특정 일정을 비활성화한다.

### 2.3.2 Endpoint

`PATCH /api/v1/plans/{id}/enabled`

### 2.3.3 요청-응답 정보

#### 요청

**헤더**

| Name         | 설명                  |
| ------------ | --------------------- |
| Content-Type | x-www-form-urlencoded |

**경로 파라미터**

| Parameter | 설명          |
| --------- | ------------- |
| id        | 여행방 아이디 |

**쿼리 파라미터**

없음

**페이로드**

| Path    | Type    | 설명          | Constraints | Optional |
| ------- | ------- | ------------- | ----------- | -------- |
| enabled | boolean | 비활성화 여부 |             | false    |

#### 응답

**헤더**

| Name         | 설명             |
| ------------ | ---------------- |
| Content-Type | application/json |

**페이로드**

없음

#### 요청 예시

```
PATCH /api/v1/plans/{id}/enabled

enabled=false
```

#### 응답 예시

```
204  OK
```

`DELETE /api/v1/plans/{id}`
상세 계획 영구 삭제 (임시)

# 3. Notices API

특정 공지사항 상세 조회

## 3.1 공지사항 상세 조회

### 3.1.1 설명

특정 공지사항을 상세히 조회한다.

### 3.1.2 Endpoint

`GET /api/v1/notices/{id}`

### 3.1.3 요청-응답 정보

#### 요청

**헤더**

없음

**경로 파라미터**

| Parameter | 설명            |
| --------- | --------------- |
| id        | 공지사항 아이디 |

**쿼리 파라미터**

**페이로드**

없음

#### 응답

**헤더**

| Name         | 설명             |
| ------------ | ---------------- |
| Content-Type | application/json |

**페이로드**

| Path    | Type     | 설명                 | Constraints         | Optional |
| ------- | -------- | -------------------- | ------------------- | -------- |
| id      | Int      | 공지사항 아이디      |                     | false    |
| author  | User     | 작성자 정보          |                     | false    |
| title   | String   | 제목                 | 길이는 0이상 63이하 | false    |
| content | String   | 내용                 |                     | false    |
| tags    | [String] | 태그                 |                     | false    |
| created | String   | 최초 등록 일시       |                     | false    |
| updated | String   | 마지막 업데이트 일시 |                     | false    |

#### 요청 예시

```
GET /api/v1/notices/2185
```

#### 응답 예시

```
200 OK
Content-Type application/json

{
  id: 2185
    author: {
      id: 257
      name: "김예지"
      tags: ["태그1", "태그2"]
      pictureUri: "https://s3.aws.wt/users/257/profile.png"
    },
    title: "준비물 봐라",
    content: "**중요**\n1. 우산\n2. 비닐장갑"
    tags: ["준비물", "필독"],
    created: "2019-10-05T18:43:58.330Z",
    updated: "2019-10-05T18:43:58.330Z"
}
```

# 4. Users API

## 4.1 유저 프로필 상세 조회

### 4.1.1 설명

특정 유저의 프로필을 상세히 조회한다.

### 4.1.2 Endpoint

`GET /api/v1/users/{id}`

### 4.1.3 요청-응답 정보

#### 요청

**헤더**  
없음

**경로 파라미터**

| Parameter | 설명                           |
| --------- | ------------------------------ |
| id        | 조회 대상이 되는 유저의 아이디 |

**쿼리 파라미터**

**페이로드**

없음

#### 응답

**헤더**

| Name         | 설명             |
| ------------ | ---------------- |
| Content-Type | application/json |

**페이로드**

| Path       | Type     | 설명                   | Constraints         | Optional |
| ---------- | -------- | ---------------------- | ------------------- | -------- |
| id         | Int      | 사용자 아이디          |                     | false    |
| username   | String   | 사용자 이름            | 길이는 0이상 63이하 | false    |
| pictureUri | String   | 프로필 이미지 요청 uri |                     | true     |
| location   | [String] | 사는 곳                |                     | false    |
| tags       | [String] | 사용자 해시태그        |                     | false    |

#### 요청 예시

```
GET /api/v1/users/257
```

#### 응답 예시

```
200 OK
Content-Type application/json

{
  id: 257
  username: "김예지",
  pictureUri: (이미지가 위치한 S3 uri),
  location: ["OO시", "OO구"],
  tags: ["태그1", "태그2"]
}
```

## 4.2 내 프로필 상세 조회

### 4.2.1 설명

내 프로필을 상세히 조회한다.

### 4.2.2 Endpoint

`GET /api/v1/users/me`

### 4.2.3 요청-응답 정보

#### 요청

**헤더**  
없음

**경로 파라미터**

없음

**쿼리 파라미터**

**페이로드**

| Path       | Type     | 설명                   | Constraints         | Optional |
| ---------- | -------- | ---------------------- | ------------------- | -------- |
| id         | Int      | 사용자 아이디          |                     | false    |
| username   | String   | 사용자 이름            | 길이는 0이상 63이하 | false    |
| pictureUri | String   | 프로필 이미지 요청 uri |                     | true     |
| location   | [String] | 사는 곳                |                     | false    |
| tags       | [String] | 사용자 해시태그        |                     | false    |

#### 응답

**헤더**

| Name         | 설명             |
| ------------ | ---------------- |
| Content-Type | application/json |

**페이로드**
없음

#### 요청 예시

```
GET /api/v1/users/me
```

#### 응답 예시

```
200 OK
Content-Type application/json

{
  id: 121,
  username: "김정우"
  pictureUri: "https://s3.aws.wt/users/121/profile.png"
  location: ["서울시", "동대문구"],
  tags: []
}
```

## 4.3 내 프로필 수정

### 4.3.1 설명

내 프로필을 수정한다.

### 4.3.2 Endpoint

`PUT /api/v1/users/me`

### 4.3.3 요청-응답 정보

#### 요청

**헤더**

| Name         | 설명                |
| ------------ | ------------------- |
| Content-Type | multipart/form-data |

**경로 파라미터**

없음

**쿼리 파라미터**

없음

**페이로드**

| Path     | Type             | 설명                 | Constraints                                                                                                | Optional |
| -------- | ---------------- | -------------------- | ---------------------------------------------------------------------------------------------------------- | -------- |
| username | String           | 원하는 유저네임      |                                                                                                            | false    |
| picture  | String \| binary | 원하는 프로필 이미지 | null이면 프로필 이미지 삭제. S3주소가 있으면 기존 프로필 유지, 바이너리가 있으면 새로운 프로필 이미지 등록 | true     |
| location | [String]         | 원하는 위치          |                                                                                                            | false    |
| tags     | [String]         | 원하는 해시태그들    |                                                                                                            | false    |

#### 응답

**헤더**

| Name         | 설명             |
| ------------ | ---------------- |
| Content-Type | application/json |

**페이로드**

| Path       | Type     | 설명                   | Constraints         | Optional |
| ---------- | -------- | ---------------------- | ------------------- | -------- |
| id         | Int      | 사용자 아이디          |                     | false    |
| username   | String   | 사용자 이름            | 길이는 0이상 63이하 | false    |
| pictureUri | String   | 프로필 이미지 요청 uri |                     | true     |
| location   | [String] | 사는 곳                |                     | false    |
| tags       | [String] | 사용자 해시태그        |                     | false    |

#### 요청 예시

```
PUT /api/v1/users/me

username: "김정우"
picture: (새 이미지의 binary data)
location: ["서울시", "강남구"]
tags: ["새 태그"]
```

#### 응답 예시

```
200 OK
Content-Type application/json

{
  id: 121,
  username: "김정우"
  pictureUri: "https://s3.aws.wt/users/121/profile.png"
  location: ["서울시", "강남구"],
  tags: ["새 태그"]
}
```

## 4.4 내 설정 조회

### 4.4.1 설명

내 설정 정보를 조회한다.

### 4.4.2 Endpoint

`GET /api/v1/users/me/setting`

### 4.4.3 요청-응답 정보

#### 요청

**헤더**

없음

**경로 파라미터**

없음

**쿼리 파라미터**

없음

**페이로드**

| Path     | Type    | 설명                               | Constraints | Optional |
| -------- | ------- | ---------------------------------- | ----------- | -------- |
| showTime | boolean | 일정 시간 표시 여부. 기본 값 false |             | false    |

#### 응답

**헤더**

| Name         | 설명             |
| ------------ | ---------------- |
| Content-Type | application/json |

**페이로드**

없음

#### 요청 예시

```
GET /api/v1/users/me/setting
```

#### 응답 예시

```
200 OK
Content-Type application/json

{
  showTime: false
}
```

## 4.5 내 설정 변경

### 4.5.1 설명

내 설정 정보를 변경한다.

### 4.5.2 Endpoint

`PUT /api/v1/users/me/setting`

### 4.5.3 요청-응답 정보

#### 요청

**헤더**

| Name         | 설명             |
| ------------ | ---------------- |
| Content-Type | application/json |

**경로 파라미터**

없음

**쿼리 파라미터**

없음

**페이로드**

| Path     | Type    | 설명                                | Constraints | Optional |
| -------- | ------- | ----------------------------------- | ----------- | -------- |
| showTime | boolean | 일정 시간 표시 여부. 기본 값 false. |             | true     |

#### 응답

**헤더**

없음

**페이로드**

없음

#### 요청 예시

```
PUT /api/v1/users/me/setting
Content-Type: x-www-form-urlencoded

showTime=true
```

#### 응답 예시

```
204 OK
```
