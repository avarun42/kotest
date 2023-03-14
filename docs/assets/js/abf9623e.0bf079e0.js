"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[4534],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15922:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Matching JSON content",slug:"content-json-matchers.html",sidebar_label:"Matching content"},s=void 0,p={unversionedId:"assertions/json/content",id:"version-5.4/assertions/json/content",title:"Matching JSON content",description:"This module is available for JVM and JS targets.",source:"@site/versioned_docs/version-5.4/assertions/json/content.md",sourceDirName:"assertions/json",slug:"/assertions/json/content-json-matchers.html",permalink:"/docs/5.4/assertions/json/content-json-matchers.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.4/assertions/json/content.md",tags:[],version:"5.4",frontMatter:{title:"Matching JSON content",slug:"content-json-matchers.html",sidebar_label:"Matching content"},sidebar:"assertions",previous:{title:"Overview",permalink:"/docs/5.4/assertions/json/json-overview.html"},next:{title:"Schema matchers",permalink:"/docs/5.4/assertions/json/json-schema-matchers.html"}},d={},u=[{value:"shouldEqualJson",id:"shouldequaljson",level:2},{value:"compareJsonOptions",id:"comparejsonoptions",level:3},{value:"Usage:",id:"usage",level:4},{value:"Parameters",id:"parameters",level:4},{value:"shouldEqualSpecifiedJson",id:"shouldequalspecifiedjson",level:2},{value:"shouldContainJsonKey",id:"shouldcontainjsonkey",level:2},{value:"shouldContainJsonKeyValue",id:"shouldcontainjsonkeyvalue",level:2},{value:"shouldMatchJsonResource",id:"shouldmatchjsonresource",level:2}],m={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This module is available for JVM and JS targets."),(0,o.kt)("h2",{id:"shouldequaljson"},"shouldEqualJson"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"json.shouldEqualJson(other)")," asserts that the left-hand side represents the same\nJSON structure as the right-hand side."),(0,o.kt)("p",null,"The matcher allows for different formatting, and for different order of keys."),(0,o.kt)("p",null,"For example, the following two JSON strings would be considered equal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "sam",\n   "location": "chicago",\n   "age" : 41\n}\n')),(0,o.kt)("p",null,"and"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "age" : 41, "name": "sam", "location": "chicago" }\n')),(0,o.kt)("p",null,"The inverse of this matcher is ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldNotEqualJson")," which will error if two JSON strings\n",(0,o.kt)("em",{parentName:"p"},"are")," considered equal."),(0,o.kt)("h3",{id:"comparejsonoptions"},"compareJsonOptions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"shouldEqualJson")," supports an additional parameter of type ",(0,o.kt)("inlineCode",{parentName:"p"},"CompareJsonOptions")," which supports the following flags to toggle behaviour of the JSON comparison:"),(0,o.kt)("h4",{id:"usage"},"Usage:"),(0,o.kt)("p",null,"Options can be specified inline, like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"a.shouldEqualJson(b, compareJsonOptions { arrayOrder = ArrayOrder.Strict })\n")),(0,o.kt)("p",null,"Another option is to define a compare function which suits your desires, like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val myOptions = compareJsonOptions {\n   typeCoercion = TypeCoercion.Enabled\n   arrayOrder = ArrayOrder.Lenient\n}\n\ninfix fun String.lenientShouldEqualJson(other: String) = this.shouldEqualJson(other, myOptions)\n\n"[1, 2]" lenientShouldEqualJson "[2, 1]" // This will pass\n')),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible values"),(0,o.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PropertyOrder")),(0,o.kt)("td",{parentName:"tr",align:null},"Determines if the order of properties in JSON objects are considered when comparing"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PropertyOrder.Strict"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"PropertyOrder.Lenient")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PropertyOrder.Lenient"),", i.e. order of properties ",(0,o.kt)("em",{parentName:"td"},"DON'T")," matter")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ArrayOrder")),(0,o.kt)("td",{parentName:"tr",align:null},"Determines if the order of elements in JSON arrays are considered when comparing"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ArrayOrder.Strict"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"ArrayOrder.Lenient")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ArrayOrder.Strict"),", i.e. order of elements ",(0,o.kt)("em",{parentName:"td"},"DO")," matter")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"FieldComparison")),(0,o.kt)("td",{parentName:"tr",align:null},"Determines if comparison will fail if JSON objects ",(0,o.kt)("inlineCode",{parentName:"td"},"actual")," contain extra properties, when compared to ",(0,o.kt)("inlineCode",{parentName:"td"},"expected")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"FieldComparison.Strict"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"FieldComparison.Lenient")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"FieldComparison.Strict"),", i.e. extra properties will cause inequality")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"NumberFormat")),(0,o.kt)("td",{parentName:"tr",align:null},"Determines if comparison of numbers are strict with regards to number format. For instance, if 100.0 and 100 are considered equal."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"NumberFormat.Strict"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"NumberFormat.Lenient")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"NumberFormat.Lenient"),", i.e. number formats ",(0,o.kt)("em",{parentName:"td"},"DON'T")," matter")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TypeCoercion")),(0,o.kt)("td",{parentName:"tr",align:null},"Determines if types will try to be coerced, for instance when a string contains a number or boolean value"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TypeCoercion.Enabled"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"TypeCoercion.Disabled")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TypeCoercion.Disabled"),", i.e. types will ",(0,o.kt)("em",{parentName:"td"},"NOT")," be coerced")))),(0,o.kt)("p",null,"Targets: ",(0,o.kt)("strong",{parentName:"p"},"Multiplatform")),(0,o.kt)("h2",{id:"shouldequalspecifiedjson"},"shouldEqualSpecifiedJson"),(0,o.kt)("p",null,"Alias for ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldEqualJson"),", with default options except ",(0,o.kt)("inlineCode",{parentName:"p"},"FieldComparison")," which is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"FieldComparison.Lenient")," instead."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val a = """ { "a": true, "date": "2019-11-03" } """\nval b = """ { "a": true } """\n\n// this would pass\na shouldEqualSpecifiedJson b\n\n// this would fail\na shouldEqualJson b\n')),(0,o.kt)("p",null,"Targets: ",(0,o.kt)("strong",{parentName:"p"},"Multiplatform")),(0,o.kt)("h2",{id:"shouldcontainjsonkey"},"shouldContainJsonKey"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'json.shouldContainJsonKey("$.json.path")')," asserts that a JSON string contains the given JSON path."),(0,o.kt)("p",null,"The inverse of this matcher is ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldNotContainJsonKey")," which will error if a JSON string ",(0,o.kt)("em",{parentName:"p"},"does")," contain the given JSON path."),(0,o.kt)("p",null,"Targets: ",(0,o.kt)("strong",{parentName:"p"},"JVM")),(0,o.kt)("h2",{id:"shouldcontainjsonkeyvalue"},"shouldContainJsonKeyValue"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'str.shouldContainJsonKeyValue("$.json.path", value)')," asserts that a JSON string contains a JSON path with a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,o.kt)("p",null,"The inverse of this matcher is ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldNotContainJsonKeyValue")," which will error if a JSON string ",(0,o.kt)("em",{parentName:"p"},"does")," contain the given value at the given JSON path."),(0,o.kt)("p",null,"Targets: ",(0,o.kt)("strong",{parentName:"p"},"JVM")),(0,o.kt)("h2",{id:"shouldmatchjsonresource"},"shouldMatchJsonResource"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'json.shouldMatchJsonResource("/file.json")')," asserts that the JSON is equal to the existing test reosource ",(0,o.kt)("inlineCode",{parentName:"p"},"/file.json"),", ignoring properties' order and formatting."),(0,o.kt)("p",null,"Targets: ",(0,o.kt)("strong",{parentName:"p"},"JVM")))}c.isMDXComponent=!0}}]);