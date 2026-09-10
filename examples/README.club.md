<div align="center">
  <h1>Weather Badge</h1>
  <p><strong>오늘 날씨를 담은 SVG 배지를 만들어 보세요.</strong></p>
  <a href="https://weather-badge.vercel.app/">
    <img src="https://weather-badge.vercel.app/api/badge?lat=37.5666791&lon=126.9782914&size=180" alt="서울의 현재 날씨를 보여주는 Weather Badge" width="180"/>
  </a>
</div>

## ☀️ 프로필에 오늘 날씨 한 칸

Weather Badge는 도시의 현재 날씨를 SVG 한 장으로 만들어 주는 웹 서비스예요.
[weather-badge.vercel.app](https://weather-badge.vercel.app/) 에서 바로 만들 수 있어요.

- 도시와 크기를 고르면 바로 쓸 수 있는 배지가 만들어져요.
- GitHub 프로필, Notion, 웹페이지에 이미지 주소만 붙이면 됩니다.
- 기온과 체감 온도, 풍속, 대기질을 한눈에 확인할 수 있어요. 날씨 아이콘은 시간과 상태에 맞춰 움직입니다.

### 프로젝트 기간

`2022.05.14 ~ 2022.06.05`

## 🌦 부산 날씨 배지를 만드는 5초

<img src="assets/weather-badge/demo.gif" width="800" alt="부산을 검색하고 배지 크기를 220으로 바꾼 뒤 SVG, HTML, Markdown 코드를 확인하는 과정"/>

도시를 검색하고 크기를 입력한 뒤 `Copy!`를 누르면 끝나요. 별도 회원가입은 없습니다.

### 도시 찾기

영문 도시명을 입력하면 OpenWeather Geocoding API에서 최대 10개 후보를 가져옵니다. 원하는 도시를
고르는 순간 배지의 위치와 날씨가 바뀌어요.

### 원하는 곳에 붙이기

한 번 만든 배지는 세 가지 형식으로 복사할 수 있습니다.

| 형식 | 쓰는 곳 |
| --- | --- |
| SVG URL | 이미지 주소를 직접 받는 곳 |
| HTML | 블로그와 웹페이지 |
| Markdown | GitHub README와 Notion |

```markdown
[![Weather Badge](https://weather-badge.vercel.app/api/badge?lat=35.1796&lon=129.0756&size=220)](https://weather-badge.vercel.app/)
```

## 🛠 기술 스택

| 역할 | 종류 |
| --- | --- |
| 웹 | ![Next.js](https://img.shields.io/badge/Next.js_12-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) |
| UI | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![daisyUI](https://img.shields.io/badge/daisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white) ![Font Awesome](https://img.shields.io/badge/Font_Awesome-538DD7?style=for-the-badge&logo=fontawesome&logoColor=white) |
| 지도 | ![Google Maps](https://img.shields.io/badge/Google_Maps-4285F4?style=for-the-badge&logo=googlemaps&logoColor=white) |
| 데이터 | ![OpenWeather](https://img.shields.io/badge/OpenWeather-EB6E4B?style=for-the-badge) — Weather·Air Pollution·Geocoding |
| 배포 | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) |

## 🧭 배지 하나가 만들어지는 순서

1. 도시명을 검색해 위도와 경도를 고릅니다.
2. 현재 날씨와 대기질을 조회합니다.
3. 날씨 아이콘과 수치를 SVG로 조합합니다.
4. 완성된 주소를 원하는 형식으로 복사합니다.

배지 이미지는 외부 날씨 아이콘 주소에 기대지 않도록 아이콘까지 SVG 안에 함께 담았어요.

## 📦 로컬 실행

**사전 준비**: Node.js 16 이상, OpenWeather·Google Maps API 키

```bash
# 1. 저장소 복제
git clone https://github.com/eomgerm/weather-badge.git && cd weather-badge

# 2. 의존성 설치
npm install

# 3. 환경변수 설정 — .env.local
# WEATHER_API_KEY=your_openweather_key
# NEXT_PUBLIC_MAPS_API_KEY=your_google_maps_key

# 4. 개발 서버 실행
npm run dev
```

## 👤 만든 사람

기획·디자인·개발·배포를 [eomgerm](https://github.com/eomgerm)이 혼자 맡았어요. 커밋 75개.
