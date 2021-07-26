import React from 'react'

export default function Layout({heading,children}) {
    return (
        <div>
            <div>{heading}</div>
            <div>
                    {
                        children
                    }
            </div>
        </div>
    )
}
