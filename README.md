#  BoardGame Haja


##  프로젝트 소개
BoardGame Haja는 보드게임 정보를 확인하기 위해 제작되었습니다. 인기 보드게임 리스트, 보드게임 정보, 보드게임 검색, 인근 보드게임 카페 정보를 확인할 수 있습니다.

[페이지 링크](https://boardgame-haja.netlify.app/)
  

## 기술 스택
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img  alt="Styled-Components"  src="https://img.shields.io/badge/Styled Components-DB7093.svg?&style=for-the-badge&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

## 구현 기능
### 1. BGG XML API(보드게임 API)
- 보드게임 정보를 얻기 위해 해외의 오픈 API인 BGG(Board Game Geek) XML API를 사용
- 해당 API는 XML로 정보가 주어지기에 xml2js라이브러리를 사용해 JSON 정보로 변환하여 사용
- 홈페이지에서 **인기 보드게임 50개**의 리스트를 확인하고, 보드게임 선택 시 해당 보드게임의 정보를 확인할 수 있음
- 헤더의 검색 탭을 통해 보드게임 이름으로 **보드게임을 검색**할 수 있음.
-- 검색결과가 많으면 *페이지네이션*을 통해 검색결과를 보여줌
-- 검색 도중에는 로딩 중 표시가 나오며, 검색값 입력 시 바로 해당 검색어로 검색이 됨
- 보드게임 정보페이지는 이름, 발행년도, 플레이수, 플레이시간, 권장연령, 설명을 확인할 수 있음
### 2. 근처 보드게임 카페
- **카카오맵 API**를 사용하여 현재 위치(위치 정보 실패 시, 기본위치 서울역)를 기준으로 근처 보드게임 카페의 정보를 보여줌
- 헤더에 Nearby Cafe 버튼을 누르면 확인할 수 있음
- 가장 인근에 있는 보드게임카페 정보를 바로 확인할 수 있음
- 보드게임 카페가 나온 마커 선택 시, 보드게임 정보가 담긴 인포윈도우 생성 
-- 윈포윈도우 생성 시, 윈포윈도우가 일부가 가려지지 않게 지도의 바운드가 자동으로 이동함
