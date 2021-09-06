"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[8971],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},733:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l={id:"custom_events",title:"Custom Events",sidebar_label:"Custom Events"},i=void 0,s={unversionedId:"custom_events",id:"custom_events",isDocsHomePage:!1,title:"Custom Events",description:"Apart from gestures and scroll events, Reanimated 2.x exposes low-level API to create custom animated event handlers for custom animated components. With this API you can create handler hooks similar to useAnimatedGestureHandler and useAnimatedScrollHandler.",source:"@site/docs/custom_events.md",sourceDirName:".",slug:"/custom_events",permalink:"/react-native-reanimated/docs/next/custom_events",version:"current",frontMatter:{id:"custom_events",title:"Custom Events",sidebar_label:"Custom Events"},sidebar:"docs",previous:{title:"Events",permalink:"/react-native-reanimated/docs/next/events"},next:{title:"Layout Animations",permalink:"/react-native-reanimated/docs/next/layout_animations"}},c=[{value:"Handling events from custom animated component",id:"handling-events-from-custom-animated-component",children:[]}],u={toc:c};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apart from gestures and scroll events, Reanimated 2.x exposes low-level API to create custom animated event handlers for custom animated components. With this API you can create handler hooks similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"useAnimatedGestureHandler")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useAnimatedScrollHandler"),"."),(0,a.kt)("h2",{id:"handling-events-from-custom-animated-component"},"Handling events from custom animated component"),(0,a.kt)("p",null,"Let's say that you want to animate pagination dots based on custom component which exposes its scroll value - for that example we will use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-pager-view"},"pager")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);\n\nconst PagerExample = () => {\n  const scrollPosition = useSharedValue(0);\n  return (\n    <AnimatedPagerView initialPage={0} onPageScroll={scrollHandler}>\n      <View collapsable={false}>\n        <Text>{`Page ${1}`}</Text>\n      </View>\n      <View collapsable={false}>\n        <Text>{`Page ${2}`}</Text>\n      </View>\n    </AnimatedPagerView>\n  );\n};\n")),(0,a.kt)("p",null,"Here, we create animated pager with a scroll shared value, which will keep current pager's scroll value."),(0,a.kt)("p",null,"Next, we create custom handler hook to listen for native events from pager component and process them inside worklets."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const scrollHandler = useAnimatedPagerScrollHandler({\n  onPageScroll: (e) => {\n    'worklet';\n    scrollPosition.value = e.offset + e.position;\n  },\n});\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useAnimatedPagerScrollHandler")," is our custom hook - in ",(0,a.kt)("em",{parentName:"p"},"onPageScroll")," worklet we have access to current pager's page position and offset, combined together, give us scroll position, which we can use to animate components or compute by how much density points pager content is offset."),(0,a.kt)("p",null,"To implement custom hook we will use two low-level methods - ",(0,a.kt)("inlineCode",{parentName:"p"},"useHandler")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useEvent")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function useAnimatedPagerScrollHandler(handlers, dependencies) {\n  const { context, doDependenciesDiffer } = useHandler(handlers, dependencies);\n\n  return useEvent(\n    (event) => {\n      'worklet';\n      const { onPageScroll } = handlers;\n\n      if (onPageScroll && event.eventName.endsWith('onPageScroll')) {\n        onPageScroll(event, context);\n      }\n    },\n    ['onPageScroll'],\n    doDependenciesDiffer\n  );\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useHandler")," is responsible for providing context object for our handler, and an information whether it should be rebuilt."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useEvent")," is returning worklet event handler, which passed to animated component, will provide native events that can be handled on UI thread"),(0,a.kt)("p",null,"For full example, checkout Example App (look for Custom Handler Example - Pager)"))}p.isMDXComponent=!0}}]);