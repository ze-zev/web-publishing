const hotIssueul = document.querySelector(".hotIssue");
const newIssueul = document.querySelector(".newIssue");
const voiceul = document.querySelector(".voice_contents");
const pickul = document.querySelector(".pick_contents > ul");

let hotIssue = [
  {
    id: 0,
    text1: `스타들이 선택한 빅 백 6`,
    text2: `보부상 아니어도 탐날 걸?`,
    url: `images/issue/hot_issue01.jpg`,
  },
  {
    id: 0,
    text1: `다시, 디올`,
    text2: `흥미로운 실루엣에 녹아든 깊은 탐미의 순간`,
    url: `images/issue/hot_issue02.jpg`,
  },
  {
    id: 0,
    text1: `잠자기 위한 여행을 떠나는 사람들`,
    text2: `고급 침구와 암막 커튼을 뛰어넘는 수면 프로그램`,
    url: `images/issue/hot_issue03.jpg`,
  },
];
let newIssue = [
  {
    id: 0,
    text1: `사랑스러운 케미스트리!`,
    text2: `닥터슬럼프 박신혜, 박형식`,
    url: `images/issue/new_issue01.jpg`,
  },
  {
    id: 0,
    text1: `#취향의발견_1`,
    text2: `다이어리 vs 파자마, 독자가 꼽은 하루 마무리 아이템은?`,
    url: `images/issue/new_issue02.jpg`,
  },
  {
    id: 0,
    text1: `따끈따끈한 신상 브런치 맛집 3`,
    text2: `맨날 가던 곳 말고 새로운 브런치 카페를 찾고 있다면?`,
    url: `images/issue/new_issue03.jpg`,
  },
];
let voice = [
  {
    id: 0,
    text: `[엘르보이스] 짜잔! 40대의 삶. 솔직하게 풀어낸 노화의 슬픔, 그리고 귀여움`,
    url: `images/voice/voice01.jpg`,
  },
  {
    id: 0,
    text: `비비안 웨스트우드의 가장 반항적인 순간들_요주의여성 #78`,
    url: `images/voice/voice02.jpg`,
  },
  {
    id: 0,
    text: `프로는 짜릿해_요주의여성 #75`,
    url: `images/voice/voice03.jpg`,
  },
  {
    id: 0,
    text: `[엘르보이스] 이게 다 내가 먹은 것 때문이라고...? 퍼스널 트레이닝 잔혹사`,
    url: `images/voice/voice04.jpg`,
  },
  {
    id: 0,
    text: `[엘르보이스] 내 몸을 사랑하지 않으면서 걸그룹을 사랑할 수 있을까? 그 복잡한 마음에 대해`,
    url: `images/voice/voice05.jpg`,
  },
  {
    id: 0,
    text: `[엘르보이스] 결혼할 결심`,
    url: `images/voice/voice06.jpg`,
  },
  {
    id: 0,
    text: `엄마의 해방을 이야기하다, 한국형 SF 넷플릭스 영화 '정이'_요주의여성 #79  `,
    url: `images/voice/voice07.jpg`,
  },
  {
    id: 0,
    text: `마고 로비가 꼭 <바빌론>의 넬리여야 했던 이유_요주의여성 #80`,
    url: `images/voice/voice08.jpg`,
  },
];
let pick = [
  {
    id: 0,
    text1: `패션 매거진 〈엘르〉 2월호 커버`,
    text2: `여전히 보여주고 싶은 색깔이 많은 한소희가 엘르 카메라 앞에 섰다.`,
    text3: `STAR`,
    url: `images/pick/pick07.jpg`,
  },
  {
    id: 0,
    text1: `품절 대란! '센녹' 담당자는 여기서 영감을 얻는다?`,
    text2: `트렌디한 감각과 명확한 컨셉트, 탁월한 제품력으로 전 세계 '코덕'들의 마음을 매료시키고 있는 K뷰티 브랜드! <엘르>가 그 열풍의 주역들을 만나 그들의 아카이브와 영감이 집약된 무드보드를 살펴본다. 첫 번째 주자는 깨끗한 인상을 주는 하늘색 패키지와 볼드한 로고가 시선을 끄는 '센녹'이다.`,
    text3: `SKINCARE`,
    url: `images/pick/pick02.jpg`,
  },
  {
    id: 0,
    text1: `2월에 전격 데뷔하는 NCT WISH가 누구?`,
    text2: `NCT의 세계관은 계속된다.`,
    text3: `CELEB NEWS`,
    url: `images/pick/pick05.jpg`,
  },
  {
    id: 0,
    text1: `넥크림, 아직도 안 발라?`,
    text2: `올해엔 기필코 목주름과 이별을 고하리.`,
    text3: `SKINCARE`,
    url: `images/pick/pick03.jpg`,
  },
  {
    id: 0,
    text1: `한파도 두렵지 않은 머플러 스타일링 5`,
    text2: `매서운 겨울 바람을 막아주면서 스타일까지 챙겨 주는 기특한 아이템! 셀러브리티의 윈터 룩에서 포착한 머플러 스타일링을 소개할게요.`,
    text3: `HOW TO`,
    url: `images/pick/pick08.jpg`,
  },
  {
    id: 0,
    text1: `아이유의 신곡 제목이 변경된다`,
    text2: `'Love wins all'`,
    text3: `STAR`,
    url: `images/pick/pick01.jpg`,
  },
  {
    id: 0,
    text1: `졸업생도 다시 다니고 싶은 학교 건물 3`,
    text2: `건축상 받은 학교라면 가능`,
    text3: `LOVE&LIFE`,
    url: `images/pick/pick09.jpg`,
  },
  {
    id: 0,
    text1: `넌 립밤 발라? 난 립세린 발라`,
    text2: `전에 없던 입술 케어의 끝판왕 카테고리, '립세린'이 탄생했다.`,
    text3: `MAKE-UP`,
    url: `images/pick/pick04.jpg`,
  },
  {
    id: 0,
    text1: `비트코인이 돌아왔다`,
    text2: `#돈쓸신잡 133`,
    text3: `SOCIETY`,
    url: `images/pick/pick10.jpg`,
  },
  {
    id: 0,
    text1: `생일 맞이 근황 대방출!`,
    text2: `1인 기획사 사무실부터 여전한 블랙핑크 우정까지 공개한 제니`,
    text3: `CELEB NEWS`,
    url: `images/pick/pick06.jpg`,
  },
  {
    id: 0,
    text1: `4인4색 남성복 스타일, 당신의 선택은?`,
    text2: `2024 FW 밀라노 남성복 패션위크에서 포착한 네 가지 트렌드.`,
    text3: `DESIGNERS`,
    url: `images/pick/pick11.jpg`,
  },
  {
    id: 0,
    text1: `새해 에너지를 북돋워줄 청룡의 기운으로!`,
    text2: `2024년은 청룡의 해.`,
    text3: `ACCESSORIES`,
    url: `images/pick/pick12.jpg`,
  },
  {
    id: 0,
    text1: `신년운세가 궁금해?`,
    text2: `2024년 모든 별자리는 명왕성이 가져오는 변화를 피할 수 없다.`,
    text3: `TRENDS`,
    url: `images/pick/pick13.jpg`,
  },
  {
    id: 0,
    text1: `도쿄에서 만난 조금 특별한 아웃도어`,
    text2: `#도쿄핫플`,
    text3: `ACCESSORIES`,
    url: `images/pick/pick14.jpg`,
  },
  {
    id: 0,
    text1: `정은지와 '싱어게인3' 소수빈이 찐친이었다고?!`,
    text2: `(ft. 파이널 결과)`,
    text3: `STAR`,
    url: `images/pick/pick15.jpg`,
  },
];
function hotList() {
  let htmlempty = ``;
  for (let i = 0; i < hotIssue.length; i++) {
    htmlempty += `<li>
    <a href="javascript:void(0)">
      <div class="issue_img">
        <img
          src="./${hotIssue[i].url}"
          alt="${hotIssue[i].text1}"
        />
      </div>
      <div class="issue_text">
        <h3>${hotIssue[i].text1}</h3>
        <p>${hotIssue[i].text2}</p>
      </div>
    </a>
  </li>`;
    hotIssueul.innerHTML = htmlempty;
  }
}
function newList() {
  let htmlempty = ``;
  for (let i = 0; i < newIssue.length; i++) {
    htmlempty += `<li>
    <a href="javascript:void(0)">
      <div class="issue_img">
        <img
          src="./${newIssue[i].url}"
          alt="${newIssue[i].text1}"
        />
      </div>
      <div class="issue_text">
        <h3>${newIssue[i].text1}</h3>
        <p>${newIssue[i].text2}</p>
      </div>
    </a>
  </li>`;
    newIssueul.innerHTML = htmlempty;
  }
}
function voiceList() {
  let htmlempty = ``;
  for (let i = 0; i < voice.length; i++) {
    htmlempty += `<li><a href="javascript:void(0)">
    <div class="voice_img">
      <img
        src="./${voice[i].url}"
        alt="${voice[i].text}"
      />
    </div>
      <h3>${voice[i].text}</h3>
   
  </a></li>`;
    voiceul.innerHTML = htmlempty;
  }
}
function pickList() {
  let htmlempty = ``;
  for (let i = 0; i < pick.length; i++) {
    htmlempty += ` <li>
    <a href="javascript:void(0)">
      <div class="pick_img">
        <img
          src="./${pick[i].url}"
          alt="${pick[i].text1}"
        />
      </div>
      <div class="pick_text">
        <h4>${pick[i].text3}</h4>
        <h3>${pick[i].text1}</h3>
        <p>${pick[i].text2}</p>
      </div>
    </a>
  </li>`;
    pickul.innerHTML = htmlempty;
  }
}
voiceList();
hotList();
newList();
pickList();
