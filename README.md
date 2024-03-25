<h1 align=center>The julge</h2>

> 급하게 일손이 필요한 자리에 더 많은 시급을 제공해서 아르바이트생을 구할 수 있는 서비스

<img width="1200" alt="image" src="https://github.com/the-julge/the-julge/assets/127701092/cc94ea15-5fa0-41f4-afd0-644ac1c0f722">

<br/><br/>

## 설치 방법

1. 소스 파일 설치

```bash
git clone https://github.com/the-julge/the-julge.git
cd the-julge
```

2. 패키지 설치

```bash
npm install
```

3. `.env` 파일 생성

```
NEXT_PUBLIC_BASE_URL = 'BASE_URL'
```

4. 실행

```bash
npm run start
```

<br/><br/>

## 🫂 팀원 소개

<table>
    <tr align="center">
        <td><img width="150" src="https://avatars.githubusercontent.com/u/151617960?v=4"></td>
        <td><img width="150" src="https://avatars.githubusercontent.com/u/119824778?v=4"></td>
        <td><img width="150" src="https://avatars.githubusercontent.com/u/127701092?v=4"></td>
        <td><img width="150" src="https://avatars.githubusercontent.com/u/151587265?v=4"></td>
    </tr>
    <tr align="center">
      <td><a href="https://github.com/soyxxn">박소연</a></td>
      <td><a href="https://github.com/midcondria">고현우</a></td>
      <td><a href="https://github.com/yuyoni">이유연</a></td>
      <td><a href="https://github.com/whtjdrud">조성경</a></td>
    </tr>
    <tr align="center">
      <td>팀장</td>
      <td>팀원</td>
      <td>팀원</td>
      <td>팀원</td>
    </tr>
</table>

<br/><br/>

## 🔨 사용 기술 및 도구

### 배포

![vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### 개발

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Emotion](https://img.shields.io/badge/emotion-DB7093?style=for-the-badge&logo=emotions&logoColor=white) <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white">

### 협업

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Jira](https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jirasoftware&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=eslint&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)
![Notion](https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white)

<br/><br/>

## 🗓️ 개발 일정

### 2024.03.08 ~ 2024.03.25 (2주)
<br>
<img width="1000" alt="image" src="https://github.com/the-julge/the-julge/assets/127701092/f0c46c23-0f36-4c48-801a-1731f5c6743c"><br><br>

### 🔖 세부 일정 관리 및 깃허브 연동
<img width="400" alt="image" src="https://github.com/the-julge/the-julge/assets/127701092/f1ae12f0-3257-4c94-b79d-441def931a7b"> &nbsp;&nbsp;
<img width="400" alt="image" src="https://github.com/the-julge/the-julge/assets/127701092/7da6f00d-61ef-4369-a282-0e24ad4cca16">



<br/>

## 📁 폴더 구조

```bash
root
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── components
├── contexts
├── hooks
├── lib   // 다양한 유틸리티 함수, 상수, API 호출 함수 등
│   ├── apis
│   ├── utils
│   ├── constants
│   └── types
├── styles
│   └── global.ts
└── public
```

<br/><br/>

## 🔗 배포 링크

