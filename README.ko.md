

# 🎮 Mona Mayhem

### 시작 버튼을 누르고, 상대를 선택하세요. 기여도 대결을 시작합니다.

**GitHub Copilot**을 코딩 파트너로 삼아 GitHub 기여 활동을 일대일 대결로 바꾸는 레트로 아케이드 경기장을 만듭니다.

<a href="workshop/ko/00-overview.md"><strong>▶ 워크숍 시작하기</strong></a>
&nbsp; · &nbsp;
<a href="#다음-코딩-사이드-퀘스트">트랙 선택하기</a>
&nbsp; · &nbsp;
<a href="#로컬에서-실행하기">로컬에서 실행하기</a>

<p align="center">
  <img src="https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7" alt="Mona Mayhem 레트로 아케이드 기여도 배틀 경기장 미리 보기" width="900" />
</p>

> **워크숍 시작 프로젝트:** 이미지는 워크숍에서 만들 경기장을 미리 보여 줍니다. 이 저장소의 앱은 완성된 게임이 아니라 시작점입니다.

🌐 [English](README.md) | [Español](README.es.md) | [Português (Brasil)](README.pt_BR.md) | 한국어

## 다음 코딩 사이드 퀘스트

Mona Mayhem은 두 사용자의 GitHub 기여 활동을 비교하는 Astro 앱을 만드는 실습형 워크숍입니다. 시작 프로젝트에서 아케이드풍 경험으로 발전시키면서 계획 수립, AI 코딩 에이전트에 유용한 컨텍스트 제공, 반복 개발, 실제 프로젝트 다듬기를 연습합니다.

## 📚 워크숍

워크숍은 두 가지 트랙을 제공합니다. 선호하는 작업 방식에 맞는 트랙을 선택하십시오.

- **VS Code 트랙** — 편집기 안에서 채팅(Chat), 계획 모드(Plan Mode), 에이전트 모드(Agent Mode), 백그라운드 에이전트(Background agents), 편집기 내 검토 흐름을 실습합니다.
- **CLI 트랙** — 터미널에서 `copilot`, `@file` 컨텍스트, `/plan`, 자율 편집, `/fleet`, `/delegate`, `/review`를 실습합니다.

<details>
<summary>워크숍의 모든 레벨 보기</summary>

| 파트 | 레벨 | 진행 내용 |
|------|------|-----------|
| [00](workshop/ko/00-overview.md) | 개요 | 트랙을 선택하고 배울 내용을 확인합니다 |
| [01](workshop/ko/01-setup.md) | 설정 및 컨텍스트 엔지니어링 | 환경을 준비하고 Copilot에 유용한 컨텍스트를 제공합니다 |
| [02](workshop/ko/02-plan-and-scaffold.md) | 계획 및 스캐폴딩 | API와 페이지 아키텍처를 구상합니다 |
| [03](workshop/ko/03-agent-mode.md) | 게임 만들기 | 에이전트의 도움으로 아레나를 구현합니다 |
| [04](workshop/ko/04-design-vibes.md) | 디자인 우선 테마 구성 | 앱에 레트로 아케이드 스타일을 적용합니다 |
| [05](workshop/ko/05-polish.md) | 다듬기 및 병렬 작업 | 경험을 개선하고 병렬로 작업합니다 |
| [06](workshop/ko/06-bonus.md) | 보너스 및 확장 기능 | 추가 기능과 Copilot 실험을 시도합니다 |

</details>

두 트랙은 같은 프로젝트를 만듭니다. 원하는 워크플로를 선택하고 [워크숍 개요](workshop/ko/00-overview.md)를 따라 진행합니다.

[워크숍 개요를 열고 트랙을 선택하세요 →](workshop/ko/00-overview.md)

## 🚀 빠른 시작

1. 먼저 다음 방법 중 하나로 저장소를 만듭니다.
   - **Use this template**을 클릭해 새 저장소를 만들거나
   - 이 저장소를 포크합니다.
2. 원하는 워크숍 트랙을 선택합니다.
   - **VS Code:** 저장소를 복제하고 VS Code에서 엽니다.
   - **GitHub Copilot CLI:** 저장소를 로컬에 복제하고 `copilot`을 설치한 다음 터미널에서 작업합니다.
3. [워크숍 안내](workshop/ko/00-overview.md)를 따라 진행합니다.

### 준비물

### 공통

- GitHub Copilot(Pro, Business 또는 Enterprise)
- Git
- Node.js

### VS Code 트랙

- VS Code v1.107+
- GitHub Copilot 확장에 로그인

### CLI 트랙

- GitHub Copilot CLI(`copilot`)
- `npm install -g @github/copilot`으로 CLI를 설치하려면 Node.js 22+
- 또는 Homebrew나 WinGet 등 원하는 패키지 관리자로 설치

## 로컬에서 실행하기

```sh
npm install
npm run dev
```

Astro가 출력한 로컬 URL을 엽니다. 변경 사항을 공유하기 전에 앱을 확인하려면 다음을 실행합니다.

```sh
npm run lint
npm run build
```

## 기술 스택

- **프레임워크:** [Astro](https://astro.build/) v6
- **런타임:** [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/) 어댑터를 사용하는 Node.js
- **글꼴:** Press Start 2P(레트로 게임 글꼴)
- **API:** GitHub 기여 그래프 API

## 배포 참고 사항

### 현재 GitHub Pages 구성

현재 `.github/workflows/deploy.yml` 워크플로는 `docs/` 및 `workshop/`의 정적 콘텐츠를 GitHub Pages에 배포합니다. `src/`의 Astro 앱을 빌드하거나 배포하지는 않습니다.

### Astro 앱을 GitHub Pages에 배포하려는 경우

GitHub Pages는 정적 호스팅이므로 Astro 앱도 정적 출력을 사용해야 합니다.

1. `astro.config.mjs`의 `output`을 `server`에서 `static`으로 변경합니다.
2. `astro.config.mjs`와 `package.json`에서 Node 어댑터(`@astrojs/node`)를 제거합니다.
3. GitHub Actions 워크플로에서 `npm ci`와 `npm run build`를 실행한 다음, Pages 아티팩트로 `dist/`를 업로드하도록 변경합니다.
4. 프로젝트 페이지(`https://<user>.github.io/<repo>/`)에 배포한다면 `astro.config.mjs`에서 `site`와 `base`를 설정합니다.

프로덕션에서 API 라우트를 계속 실행해야 한다면 GitHub Pages 대신 Vercel, Netlify 또는 Node.js 호스트와 같은 서버 플랫폼을 사용합니다.

## 라이선스

MIT
