/*! For license information please see components-stories-ReactMemo-stories.91dc031f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_in_details=self.webpackChunkreact_in_details||[]).push([[247],{"./src/components/stories/ReactMemo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example1:()=>Example1,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"ReactMemo"},NewMessagesCounter=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:props.count}),UsersSecret=props=>(console.log("USERS"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:props.users.map(((u,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:u},i)))})),Users=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(UsersSecret),Example1=()=>{console.log("EXAMPLE 1");const[counter,setCounter]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),[users,setUsers]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["Roman","Daria","Tatiana","Lubov"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:()=>setCounter(counter+1),children:"+"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:()=>{setUsers([...users,"PETE"])},children:"add user"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NewMessagesCounter,{count:counter}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Users,{users})]})},__namedExportsOrder=["Example1"];Example1.parameters={...Example1.parameters,docs:{...Example1.parameters?.docs,source:{originalSource:"() => {\n  console.log('EXAMPLE 1');\n  const [counter, setCounter] = useState(0);\n  const [users, setUsers] = useState(['Roman', 'Daria', 'Tatiana', 'Lubov']);\n  const addUser = () => {\n    setUsers([...users, 'PETE']);\n  };\n  return <>\r\n    <button onClick={() => setCounter(counter + 1)}>+</button>\r\n    <button onClick={addUser}>add user</button>\r\n    <NewMessagesCounter count={counter} />\r\n    <Users users={users} />\r\n  </>;\n}",...Example1.parameters?.docs?.source}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);