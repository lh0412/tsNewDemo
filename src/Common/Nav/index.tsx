import React, { SFC } from "react";
import { render } from "react-dom";
/**
 * 导航栏组件
 */

export const Nav: SFC = (title, right) => {
  return <div className="nav">
    <span>返回</span>
    <span>{title}</span>
    <span>{right}</span>
  </div>
}