[The-julge - 바로가기](https://soyeon-jjang.vercel.app)

<br/><br/>

## ✨ 서비스 주요 기능

<br/>

### 📄 로그인 및 회원가입 페이지

- 일반회원 / 사장님 타입을 구분하여 회원가입 및 로그인 할 수 있는 기능

### 📄 일반회원 - 내 프로필 페이지

- 내 정보를 확인할 수 있는 기능
- 내가 신청한 공고의 목록을 보고, 신청 상태를 확인할 수 있는 기능

### 📄 일반회원 - 내 프로필 등록, 수정 페이지

- 내 프로필을 등록 및 수정하고 내 프로필 페이지로 이동

### 📄 일반회원 - 공고 상세 페이지

- 공고 상세 페이지에서 최근에 본 공고 최대 6개를 브라우저 저장소를 활용해 불러오는 기능
- 공고 신청 여부에 따른 신청/취소 요청

### 📄 사장님 - 내 가게 등록, 수정 페이지

- 가게 정보를 등록하고 조건에 맞는 정보를 작성하면 등록 완료 후 내 가게 페이지로 이동
 
### 📄 사장님 - 공고 등록, 수정 페이지

- 내 가게에 대한 공고를 등록하고 조건에 맞는 공고를 작성하면 등록 완료 후 해당 공고의 상세 페이지로 이동

### 📄 사장님 - 공고 상세 페이지

- 내 공고일 경우 공고
    - 편집 페이지 버튼 활성화
    - 지원자 목록 보이기 및 받은 신청을 승인/취소 하는 기능
- 내 공고가 아닐 경우
    - 일반회원과 마찬가지로 최근에 본 공고 띄우기

### 📄 navigation bar 

- 로고 클릭 시 메인페이지로 이동
- 특정 공고를 검색하는 기능
- 일반회원의 경우 공고 신청에 대한 응답 알림을 받을 수 있는 기능

### 📄 메인 페이지 - 전체 공고 리스트

- 전체 공고를 렌더링하고 조건에 따라 특정 공고를 필터링하거나 정렬할 수 있는 기능
- 일반 회원의 경우 유저의 지역 정보에 따라 맞춤 공고를 보여주는 기능

<br/><br/>


## ❗️ 문제 및 해결

1. **로컬 스토리지 대신 쿠키 사용**
   - Next.js에서는 서버에서 HTML을 만들어서 반환하기 때문에 클라이언트의 브라우저 저장소에 바로 접근할 수 없음.
   이에 따라 React와는 다른 방식으로 브라우저 저장소에 접근해야하기 때문에 쿠키를 사용하기로 결정.

2. **데이터 캐싱을 위한 useQuery 쿼리키 활용**
   - 중복 요청을 줄이고 애플리케이션의 효율성을 높이기 위해 useQuery 쿼리키를 활용해 데이터 캐싱 사용   

3. **GitHub Actions와 Vercel의 통합을 통한 개발 효율성 증대**
   - 개발 프로세스의 자동화와 최적화를 통해 효율적인 코드 통합 및 배포 방식을 구축

4. **SEO 향상**
   - 각 페이지의 특성에 맞게 SEO 전략을 구현하고, 사용자 경험을 개선하기 위한 타이틀 및 메타 태그 설정 <br><br>
    <img width="600" alt="image" src="https://github.com/the-julge/the-julge/assets/127701092/5233d631-4f4f-45c1-bbdd-6f1d3c495c94"><br>
    <img width="400" alt="image" src="https://github.com/the-julge/the-julge/assets/127701092/3a143ed3-6b68-4f8a-ba4f-bc7be66eb2d7">
    <img width="400" alt="image" src="https://github.com/the-julge/the-julge/assets/127701092/26c185eb-1144-4f61-8623-8b8e6ce5bfe9">
    


     
5. **사용자 경험 개선**
   - 유저 정보에 따라 추천 공고의 UI를 다르게 해서 사용자 경험에 개선 <br><br>
         <img width="500" alt="image" src="https://github.com/the-julge/the-julge/assets/127701092/51c29581-9255-46f2-a8ac-579887da0af0">
         <img width="500" alt="image" src="https://github.com/the-julge/the-julge/assets/127701092/15dd5cd4-3b4c-4f0e-a9ac-d651cb95fbcc">


   - 추가적인 확인이 필요한 경우(ex. 폼 제출)에만 모달을 이용하고, 그 외 경우(ex. 잘못된 입력값 확인)는 toast 알림이나 툴팁을 활용 <br><br>
        <img width="500" alt="image" src="https://github.com/the-julge/the-julge/assets/127701092/4dfa66c3-8bb5-46c4-ae3e-5786f23388c9">
        <img width="500" alt="image" src="https://github.com/the-julge/the-julge/assets/127701092/d95ef6d3-6f0e-49bb-abc9-feba1307aad3">
        <img width="161" alt="image" src="https://github.com/the-julge/the-julge/assets/127701092/55f89430-b5c9-4d54-80b6-85d785ae20f4">

   - 사용자가 데이터 로딩을 기다리는 동안 더 나은 인터랙션을 제공하기 위해 스켈레톤 UI를 구현 <br><br>
         <img width="800" alt="image" src="https://github.com/the-julge/the-julge/assets/127701092/e8c6ed86-8c52-40af-9972-8c6b6bc5e798">

   - 사용자 편의를 위해 공고, 가게, 사용자 정보 수정의 경우 초기 데이터를 기본값으로 적용 <br><br>
   - 데이터가 없는 페이지를 위해 404페이지 생성 <br>
         - <img width="800" alt="image" src="https://github.com/the-julge/the-julge/assets/127701092/d9794e8d-1b39-42d1-88b3-4befad0de1d6">


<br><br>

## 💡 Q & A
![image](https://github.com/the-julge/the-julge/assets/119824778/f056b4d6-398a-4322-a69f-1c056633b942)

  
