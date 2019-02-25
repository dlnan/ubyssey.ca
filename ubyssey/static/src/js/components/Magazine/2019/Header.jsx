import React from "react"
import {colors} from "./colors.js"

class Header extends React.Component {
  renderSubsection(subsection) {
    return (
      <div
        className={`subsection ${this.props.selected === subsection ? "selected" : ""}`}
        onClick={() => this.props.selectSubsection(subsection)}>
        <span>{subsection}</span>
      </div>
    )
  }

  render() {
    const show = this.props.nextSubsection && this.props.selected && this.props.isDesktop ? "show" : ""
    if (show || !this.props.isDesktop) {
      document.body.style.overflow = "scroll"
    } else {
      document.body.style.overflow = "hidden"
    }
    return (
      <div id="magazine-nav" className={show} style={{ backgroundColor: colors[this.props.selected] }}>
        <div className={`item left ${show}`}>
          <a
            className="subsection"
            onClick={() => {
              this.props.selectSubsection()
            }}>
            The Ubyssey Magazine
          </a>
        </div>
        <div className={`item center ${show}`}>
          <h1>{this.props.title}</h1>
        </div>

        <div className={`item show ${show ? "right" : "center"}`}>
          {this.props.subsections.map((subsection) => {
            return this.renderSubsection(subsection)
          })}
        </div>
      </div>
    )
  }
}

export default Header
