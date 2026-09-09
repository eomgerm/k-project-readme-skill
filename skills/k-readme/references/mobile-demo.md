# 모바일 앱 데모 GIF 만들기

`demo-gif` 스킬은 터미널(vhs)과 웹(Playwright)만 다룬다. 한국 동아리 프로젝트는
대부분 모바일 앱이라 이 구멍을 여기서 메운다.

## 준비물

| 도구 | 용도 | 설치 |
| --- | --- | --- |
| `ffmpeg` | 영상 → GIF 변환. **모든 경로에 필요** | `winget install Gyan.FFmpeg` / `brew install ffmpeg` |
| `adb` | Android 기기·에뮬레이터 녹화 | Android Studio 의 platform-tools, 또는 `winget install Google.PlatformTools` |
| `scrcpy` | Android 미러링 + 녹화 (adb 대안, 더 편함) | `winget install Genymobile.scrcpy` / `brew install scrcpy` |
| `gifsicle` | GIF 추가 압축 (선택) | `winget install Gifsicle.Gifsicle` / `brew install gifsicle` |

없는 도구는 사용자에게 설치를 안내하고, 설치 없이 되는 경로(직접 녹화한 파일 변환)로 우회한다.

## Android

### adb 로 기기 안에서 녹화

```bash
adb devices                                              # 기기 연결 확인
adb shell screenrecord --time-limit 20 --bit-rate 8000000 /sdcard/demo.mp4
adb pull /sdcard/demo.mp4 ./demo.mp4
adb shell rm /sdcard/demo.mp4
```

- `--time-limit` 최대 180초. GIF로 쓸 거면 **10~15초를 넘기지 않는다**
- `--size 720x1560` 으로 해상도를 낮춰 두면 변환이 빨라진다
- Android 11 미만에서는 오디오가 안 잡히는데 GIF에는 무관하다

### scrcpy 로 PC 에서 녹화

미러링 화면을 보면서 조작할 수 있어 실패한 테이크를 바로 알 수 있다.

```bash
scrcpy --record=demo.mp4 --max-size=720 --no-audio
```

`Ctrl+C` 로 종료하면 파일이 마무리된다.

### 에뮬레이터

에뮬레이터도 `adb` 가 그대로 붙는다. 여러 기기가 연결돼 있으면 `-s` 로 지정한다.

```bash
adb -s emulator-5554 shell screenrecord --time-limit 20 /sdcard/demo.mp4
```

## iOS

### 시뮬레이터 (macOS 전용)

```bash
xcrun simctl io booted recordVideo --codec=h264 demo.mov
```

`Ctrl+C` 로 종료. **Windows·Linux 에서는 불가능하다** — 이 경우 실기기 경로로 간다.

### 실기기

1. 아이폰 설정 → 제어 센터 → **화면 기록** 추가
2. 제어 센터에서 화면 기록 시작, 조작 후 종료
3. 사진 앱에 저장된 `.mov` 를 PC 로 옮긴다 (AirDrop, 케이블, 클라우드 무엇이든)
4. 아래 변환 단계로 넘어간다

macOS 가 있으면 케이블로 연결해 QuickTime Player → 새로운 동영상 녹화 → 소스를 아이폰으로
지정하는 방법이 화질이 가장 좋다.

## 변환 — mp4/mov → GIF

**팔레트 2-pass 를 쓴다.** 한 번에 변환하면 색이 뭉개진다.

```bash
# 1) 이 영상에 최적화된 팔레트를 뽑는다
ffmpeg -i demo.mp4 -vf "fps=12,scale=300:-1:flags=lanczos,palettegen=stats_mode=diff" -y palette.png

# 2) 팔레트를 적용해 GIF 를 만든다
ffmpeg -i demo.mp4 -i palette.png \
  -lavfi "fps=12,scale=300:-1:flags=lanczos[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=3" \
  -y demo.gif
```

파라미터 기준:

| 값 | 기준 |
| --- | --- |
| `fps` | 12가 기본. UI 전환만 보여줄 거면 10, 애니메이션이 중요하면 15 |
| `scale` | 모바일 스크린샷 테이블은 **300** (3열이면 280). 세로 영상은 `300:-1` |
| `bayer_scale` | 1~5. 낮을수록 디더링이 강하고 파일이 커진다. 3이 무난 |

구간을 자를 때는 입력 앞에 `-ss`(시작), `-t`(길이)를 둔다.

```bash
ffmpeg -ss 00:00:03 -t 8 -i demo.mp4 -vf "..." -y demo.gif
```

## 용량 줄이기

GitHub README 에 올릴 GIF 는 **한 개당 5MB 이하**를 목표로 한다. 넘으면 순서대로 시도한다.

1. 길이를 줄인다 (가장 효과가 크다 — 8초로 자른다)
2. `fps` 를 10으로 내린다
3. `scale` 을 280 으로 내린다
4. `gifsicle` 로 압축한다

```bash
gifsicle -O3 --lossy=80 --colors 128 demo.gif -o demo-min.gif
```

## 저장 위치

README를 쓰는 그 저장소 안에 둔다. 이미 이미지를 모아 둔 폴더가 있으면 거기에 맞추고,
없으면 `docs/`를 만든다.

```
docs/
  demo-signup.gif
  demo-feed.gif
```

레포에 커밋하지 않고 GitHub 이슈나 PR 본문에 드래그해서 올린
`user-attachments` URL 을 쓰는 방법도 흔하다 — 레포 용량을 먹지 않는다.
실측한 16개 중 절반이 이 방식이었다.

## 녹화 전 체크

- 상태바에 개인 정보(전화번호, 알림 내용)가 없는지
- 로그인 화면을 찍을 때 실제 계정 정보가 보이지 않는지
- 목적 없는 스크롤·머뭇거림을 잘라낼 수 있게 조작을 또박또박 할 것
