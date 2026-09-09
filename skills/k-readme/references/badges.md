# 뱃지

한국 부트캠프·동아리 README 25개 실측: shields.io가 13개 파일에 185개. 다른 프로바이더는
stackticon 1개뿐이고 나머지는 0이다. **shields.io만 쓴다.**

## URL 형식

```
https://img.shields.io/badge/{이름}-{색}?style=for-the-badge&logo={slug}&logoColor={로고색}
```

`style`은 `for-the-badge` 99회, `flat-square` 17회, 생략 69회다. 기본은 `for-the-badge`로
가고, 한 줄에 6개 이상 들어가야 하면 생략형(작은 뱃지)으로 바꾼다.

### 이스케이프

이름 칸에서 세 글자가 특별하게 동작한다. 모르면 뱃지가 엉뚱하게 렌더된다.

| 쓰고 싶은 것 | 적는 법 | 예 |
| --- | --- | --- |
| 공백 | `_` 또는 `%20` | `Tailwind_CSS` → Tailwind CSS |
| 밑줄 `_` | `__` | `next__auth` → next_auth |
| 하이픈 `-` | `--` | `Vanilla--Extract` → Vanilla-Extract |

`-`는 이름과 색을 나누는 구분자다. 하이픈이 든 이름을 그냥 적으면 이름이 라벨·메시지 두 칸으로
쪼개지고 왼쪽 칸이 기본 회색으로 뜬다 (`styled-components-DB7093` → `STYLED | COMPONENTS`).

### logoColor

밝은 배경(`61DAFB`, `F7B93E`, `85EA2D`)에는 `black`, 어두운 배경에는 `white`다.
실측에서 React를 `logoColor=white`로 박은 사례가 있는데 로고가 안 보인다. 따라 하지 않는다.

## 스택군별 slug 표

50개다. simple-icons 목록으로 검증했다.

### 웹

| 기술 | 색 | logo |
| --- | --- | --- |
| React | `61DAFB` | `react` (logoColor=black) |
| TypeScript | `3178C6` | `typescript` |
| Next.js | `000000` | `nextdotjs` |
| Vue.js | `4FC08D` | `vuedotjs` |
| Vite | `646CFF` | `vite` |
| Tailwind CSS | `06B6D4` | `tailwindcss` |
| styled-components | `DB7093` | `styledcomponents` |
| TanStack Query | `FF4154` | `reactquery` |
| Redux | `764ABC` | `redux` |
| Zustand | `433E38` | 없음 — 색만 |
| Axios | `5A29E4` | `axios` |
| React Router | `CA4245` | `reactrouter` |
| ESLint | `4B32C3` | `eslint` |
| Prettier | `F7B93E` | `prettier` (logoColor=black) |
| Storybook | `FF4785` | `storybook` |

### 서버

| 기술 | 색 | logo |
| --- | --- | --- |
| Spring Boot | `6DB33F` | `springboot` |
| Java | `007396` | `openjdk` |
| Kotlin | `7F52FF` | `kotlin` |
| Node.js | `339933` | `nodedotjs` |
| NestJS | `E0234E` | `nestjs` |
| Ktor | `087CFA` | `ktor` |
| MySQL | `4479A1` | `mysql` |
| PostgreSQL | `4169E1` | `postgresql` |
| Redis | `DC382D` | `redis` |
| MongoDB | `47A248` | `mongodb` |
| Hibernate | `59666C` | `hibernate` |
| Swagger | `85EA2D` | `swagger` (logoColor=black) |

### 안드로이드

Kotlin은 서버 표에 있다. 안드로이드 라이브러리는 로고가 없는 게 정상이다 — 8개 중 5개가 색만 쓴다.

| 기술 | 색 | logo |
| --- | --- | --- |
| Jetpack Compose | `4285F4` | `jetpackcompose` |
| Android | `34A853` | `android` |
| Gradle | `02303A` | `gradle` |
| Hilt | `2196F3` | 없음 — 색만 |
| Retrofit | `000000` | 없음 — 색만 |
| OkHttp | `000000` | 없음 — 색만 |
| Coil | `3B6BB4` | 없음 — 색만 |
| Room | `4285F4` | 없음 — 색만 |

### iOS

| 기술 | 색 | logo |
| --- | --- | --- |
| Swift | `F05138` | `swift` |
| SwiftUI | `1575F9` | 없음 — `logo=swift`를 빌려 쓰거나 색만 |
| Xcode | `147EFB` | `xcode` |
| CocoaPods | `EE3322` | `cocoapods` |
| Alamofire | `E74C3C` | 없음 — 색만 |
| Tuist | `6236FF` | 없음 — 색만 |

### 인프라·협업

