import Link from 'next/link'
import * as S from './styles'

const TabContent = ({repositoriesLength}: any) => (
  <div className="main">
    <div className="offset"></div>
    <nav>
      <div className="content">
        <span className="label">Overview</span>
      </div>
      
      <div className="content active">
        <span className="label">Repositories</span>
        {
          repositoriesLength > 0 ? (
            <span className="number">{repositoriesLength}</span>
          ) : null
        }
      </div>
      <div className="content">
        <span className="label">Projects</span>
      </div>
      <div className="content">
        <span className="label">Packages</span>
      </div>
    </nav>
  </div>
);

export type TabProps = {
  mode: 'mobile' | 'desktop';
  repositoriesLength?: number
}

const Tab: React.FC<TabProps> = ({repositoriesLength = 0, mode }) => {
    return (
      <S.Container mode={mode}>
        <TabContent repositoriesLength={repositoriesLength} />
        {/* <span className="line" /> */}
      </S.Container>
    )
}

export default Tab;