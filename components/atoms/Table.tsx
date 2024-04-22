'use client'


import { AwaitedReactNode, HTMLAttributes, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react'


interface TableProps extends HTMLAttributes<HTMLDivElement> {
  headers: string[]
  items: any[]
  htmlAttributes?: Partial<React.HTMLAttributes<any>>
}

type TipoMid = string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined

export function Table ({
  headers,
  items = [],
  ...htmlAttributes
}: TableProps): React.JSX.Element {
  return (
    <>
      <div {...htmlAttributes} >
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {
                items.map((item, index) => (
                  <tr key={index}>
                    {
                      item.map(
                        (data: TipoMid, dataIndex: Key | number) => (
                          <td key={dataIndex}>{data}</td>
                        )
                      )
                    }
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
