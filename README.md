# k-project-readme-skill

한국 개발 문화의 **프로젝트 소개서** 형태로 README를 써주는 에이전트 스킬.

영미권 README는 설치법과 API 문서지만, 한국 부트캠프·동아리 프로젝트의 README는
팀원 사진과 기획 배경과 성과 수치가 절반을 차지하는 **소개서**다. 이 스킬은 그 형태를 재현한다.

## 설치

```bash
npx skills add eomgerm/k-project-readme-skill -g
```

Claude Code, Codex, Cursor 등 [`npx skills`](https://github.com/vercel-labs/skills)가 지원하는
에이전트에 설치된다. 특정 에이전트만 지정하려면:

```bash
npx skills add eomgerm/k-project-readme-skill -g -a claude-code codex
```

## 사용

```
/k-readme 부트캠프
/k-readme 동아리
```

인자를 빼면 어느 모드인지 물어본다.

| 모드 | 주인공 | 대상 |
| --- | --- | --- |
| **부트캠프형** | 기술적 도전과 성능 개선 서사 | 부스트캠프, 우아한테크코스, 카카오테크캠퍼스, SSAFY, 소마 |
| **동아리형** | 서비스 소개와 화면 | SOPT, 디프만, YAPP, 넥스터즈, 매쉬업, DDD, 코테이토, UMC |

기존 `README.md`가 있으면 갱신 모드로 들어가 **빈 섹션만 채운다.** 기존 내용은 지우지 않는다.

## 하는 일

1. **레포를 먼저 읽는다** — 기술 스택, 폴더 구조, 개발 기간, 기여자, 커밋 컨벤션, 배포 설정
2. **트러블슈팅 재료를 캐낸다** — `fix:`/`perf:` 커밋, 머지된 PR, 닫힌 이슈에서 후보 5개를 뽑아 고르게 한다
3. **질문은 3개까지** — 자동으로 못 캐내는 것만 묻는다
4. **마크업을 완성한다** — GIF 테이블, 아바타 테이블, 기술 스택 표, 주석 달린 폴더 트리
5. **이미지 자리는 깨뜨려 남긴다** — `src="TODO_..."` 로 두어 미완성 커밋을 막고, 하단에 남은 작업 체크리스트를 모은다

## AI 티 제거

한국 부트캠프·동아리 README **16개를 실측**해 어투 규칙을 데이터로 뽑았다.

- 종결어미 — 합쇼체 104회 대 해요체 17회. `~이다`/`~한다` 평서체는 **0회**
- 16개에서 한 번도 안 나온 표현 8개를 금지 (`뿐만 아니라`, `원활하게`, `혁신`, `완벽한` 등)
- 반대로 `~을 통해`는 31회 등장 — 실제로 쓰이는 말은 금지하지 않는다
- 이모지는 헤딩에만 1개 (실측 헤딩 120개, 본문 0개)
- 진짜 AI 티는 어휘가 아니라 구조 — 3항 병렬 금지, 불릿 길이 균일 금지

레퍼런스 문장을 베끼지 않도록 헤딩 문구에 프로젝트 고유 사실을 강제하고,
눈에 띄는 표현은 블랙리스트로 막았다.

## 함께 쓰면 좋은 것

| 스킬 | 용도 |
| --- | --- |
| [demo-gif](https://github.com/conorbronsdon/demo-gif-skill) | 웹·CLI 데모 GIF 녹화 (모바일 앱은 이 스킬이 직접 다룬다) |
| [humanize-korean](https://github.com/im-not-ai/humanize-korean) | 더 강한 윤문이 필요할 때 이어서 |

## 구조

```text
skills/k-readme/
├── SKILL.md                    # 절차와 어투 규칙
└── references/
    ├── structure.md            # 마크업 골격 (테이블·뱃지·트리)
    ├── tone-samples.md         # 문체 발췌 + 복사 금지
    └── mobile-demo.md          # adb·scrcpy·ffmpeg 레시피
```

## 라이선스

MIT
