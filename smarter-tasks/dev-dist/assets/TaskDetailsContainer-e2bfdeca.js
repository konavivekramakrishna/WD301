import{u as we,a as ne,j as s,r as c,R as q,b as oe,c as X,d as Le,e as ae}from"./index-5b7e78c2.js";import{u as ie,_ as W}from"./dialog-a900aeca.js";import{u as se,a as Te,b as $e}from"./actions-c90d95eb.js";import{A as le}from"./constants-a400ef56.js";import{s as ue,l as I,S as re,D as P,y as F,o as v,u as D,h as Ce,a as ke,T as Ee,p as z,c as Ne,d as H,b as De,e as Ie,R as Pe,X as M,I as G,C as Fe,f as Me,g as R,r as Ae,i as J,j as Ue,t as K}from"./transition-ba2ea7d2.js";import{T as _e,e as Be,s as qe,b as Qe,u as ze,a as $,x as He}from"./use-text-value-63d35185.js";const Ge=async(e,n,a,r)=>{try{const o=localStorage.getItem("authToken")??"",l=await fetch(`${le}/projects/${n}/tasks/${a}/comments`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify({description:r})});if(!l.ok)throw new Error("Unable to add comment");const t=await l.json();return t.errors&&t.errors.length>0?{ok:!1,error:t.errors[0].message}:(e({type:"ADD_COMMENT_SUCCESS",payload:t}),ce(e,n,a),{ok:!0})}catch(o){return{ok:!1,error:o}}},ce=async(e,n,a)=>{const r=localStorage.getItem("authToken")??"";try{e({type:"FETCH_ALL _COMMENTS_REQUEST"});let l=await(await fetch(`${le}/projects/${n}/tasks/${a}/comments`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`}})).json();l=l.sort((t,u)=>new Date(u.createdAt).getTime()-new Date(t.createdAt).getTime()),e({type:"FETCH_ALL_COMMENTS_SUCCESS",payload:l})}catch(o){console.log("Error while Getting Comments",o),e({type:"FETCH_ALL_COMMENTS_FAILURE",payload:" Error while Getting Comments"})}},Ve=()=>{const e=we(),n=ne(),{comments:a,isLoading:r,isError:o,errorMessage:l}=e,t=p=>{var g;const m=(g=n==null?void 0:n.members)==null?void 0:g.find(x=>x.id===p);return(m==null?void 0:m.name)||"Unknown"};if(r)return s.jsx("div",{className:"text-center mt-4",children:"Loading..."});if(o)return s.jsx("div",{className:"text-red-500",children:l});const u=p=>{const m=new Date(p),g=m.getFullYear(),x=String(m.getMonth()+1).padStart(2,"0"),T=String(m.getDate()).padStart(2,"0");return`${g}-${x}-${T}`};return s.jsxs("div",{className:"container mx-auto p-4",children:[s.jsx("h1",{className:"text-2xl font-semibold mb-4",children:"Comments:"}),a.map(p=>s.jsxs("div",{className:"bg-white comment p-4 rounded-lg shadow-md mb-4",children:[s.jsx("h5",{className:"text-lg font-semibold text-gray-800",children:t(p.owner)}),s.jsx("h5",{className:"text-gray-600",children:u(p.createdAt)}),s.jsx("p",{className:"text-gray-800",children:p.description})]},p.createdAt))]})};function de(e,n){let[a,r]=c.useState(e),o=ue(e);return I(()=>r(o.current),[o,r,...n]),a}var We=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(We||{}),Ke=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Ke||{}),Ye=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ye||{}),Je=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(Je||{});function Y(e,n=a=>a){let a=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,r=Ue(n(e.options.slice()),l=>l.dataRef.current.domRef.current),o=a?r.indexOf(a):null;return o===-1&&(o=null),{options:r,activeOptionIndex:o}}let Xe={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let n=e.activeOptionIndex,{isSelected:a}=e.dataRef.current,r=e.options.findIndex(o=>a(o.dataRef.current.value));return r!==-1&&(n=r),{...e,listboxState:0,activeOptionIndex:n}},2(e,n){var a;if(e.dataRef.current.disabled||e.listboxState===1)return e;let r=Y(e),o=He(n,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:l=>l.id,resolveDisabled:l=>l.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:o,activationTrigger:(a=n.trigger)!=null?a:1}},3:(e,n)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let a=e.searchQuery!==""?0:1,r=e.searchQuery+n.value.toLowerCase(),o=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+a).concat(e.options.slice(0,e.activeOptionIndex+a)):e.options).find(t=>{var u;return!t.dataRef.current.disabled&&((u=t.dataRef.current.textValue)==null?void 0:u.startsWith(r))}),l=o?e.options.indexOf(o):-1;return l===-1||l===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:l,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,n)=>{let a={id:n.id,dataRef:n.dataRef},r=Y(e,o=>[...o,a]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(n.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(a)),{...e,...r}},6:(e,n)=>{let a=Y(e,r=>{let o=r.findIndex(l=>l.id===n.id);return o!==-1&&r.splice(o,1),r});return{...e,...a,activationTrigger:1}},7:(e,n)=>({...e,labelId:n.id})},Z=c.createContext(null);Z.displayName="ListboxActionsContext";function A(e){let n=c.useContext(Z);if(n===null){let a=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,A),a}return n}let ee=c.createContext(null);ee.displayName="ListboxDataContext";function U(e){let n=c.useContext(ee);if(n===null){let a=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,U),a}return n}function Ze(e,n){return D(n.type,Xe,e,n)}let et=c.Fragment;function tt(e,n){let{value:a,defaultValue:r,form:o,name:l,onChange:t,by:u=(d,b)=>d===b,disabled:p=!1,horizontal:m=!1,multiple:g=!1,...x}=e;const T=m?"horizontal":"vertical";let C=F(n),[S=g?[]:void 0,w]=_e(a,t,r),[h,i]=c.useReducer(Ze,{dataRef:c.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),f=c.useRef({static:!1,hold:!1}),j=c.useRef(null),E=c.useRef(null),N=c.useRef(null),O=v(typeof u=="string"?(d,b)=>{let L=u;return(d==null?void 0:d[L])===(b==null?void 0:b[L])}:u),k=c.useCallback(d=>D(y.mode,{1:()=>S.some(b=>O(b,d)),0:()=>O(S,d)}),[S]),y=c.useMemo(()=>({...h,value:S,disabled:p,mode:g?1:0,orientation:T,compare:O,isSelected:k,optionsPropsRef:f,labelRef:j,buttonRef:E,optionsRef:N}),[S,p,g,h]);I(()=>{h.dataRef.current=y},[y]),Ce([y.buttonRef,y.optionsRef],(d,b)=>{var L;i({type:1}),ke(b,Ee.Loose)||(d.preventDefault(),(L=y.buttonRef.current)==null||L.focus())},y.listboxState===0);let pe=c.useMemo(()=>({open:y.listboxState===0,disabled:p,value:S}),[y,p,S]),fe=v(d=>{let b=y.options.find(L=>L.id===d);b&&V(b.dataRef.current.value)}),me=v(()=>{if(y.activeOptionIndex!==null){let{dataRef:d,id:b}=y.options[y.activeOptionIndex];V(d.current.value),i({type:2,focus:$.Specific,id:b})}}),be=v(()=>i({type:0})),xe=v(()=>i({type:1})),ge=v((d,b,L)=>d===$.Specific?i({type:2,focus:$.Specific,id:b,trigger:L}):i({type:2,focus:d,trigger:L})),ve=v((d,b)=>(i({type:5,id:d,dataRef:b}),()=>i({type:6,id:d}))),he=v(d=>(i({type:7,id:d}),()=>i({type:7,id:null}))),V=v(d=>D(y.mode,{0(){return w==null?void 0:w(d)},1(){let b=y.value.slice(),L=b.findIndex(B=>O(B,d));return L===-1?b.push(d):b.splice(L,1),w==null?void 0:w(b)}})),ye=v(d=>i({type:3,value:d})),Se=v(()=>i({type:4})),Oe=c.useMemo(()=>({onChange:V,registerOption:ve,registerLabel:he,goToOption:ge,closeListbox:xe,openListbox:be,selectActiveOption:me,selectOption:fe,search:ye,clearSearch:Se}),[]),Re={ref:C},_=c.useRef(null),je=z();return c.useEffect(()=>{_.current&&r!==void 0&&je.addEventListener(_.current,"reset",()=>{w==null||w(r)})},[_,w]),q.createElement(Z.Provider,{value:Oe},q.createElement(ee.Provider,{value:y},q.createElement(Ne,{value:D(y.listboxState,{0:H.Open,1:H.Closed})},l!=null&&S!=null&&Be({[l]:S}).map(([d,b],L)=>q.createElement(De,{features:Ie.Hidden,ref:L===0?B=>{var te;_.current=(te=B==null?void 0:B.closest("form"))!=null?te:null}:void 0,...Pe({key:d,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:o,name:d,value:b})})),M({ourProps:Re,theirProps:x,slot:pe,defaultTag:et,name:"Listbox"}))))}let rt="button";function nt(e,n){var a;let r=G(),{id:o=`headlessui-listbox-button-${r}`,...l}=e,t=U("Listbox.Button"),u=A("Listbox.Button"),p=F(t.buttonRef,n),m=z(),g=v(h=>{switch(h.key){case R.Space:case R.Enter:case R.ArrowDown:h.preventDefault(),u.openListbox(),m.nextFrame(()=>{t.value||u.goToOption($.First)});break;case R.ArrowUp:h.preventDefault(),u.openListbox(),m.nextFrame(()=>{t.value||u.goToOption($.Last)});break}}),x=v(h=>{switch(h.key){case R.Space:h.preventDefault();break}}),T=v(h=>{if(Ae(h.currentTarget))return h.preventDefault();t.listboxState===0?(u.closeListbox(),m.nextFrame(()=>{var i;return(i=t.buttonRef.current)==null?void 0:i.focus({preventScroll:!0})})):(h.preventDefault(),u.openListbox())}),C=de(()=>{if(t.labelId)return[t.labelId,o].join(" ")},[t.labelId,o]),S=c.useMemo(()=>({open:t.listboxState===0,disabled:t.disabled,value:t.value}),[t]),w={ref:p,id:o,type:qe(e,t.buttonRef),"aria-haspopup":"listbox","aria-controls":(a=t.optionsRef.current)==null?void 0:a.id,"aria-expanded":t.listboxState===0,"aria-labelledby":C,disabled:t.disabled,onKeyDown:g,onKeyUp:x,onClick:T};return M({ourProps:w,theirProps:l,slot:S,defaultTag:rt,name:"Listbox.Button"})}let ot="label";function at(e,n){let a=G(),{id:r=`headlessui-listbox-label-${a}`,...o}=e,l=U("Listbox.Label"),t=A("Listbox.Label"),u=F(l.labelRef,n);I(()=>t.registerLabel(r),[r]);let p=v(()=>{var g;return(g=l.buttonRef.current)==null?void 0:g.focus({preventScroll:!0})}),m=c.useMemo(()=>({open:l.listboxState===0,disabled:l.disabled}),[l]);return M({ourProps:{ref:u,id:r,onClick:p},theirProps:o,slot:m,defaultTag:ot,name:"Listbox.Label"})}let it="ul",st=re.RenderStrategy|re.Static;function lt(e,n){var a;let r=G(),{id:o=`headlessui-listbox-options-${r}`,...l}=e,t=U("Listbox.Options"),u=A("Listbox.Options"),p=F(t.optionsRef,n),m=z(),g=z(),x=Fe(),T=(()=>x!==null?(x&H.Open)===H.Open:t.listboxState===0)();c.useEffect(()=>{var i;let f=t.optionsRef.current;f&&t.listboxState===0&&f!==((i=Me(f))==null?void 0:i.activeElement)&&f.focus({preventScroll:!0})},[t.listboxState,t.optionsRef]);let C=v(i=>{switch(g.dispose(),i.key){case R.Space:if(t.searchQuery!=="")return i.preventDefault(),i.stopPropagation(),u.search(i.key);case R.Enter:if(i.preventDefault(),i.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:f}=t.options[t.activeOptionIndex];u.onChange(f.current.value)}t.mode===0&&(u.closeListbox(),J().nextFrame(()=>{var f;return(f=t.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})}));break;case D(t.orientation,{vertical:R.ArrowDown,horizontal:R.ArrowRight}):return i.preventDefault(),i.stopPropagation(),u.goToOption($.Next);case D(t.orientation,{vertical:R.ArrowUp,horizontal:R.ArrowLeft}):return i.preventDefault(),i.stopPropagation(),u.goToOption($.Previous);case R.Home:case R.PageUp:return i.preventDefault(),i.stopPropagation(),u.goToOption($.First);case R.End:case R.PageDown:return i.preventDefault(),i.stopPropagation(),u.goToOption($.Last);case R.Escape:return i.preventDefault(),i.stopPropagation(),u.closeListbox(),m.nextFrame(()=>{var f;return(f=t.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})});case R.Tab:i.preventDefault(),i.stopPropagation();break;default:i.key.length===1&&(u.search(i.key),g.setTimeout(()=>u.clearSearch(),350));break}}),S=de(()=>{var i,f,j;return(j=(i=t.labelRef.current)==null?void 0:i.id)!=null?j:(f=t.buttonRef.current)==null?void 0:f.id},[t.labelRef.current,t.buttonRef.current]),w=c.useMemo(()=>({open:t.listboxState===0}),[t]),h={"aria-activedescendant":t.activeOptionIndex===null||(a=t.options[t.activeOptionIndex])==null?void 0:a.id,"aria-multiselectable":t.mode===1?!0:void 0,"aria-labelledby":S,"aria-orientation":t.orientation,id:o,onKeyDown:C,role:"listbox",tabIndex:0,ref:p};return M({ourProps:h,theirProps:l,slot:w,defaultTag:it,features:st,visible:T,name:"Listbox.Options"})}let ut="li";function ct(e,n){let a=G(),{id:r=`headlessui-listbox-option-${a}`,disabled:o=!1,value:l,...t}=e,u=U("Listbox.Option"),p=A("Listbox.Option"),m=u.activeOptionIndex!==null?u.options[u.activeOptionIndex].id===r:!1,g=u.isSelected(l),x=c.useRef(null),T=Qe(x),C=ue({disabled:o,value:l,domRef:x,get textValue(){return T()}}),S=F(n,x);I(()=>{if(u.listboxState!==0||!m||u.activationTrigger===0)return;let O=J();return O.requestAnimationFrame(()=>{var k,y;(y=(k=x.current)==null?void 0:k.scrollIntoView)==null||y.call(k,{block:"nearest"})}),O.dispose},[x,m,u.listboxState,u.activationTrigger,u.activeOptionIndex]),I(()=>p.registerOption(r,C),[C,r]);let w=v(O=>{if(o)return O.preventDefault();p.onChange(l),u.mode===0&&(p.closeListbox(),J().nextFrame(()=>{var k;return(k=u.buttonRef.current)==null?void 0:k.focus({preventScroll:!0})}))}),h=v(()=>{if(o)return p.goToOption($.Nothing);p.goToOption($.Specific,r)}),i=ze(),f=v(O=>i.update(O)),j=v(O=>{i.wasMoved(O)&&(o||m||p.goToOption($.Specific,r,0))}),E=v(O=>{i.wasMoved(O)&&(o||m&&p.goToOption($.Nothing))}),N=c.useMemo(()=>({active:m,selected:g,disabled:o}),[m,g,o]);return M({ourProps:{id:r,ref:S,role:"option",tabIndex:o===!0?void 0:-1,"aria-disabled":o===!0?!0:void 0,"aria-selected":g,disabled:void 0,onClick:w,onFocus:h,onPointerEnter:f,onMouseEnter:f,onPointerMove:j,onMouseMove:j,onPointerLeave:E,onMouseLeave:E},theirProps:t,slot:N,defaultTag:ut,name:"Listbox.Option"})}let dt=P(tt),pt=P(nt),ft=P(at),mt=P(lt),bt=P(ct),Q=Object.assign(dt,{Button:pt,Label:ft,Options:mt,Option:bt});function xt({title:e,titleId:n,...a},r){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":n},a),e?c.createElement("title",{id:n},e):null,c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"}))}const gt=c.forwardRef(xt),vt=gt;function ht(){const e=async t=>{try{await Ge(n,o??"",l??"",t.description)}catch(u){console.log("Error While adding comment",u)}},n=oe(),{register:a,handleSubmit:r}=ie({}),{pid:o,tid:l}=X();return s.jsx("div",{className:"container mx-auto p-4",children:s.jsxs("form",{onSubmit:r(e),className:"flex items-center",children:[s.jsx("input",{type:"text",required:!0,placeholder:"Add Comment",id:"commentBox",...a("description",{required:!0}),className:"w-full p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"}),s.jsx("button",{type:"submit",id:"addCommentBtn",className:"bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none",children:"Add Comment"})]})})}const yt=e=>{const n=new Date(e),a=String(n.getDate()).padStart(2,"0"),r=n.getFullYear(),o=String(n.getMonth()+1).padStart(2,"0");return`${r}-${o}-${a}`};function St(){let{pid:e,tid:n}=X(),a=Le();const r=ne(),o=oe(),l=ae(),t=se();let[u,p]=c.useState(!0);const m=Te(),g=l==null?void 0:l.projects.filter(f=>`${f.id}`===e)[0],x=t.projectData.tasks[n??""],[T,C]=c.useState(x.assignedUserName??"");c.useEffect(()=>{ce(o,`${e}`,`${n}`)},[n,e,o]);const{register:S,handleSubmit:w}=ie({defaultValues:{title:x.title,description:x.description,selectedPerson:x.assignedUserName,dueDate:yt(x.dueDate)}}),h=async f=>{var E,N;const j=(N=(E=r==null?void 0:r.members)==null?void 0:E.filter(O=>O.name===T))==null?void 0:N[0];$e(e??"",{...x,...f,assignee:j==null?void 0:j.id},m),i()};if(!g)return s.jsx(s.Fragment,{children:"No such Project!"});function i(){p(!1),a("../../")}return s.jsx(s.Fragment,{children:s.jsx(K,{appear:!0,show:u,as:c.Fragment,children:s.jsxs(W,{as:"div",className:"relative z-10",onClose:i,children:[s.jsx(K.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:s.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),s.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:s.jsx("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:s.jsx(K.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:s.jsxs(W.Panel,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[s.jsx(W.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Task Details"}),s.jsx("div",{className:"mt-2",children:s.jsxs("form",{onSubmit:w(h),children:[s.jsx("input",{type:"text",required:!0,placeholder:"Enter title",id:"title",...S("title",{required:!0}),className:"w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"}),s.jsx("input",{type:"text",required:!0,placeholder:"Enter description",id:"description",...S("description",{required:!0}),className:"w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"}),s.jsx("input",{type:"date",required:!0,placeholder:"Enter due date",id:"dueDate",...S("dueDate",{required:!0}),className:"w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"}),s.jsx("h3",{children:s.jsx("strong",{children:"Assignee"})}),s.jsxs(Q,{value:T,onChange:C,children:[s.jsx(Q.Button,{className:"w-full border rounded-md py-2 px-3 my-2 text-gray-700 text-base text-left",children:T}),s.jsx(Q.Options,{className:"absolute mt-1 max-h-60 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:r==null?void 0:r.members.map(f=>s.jsx(Q.Option,{className:({active:j})=>`relative cursor-default select-none py-2 pl-10 pr-4 ${j?"bg-blue-100 text-blue-900":"text-gray-900"}`,value:f.name,children:({selected:j})=>s.jsxs(s.Fragment,{children:[s.jsx("span",{className:`block truncate ${j?"font-medium":"font-normal"}`,children:f.name}),j?s.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600",children:s.jsx(vt,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},f.id))})]}),s.jsx("button",{type:"submit",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",children:"Update"}),s.jsx("button",{type:"submit",onClick:i,className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",children:"Cancel"})]})}),s.jsx(ht,{}),s.jsx(Ve,{})]})})})})]})})})}const $t=()=>{var l;const e=ae(),n=se(),{tid:a}=X(),r=n.isLoading,o=(l=n.projectData.tasks)==null?void 0:l[a||""];return r||!e||e!=null&&e.isLoading?s.jsx(s.Fragment,{children:"Loading..."}):o?s.jsx(St,{}):s.jsx(s.Fragment,{children:"No such task!"})};export{$t as default};