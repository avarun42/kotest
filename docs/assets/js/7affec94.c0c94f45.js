"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[34923],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(87462),a=n(67294),o=n(86010),s=n(76775),i=n(91980),l=n(67392),u=n(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,s.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,i._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function f(e){var t,n,r,o,s=e.defaultValue,i=e.queryString,l=void 0!==i&&i,p=e.groupId,f=c(e),h=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:f})})),v=h[0],g=h[1],b=m({queryString:l,groupId:p}),y=b[0],k=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),n=(0,u.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],T=w[1],x=function(){var e=null!=y?y:N;return d({value:e,tabValues:f})?e:null}();return(0,a.useLayoutEffect)((function(){x&&g(x)}),[x]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),T(e)}),[k,T,f]),tabValues:f}}var h=n(12466),v=n(72389),g="tabList__CuJ",b="tabItem_LNqP";function y(e){var t=e.className,n=e.block,s=e.selectedValue,i=e.selectValue,l=e.tabValues,u=[],p=(0,h.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=u.indexOf(t),r=l[n].value;r!==s&&(p(t),i(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=u.indexOf(e.currentTarget)+1;n=null!=(r=u[a])?r:u[0];break;case"ArrowLeft":var o,s=u.indexOf(e.currentTarget)-1;n=null!=(o=u[s])?o:u[u.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:c},i,{className:(0,o.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function N(e){var t=(0,v.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},59675:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=n(74866),i=n(85162),l=["components"],u={id:"index",title:"Property-based Testing",slug:"property-based-testing.html",sidebar_label:"Introduction"},p=void 0,c={unversionedId:"proptest/index",id:"version-5.4/proptest/index",title:"Property-based Testing",description:"Kotest is split into several subprojects which can be used independently. One of these subprojects is the property test framework.",source:"@site/versioned_docs/version-5.4/proptest/index.mdx",sourceDirName:"proptest",slug:"/proptest/property-based-testing.html",permalink:"/docs/5.4/proptest/property-based-testing.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.4/proptest/index.mdx",tags:[],version:"5.4",frontMatter:{id:"index",title:"Property-based Testing",slug:"property-based-testing.html",sidebar_label:"Introduction"},sidebar:"proptest",next:{title:"Test Functions",permalink:"/docs/5.4/proptest/property-test-functions.html"}},d={},m=[{value:"What is Property Testing?",id:"what-is-property-testing",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Next Steps",id:"next-steps",level:2}],f={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kotest is split into several subprojects which can be used independently. One of these subprojects is the property test framework.\nYou do ",(0,o.kt)("strong",{parentName:"p"},"not")," need to be using Kotest as your test framework (although you should!) to benefit from the property test support."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=g:io.kotest"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.kotest/kotest-property.svg?label=release",alt:"version badge"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest/kotest-framework-engine.svg?label=snapshot",alt:"version badge"}))),(0,o.kt)("h2",{id:"what-is-property-testing"},"What is Property Testing?"),(0,o.kt)("p",null,"Developers typically write example-based tests. These are your garden variety unit tests you know and love.\nYou provide some inputs, and some expected results, and a test framework like Kotest or JUnit checks that the actual\nresults meet the expectations."),(0,o.kt)("p",null,"One problem with this approach is that it is very easy to miss errors due to edge cases that the developer didn't think about,\nor lack of coverage in the chosen inputs. Instead, with property testing, hundreds or thousands of values are fed into the same test,\nand the values are (usually) randomly generated by your property test framework."),(0,o.kt)("p",null,"For example, a good property test framework will include values like negative infinity, empty lists, strings with non-ascii characters, and so on.\nThings we often forget about when writing example based tests."),(0,o.kt)("p",null,"Property tests were originally conceived in frameworks like Quickcheck with the notion of testing a ",(0,o.kt)("em",{parentName:"p"},"property")," on some object,\nie. something that should hold true for all inputs. An invariant in other words.  An example of an invariant is given two strings,\na and b, then ",(0,o.kt)("em",{parentName:"p"},"length(a + b)")," should always be equal to ",(0,o.kt)("em",{parentName:"p"},"length(a) + length(b)"),"."),(0,o.kt)("p",null,"That is where the term ",(0,o.kt)("em",{parentName:"p"},"property testing")," originates."),(0,o.kt)("p",null,"However, you do not have to use property tests to only test things like monad laws or basic numeric functions. Any test that\nwould benefit from a wide array of input values is a good candidate. For example, we might have a function that validates usernames, and we want to test that valid emails are accepted. A property test would be useful here in generating 1000s of combinations to help harden our validation logic."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"The property test framework is supported on all targets."),(0,o.kt)(s.Z,{defaultValue:"JVM/Gradle",values:[{label:"JVM/Gradle",value:"JVM/Gradle"},{label:"JVM/Maven",value:"JVM/Maven"},{label:"Multiplatform",value:"Multiplatform"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JVM/Gradle",mdxType:"TabItem"},(0,o.kt)("p",null,"Add the following dependency to your build:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n   testImplementation("io.kotest:kotest-property:$version")\n}\n'))),(0,o.kt)(i.Z,{value:"JVM/Maven",mdxType:"TabItem"},(0,o.kt)("p",null,"Add the following dependency to your build."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n   <groupId>io.kotest</groupId>\n   <artifactId>kotest-property-jvm</artifactId>\n   <version>${version}</version>\n   <scope>test</scope>\n</dependency>\n"))),(0,o.kt)(i.Z,{value:"Multiplatform",mdxType:"TabItem"},(0,o.kt)("p",null,"   Add the following dependency to your ",(0,o.kt)("inlineCode",{parentName:"p"},"commonTest")," sourceset:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'kotlin {\n  sourceSets {\n    val commonTest by getting {\n      dependencies {\n        implementation("io.kotest:kotest-property:$version")\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Alternatively, add the dependency to a specific target.\nFor example, we could add to the Javascript target only be using the ",(0,o.kt)("inlineCode",{parentName:"p"},"jsTest")," sourceset."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'kotlin {\n   targets {\n      js {\n         browser()\n         nodejs()\n      }\n   }\n   sourceSets {\n      val jsTest by getting {\n         dependencies {\n            implementation("io.kotest:kotest-property:$version")\n         }\n      }\n   }\n}\n')))),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"To create input values for tests, Kotest uses the term ",(0,o.kt)("em",{parentName:"p"},"generator"),". One generator per input argument is passed to a ",(0,o.kt)("em",{parentName:"p"},"test function"),",\nand the test will execute for a set number of ",(0,o.kt)("em",{parentName:"p"},"iterations"),"."),(0,o.kt)("p",null,"Read more about"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How ",(0,o.kt)("a",{parentName:"li",href:"/docs/5.4/proptest/property-test-functions.html"},"test functions")," are used."),(0,o.kt)("li",{parentName:"ul"},"The different types of ",(0,o.kt)("a",{parentName:"li",href:"/docs/5.4/proptest/property-test-generators.html"},"generators")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/5.4/proptest/generator-operations.html"},"operations")," on them."),(0,o.kt)("li",{parentName:"ul"},"How to write a ",(0,o.kt)("a",{parentName:"li",href:"/docs/5.4/proptest/custom-generators.html"},"custom generator"),"."),(0,o.kt)("li",{parentName:"ul"},"How to specify ",(0,o.kt)("a",{parentName:"li",href:"/docs/5.4/proptest/property-test-config.html"},"config")," for a test, including the seed.")))}h.isMDXComponent=!0}}]);