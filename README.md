## 작업 진행도

### ✅ 작업 완료

- [x] 공통 레이아웃 컴포넌트
- [x] 일정 관리 페이지 구조/스타일링
- [x] 일정 관리 페이지 기능 구현
- [x] 할 일 페이지 구조/스타일링
- [x] 새로운 뉴스 페이지 구조/스타일링
- [x] 새로운 뉴스 페이지 기능 구현
- [x] 할 일 페이지 기능 구현
- [x] 배포
  - [x] 빌드 오류 수정
- [x] **`할일`** 페이지 마감 기한 형식 수정

### ➡️ 진행중

- [ ] 문서 작성
- [ ] **`모바일`** SideBar 열려있는 경우 뒤에 내용 선택 안되게 수정
- [ ] **`일정`/`뉴스`** API 사용하는 부분 로딩 스피너 구현
- [ ] **`할일`/`뉴스`** 리스트가 비어있는 경우에 대한 스타일 추가

### 🥲 시작 안함

- [ ] **`일정`** 공휴일 받아오는 방식 수정
- [ ] **`할일`** 수정 시 마감기한 삭제 기능 추가

<div align="center">

# PPP

<img src="./public/logo.svg" alt="logo">

MBTI P인 프로그래머를 위한 플래너

[![Demo](https://img.shields.io/badge/Demo-ffffff?style=flat-square&color=21201f)](https://ppp.ppyom.com/) / [![Notion](https://img.shields.io/badge/프로젝트-ffffff?style=flat-square&logo=Notion&logoColor=000000&labelColor=ffffff&color=ffffff)](https://radical-devourer-8fb.notion.site/PPP-10c26845a53380baa76ac34cfb6123d1)

![React](https://img.shields.io/badge/React-ffffff?style=flat-square&logo=react&logoColor=ffffff&labelColor=61dafb&color=61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-ffffff?style=flat-square&logo=typescript&logoColor=ffffff&labelColor=3178c6&color=3178c6)

![TailwindCSS](https://img.shields.io/badge/TailwindCSS-ffffff?style=flat-square&logo=TailwindCSS&logoColor=ffffff&labelColor=06B6D4&color=06B6D4)
![Redux](https://img.shields.io/badge/Redux-ffffff?style=flat-square&logo=redux&logoColor=ffffff&labelColor=764ABC&color=764ABC)
![ReactQuery](https://img.shields.io/badge/ReactQuery-ffffff?style=flat-square&logo=reactquery&logoColor=ffffff&labelColor=FF4154&color=FF4154)

</div>

> **프로그래머스 데브코스: 클라우드 기반 프론트엔드 엔지니어링**에서 진행한 두 번째 프로젝트입니다.

## 💡 주요 기능

### 일정 관리

- 일정 추가/수정/삭제
- 일정 상세보기
- 공휴일

### 할 일

- 할 일 저장/수정/삭제
- 마감기한 설정

### 새로운 뉴스

- 사람인 채용 공고
- dev.to 블로그 포스팅
- GitHub Repository

## ▶️ 실행 방법

1. `npm i`를 입력해 필요한 패키지를 설치합니다.
2. [서버](https://github.com/ppyom/ppp-server)를 실행합니다.
3. `.env.local` 파일을 만들고 아래 내용을 입력합니다.
   ```bash
    VITE_SERVER_URL=# 2에서 실행시킨 서버 주소
   ```
4. `npm run dev`를 입력해 실행합니다.
