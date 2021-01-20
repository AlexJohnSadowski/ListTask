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

// const recurrencyRenderTree = (tree) => {
//   const NewTree = () =>  (
//     <>
//       {tree?.data.map((nestedTree, index) => (
//         <Tree name={tree.label}>
//           {tree?.data && tree.data.length > 0 ? (
//             <>{recurrencyRenderTree(nestedTree)}</>
//           ) : (
//             <li style={{ backgroundColor: index % 2 === 0 ? '' : 'lightblue' }}>{tree.label}</li>
//           )}
//         </Tree>
//       ))}
//     </>
//   )
//   NewTree.displayName = tree.label

//   return NewTree
// }

// class RecurrenceTree extends React.Component {

//   render() {

//     const { tree } = this.props

//     return (
//       <Tree name={tree.label}>
//         {tree.data.map((nestedTree, index) =>
//           <>
//             {nestedTree?.data.length ? (
//               <RecurrenceTree tree={nestedTree}/>
//             ) : (
//               <li style={{ backgroundColor: index % 2 === 0 ? '' : 'lightblue' }}>{tree.label}</li>
//             )}
//           </>
//         )}
//       </Tree>
//     )

//   }

// }

// const RecurrenceTreex = ({ tree }) => (
//   <>
//       {tree?.data.map((nestedTree, index) => (
//         <Tree name={tree.label}>
//           {tree?.data && tree.data.length > 0 ? (
//             <RecurrenceTree tree={nestedTree} />
//           ) : (
//             <li style={{ backgroundColor: index % 2 === 0 ? '' : 'lightblue' }}>{tree.label}</li>
//           )}
//         </Tree>
//       ))}
//     </>
// )

const RecursiveTree = ({ tree, uneven }) => {
  const hasChildren = tree.data && tree.data.length > 0

  // {hasChildren ? (
  {
    /* <RecursiveTree key={item.label} tree={item} uneven={index % 2} /> */
  }
  return (
    <>
      {tree.data.map((item, index) => {
        const hasChildren = item.data && item.data.length > 0

        return (
          <>
            {hasChildren ? (
              <Tree name={item.label} defaultOpen>
                <RecursiveTree tree={item} uneven={index % 2} />
              </Tree>
            ) : (
              <Tree name={tree.label} />
            )}
          </>
        )
      })}
      {/* ) : (
        <Tree name={tree.label} />
      )} */}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// {info.division.map((divi, idx) => (
//   <Tree name={divi.title}>
//     {divi.departments.map((department, index) => (
//       <li style={{ backgroundColor: index % 2 === 0 ? '' : 'lightblue' }}>{department}</li>
//     ))}
//     {divi.data((team) => (
//       <>
//         {data && data.length ? (
//           <Tree name={team.label}>
//             {team.members.map((member, index) => (
//               <li style={{ backgroundColor: index % 2 === 0 ? '' : 'lightblue' }}>{member}</li>
//             ))}
//           </Tree>
//         ) : (
//           <li style={{ backgroundColor: index % 2 === 0 ? '' : 'lightblue' }}>{member}</li>
//         )}
//       </>
//     ))}
//   </Tree>
// ))}
