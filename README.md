# **📖 2주차 과제 2 - Best Practice**

### **과제목적 :** B2C 차량대여 서비스 **구축 후 Best Pratice 산출**

> 기간 :2022년 11월 1일(화) - 2022년 11월 4일(금)
> 

**📎[배포링크 바로가기](https://preonboarding-team-6.herokuapp.com/)**


# **👨‍👩‍👧‍👦 Members**

| 최승진<br/>(팀장)                                                                                     | 임준홍<br/>(부팀장)                                                                                 | 문도연<br/>(서기)                                                                                        | 최원오<br/>(부서기)                                                                                     | 소윤호<br/>(부서기)                                                                                 | 선민경<br/>(팀원)                                                                                       | 곽현<br/>(팀원)                                                                                         | 이유진<br/>(팀원)                                                                                       |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/46988995?v=4" alt="tooooo1" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/67459853?v=4" alt="helen" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/102936206?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/99406837?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/30254570?v=4" alt="flora" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/76088728?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/73919235?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/42020919?v=4" alt="magictaro" width="60" height="60"> |
| yondo123                                                                                              | tesseractjh                                                                                         | Moondoyeon                                                                                               | choi1five                                                                                               | younhoso                                                                                            | seonsy44                                                                                                | kwakhyun                                                                                                | 2ujin                                                                                                      |

# **🖥 Demo**

![vehicle-rental-service](https://user-images.githubusercontent.com/102936206/199866137-7cb136f3-2165-4080-a2c7-c17df18fb068.gif)


# **⚡️ Skills**


<div>

![TypeScript](https://img.shields.io/badge/TypeScript-2F74C0.svg?&style=for-the-badge&logo=TypeScript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![axios](https://camo.githubusercontent.com/23392fa4fc3ffb6ade29cba7aaffa7741daeb97012c70a062cf2370187d6519e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6178696f732d4646434132383f7374796c653d666f722d7468652d6261646765266c6f676f3d6178696f73266c6f676f436f6c6f723d7768697465)
![react-router-dom](https://camo.githubusercontent.com/59772064d7f01d32dfc280518690c95d858dce068a58be142b2ac003ef31642c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163745f726f757465725f646f6d2d4341343234353f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374726f75746572266c6f676f436f6c6f723d7768697465)
  <img alt="Node.js" width="100px" src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/>
</div>


# **🚀 기능요구사항**

- 필수 요구 사항
    - Figma 상의 디자인 및 기능 구현
        - 지정된 조건(segment, fuelType)에 맞게 데이터 요청 및 표시
        - 카테고리(좌우 슬라이드)
        - 신규 차량 표시(생성일 기준 1일 이내)
    - 차량 리스트(차량 없을 때, 차량 불러오는 중 처리), 차량 상세
    - 모바일 웹 기준으로 제작
- 추가 구현 사항
    - SEO

# 📦 파일 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📜Container.tsx
 ┃ ┣ 📜Header.tsx
 ┃ ┣ 📜SectionList.tsx
 ┃ ┣ 📜TagLarge.tsx
 ┃ ┣ 📜TagRaw.tsx
 ┃ ┗ 📜TagSmall.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useGetVehicles.ts
 ┣ 📂pages
 ┃ ┣ 📂Error
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂VehicleDetail
 ┃ ┃ ┣ 📜SectionHeader.tsx
 ┃ ┃ ┣ 📜SectionItem.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂VehicleList
 ┃ ┃ ┣ 📜Category.tsx
 ┃ ┃ ┣ 📜VehicleItem.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.ts
 ┃ ┣ 📜mixin.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂types
 ┃ ┗ 📜index.ts
 ┣ 📂utils
 ┃ ┣ 📜axiosInstance.ts
 ┃ ┣ 📜const.ts
 ┃ ┗ 📜utils.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

# **👍 Best Practice**



## 1. 기능 추상화



### 1-1. VehicleList(차량 목록) 컴포넌트

- api 요청 로직을 hook으로 분리하여 컴포넌트 내에서는 api 요청 과정이 드러나지 않음
    - getVehicles 함수만으로 이 컴포넌트 내에서 vehicles(차량 목록)를 가져온다는 사실을 명시
- getSegment 함수에 searchParams를 전달하여 컴포넌트 내에서 차종을 치환하는 과정이 드러나지 않음
- 컴포넌트의 추상화 수준이 같은 레벨이 되도록 함 (Header, Cartegory, Notice, VehicleItem)
- 코드 설계 방식
    
    ```tsx
    function VehicleList() {
      const { isLoading, vehicles, getVehicles } = useGetVehicles();
      const [searchParams, setSearchParams] = useSearchParams();
      const segment = useMemo(() => getSegment(searchParams), [searchParams]);
    
      useEffect(() => {
        getVehicles({ segment });
      }, [segment]);
    
      return (
        <Container customStyle={ContainerStyle}>
          <Header title="전체차량" />
          <Category segment={segment} setSearchParams={setSearchParams} />
          {isLoading && <Notice>불러오는 중</Notice>}
          {!isLoading && vehicles?.map((vehicle) => <VehicleItem key={vehicle.id} vehicle={vehicle} />)}
          {!isLoading && !vehicles?.length && <Notice>차량이 없습니다.</Notice>}
        </Container>
      );
    }
    
    export default VehicleList;
    ```
    
    ```tsx
    function useGetVehicles() {
      const [isLoading, setIsLoading] = useState(false);
      const [vehicles, setVehicles] = useState<VehicleBasic[]>([]);
      const navigate = useNavigate();
    
      const getVehicles = async (params?: GetVehicleValues) => {
        setIsLoading(true);
    
        const {
          data: { payload },
          status,
        }: ResponseValues = await axiosInstance.get('/cars', { params });
    
        if (status >= 200 && status < 300) {
          setVehicles(payload);
          setIsLoading(false);
        } else {
          navigate('/error', { state: { status } });
          setIsLoading(false);
        }
      };
    
      return { isLoading, vehicles, getVehicles };
    }
    
    export default useGetVehicles;
    ```
    

### 1-2. VehicleDetail(차량 상세) 컴포넌트

- SectionList 컴포넌트를 만들어 list의 item들을 렌더링하는 과정이 드러나지 않음
- 코드 설계 방식
    
    ```tsx
    function VehicleDetail() {
      const [sections, setSections] = useState<SectionsValues[]>([]);
      const renderSectionHeader = (section: { title: string }) => <SectionHeader section={section} />;
      const renderSectionItem = (item: { item?: string; content: string }) => <SectionItem item={item} />;
    	
    	...
    
      return (
        <>
    			...
          <Container>
            <Header title="차량상세" hasBackButton />
            <Image alt={vehicle.attribute.name} src={vehicle.attribute.imageUrl} />
            <Title>
              <div>{vehicle.attribute.brand}</div>
              <div>{vehicle.attribute.name}</div>
            </Title>
            <SectionItem item={{ content: `월 ${vehicle.amount.toLocaleString()} 원` }} />
            <SectionList sections={sections} renderSectionHeader={renderSectionHeader} renderItem={renderSectionItem} />
          </Container>
        </>
      );
    }
    
    export default VehicleDetail;
    ```
    
    ```tsx
    function SectionList({ sections, renderSectionHeader, renderItem }: SectionListProps) {
      return (
        <>
          {sections?.map((section) => (
            <React.Fragment key={section.title}>
              {renderSectionHeader(section)}
              {section.data?.map((item) => (
                <React.Fragment key={item.key}>{renderItem(item)}</React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </>
      );
    }
    
    export default SectionList;
    ```
    
- 결과물
    
  ![스크린샷 2022-11-04 오전 12 32 22](https://user-images.githubusercontent.com/102936206/199866580-af2de34e-2f3a-4102-8358-803c6f300c8e.png)

    

## 2. 상태 관리



### 2-1. useState로 차량 응답 데이터 관리

- 차량 목록 화면과 차량 상세 화면, 두 화면에 대한 상태를 관리함에 있어 상태관리 툴을 사용하지 않고도 기능 구현이 가능하다고 판단함
    - useGetVehicles hook 내에서 vehicles state를 선언, 차량목록 컴포넌트로부터 쿼리파라미터(segment) 를 전달받아 서버에 요청한 후, 응답 데이터를 setVehicles에 전달해 state를 갱신
    - 갱신된 state는 차량 목록 컴포넌트에 보여지게 됨

```tsx
function useGetVehicles() {
  const [isLoading, setIsLoading] = useState(false);
  const [vehicles, setVehicles] = useState<VehicleBasic[]>([]); // state
  const navigate = useNavigate();

  const getVehicles = async (params?: GetVehicleValues) => { // 서버 통신 함수
    setIsLoading(true);

    const {
      data: { payload },
      status,
    }: ResponseValues = await axiosInstance.get('/cars', { params });

    if (status >= 200 && status < 300) {
      setVehicles(payload); // state 갱신
      setIsLoading(false);
    } else {
      navigate('/error', { state: { status } });
      setIsLoading(false);
    }
  };

  return { isLoading, vehicles, getVehicles };
}
```

```tsx
function VehicleList() {
  const { isLoading, vehicles, getVehicles } = useGetVehicles();
	...
  useEffect(() => {
    getVehicles({ segment }); // 파라미터 전달
  }, [segment]);

  return (
      ...
      {!isLoading && vehicles?.map((vehicle) => <VehicleItem key={vehicle.id} vehicle={vehicle} />)}
      ...
  );
}
```

## **3.** UI/UX



### 3-1. UI 컴포넌트의 재사용성

- Tag | 공통적인 부분을 Raw 컴포넌트에 작성하고 customStyle을 prop으로 받아 사용
    
    ```tsx
    function TagRaw({ content, customStyle, onClick }: TagRawProps) {
      return (
        <Container customStyle={customStyle} onClick={onClick}>
          {content}
        </Container>
      );
    }
    
    export default TagRaw;
    
    const Container = styled.div<{ customStyle: FlattenInterpolation<ThemeProps<unknown>> }>`
      ${flexBox()};
      border-radius: 50px;
      font-weight: 700;
      ${({ customStyle }) => customStyle};
    `;
    
    ```
    
    ```tsx
    function TagLarge({ content, isActive = false, onClick, customStyle }: TagLargeProps) {
      return <TagRaw content={content} customStyle={TagLargeStyle(isActive, customStyle)} onClick={onClick} />;
    }
    
    export default TagLarge;
    
    const TagLargeStyle = (isActive: boolean, customStyle: FlattenInterpolation<ThemeProps<unknown>> | undefined) => css`
      width: 62px;
      height: 27px;
      padding-top: 1px;
      background-color: ${({ theme }) => (isActive ? theme.black : theme.gray)};
      font-size: 14px;
      color: ${({ theme }) => (isActive ? theme.white : theme.black)};
      ${customStyle && customStyle};
    `;
    ```
    
    ```tsx
    // TagLarge 사용예시
    function Category({ setSearchParams, segment }: CategoryProps) {
      ...
    
      return (
        <Container>
          {vehicleSegmentCategory.map((tag) => (
            <TagLarge
              key={tag.id}
              content={tag.content}
              isActive={activeTag === tag.segment}
              onClick={handleClick(tag.segment)}
              customStyle={TagLargeStyle}
            />
          ))}
        </Container>
      );
    }
    
    export default Category;
    
    const TagLargeStyle = css`
      flex: 0 0 auto;
      margin-right: 8px;
      cursor: pointer;
    `;
    ```
    

## **4. 스타일**



### 4-1. **GlobalStyle, theme**

```jsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  	margin: 0;
  	padding: 0;
  	border: 0;
  	font-size: 100%;
  	font: inherit;
  	vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
  	display: block;
  }
  body {
  	line-height: 1;
  }
	...

export default GlobalStyle;
```

```jsx
export const flexBox = (direction = 'row', justify = 'center', align = 'center') => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;

export const responsive = (device: 'phone' | 'desktop') => {
  switch (device) {
    case 'phone':
      return `@media screen and (max-width: 450px)`;
    case 'desktop':
      return `@media screen and (min-width: 451px)`;
    default:
      return '';
  }
};
```

```jsx
export const colors = {
  black: '#000000',
  gray: '#D9D9D9',
  blue: '#0094FF',
  white: '#FFFFFF',
};

export const padding = {
  paddingHorizontal: '20px',
  paddingVertical: '20px',
};
```

- Styled Components 전역 스타일링을 사용하여 중복되는 스타일 코드 관리
- mixin 파일에서 기본적인 `flex` 스타일과 화면 크기 조정
- `theme` 을 사용하여 컬러와 padding 관리

## 5. SEO


- express를 이용하여 client 요청이 들어올 시 mteattag를 서버쪽에서 바꿔서 다시 내려주는(replace) 형태로 구현했습니다.

```tsx
app.get('/vehicles/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const html = fs.readFileSync(path.resolve(__dirname, './build/index.html'), 'utf-8').toString().trim();
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}cars`);
    const {
      amount,
      attribute: { brand, name, imageUrl },
    } = data.payload.find(({ id: vehicleId }) => id === vehicleId.toString());

    res.send(
      html.replace(
        '</head>',
        `
      <meta property="og:type" content="website" />
      <meta property="og:url" content="${`${process.env.DEPLOY_URL}vehicles/${id}`}" />
      <meta property="og:title" content="${`${brand} ${name}`}" />
      <meta property="og:description" content="${`월 ${amount.toLocaleString()} 원`}" />
      <meta property="og:image" content="${imageUrl}" />
      </head>
    `
      )
    );
  } catch {
    res.sendFile(path.resolve(__dirname, './build/index.html'));
  }
});
```
- 결과물

![unknown (1)](https://user-images.githubusercontent.com/102936206/199866666-79d07755-b5ee-4a49-8f16-8c7eb73aa041.png)


# **📢 프로젝트 실행방법**

실행할 때 반드시 다음 파일을 최상단에 생성후 실행 해주셔야 합니다.

```jsx
// .env.local
REACT_APP_BASE_URL="https://preonboarding.platdev.net/api/"
DEPLOY_URL ="https://preonboarding-vehicle-rental.herokuapp.com/"
```

```jsx
// 설치
npm install

// 실행
npm start
```

# **📚 팀 규칙**

- **📕 Git commit convention**
    
    
    | rule | 설명 |
    | --- | --- |
    | Feat | 새로운 기능 추가 |
    | Fix | 버그 고친 경우 |
    | Design | css 수정 |
    | Chore | 빌드 업무 수정, 패키지 매니저 수정 |
    | !HOTFIX | 급하게 치명적인 버그를 고쳐야하는 경우 |
    | Docs | 문서 수정 |
    | Style | 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우 |
    | Rename | 파일 및 폴더 구조 변경 |
    | Refactor | 코드 리팩토링 |
    | Test | 테스트 코드, 리팩토링 테스트 코드 추가 |
    | Remove | 파일 삭제 |
    | Modify | 코드 단순 수정 |
- **📘 Git branch strategy**
- main (배포/운영) ← develop (통합 개발) ← feat-개발내용 (단위 개발)
