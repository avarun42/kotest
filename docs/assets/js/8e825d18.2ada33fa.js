"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[65891],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(87462),a=n(67294),o=n(86010),i=n(76775),l=n(91980),s=n(67392),u=n(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function c(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,i.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,l._X)(s),(0,a.useCallback)((function(e){if(s){var t=new URLSearchParams(o.location.search);t.set(s,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[s,o])]}function k(e){var t,n,r,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,p=e.groupId,k=d(e),f=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:k})})),h=f[0],g=f[1],v=m({queryString:s,groupId:p}),y=v[0],b=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),n=(0,u.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],T=w[1],J=function(){var e=null!=y?y:N;return c({value:e,tabValues:k})?e:null}();return(0,a.useLayoutEffect)((function(){J&&g(J)}),[J]),{selectedValue:h,selectValue:(0,a.useCallback)((function(e){if(!c({value:e,tabValues:k}))throw new Error("Can't select invalid tab value="+e);g(e),b(e),T(e)}),[b,T,k]),tabValues:k}}var f=n(12466),h=n(72389),g="tabList__CuJ",v="tabItem_LNqP";function y(e){var t=e.className,n=e.block,i=e.selectedValue,l=e.selectValue,s=e.tabValues,u=[],p=(0,f.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=u.indexOf(t),r=s[n].value;r!==i&&(p(t),l(r))},c=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=u.indexOf(e.currentTarget)+1;n=null!=(r=u[a])?r:u[0];break;case"ArrowLeft":var o,i=u.indexOf(e.currentTarget)-1;n=null!=(o=u[i])?o:u[u.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return u.push(e)},onKeyDown:c,onClick:d},l,{className:(0,o.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function b(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=k(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(b,(0,r.Z)({},e,t)))}function N(e){var t=(0,h.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},48946:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(74866),l=n(85162),s=["components"],u={id:"quickstart",title:"Quick Start",sidebar_label:"Quick Start"},p=void 0,d={unversionedId:"quickstart",id:"quickstart",title:"Quick Start",description:"Kotest is divided into several, stand alone, subprojects, each of which can be used independently:",source:"@site/docs/quick_start.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/docs/next/quickstart",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/quick_start.mdx",tags:[],version:"current",frontMatter:{id:"quickstart",title:"Quick Start",sidebar_label:"Quick Start"},sidebar:"docs",next:{title:"Changelog",permalink:"/docs/next/changelog.html"}},c={},m=[{value:"Test Framework",id:"test-framework",level:2},{value:"Assertions Library",id:"assertions-library",level:2},{value:"Property Testing",id:"property-testing",level:2},{value:"Snapshots",id:"snapshots",level:2}],k={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kotest is divided into several, stand alone, subprojects, each of which can be used independently:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/framework/framework.html"},"Test framework")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/assertions/assertions.html"},"Assertions library")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/proptest/property-based-testing.html"},"Property testing"))),(0,o.kt)("p",null,"You can decide to go ",(0,o.kt)("em",{parentName:"p"},"all in")," on Kotest, and use all three together, or you can choose to one or more modules in conjunction with other projects.\nFor example, you could use the assertions library with JUnit, or you could use the test framework with another assertions library like assertj."),(0,o.kt)("p",null,"This page gives setup instructions for various combinations of projects and targets."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Kotest is a ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/multiplatform.html"},"multi-platform project"),".\nIf you are unfamiliar with this, then Kotlin compiles to different targets - JVM, JS, Native, iOS and so on. If you are doing server side or android development then you want the modules that end with JVM, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest-property-jvm"),".")),(0,o.kt)("h2",{id:"test-framework"},"Test Framework"),(0,o.kt)("p",null,"The Kotest test framework is supported on JVM, Javascript and Native.\nTo enable Kotest for multiple platforms, combine the steps for the individual platforms as detailed in the following tabs."),(0,o.kt)(i.Z,{defaultValue:"JVM/Gradle",values:[{label:"JVM/Gradle",value:"JVM/Gradle"},{label:"JVM/Maven",value:"JVM/Maven"},{label:"Kotlin/JS",value:"JS"},{label:"Kotlin/Native",value:"Native"},{label:"Android",value:"Android"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"JVM/Gradle",mdxType:"TabItem"},(0,o.kt)("p",null,"Kotest on the JVM uses the ",(0,o.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/current/user-guide/#running-tests-build-gradle"},"JUnit Platform")," gradle plugin.\nFor Gradle 4.6 and higher this is as simple as adding ",(0,o.kt)("inlineCode",{parentName:"p"},"useJUnitPlatform()")," inside the tasks with type ",(0,o.kt)("inlineCode",{parentName:"p"},"Test"),"\nand then adding the Kotest junit5 runner dependency."),(0,o.kt)("p",null,"If you are using Gradle + Groovy then:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"test {\n   useJUnitPlatform()\n}\n")),(0,o.kt)("p",null,"Or if you are using Gradle + Kotlin then:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"tasks.withType<Test>().configureEach {\n   useJUnitPlatform()\n}\n")),(0,o.kt)("p",null,"And then the dependency:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"testImplementation 'io.kotest:kotest-runner-junit5:$version'\n"))),(0,o.kt)(l.Z,{value:"JS",mdxType:"TabItem"},(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"A working multi-platform project with JVM, native and Javascript all configured, with unit and data driven test examples, can be found here:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kotest/kotest-examples-multiplatform"},"https://github.com/kotest/kotest-examples-multiplatform"))),(0,o.kt)("p",null,"Add the ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.gradle.org/plugin/io.kotest.multiplatform"},"Kotest multiplatform gradle plugin")," to your build."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n  id("io.kotest.multiplatform") version "5.0.2"\n}\n')),(0,o.kt)("p",null,"Add the engine dependency to your ",(0,o.kt)("inlineCode",{parentName:"p"},"commonTest")," dependencies block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'kotlin {\n  targets {\n    js(IR) { // LEGACY or BOTH are unsupported\n      browser() // to compile for the web\n      nodejs() // to compile against node\n    }\n  }\n\n  sourceSets {\n    val commonTest by getting {\n      dependencies {\n        implementation("io.kotest:kotest-framework-engine:$version")\n      }\n    }\n  }\n}\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Only the new IR compiler backend for Kotlin/JS is supported. If you are compiling JS with the legacy compiler backend then you will not be\nable to use Kotest for testing.")),(0,o.kt)("p",null,"Write your tests using ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/framework/testing-styles.html#fun-spec"},"FunSpec"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/framework/testing-styles.html#should-spec"},"ShouldSpec")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/framework/testing-styles.html#string-spec"},"StringSpec"),".\nTests can be placed in either ",(0,o.kt)("inlineCode",{parentName:"p"},"commonTest")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"jsTest"),"\nsource sets. Run your tests using the ",(0,o.kt)("inlineCode",{parentName:"p"},"gradle check")," command."),(0,o.kt)("p",null,"The Javascript test engine is feature limited when compared to the JVM test engine. The major restriction is that annotation\nbased configuration will not work as Kotlin does not expose annotations at runtime to javascript code."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Tests for Javascript cannot nest tests. This is due to the underlying Javascript test runners (such as Mocha or Karma)\nnot supporting promises in parent tests, which is incompatible with coroutines and in Kotest every test scope is a coroutine.\nThis is why the supported specs are limited to ",(0,o.kt)("inlineCode",{parentName:"p"},"FunSpec"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ShouldSpec")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"StringSpec"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The IntelliJ Kotest plugin does not support running common, native or JS tests directly from the IDE using the green run icons.\nOnly execution via gradle is supported."))),(0,o.kt)(l.Z,{value:"Native",mdxType:"TabItem"},(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"A working multi-platform project with JVM, native and Javascript all configured, with unit and data driven test examples, can be found here:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kotest/kotest-examples-multiplatform"},"https://github.com/kotest/kotest-examples-multiplatform"))),(0,o.kt)("p",null,"Add the ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.gradle.org/plugin/io.kotest.multiplatform"},"Kotest multiplatform gradle plugin")," to your build."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n  id("io.kotest.multiplatform") version "5.0.2"\n}\n')),(0,o.kt)("p",null,"Add the engine dependency to your ",(0,o.kt)("inlineCode",{parentName:"p"},"commonTest")," dependencies block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'kotlin {\n  targets {\n    linuxX64() // can add any supported native targets such as linux, mac, windows etc\n  }\n}\nsourceSets {\n  val commonTest by getting {\n    dependencies {\n      implementation("io.kotest:kotest-framework-engine:$version")\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Tests can be placed in either ",(0,o.kt)("inlineCode",{parentName:"p"},"commonTest")," or a specific native sourceset.\nRun your tests using the ",(0,o.kt)("inlineCode",{parentName:"p"},"gradle check")," command."),(0,o.kt)("p",null,"The native test engine is feature limited when compared to the JVM test engine. The major restriction is that annotation\nbased configuration will not work as Kotlin does not expose annotations at runtime to native code."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The IntelliJ Kotest plugin does not support running common, native or JS tests from the IDE. You will need to use\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"gradle check")," task."))),(0,o.kt)(l.Z,{value:"JVM/Maven",mdxType:"TabItem"},(0,o.kt)("p",null,"For maven you must configure the surefire plugin for junit tests."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n   <groupId>org.apache.maven.plugins</groupId>\n   <artifactId>maven-surefire-plugin</artifactId>\n   <version>2.22.2</version>\n</plugin>\n")),(0,o.kt)("p",null,"And then add the Kotest JUnit5 runner to your dependencies section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n   <groupId>io.kotest</groupId>\n   <artifactId>kotest-runner-junit5-jvm</artifactId>\n   <version>{version}</version>\n   <scope>test</scope>\n</dependency>\n"))),(0,o.kt)(l.Z,{value:"Android",mdxType:"TabItem"},(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Currently, only JVM tests are officially supported in Kotest. We are open to suggestions on how to support UI tests."),(0,o.kt)("p",{parentName:"admonition"},"The following steps enable Kotest to be used for unit and integration tests, where the Android framework is not needed or is mocked that usually reside in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"src/test")," folder of your module.")),(0,o.kt)("p",null,"Kotest on Android uses the ",(0,o.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/current/user-guide/#running-tests-build-gradle"},"JUnit Platform")," gradle plugin.\nThis requires configuring the android test options block in your build file and then adding the Kotest junit5 runner dependency."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"android.testOptions {\n   unitTests.all {\n      it.useJUnitPlatform()\n   }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n   testImplementation 'io.kotest:kotest-runner-junit5:version'\n}\n"))),(0,o.kt)(l.Z,{value:"Multiplatform",mdxType:"TabItem"},(0,o.kt)("p",null,"To configure the test framework for both JS and JVM, you just combine copy the steps for JVM and JS."))),(0,o.kt)("h2",{id:"assertions-library"},"Assertions Library"),(0,o.kt)("p",null,"The core assertions library framework is supported on all targets. Submodules are supported on the platforms that applicable.\nFor example, the JDBC matchers only work for JVM since JDBC is a Java library."),(0,o.kt)(i.Z,{defaultValue:"JVM/Gradle",values:[{label:"JVM/Gradle",value:"JVM/Gradle"},{label:"JVM/Maven",value:"JVM/Maven"},{label:"Multiplatform",value:"Multiplatform"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"JVM/Gradle",mdxType:"TabItem"},(0,o.kt)("p",null,"Add the following dependency to your build:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"testImplementation 'io.kotest:kotest-assertions-core:$version'\n"))),(0,o.kt)(l.Z,{value:"JVM/Maven",mdxType:"TabItem"},(0,o.kt)("p",null,"Add the following dependency to your build."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n   <groupId>io.kotest</groupId>\n   <artifactId>kotest-assertions-core-jvm</artifactId>\n   <version>{version}</version>\n   <scope>test</scope>\n</dependency>\n"))),(0,o.kt)(l.Z,{value:"Multiplatform",mdxType:"TabItem"},(0,o.kt)("p",null,"Add the following dependency to your commonTest dependencies block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation 'io.kotest:kotest-assertions-core:$version'\n")),(0,o.kt)("p",null,"Alternatively, add the dependency to a specific target. For example, we could add to the Javascript target only."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'kotlin {\n   targets {\n      js {\n         browser()\n         nodejs()\n      }\n   }\n   sourceSets {\n      val jsTest by getting {\n         dependencies {\n            implementation("io.kotest:kotest-assertions-core:$version")\n         }\n      }\n   }\n}\n')))),(0,o.kt)("h2",{id:"property-testing"},"Property Testing"),(0,o.kt)("p",null,"The property test framework is supported on all targets."),(0,o.kt)(i.Z,{defaultValue:"JVM/Gradle",values:[{label:"JVM/Gradle",value:"JVM/Gradle"},{label:"JVM/Maven",value:"JVM/Maven"},{label:"Multiplatform",value:"Multiplatform"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"JVM/Gradle",mdxType:"TabItem"},(0,o.kt)("p",null,"Add the following dependency to your build:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"testImplementation 'io.kotest:kotest-property:$version'\n"))),(0,o.kt)(l.Z,{value:"JVM/Maven",mdxType:"TabItem"},(0,o.kt)("p",null,"Add the following dependency to your build."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n   <groupId>io.kotest</groupId>\n   <artifactId>kotest-property-jvm</artifactId>\n   <version>${version}</version>\n   <scope>test</scope>\n</dependency>\n"))),(0,o.kt)(l.Z,{value:"Multiplatform",mdxType:"TabItem"},(0,o.kt)("p",null,"Add the following dependency to your commonTest dependencies block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation 'io.kotest:kotest-property:$version'\n")),(0,o.kt)("p",null,"Alternatively, add the dependency to a specific target. For example, we could add to the Javascript target only."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'kotlin {\n   targets {\n      js {\n         browser()\n         nodejs()\n      }\n   }\n   sourceSets {\n      val jsTest by getting {\n         dependencies {\n            implementation("io.kotest:kotest-property:$version")\n         }\n      }\n   }\n}\n')))),(0,o.kt)("h2",{id:"snapshots"},"Snapshots"),(0,o.kt)("p",null,"Snapshot are automatically published on each commit to master.\nIf you want to test the latest snapshot build, setup the same way described above, change the version to the current snapshot version and add the following repository to your ",(0,o.kt)("inlineCode",{parentName:"p"},"repositories")," block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://oss.sonatype.org/content/repositories/snapshots\n")))}f.isMDXComponent=!0}}]);