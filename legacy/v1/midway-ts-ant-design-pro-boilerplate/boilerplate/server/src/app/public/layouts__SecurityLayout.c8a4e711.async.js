(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0jlH":function(e,t,n){"use strict";var r=n("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("43Yg")),u=r(n("/tCh")),s=r(n("scpF")),i=r(n("O/V9")),d=r(n("8aBX")),o=r(n("2w0b")),l=n("F/R2"),c=n("BxvZ"),f=function(e){function t(){var e;return(0,a.default)(this,t),e=(0,s.default)(this,(0,i.default)(t).apply(this,arguments)),e.state={isReady:!1},e}return(0,d.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.setState({isReady:!0});var e=this.props.dispatch;e&&e({type:"user/fetchCurrent"})}},{key:"render",value:function(){var e=this.state.isReady,t=this.props,n=t.children,r=t.loading,a=t.currentUser,u=a&&a.userid;return!u&&r||!e?o.default.createElement(c.PageLoading,null):n}}]),t}(o.default.Component),p=(0,l.connect)(function(e){var t=e.user,n=e.loading;return{currentUser:t.currentUser,loading:n.models.user}})(f);t.default=p}}]);