| 기술 | 색 | logo |
| --- | --- | --- |
| Docker | `2496ED` | `docker` |
| GitHub Actions | `2088FF` | `githubactions` |
| Nginx | `009639` | `nginx` |
| AWS | `232F3E` | **없음 — 색만** |
| Naver Cloud | `03C75A` | `naver` |
| Vercel | `000000` | `vercel` |
| Notion | `000000` | `notion` |
| Slack | `4A154B` | **없음 — 색만** |
| Figma | `F24E1E` | `figma` |

## 표에 없는 기술을 만났을 때

1. **뱃지 URL을 직접 열어 로고가 붙는지 확인한다.** slug는 브랜드명을 소문자로 붙이고
   `.`을 `dot`으로 바꾼 형태다 (`Socket.io` → `socketdotio`, `Vue.js` → `vuedotjs`).
   판정은 `curl -s "{뱃지 URL}" | grep -c '<image'` 로 한다 — `1`이면 붙었고 `0`이면 안 붙었다.
   **응답 크기로 판정하지 않는다.** 로고 없는 뱃지도 라벨 길이와 `style`에 따라 433~998바이트로
   변한다 (`for-the-badge` 433~480, `style` 생략 950~998).
2. 붙으면 쓰고, **안 붙거나 확인이 번거로우면 `logo`와 `logoColor`를 빼고 색만 넣는다.**
   실측 185개 중 51개(28%)가 이 방식이다. 추측한 slug는 오류를 내지 않고 조용히
   로고 없는 뱃지로 렌더되기 때문에 커밋 전에 잡히지 않는다.
3. 색을 모르면 무채색(`000000`, `555555`)으로 간다. 브랜드 색을 틀리는 것보다 낫다.

**AWS·Amazon 계열과 Slack은 shields.io가 로고를 렌더하지 않는다.** simple-icons 패키지에는
파일이 있지만 `logo=amazonaws`, `logo=amazonwebservices`, `logo=slack` 은 오류 없이 무시된다
(응답이 로고 없는 뱃지와 바이트 단위로 동일하다). 이 셋은 반드시 색만 쓴다.

## 배치

### 표 칸에 넣기 (기본형)

기술 스택 섹션이 있는 19개 중 6개가 이 형태로, 가장 흔하다. 역할 칸이 있으니 뱃지와 텍스트를 섞어도 자연스럽다.

```markdown
| 역할 | 종류 |
| --- | --- |
| 언어 | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) |
| 상태 관리 | ![TanStack Query](...) ![Zustand](https://img.shields.io/badge/Zustand-433E38?style=for-the-badge) |
| 스타일 | Vanilla Extract, PostCSS |
```

### 영역별 묶음 (부트캠프형 변형)

가운데정렬 소제목 + 뱃지 묶음. **3~4개마다 `<br/>`로 끊는다.** 개수 상한은 두지 않고 배치로
잡는다 — 실측 최다 29개도 이 방식이면 읽힌다.

```html
<h3 align="center">Frontend</h3>
<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/Vite-646CFF?&logo=vite&logoColor=white">
  <br/>
  <img src="https://img.shields.io/badge/Axios-5A29E4?&logo=axios&logoColor=white">
</p>
```

### 버전 붙이기

런타임 버전을 못 박아야 할 때만. 라이브러리마다 달면 표가 버전 목록이 된다.

```markdown
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![v20.15.0](https://img.shields.io/badge/v20.15.0-LTS-green?style=for-the-badge)
```

### 히어로 링크 뱃지

링크줄을 텍스트 대신 뱃지로 쓰는 변형이다. 링크 하나에 뱃지 하나.

```html
<p align="center">
  <a href="{노션}"><img src="https://img.shields.io/badge/{팀명}_팀_노션-000000?&logo=notion&logoColor=white"></a>
  &nbsp;|&nbsp;
  <a href="{위키}"><img src="https://img.shields.io/badge/{팀명}_Wiki-181717?&logo=github&logoColor=white"></a>
</p>
```

### CI 상태 뱃지

`.github/workflows/`가 있을 때만. 배너 바로 아래 한 줄로 붙인다. 워크플로 파일명을 실제
파일과 맞춘다 — 틀리면 영구히 `no status`로 뜬다.

```markdown
[![CI](https://github.com/{owner}/{repo}/actions/workflows/{파일명}.yml/badge.svg)](https://github.com/{owner}/{repo}/actions)
```

## 쓰지 않는 것

실측 25개에서 **0회**다. 전부 프로필 README 관용구고, 프로젝트 레포에는 안 쓴다.

`skillicons.dev` `devicon` `badgen.net` `forthebadge` `capsule-render` `readme-typing-svg`
`star-history` `mermaid`

stackticon은 1회 나왔지만 쓰지 않는다. 결과물이 firebasestorage 링크의 PNG라 수명이 짧고,
웹에서 직접 골라야 해서 스킬이 URL을 만들어줄 수 없다.
