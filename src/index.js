import ReactDOM from 'react-dom'
import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import data from './assets/data'
import Tree from './components/Tree'

const App = () => (
  <>
    <GlobalStyles />
    {data.map((item, i) => {
      return (
        <div key={i}>
          {item.data && item.data.length > 0 ? (
            <Tree name={item.label} defaultOpen indicator={false}>
              {item.data &&
                item.data.map((item2, idx) => (
                  <Tree name={item2.label} uneven={idx % 2}>
                    {item2.data &&
                      item2.data.map((team, idxx) => (
                        <>
                          <Tree name={team.label} uneven={idxx % 2}>
                            {team.data &&
                              team.data.map((member, index) => (
                                <li style={{ backgroundColor: index % 2 === 0 ? '' : 'lightgray' }}>{member}</li>
                              ))}
                          </Tree>
                        </>
                      ))}
                  </Tree>
                ))}
            </Tree>
          ) : (
            <Tree name={item.label} />
          )}
        </div>
      )
    })}
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))


