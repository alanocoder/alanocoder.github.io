!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist",r(r.s=6)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactMD},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),a=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var u=o(r(0)),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={values:t.props.defaultValues||{},errors:null,touched:{}},t.isDirty=function(){return!Object.keys(t.state.values).every(function(e){return!t.props.defaultValues||t.state.values[e]===t.props.defaultValues[e]})},t.getErrors=function(e){if(t.state.errors&&e){var r={},n=!1;return Object.keys(t.state.touched).forEach(function(e){"touched"===t.state.touched[e]&&t.state.errors[e]&&(r[e]=t.state.errors[e],n=!0)}),n?r:null}return t.state.errors},t.getValues=function(){return t.state.values},t.revalidate=function(){var e=t.validate(t.state.values);t.setState({errors:e},t.props.onChange?function(){return t.props.onChange(t,name)}:null)},t.validate=function(e){var r=t.props.model;if(!r)return null;var n={};for(var a in r){var o=r[a].rules;if(o){var u=e[a],l=null;o.required&&!u?l=o["data-msg-required"]||"Required.":o.pattern&&u&&!new RegExp(o.pattern).test(u)?l=o["data-msg-pattern"]||"Input is not valid.":o.minLength&&u&&u.length<o.minLength&&(l="Must be at least "+o.minLength+" characters."),l&&(n[a]=l)}}return Object.keys(n).length>0?n:null},t.onChange=function(e){var r,n,o,u=e.target.name||e.target.id,l="";l="checkbox"===e.target.type?e.target.checked?e.target.value||"true":null:e.target.value,o=a({},t.state.values,((r={})[u]=l,r)),l||delete o[u];var i=t.validate(o),s=a(((n={})[u]="modified",n),t.state.touched);t.setState({values:o,errors:i,touched:s},t.props.onChange?function(){return t.props.onChange(t,null)}:null)},t.onBlur=function(e){var r,n=e.target.name||e.target.id;if((!e.target.tagName||t.state.touched[n])&&"touched"!==t.state.touched[n]){var o=a({},t.state.touched,((r={})[n]="touched",r));t.setState({touched:o},t.props.onChange?function(){return t.props.onChange(t,null)}:null)}},t.onSubmit=function(e){e.preventDefault(),t.props.onSubmit&&t.props.onSubmit(t.state.values,t.isDirty())},t.manage=function(e){var r=!1,n=u.Children.map(e,function(e){if(!e||!e.props)return e;var n,o=e.props.name;if(o){r=!0;var l=t.state.values[o]||"",i="touched"===t.state.touched[o]&&t.state.errors?t.state.errors[o]:null,s=null;if(t.props.model){var c=t.props.model[o];if(c){s=c.attrs?a({},c.attrs):{};var p=c.rules;p&&(p.maxLength&&(s.maxLength=p.maxLength),p.required&&(s.required=!0))}}if(n=a({},s,{onChange:t.onChange,onBlur:t.onBlur,error:i}),"input"===e.type)switch(e.props.type){case"checkbox":l&&(n.checked=!0);break;case"radio":n.checked=e.props.value===l;break;default:n.value=l}else n.value=l}else if("submit"===e.props.type){r=!0,n={disabled:null!==t.state.errors||e.props.disabled}}else{if(!e.props.children)return e;var f=t.manage(e.props.children);if(f===e.props.children)return e;r=!0,n={children:f}}return u.cloneElement(e,n)});return r?n:e},t}return n(t,e),t.prototype.componentWillMount=function(){var e=this.props,t=e.defaultValues,r=e.model;if(t&&r)for(var n in t)t[n]&&r[n]&&(this.state.touched[n]=!0);var a=this.validate(t||{});a&&(this.state.errors=a),this.props.onChange&&this.props.onChange(this,null)},t.prototype.render=function(){return u.createElement("form",{className:this.props.className,onSubmit:this.onSubmit},this.manage(this.props.children))},t}(u.Component);t.ManagedForm=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(2))},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),a=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(r[n[a]]=e[n[a]])}return r};Object.defineProperty(t,"__esModule",{value:!0});var u=r(0),l=r(3),i=r(1),s={name:{attrs:{label:"Your name",placeholder:"Your name"},rules:{required:!0,minLength:5}},email:{attrs:{placeholder:"Your email address"},rules:{required:!0,minLength:5}},drink:{rules:{required:!0}}},c=[{value:"chocolate",label:"Chocolate"},{value:"vanilla",label:"Vanilla"},{value:"strawberry",label:"Strawberry"},{value:"coconut",label:"Coconut"},{value:"pineapple",label:"Pineapple"}],p=[{value:"Coffee",label:"Coffee"},{value:"Tea",label:"Tea"}],f=function(e){var t=e.name,r=e.error,n=e.onChange,l=o(e,["name","error","onChange"]);return u.createElement(i.TextField,a({id:t,error:!!r,errorText:r,onChange:function(e,t){n(t)}},l))},d=function(e){var t=e.name,r=e.error,n=e.onChange,l=e.onBlur,s=o(e,["name","error","onChange","onBlur"]);return u.createElement(i.SelectField,a({id:t,name:t,error:!!r,errorText:r,onChange:function(e,r,a){return n({target:{name:t,value:e}})},onBlur:function(){return l({target:{name:t}})}},s))},h=function(e){var t=e.name,r=e.value,n=e.defaultValue,l=e.onChange,s=o(e,["name","value","defaultValue","onChange"]);return u.createElement(i.SelectionControl,a({id:t,name:t,type:"switch",value:n,checked:!!r,onChange:function(e,t){l(t)}},s))},m=function(e){var t=e.name,r=(e.value,e.defaultValue,e.onChange),n=o(e,["name","value","defaultValue","onChange"]);return u.createElement(i.Slider,a({id:t,onChange:function(e,n){return r({target:{name:t,value:e}})}},n))},v=function(e){var t=e.name,r=e.onChange,n=o(e,["name","onChange"]);return u.createElement(i.SelectionControlGroup,a({id:t,name:t,type:"radio",onChange:function(e,t){r(t)}},n))},g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onSubmit=function(e,t){alert("You form input:\r\n"+JSON.stringify(e))},t.onChange=function(e,t){},t}return n(t,e),t.prototype.render=function(){return u.createElement(l.ManagedForm,{onSubmit:this.onSubmit,onChange:this.onChange,model:s,defaultValues:{agree:"I agree",rate:"2"}},u.createElement("h2",null,"Custom form"),u.createElement(f,{name:"name"}),u.createElement(f,{name:"email"}),u.createElement(f,{rows:3,name:"description",placeholder:"Your description"}),u.createElement(d,{name:"icecream",menuItems:c,label:"Favorite ice-cream"}),u.createElement(h,{name:"agree",type:"switch",label:"Agree to Terms",defaultValue:"I agree"}),"Favorite: ",u.createElement(v,{name:"drink",controls:p}),u.createElement(m,{name:"rate",min:50,max:100}),u.createElement(i.Button,{type:"submit",flat:!0},"Done"))},t}(u.Component);t.SignUpForm=g},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(5),o=r(4);a.render(n.createElement(o.SignUpForm,null),document.querySelector("#content"))}]);