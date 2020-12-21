import React from "react";
import { render } from "react-dom";
/**
 * 导航栏组件
 */

export const Nav = (title: string, right: boolean) => void {
  render() {
    return <div className="nav">
      <span>返回</span>
      <span>{title}</span>
      <span>{right}</span>
    </div>
  }
}