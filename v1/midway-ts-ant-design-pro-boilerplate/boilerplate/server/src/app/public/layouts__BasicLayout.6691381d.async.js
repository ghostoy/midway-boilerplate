(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{CWS2:function(e,t,a){"use strict";var n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("fCDM");var I=n(a("ia3E"));a("7Hp6");var M=n(a("Dgl/"));a("HFL9");var g=n(a("d3ho"));a("LxBf");var u=n(a("lZ/c")),l=n(a("43Yg")),c=n(a("/tCh")),r=n(a("scpF")),i=n(a("O/V9")),o=n(a("8aBX")),d=n(a("2w0b")),N=a("F/R2"),D=n(a("A52P")),A=n(a("uZXw")),C=n(a("h3zL")),s=function(e){function t(){var e;return(0,l.default)(this,t),e=(0,r.default)(this,(0,i.default)(t).apply(this,arguments)),e.onMenuClick=function(t){var a=t.key;if("logout"!==a)D.default.push("/account/".concat(a));else{var n=e.props.dispatch;n&&n({type:"login/logout"})}},e}return(0,o.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.currentUser,a=void 0===t?{avatar:"",username:""}:t,n=e.menu;console.log(this.props);var l=d.default.createElement(u.default,{className:C.default.menu,selectedKeys:[],onClick:this.onMenuClick},n&&d.default.createElement(u.default.Item,{key:"center"},d.default.createElement(g.default,{type:"user"}),"\u4e2a\u4eba\u4e2d\u5fc3"),n&&d.default.createElement(u.default.Item,{key:"settings"},d.default.createElement(g.default,{type:"setting"}),"\u4e2a\u4eba\u8bbe\u7f6e"),n&&d.default.createElement(u.default.Divider,null),d.default.createElement(u.default.Item,{key:"logout"},d.default.createElement(g.default,{type:"logout"}),"\u9000\u51fa\u767b\u5f55"));return a&&a.username?d.default.createElement(A.default,{overlay:l},d.default.createElement("span",{className:"".concat(C.default.action," ").concat(C.default.account)},d.default.createElement(M.default,{size:"small",className:C.default.avatar,src:a.avatar,alt:"avatar"}),d.default.createElement("span",{className:C.default.name},a.username))):d.default.createElement(I.default,{size:"small",style:{marginLeft:8,marginRight:8}})}}]),t}(d.default.Component),j=(0,N.connect)(function(e){var t=e.user;return{currentUser:t.currentUser}})(s);t.default=j},Fw9o:function(e,t,a){"use strict";var n=a("fbTi"),I=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Qruc");var M=I(a("2CpC"));a("ytdm");var g=I(a("PFma"));a("HFL9");var u=I(a("d3ho")),l=I(a("3CjV")),c=I(a("BG4o")),r=I(a("43Yg")),i=I(a("/tCh")),o=I(a("scpF")),d=I(a("O/V9")),N=I(a("8aBX")),D=n(a("2w0b")),A=I(a("iczh")),C=I(a("ErGL")),s=I(a("G3lK")),j=function(e){function t(e){var a;return(0,r.default)(this,t),a=(0,o.default)(this,(0,d.default)(t).call(this,e)),a.inputRef=null,a.onKeyDown=function(e){"Enter"===e.key&&a.debouncePressEnter()},a.onChange=function(e){if("string"===typeof e){var t=a.props,n=t.onSearch,I=t.onChange;a.setState({value:e}),n&&n(e),I&&I(e)}},a.enterSearchMode=function(){var e=a.props.onVisibleChange;e(!0),a.setState({searchMode:!0},function(){var e=a.state.searchMode;e&&a.inputRef&&a.inputRef.focus()})},a.leaveSearchMode=function(){a.setState({searchMode:!1})},a.debouncePressEnter=function(){var e=a.props.onPressEnter,t=a.state.value;e(t||"")},a.state={searchMode:e.defaultOpen,value:e.defaultValue},a.debouncePressEnter=(0,C.default)(a.debouncePressEnter,500,{leading:!0,trailing:!1}),a}return(0,N.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.defaultValue,I=t.placeholder,r=(t.open,(0,c.default)(t,["className","defaultValue","placeholder","open"])),i=this.state,o=i.searchMode,d=i.value;delete r.defaultOpen;var N=(0,A.default)(s.default.input,(0,l.default)({},s.default.show,o));return D.default.createElement("span",{className:(0,A.default)(a,s.default.headerSearch),onClick:this.enterSearchMode,onTransitionEnd:function(t){var a=t.propertyName;if("width"===a&&!o){var n=e.props.onVisibleChange;n(o)}}},D.default.createElement(u.default,{type:"search",key:"Icon"}),D.default.createElement(g.default,Object.assign({key:"AutoComplete"},r,{className:N,value:d,onChange:this.onChange}),D.default.createElement(M.default,{ref:function(t){e.inputRef=t},defaultValue:n,"aria-label":I,placeholder:I,onKeyDown:this.onKeyDown,onBlur:this.leaveSearchMode})))}}],[{key:"getDerivedStateFromProps",value:function(e){return"open"in e?{searchMode:e.open}:null}}]),t}(D.Component);t.default=j,j.defaultProps={defaultActiveFirstOption:!1,onPressEnter:function(){},onSearch:function(){},onChange:function(){},className:"",placeholder:"",dataSource:[],defaultOpen:!1,onVisibleChange:function(){}}},G3lK:function(e,t,a){e.exports={headerSearch:"antd-pro-components-header-search-index-headerSearch",input:"antd-pro-components-header-search-index-input",show:"antd-pro-components-header-search-index-show"}},QyDn:function(e,t,a){e.exports={container:"antd-pro-components-header-dropdown-index-container"}},bx7e:function(e,t,a){"use strict";var n=a("fbTi"),I=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var M=I(a("rXjv"));a("HFL9");var g=I(a("d3ho")),u=I(a("mK77")),l=n(a("BxvZ")),c=n(a("2w0b")),r=I(a("ngmJ")),i=a("F/R2"),o=I(a("sgkG")),d=I(a("mxmt")),N=function e(t){return t.map(function(t){var a=(0,u.default)({},t,{children:t.children?e(t.children):[]});return a})},D=c.default.createElement(l.DefaultFooter,{copyright:"2019 \u8682\u8681\u91d1\u670d\u4f53\u9a8c\u6280\u672f\u90e8\u51fa\u54c1",links:[{key:"Ant Design Pro",title:"Ant Design Pro",href:"https://pro.ant.design",blankTarget:!0},{key:"github",title:c.default.createElement(g.default,{type:"github"}),href:"https://github.com/ant-design/ant-design-pro",blankTarget:!0},{key:"Ant Design",title:"Ant Design",href:"https://ant.design",blankTarget:!0}]}),A=function(){return D},C=function(e){var t=e.dispatch,a=e.settings;(0,c.useEffect)(function(){},[]);var n=function(e){t&&t({type:"global/changeLayoutCollapsed",payload:e})};return c.default.createElement(l.default,Object.assign({logo:d.default,menuHeaderRender:function(e,t){return c.default.createElement(r.default,{to:"/"},e,t)},onCollapse:n,menuItemRender:function(e,t){return e.isUrl||e.children?t:c.default.createElement(r.default,{to:e.path},t)},breadcrumbRender:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[{path:"/",breadcrumbName:"\u9996\u9875"}].concat((0,M.default)(e))},itemRender:function(e,t,a,n){var I=0===a.indexOf(e);return I?c.default.createElement(r.default,{to:n.join("/")},e.breadcrumbName):c.default.createElement("span",null,e.breadcrumbName)},footerRender:A,menuDataRender:N,rightContentRender:function(){return c.default.createElement(o.default,null)}},e,a))},s=(0,i.connect)(function(e){var t=e.global,a=e.settings;return{collapsed:t.collapsed,settings:a}})(C);t.default=s},h3zL:function(e,t,a){e.exports={menu:"antd-pro-components-global-header-index-menu",right:"antd-pro-components-global-header-index-right",action:"antd-pro-components-global-header-index-action",search:"antd-pro-components-global-header-index-search",account:"antd-pro-components-global-header-index-account",avatar:"antd-pro-components-global-header-index-avatar",dark:"antd-pro-components-global-header-index-dark",name:"antd-pro-components-global-header-index-name"}},mxmt:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDcuMSAoNDU0MjIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkdyb3VwIDI4IENvcHkgNTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjIuMTAyMzI3MyUiIHkxPSIwJSIgeDI9IjEwOC4xOTcxOCUiIHkyPSIzNy44NjM1NzY0JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDI4NUVCIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyRUM3RkYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OS42NDQxMTYlIiB5MT0iMCUiIHgyPSI1NC4wNDI4OTc1JSIgeTI9IjEwOC40NTY3MTQlIiBpZD0ibGluZWFyR3JhZGllbnQtMiI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyOUNERkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE0OEVGRiIgb2Zmc2V0PSIzNy44NjAwNjg3JSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMEE2MEZGIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjkuNjkwODE2NSUiIHkxPSItMTIuOTc0MzU4NyUiIHgyPSIxNi43MjI4OTgxJSIgeTI9IjExNy4zOTEyNDglIiBpZD0ibGluZWFyR3JhZGllbnQtMyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGQTgxNkUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y3NEE1QyIgb2Zmc2V0PSI0MS40NzI2MDYlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OC4xMjc5ODcyJSIgeTE9Ii0zNS42OTA1NzM3JSIgeDI9IjMwLjQ0MDA5MTQlIiB5Mj0iMTE0Ljk0MjY3OSUiIGlkPSJsaW5lYXJHcmFkaWVudC00Ij4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZBOEU3RCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjc0QTVDIiBvZmZzZXQ9IjUxLjI2MzUxOTElIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwLjAwMDAwMCwgLTIwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMjgtQ29weS01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDIwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI3LUNvcHktMyI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTEuNTg4MDg2Myw0LjE3NjUyODIzIEw0LjE3OTk2NTQ0LDkxLjUxMjc3MjggQy0wLjUxOTI0MDYwNSw5Ni4yMDgxMTQ2IC0wLjUxOTI0MDYwNSwxMDMuNzkxODg1IDQuMTc5OTY1NDQsMTA4LjQ4NzIyNyBMOTEuNTg4MDg2MywxOTUuODIzNDcyIEM5Ni4yODcyOTIzLDIwMC41MTg4MTQgMTAzLjg3NzMwNCwyMDAuNTE4ODE0IDEwOC41NzY1MSwxOTUuODIzNDcyIEwxNDUuMjI1NDg3LDE1OS4yMDQ2MzIgQzE0OS40MzM5NjksMTU0Ljk5OTYxMSAxNDkuNDMzOTY5LDE0OC4xODE5MjQgMTQ1LjIyNTQ4NywxNDMuOTc2OTAzIEMxNDEuMDE3MDA1LDEzOS43NzE4ODEgMTM0LjE5MzcwNywxMzkuNzcxODgxIDEyOS45ODUyMjUsMTQzLjk3NjkwMyBMMTAyLjIwMTkzLDE3MS43MzczNTIgQzEwMS4wMzIzMDUsMTcyLjkwNjAxNSA5OS4yNTcxNjA5LDE3Mi45MDYwMTUgOTguMDg3NTM1OSwxNzEuNzM3MzUyIEwyOC4yODU5MDgsMTAxLjk5MzEyMiBDMjcuMTE2MjgzMSwxMDAuODI0NDU5IDI3LjExNjI4MzEsOTkuMDUwNzc1IDI4LjI4NTkwOCw5Ny44ODIxMTE4IEw5OC4wODc1MzU5LDI4LjEzNzg4MjMgQzk5LjI1NzE2MDksMjYuOTY5MjE5MSAxMDEuMDMyMzA1LDI2Ljk2OTIxOTEgMTAyLjIwMTkzLDI4LjEzNzg4MjMgTDEyOS45ODUyMjUsNTUuODk4MzMxNCBDMTM0LjE5MzcwNyw2MC4xMDMzNTI4IDE0MS4wMTcwMDUsNjAuMTAzMzUyOCAxNDUuMjI1NDg3LDU1Ljg5ODMzMTQgQzE0OS40MzM5NjksNTEuNjkzMzEgMTQ5LjQzMzk2OSw0NC44NzU2MjMyIDE0NS4yMjU0ODcsNDAuNjcwNjAxOCBMMTA4LjU4MDU1LDQuMDU1NzQ1OTIgQzEwMy44NjIwNDksLTAuNTM3OTg2ODQ2IDk2LjI2OTI2MTgsLTAuNTAwNzk3OTA2IDkxLjU4ODA4NjMsNC4xNzY1MjgyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05MS41ODgwODYzLDQuMTc2NTI4MjMgTDQuMTc5OTY1NDQsOTEuNTEyNzcyOCBDLTAuNTE5MjQwNjA1LDk2LjIwODExNDYgLTAuNTE5MjQwNjA1LDEwMy43OTE4ODUgNC4xNzk5NjU0NCwxMDguNDg3MjI3IEw5MS41ODgwODYzLDE5NS44MjM0NzIgQzk2LjI4NzI5MjMsMjAwLjUxODgxNCAxMDMuODc3MzA0LDIwMC41MTg4MTQgMTA4LjU3NjUxLDE5NS44MjM0NzIgTDE0NS4yMjU0ODcsMTU5LjIwNDYzMiBDMTQ5LjQzMzk2OSwxNTQuOTk5NjExIDE0OS40MzM5NjksMTQ4LjE4MTkyNCAxNDUuMjI1NDg3LDE0My45NzY5MDMgQzE0MS4wMTcwMDUsMTM5Ljc3MTg4MSAxMzQuMTkzNzA3LDEzOS43NzE4ODEgMTI5Ljk4NTIyNSwxNDMuOTc2OTAzIEwxMDIuMjAxOTMsMTcxLjczNzM1MiBDMTAxLjAzMjMwNSwxNzIuOTA2MDE1IDk5LjI1NzE2MDksMTcyLjkwNjAxNSA5OC4wODc1MzU5LDE3MS43MzczNTIgTDI4LjI4NTkwOCwxMDEuOTkzMTIyIEMyNy4xMTYyODMxLDEwMC44MjQ0NTkgMjcuMTE2MjgzMSw5OS4wNTA3NzUgMjguMjg1OTA4LDk3Ljg4MjExMTggTDk4LjA4NzUzNTksMjguMTM3ODgyMyBDMTAwLjk5OTg2NCwyNS42MjcxODM2IDEwNS43NTE2NDIsMjAuNTQxODI0IDExMi43Mjk2NTIsMTkuMzUyNDQ4NyBDMTE3LjkxNTU4NSwxOC40Njg1MjYxIDEyMy41ODUyMTksMjAuNDE0MDIzOSAxMjkuNzM4NTU0LDI1LjE4ODk0MjQgQzEyNS42MjQ2NjMsMjEuMDc4NDI5MiAxMTguNTcxOTk1LDE0LjAzNDAzMDQgMTA4LjU4MDU1LDQuMDU1NzQ1OTIgQzEwMy44NjIwNDksLTAuNTM3OTg2ODQ2IDk2LjI2OTI2MTgsLTAuNTAwNzk3OTA2IDkxLjU4ODA4NjMsNC4xNzY1MjgyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUzLjY4NTYzMywxMzUuODU0NTc5IEMxNTcuODk0MTE1LDE0MC4wNTk2IDE2NC43MTc0MTIsMTQwLjA1OTYgMTY4LjkyNTg5NCwxMzUuODU0NTc5IEwxOTUuOTU5OTc3LDEwOC44NDI3MjYgQzIwMC42NTkxODMsMTA0LjE0NzM4NCAyMDAuNjU5MTgzLDk2LjU2MzYxMzMgMTk1Ljk2MDUyNyw5MS44Njg4MTk0IEwxNjguNjkwNzc3LDY0LjcxODExNTkgQzE2NC40NzIzMzIsNjAuNTE4MDg1OCAxNTcuNjQ2ODY4LDYwLjUyNDE0MjUgMTUzLjQzNTg5NSw2NC43MzE2NTI2IEMxNDkuMjI3NDEzLDY4LjkzNjY3NCAxNDkuMjI3NDEzLDc1Ljc1NDM2MDcgMTUzLjQzNTg5NSw3OS45NTkzODIxIEwxNzEuODU0MDM1LDk4LjM2MjM3NjUgQzE3My4wMjM2Niw5OS41MzEwMzk2IDE3My4wMjM2NiwxMDEuMzA0NzI0IDE3MS44NTQwMzUsMTAyLjQ3MzM4NyBMMTUzLjY4NTYzMywxMjAuNjI2ODQ5IEMxNDkuNDc3MTUsMTI0LjgzMTg3IDE0OS40NzcxNSwxMzEuNjQ5NTU3IDE1My42ODU2MzMsMTM1Ljg1NDU3OSBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTQpIiBjeD0iMTAwLjUxOTMzOSIgY3k9IjEwMC40MzY2ODEiIHJ4PSIyMy42MDAxOTI2IiByeT0iMjMuNTgwNzg2Ij48L2VsbGlwc2U+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},sgkG:function(e,t,a){"use strict";var n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("HFL9");var I=n(a("d3ho"));a("QPbp");var M=n(a("FPTp")),g=n(a("2w0b")),u=a("F/R2"),l=n(a("CWS2")),c=n(a("Fw9o")),r=n(a("h3zL")),i=function(e){var t=e.theme,a=e.layout,n=r.default.right;return"dark"===t&&"topmenu"===a&&(n="".concat(r.default.right,"  ").concat(r.default.dark)),g.default.createElement("div",{className:n},g.default.createElement(c.default,{className:"".concat(r.default.action," ").concat(r.default.search),placeholder:"\u7ad9\u5185\u641c\u7d22",defaultValue:"umi ui",dataSource:["\u641c\u7d22\u63d0\u793a\u4e00","\u641c\u7d22\u63d0\u793a\u4e8c","\u641c\u7d22\u63d0\u793a\u4e09"],onSearch:function(e){console.log("input",e)},onPressEnter:function(e){console.log("enter",e)}}),g.default.createElement(M.default,{title:"\u4f7f\u7528\u6587\u6863"},g.default.createElement("a",{target:"_blank",href:"https://pro.ant.design/docs/getting-started",rel:"noopener noreferrer",className:r.default.action},g.default.createElement(I.default,{type:"question-circle-o"}))),g.default.createElement(l.default,null))},o=(0,u.connect)(function(e){var t=e.settings;return{theme:t.navTheme,layout:t.layout}})(i);t.default=o},uZXw:function(e,t,a){"use strict";var n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("zYpn");var I=n(a("onQw")),M=n(a("BG4o")),g=n(a("2w0b")),u=n(a("iczh")),l=n(a("QyDn")),c=function(e){var t=e.overlayClassName,a=(0,M.default)(e,["overlayClassName"]);return g.default.createElement(I.default,Object.assign({overlayClassName:(0,u.default)(l.default.container,t)},a))},r=c;t.default=r}}]);