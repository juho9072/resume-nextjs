import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '헬스헬퍼: 헬스루틴 자동화 앱',
      startedAt: '2025-03',
      endedAt: '2025-08',
      where: '배재대학교_캡스톤디자인 프로젝트',
      descriptions: [
        {
          content:
            '사용자들이 좋아하는 인플루언서나 유명인의 운동루틴을 손쉽게 루틴 단위로 따라할 수 있고, 사용자에 맞게 조절할 수 있는 안드로이드용 앱 개발',
        },
        {
          content:
            '해당 아이디어를 기반으로 ICT 지능화혁신 아이디어 경진대회에서 장려상, 인기상을 수상함.',
        },
      ],
    },
    {
      title: '프로펠러 회전 상태로 승하차 가능한 도심항공교통 플랫폼',
      startedAt: '2024-01',
      where: '충남대학교',
      descriptions: [
        {
          content:
            '에어 택시와 이용자를 가장 효율적으로 연결하는 방법을 제시하며 도면 설계와 함께 발표를 진행함.',
        },
        {
          content:
            'DSC 스마트 모빌리티 발명 아이디어 경진대회에 참가해 장려상을 수상함. 참가한 모든 팀 중에서 구성원들의 소속 대학교가 모두 다른 유일한 팀이었음.',
        },
      ],
    },
    {
      title: '시각장애인용 스마트 지팡이',
      startedAt: '2023-11',
      where: '배재대학교',
      descriptions: [
        {
          content:
            '기존 지팡이의 사용 중 의존성이 높았던 점자 블록 탐지와 장애물 인식 문제를 개선하기 위해 실제 크기의 시제품을 제작해 아두이노를 사용하여 실제 부분적인 동작이 가능하도록 제작함.',
        },
        {
          content: '위 아이디어를 활용하여 메이커 페스티벌에서 금상(총장상)을 수상함.',
        },
      ],
    },
    {
      title: '누구나 편한 사용이 가능한 미니 키오스크 제작',
      startedAt: '2021-11',
      where: '우송대학교',
      descriptions: [
        {
          content: '아두이노와 스크린을 사용해 직접 시연이 가능한 미니 키오스크를 제작해 시연함.',
        },
        {
          content: '전국 고등학생 소트프웨어 창업 및 아이디어 경진대회에서 최우수상을 수상함.',
        },
      ],
    },
    {
      title: '피지컬 교구를 이용한 코딩 경진대회',
      startedAt: '2021-11',
      where: '한밭대학교',
      descriptions: [
        {
          content:
            '주어진 문제 상황을 가장 효과적으로 해결할 수 있는 방안을 떠올리고, 이를 수행할 수 있는 프로그래밍을 진행해 주어진 트랙을 주행한 뒤 이를 측정함.',
        },
        {
          content: '청소년 나Be 한마당 메이커 경연대회에 참가해 은상을 수상함.',
        },
      ],
    },
    {
      title: '한국청소년학술대회 KSCY 연구 참관 프로그램 수료',
      startedAt: '2021-11',
      where: 'KSCY',
      descriptions: [
        {
          content:
            '온라인 컴퍼런스로 진행되는 논문발표트랙 및 멘토링트랙을 진행하며 다양한 학교와 학생들의 학술적으로 완성도 높은 결과물들에 대한 토론을 진행함.',
        },
      ],
    },
    {
      title: '서울대학교 4차산업혁명과 혁신교육 하계 캠프 수료',
      startedAt: '2018-08',
      where: '서울대학교',
      descriptions: [
        {
          content:
            '2박 3일 동안 여러 교수와 연구원들의 강의를 들으며 다양한 프로그램 활동을 진행함.',
        },
      ],
    },
    {
      title: '인삼잎 계폐를 조절할 수 있는 생육장치에 대한 연구',
      startedAt: '2018-05',
      where: '대전교육과학연구원',
      descriptions: [
        {
          content:
            '인위적인 환경을 마련하여 다양한 조건에서 인삼의 잎 기공을 인위적으로 계폐할 수 있는지 연구를 진행하고 발표함.',
        },
        {
          content: '제30회 대전광역시 과학 전람회에서 교육감상을 수상함.',
        },
      ],
    },
    {
      title: '골든타임: 5차 산업혁명과 로봇',
      startedAt: '2017-09',
      where: '한국학교로봇진흥회, 교육부, 과기부, 광운대',
      descriptions: [
        {
          content:
            '출동시스템에서부터 구조, 응급처리, 수술, 환자 관리까지의 과정을 시스템으로 표현함.',
        },
        {
          content: '제14회 전국학생로봇경진대회에서 로봇창작 부분 금상을 수상함.',
        },
      ],
    },
    {
      title: '연필을 떨어트리면 왜 항상 심이 있는 곳으로 부딪히는지에 대한 연구',
      startedAt: '2016-05',
      where: '대전교육과학연구원',
      descriptions: [
        {
          content:
            '직접 다양한 종류의 연필을 제작하여 떨어지는 순간을 실험하고 이에 대한 연구를 진행한 뒤 발표함.',
        },
        {
          content: '제28회 대전광역시 과학 전람회에서 교육감상을 수상함.',
        },
      ],
    },
    {
      title: '두께조절 보드마카',
      startedAt: '2014-04',
      where: '대전교육과학연구원',
      descriptions: [
        {
          content:
            '보드마카의 두께를 조절할 수 있는 아이디어를 구상하고 이를 직접 3D프린터를 이용해 다양한 시제품을 만들어 효과와 성능을 검증함',
        },
        {
          content: '제26회 대전광역시 학생 과학발명품 경진대회에서 교육감상을 수상함.',
        },
      ],
    },
    {
      title: '삼투압 보드마카',
      startedAt: '2013-04',
      where: '대전교육과학연구원',
      descriptions: [
        {
          content:
            '보드마카의 뚜껑을 열고 있어도 잉크가 마르지 않을 수 있는 아이디어를 구상하고 이를 직접 3D프린터를 이용해 다양한 시제품을 만들어 효과와 성능을 검증함.',
        },
        {
          content: '제25회 대전광역시 학생 과학발명품 경진대회에서 교육감상을 수상함.',
        },
      ],
    },
  ],
};

export default project;
