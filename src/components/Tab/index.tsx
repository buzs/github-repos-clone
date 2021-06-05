import Link from 'next/link'
import * as S from './styles'

const TabContent = ({repositoriesLength}: any) => (
  <>
    <div className="content">
      <span className="label">Overview</span>
    </div>
    <div className="content active">
      <span className="label">Repositories</span>
      <span className="number">{repositoriesLength}</span>
    </div>
    <div className="content">
      <span className="label">Projects</span>
    </div>
    <div className="content">
      <span className="label">Packages</span>
    </div>
  </>
);

const Tab = ({repositoriesLength}: any) => {
    return (
      <S.Container>
        <TabContent repositoriesLength={repositoriesLength} />
        {/* <span className="line" /> */}
      </S.Container>
    )
}

export default Tab;