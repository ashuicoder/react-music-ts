import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import { AppHeaderWrapper, Logo, HotIcon } from './style'

import { headerLinks } from 'api/local-data'

import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const AppHeader = memo(() => {
  const activeClass = ({ isActive }) => {
    return classNames('link h-full flex item-center text-grey2', isActive ? 'active' : '')
  }
  return (
    <AppHeaderWrapper>
      <div className="wrap-v1 top flex item-center">
        <a href="/#">
          <Logo className="sprite-01"></Logo>
        </a>
        <div className="flex-1 flex h-full item-center">
          {headerLinks.map((item, index) => {
            if (!item.outSide) {
              return (
                <NavLink className={activeClass} to={item.link} key={item.title}>
                  {item.title}
                </NavLink>
              )
            } else {
              return (
                <a
                  className="link h-full flex item-center text-grey2 relative"
                  href={item.link}
                  key={item.title}
                  target="_blank_">
                  {item.title}
                  {index === headerLinks.length - 1 ? <HotIcon className="sprite-01" /> : null}
                </a>
              )
            }
          })}
        </div>
        <div className="flex item-center pr-22">
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <a
            className="center cursor-pointer"
            href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter"
            target="_blank">
            创作者中心
          </a>
          <div className="text-12 text-grey cursor-pointer">登录</div>
        </div>
      </div>
      <div className="line"></div>
    </AppHeaderWrapper>
  )
})

export default AppHeader
