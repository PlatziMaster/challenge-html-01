import React from 'react'
import '../styles/components/Layout.styl'
import Cart from './Cart'
import data from '../data'

const Layout = () => {
  return (
    <div className="layout">
      {data.map(item => {
        return (
          <Cart
            key={item.id}
            className={item.className}
            img={item.img}
            title={item.title}
            description={item.description}
            tag={item.tag}
          />
        )
      })}
    </div>
  )
}

export default Layout