"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[65547],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),p=r,m=u["".concat(s,".").concat(p)]||u[p]||f[p]||o;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},78412:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return f}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],l={id:"enabled_config_flags",title:"Conditional tests with enabled flags",slug:"enabled-config-flag.html",sidebar_label:"Enabled Flags"},s=void 0,d={unversionedId:"framework/conditional/enabled_config_flags",id:"version-5.5/framework/conditional/enabled_config_flags",title:"Conditional tests with enabled flags",description:"Kotest supports disabling tests by setting a configuration flag on a test.",source:"@site/versioned_docs/version-5.5/framework/conditional/config_enabled.md",sourceDirName:"framework/conditional",slug:"/framework/conditional/enabled-config-flag.html",permalink:"/docs/framework/conditional/enabled-config-flag.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.5/framework/conditional/config_enabled.md",tags:[],version:"5.5",frontMatter:{id:"enabled_config_flags",title:"Conditional tests with enabled flags",slug:"enabled-config-flag.html",sidebar_label:"Enabled Flags"},sidebar:"framework",previous:{title:"Testing Styles",permalink:"/docs/framework/testing-styles.html"},next:{title:"Focus and Bang",permalink:"/docs/framework/conditional/conditional-tests-with-focus-and-bang.html"}},c={},f=[{value:"Enabled",id:"enabled",level:3},{value:"Enabled if",id:"enabled-if",level:3},{value:"Enabled or Reason If",id:"enabled-or-reason-if",level:3}],u={toc:f};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kotest supports disabling tests by setting a configuration flag on a test.\nThese configuration flags are very similar: ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"enabledIf"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"enabledOrReasonIf"),"."),(0,o.kt)("h3",{id:"enabled"},"Enabled"),(0,o.kt)("p",null,"You can disable a test case simply by setting the config parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".\nIf you're looking for something like JUnit's ",(0,o.kt)("inlineCode",{parentName:"p"},"@Ignore"),", this is for you."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'"should do something".config(enabled = false) {\n  // test here\n}\n')),(0,o.kt)("p",null,"You can use the same mechanism to run tests only under certain conditions.\nFor example you could run certain tests only on Linux systems using\n",(0,o.kt)("a",{parentName:"p",href:"https://commons.apache.org/proper/commons-lang/javadocs/api-release/org/apache/commons/lang3/SystemUtils.html#IS_OS_LINUX"},(0,o.kt)("inlineCode",{parentName:"a"},"SystemUtils.IS_OS_LINUX"))," from ",(0,o.kt)("a",{parentName:"p",href:"https://commons.apache.org/proper/commons-lang/"},"Apache Commons Lang"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'"should do something".config(enabled = IS_OS_LINUX) {\n  // test here\n}\n')),(0,o.kt)("h3",{id:"enabled-if"},"Enabled if"),(0,o.kt)("p",null,"If you want to use a function that is evaluated each time the test is invoked, then you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"enabledIf"),".\nThis function has the signature ",(0,o.kt)("inlineCode",{parentName:"p"},"(TestCase) -> Boolean"),", so as you can see, you have access to the test at runtime\nwhen evaluating if a test should be enabled or disabled."),(0,o.kt)("p",null,'For example, if we wanted to disable all tests that begin with the word "danger", but only when executing on Fridays,\nthen we could do this:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val disableDangerOnFridays: EnabledIf = { !(it.name.startsWith("danger") && isFriday()) }\n\n"danger Will Robinson".config(enabledIf = disableDangerOnFridays) {\n  // test here\n}\n\n"safe Will Robinson".config(enabledIf = disableDangerOnFridays) {\n // test here\n}\n')),(0,o.kt)("h3",{id:"enabled-or-reason-if"},"Enabled or Reason If"),(0,o.kt)("p",null,"There is a third variant of the enabled flag, called ",(0,o.kt)("inlineCode",{parentName:"p"},"enabledOrReasonIf")," which allows you to return a reason for the test being disabled.\nThis variant has the signature ",(0,o.kt)("inlineCode",{parentName:"p"},"(TestCase) -> Enabled"),", where\n",(0,o.kt)("inlineCode",{parentName:"p"},"Enabled")," is a type that can contain a skip reason. This reason string is passed through to the test reports."),(0,o.kt)("p",null,"For example, we can re-write the earlier 'danger' example like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val disableDangerOnFridays: (TestCase) -> Enabled = {\n   if (it.name.startsWith("danger") && isFriday())\n      Enabled.disabled("It\'s a friday, and we don\'t like danger!")\n   else\n      Enabled.enabled\n}\n\n"danger Will Robinson".config(enabledOrReasonIf = disableDangerOnFridays) {\n  // test here\n}\n\n"safe Will Robinson".config(enabledOrReasonIf = disableDangerOnFridays) {\n // test here\n}\n')))}p.isMDXComponent=!0}}]);