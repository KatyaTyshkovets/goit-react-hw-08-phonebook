"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[354],{1244:function(e,n,A){A.d(n,{Fb:function(){return u},II:function(){return s},__:function(){return p},jj:function(){return f},zx:function(){return x}});var t,r,o,a,i,c=A(168),d=A(8789),l=A(5705),s=(0,d.ZP)(l.gN)(t||(t=(0,c.Z)(["\npadding: 15px;\nmargin:15px;\nwidth: 250px;\nheight: 15px;\nfont-size: 16px;\nborder-radius: 40px;\noutline: none;\ncolor:black;\nbackground: white;\nborder: 1px solid darkgrey;\ntransition: border-color 800ms ease-in-out 0s;\ntransition:transform 500ms linear;\n    & :focus , :hover {\n        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);\n        transform: scale(1.1);\n    }\n"]))),u=(0,d.ZP)(l.l0)(r||(r=(0,c.Z)(["\ndisplay:flex;\nflex-direction:column;\ntext-align: center;\nwidth:350px;\npadding: 5px;\nborder: 1px solid darkggrey;\nborder-radius: 10px;\ntransition: border-color 800ms ease-in-out 0s;\ncolor:white;\n"]))),p=d.ZP.label(o||(o=(0,c.Z)(["\ndisplay:flex;\nflex-direction: column;\nwidth:200px;\n"]))),x=d.ZP.button(a||(a=(0,c.Z)(["\nbackground-color:darkgrey;\nmargin: 20px;\n border-radius: 25px;\n padding: 7px;\n width: 180px;\n font-size: 20px;\n    curcor:pointer;\n    transition:transform 500ms linear;\n    & :focus , :hover {\n        background-color:white;\n        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);\n        transform: scale(1.1);\n    }\n"]))),f=d.ZP.p(i||(i=(0,c.Z)(["\ncolor: red;\n"])))},2354:function(e,n,A){A.r(n),A.d(n,{default:function(){return T}});var t=A(9434),r=A(4565),o=A(6015),a=A(4267),i=A(7205),c=A(6246),d=A(3602),l={name:"",email:"",password:"",remember:!1},s=A(4942),u=A(3366),p=A(7462),x=A(2791),f=A(4419),b=A(2065),m=A(7278),h=A(1245),Z=A(3329),v=(0,h.Z)((0,Z.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),g=(0,h.Z)((0,Z.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),k=(0,h.Z)((0,Z.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),S=A(9853),y=A(5513),j=A(277),P=A(1217);function z(e){return(0,P.Z)("MuiCheckbox",e)}var q=(0,A(5878).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),w=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],E=(0,j.ZP)(m.Z,{shouldForwardProp:function(e){return(0,j.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var A=e.ownerState;return[n.root,A.indeterminate&&n.indeterminate,"default"!==A.color&&n["color".concat((0,S.Z)(A.color))]]}})((function(e){var n,A=e.theme,t=e.ownerState;return(0,p.Z)({color:(A.vars||A).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:A.vars?"rgba(".concat("default"===t.color?A.vars.palette.action.activeChannel:A.vars.palette.primary.mainChannel," / ").concat(A.vars.palette.action.hoverOpacity,")"):(0,b.Fq)("default"===t.color?A.palette.action.active:A.palette[t.color].main,A.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&(n={},(0,s.Z)(n,"&.".concat(q.checked,", &.").concat(q.indeterminate),{color:(A.vars||A).palette[t.color].main}),(0,s.Z)(n,"&.".concat(q.disabled),{color:(A.vars||A).palette.action.disabled}),n))})),K=(0,Z.jsx)(g,{}),U=(0,Z.jsx)(v,{}),C=(0,Z.jsx)(k,{}),I=x.forwardRef((function(e,n){var A,t,r=(0,y.Z)({props:e,name:"MuiCheckbox"}),o=r.checkedIcon,a=void 0===o?K:o,i=r.color,c=void 0===i?"primary":i,d=r.icon,l=void 0===d?U:d,s=r.indeterminate,b=void 0!==s&&s,m=r.indeterminateIcon,h=void 0===m?C:m,v=r.inputProps,g=r.size,k=void 0===g?"medium":g,j=(0,u.Z)(r,w),P=b?h:l,q=b?h:a,I=(0,p.Z)({},r,{color:c,indeterminate:b,size:k}),V=function(e){var n=e.classes,A=e.indeterminate,t=e.color,r={root:["root",A&&"indeterminate","color".concat((0,S.Z)(t))]},o=(0,f.Z)(r,z,n);return(0,p.Z)({},n,o)}(I);return(0,Z.jsx)(E,(0,p.Z)({type:"checkbox",inputProps:(0,p.Z)({"data-indeterminate":b},v),icon:x.cloneElement(P,{fontSize:null!=(A=P.props.fontSize)?A:k}),checkedIcon:x.cloneElement(q,{fontSize:null!=(t=q.props.fontSize)?t:k}),ownerState:I,ref:n},j,{classes:V}))})),V=function(e){var n=e.onSubmit,A=(0,c.Z)({initialState:l,onSubmit:n}),t=A.state,s=A.handleChange,u=A.handleSubmit,p=t.email,x=t.name,f=t.password,b=t.checked;return(0,Z.jsxs)(d.Yb,{children:[(0,Z.jsx)(r.Z,{variant:"h4",style:{fontFamily:"Caveat",fontWeight:"400",textAlign:"center"},children:"Register"}),(0,Z.jsxs)(o.Z,{component:"form",autoComplete:"off",onSubmit:u,sx:{display:"inline-flex",flexDirection:"column",rowGap:2,my:2,background:"white"},children:[(0,Z.jsx)(a.Z,{label:"Name",type:"text",name:"name",value:x,onChange:s,required:!0}),(0,Z.jsx)(a.Z,{label:"Email",type:"email",name:"email",value:p,onChange:s,required:!0}),(0,Z.jsx)(a.Z,{label:"Password",type:"password",name:"password",value:f,onChange:s,required:!0,helperText:"7 symbols at least for password"}),(0,Z.jsxs)(d.nv,{children:[(0,Z.jsx)("label",{htmlFor:"",children:"Remember me"}),(0,Z.jsx)(I,{checked:b,onChange:s,inputProps:{"aria-label":"controlled"}})]}),(0,Z.jsx)(i.Z,{variant:"contained",type:"submit",children:"Register"})]})]})},O=A(3987),F=A(7466),B=A(5206),T=function(){var e=(0,t.I0)(),n=(0,t.v9)(F.Gl),A=n.status,r=n.message;return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(V,{onSubmit:function(n){console.log(n),400===A&&B.Am.success("You are already authorized"),e((0,O.IU)(n))}}),A&&(0,Z.jsx)("p",{style:{color:"red"},children:r})]})}},3602:function(e,n,A){A.d(n,{Yb:function(){return m},nv:function(){return h}});var t,r,o,a,i,c,d,l,s=A(168),u=A(6088),p=A(1898),x=A(6598),f=A(1244),b=A(5831),m=(0,u.Z)(x.Z)(t||(t=(0,s.Z)(["\ndisplay: flex;\nwidth:50%;\nmargin-top: 30px;\nborder: 1px solid #6d6d6c;\nborder-radius: 10px;\ndisplay: flex;\nflex-direction:column;\nbackground:white;\n"]))),h=u.Z.div(r||(r=(0,s.Z)(["\n\ndisplay: block;\n"])));u.Z.form(o||(o=(0,s.Z)(["\nwidth:50%;\nmargin-top: 30px;\nborder: 1px solid #6d6d6c;\nborder-radius: 10px;\ndisplay: flex;\nflex-direction:column;\nbackground:white;\n"]))),(0,u.Z)(p.Z)(a||(a=(0,s.Z)(["\nmargin-bottom:10px;\n"]))),(0,u.Z)(f.zx)(i||(i=(0,s.Z)(["\nwidth: 30%;\nalign-self:center;\n"]))),u.Z.div(c||(c=(0,s.Z)(["\ndisplay:flex;\nflex-direction: column;\njustify-content: center;\nalign-items:center;\nmargin:80px 0 20px 0;\n"]))),u.Z.h1(d||(d=(0,s.Z)(["\nmargin: 3px 0 0 0;\ncolor:#6d6d6c;\n"]))),u.Z.div(l||(l=(0,s.Z)(["\nbackground-image: url(",");\nbackground-size: cover;\nwidth: 40%;\nmargin: 40px 50px 0 0;\nborder-radius: 5px;\n\n"])),b)},6246:function(e,n,A){var t=A(4942),r=A(1413),o=A(885),a=A(2791);n.Z=function(e){var n=e.initialState,A=e.onSubmit,i=(0,a.useState)((0,r.Z)({},n)),c=(0,o.Z)(i,2),d=c[0],l=c[1];return{state:d,setState:l,handleChange:function(e){var n=e.target,A=n.name,o=n.value,a=n.type,i=n.checked,c="checkbox"===a?i:o;l((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,t.Z)({},A,c))}))},handleSubmit:function(e){e.preventDefault(),A((0,r.Z)({},d)),l((0,r.Z)({},n))}}}},7278:function(e,n,A){A.d(n,{Z:function(){return v}});var t=A(885),r=A(3366),o=A(7462),a=A(2791),i=A(8182),c=A(4419),d=A(9853),l=A(277),s=A(4938),u=A(529),p=A(753),x=A(1217);function f(e){return(0,x.Z)("PrivateSwitchBase",e)}(0,A(5878).Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var b=A(3329),m=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],h=(0,l.ZP)(p.Z)((function(e){var n=e.ownerState;return(0,o.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),Z=(0,l.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),v=a.forwardRef((function(e,n){var A=e.autoFocus,a=e.checked,l=e.checkedIcon,p=e.className,x=e.defaultChecked,v=e.disabled,g=e.disableFocusRipple,k=void 0!==g&&g,S=e.edge,y=void 0!==S&&S,j=e.icon,P=e.id,z=e.inputProps,q=e.inputRef,w=e.name,E=e.onBlur,K=e.onChange,U=e.onFocus,C=e.readOnly,I=e.required,V=e.tabIndex,O=e.type,F=e.value,B=(0,r.Z)(e,m),T=(0,s.Z)({controlled:a,default:Boolean(x),name:"SwitchBase",state:"checked"}),W=(0,t.Z)(T,2),N=W[0],L=W[1],M=(0,u.Z)(),R=v;M&&"undefined"===typeof R&&(R=M.disabled);var Q="checkbox"===O||"radio"===O,H=(0,o.Z)({},e,{checked:N,disabled:R,disableFocusRipple:k,edge:y}),J=function(e){var n=e.classes,A=e.checked,t=e.disabled,r=e.edge,o={root:["root",A&&"checked",t&&"disabled",r&&"edge".concat((0,d.Z)(r))],input:["input"]};return(0,c.Z)(o,f,n)}(H);return(0,b.jsxs)(h,(0,o.Z)({component:"span",className:(0,i.Z)(J.root,p),centerRipple:!0,focusRipple:!k,disabled:R,tabIndex:null,role:void 0,onFocus:function(e){U&&U(e),M&&M.onFocus&&M.onFocus(e)},onBlur:function(e){E&&E(e),M&&M.onBlur&&M.onBlur(e)},ownerState:H,ref:n},B,{children:[(0,b.jsx)(Z,(0,o.Z)({autoFocus:A,checked:a,defaultChecked:x,className:J.input,disabled:R,id:Q&&P,name:w,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var n=e.target.checked;L(n),K&&K(e,n)}},readOnly:C,ref:q,required:I,ownerState:H,tabIndex:V,type:O},"checkbox"===O&&void 0===F?{}:{value:F},z)),N?l:j]}))}))},5831:function(e){e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=354.a1aa362e.chunk.js.map