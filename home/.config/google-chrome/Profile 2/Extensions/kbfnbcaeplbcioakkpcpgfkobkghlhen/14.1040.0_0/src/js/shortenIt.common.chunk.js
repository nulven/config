(self.webpackChunk=self.webpackChunk||[]).push([[7272],{51972:(e,t,i)=>{i.d(t,{O:()=>Y});var s=i(57050),a=i(35214),n=i(40327),r=i(54483),o=i(31820),l=i(35108),d=i(77176),c=i(40151),u=i(2834),m=i(55415),p=i(22232),h=i(5114),g=i(94435),S=i(27378),v=i(30763),f=i(7046),y=i(21474),C=i(3656),b=i(28706),I=i(26027),A=i(15646),k=i(74754),w=i(66346),_=i(76974),E=i(5739),R=i(16314),q=i(35501),T=i(35630),F=i(32585);const B=g.UI.Node.make((({state:e,notify:t})=>{const i=S.useContext(v.m.Context);return S.createElement(E.F.Fragment,null,e.pipe(d.U((e=>(0,s.pipe)(e.details,h.fold((()=>S.createElement("div",null)),(()=>S.createElement(f.zx.Tertiary,{key:"toggle-more",name:(0,w.hC)(e.visualState,i),title:(0,w.hC)(e.visualState,i),onClick:b.hz(t({type:A.eI.Kind.startTransitionTo,id:e.id,transition:{type:I.X.isCardOpen(e.visualState)?"focused":"expanded",clockwise:!0}}))},I.X.isCardOpen(e.visualState)?S.createElement(y.JO.Arrow,{key:"more",className:F.lessIcon}):S.createElement(y.JO.QuestionMark,{key:"expand"}),(0,w.hC)(e.visualState,i)))))))))})),O=g.UI.Node.make((({notify:e})=>S.createElement(f.zx.Tertiary,{name:"dismiss",title:"Dismiss",onClick:b.hz(e({type:R.Dy.ignoreButtonClick}))},S.createElement(y.JO.Ignore,null)))),U=g.UI.Node.make((({state:e})=>S.createElement(E.F.Fragment,null,e.pipe(d.U((e=>(0,s.pipe)(e.details,h.fold(s.constNull,(t=>S.createElement(w.G3,{key:"card-actions-details",visualState:e.visualState,className:F.more},S.createElement(C.XY,{className:F.minimalDescription,...k.y.renderToHtml(t)}))))))))))),x=g.UI.Node.make((({notify:e})=>S.createElement(f.zx.Flat,{className:F.feedbackFooter,name:"attention-score-card-open-feedback-form",onClick:b.hz(e({type:R.Dy.feedbackButtonClick}))},S.createElement("span",null,"Anything we can improve?"),S.createElement(y.JO.SmartPhrases.OpenFeedbackFormArrow,null)))),N=g.UI.Node.make((({state:e,notify:t})=>S.createElement(E.F.Fragment,null,e.pipe(d.U((e=>S.createElement(f.zx.Primary,{name:"readersAttentionItem-view-more",onClick:b.hz(t({type:R.Dy.viewMoreButtonClick,item:e})),className:F.viewMoreButton},"See suggestions"))))))),D=g.UI.Knot.make(g.UI.Grid.make((({slots:e})=>S.createElement(E.F.div,{className:T.card,"data-name":"attention-score-card-full"},e.header,S.createElement(E.F.div,{className:F.cardBody},e.content,e.details,S.createElement("div",{className:F.actions},e.viewMoreButton)),S.createElement(E.F.div,{className:F.actionsFooter},e.expandButton,e.dismissButton),e.feedbackFooter))),{header:(0,q.h)("full"),content:q.r,details:U,expandButton:B,dismissButton:O,viewMoreButton:N,feedbackFooter:x}),P=e=>g.Z.composeKnot({header:()=>e,content:()=>e.pipe(d.U((e=>({attentionScore:e.attentionScore,description:e.description})))),details:()=>e,expandButton:()=>e,dismissButton:()=>_.of(null),viewMoreButton:g.Z.fromSideEffect(s.constVoid,e),feedbackFooter:()=>_.of(null)});var Q=i(12187),M=i(65060),H=i(11510);const X=g.UI.Knot.make(g.UI.Grid.make((({slots:e,notify:t})=>S.createElement(E.F.div,{"data-name":"attention-score-card-mini",onClick:b.hz(t({type:R.Dy.miniCardClick,id:M.g.id})),...(0,Q.Sh)(T.card,H.miniCard)},e.header))),{header:(0,q.h)("mini")}),V=e=>g.Z.composeKnot({root:g.Z.fromSideEffect(s.constVoid,null),header:()=>e});var W;!function(e){const t=g.UI.Union.make("kind",{mini:X,full:D,hidden:g.UI.Node.empty}),i=e=>({mini:V(e.pipe(d.U((e=>({title:e.view.title,attentionScore:e.view.attentionScore,density:e.density}))))),full:P(e.pipe(d.U(m.pick("view")))),hidden:()=>c.E}),a=r.G.make(t);function n(e){switch(e){case"added":case"rendered":return"mini";case"focused":case"expanded":return"full";case"hidden":case"removed":return"hidden";case"presuccess":case"success":case"feedback_form":case"muted":throw new Error(`${e} is not supported for ReadersAttentionCard`);default:(0,p.vE)(e)}}e.Card=g.UI.Node.make((({state:e,notify:t})=>g.UI.mount(a,(0,s.pipe)(o.g.flow(e.pipe(d.U(m.pick("view"))),(0,s.pipe)((e=>g.Z.composeUnion(i(e),(()=>e.pipe(d.U((e=>({kind:n(e.view.visualState.transition.type)})))))))(e),g.Z.extendActions(u.b((e=>t(e.action.action)())))),(e=>g.Z.composeUnion(i(e),(()=>e.pipe(d.U((e=>({kind:(0,s.pipe)(e.view.visualState.from,h.fold((()=>"mini"),n))})))))))(e),m.pick("id"),l.CE.toOption(l.a)),o.g.extend((e=>t(e)()))))))}(W||(W={}));var G=i(48521),z=i(16892);const L=e=>t=>({...t,positionState:e}),K=e=>t=>({...t,visualState:e});var Y,J=i(66896),Z=i(52741),$=i(7910),j=i(49978),ee=i(84974),te=i(98752),ie=i(17594),se=i(91549),ae=i(20594),ne=i(86775),re=i(77610),oe=i(15215),le=i(70100),de=i(47306),ce=i(35416),ue=i(25975),me=i(8125),pe=i(83078),he=i(73975),ge=i(45701),Se=i(31881);!function(e){function t(e,t,i,s,a){return ce.nL.Items.mapper((e=>e.kind),{[I.X.Kind]:e,[se.R.Kind]:t,[le.X.kind]:i,[de.J.kind]:s,[M.g.kind]:a})}function i(e){return e.kind===I.X.Kind}function r(e){return e.kind===se.R.Kind}function o(e){return i(e)&&re.C.isEthicalAIItem(e)}function l(e){return r(e)&&re.C.isEthicalAIItem(e)}function d(e,i){return{viewState:(s,a)=>t((t=>({view:t,isLastCard:s,kind:"alertCard",visibleViewportHeight:e(a)})),(t=>({view:t,isLastCard:s,kind:"alertsBundle",visibleViewportHeight:e(a)})),(e=>({view:e,kind:"checklistItemEmpty"})),(t=>({view:t,kind:"checklistItemWithAlerts",isLastCard:s,visibleViewportHeight:e(a)})),(e=>({density:i()===J.R.SpecialId.AllAlerts?"normal":"compact",view:e,kind:"readersAttentionItem"})))}}e.isSelectableWithAlertItem=(0,me.Kg)(i,r,oe.d.isChecklistItemWithAlerts),e.getActiveItemWithAlert=ce.In.getActiveItemOfType(e.isSelectableWithAlertItem),e.getActiveAlignableItem=ce.In.getActiveItemOfType(e.isSelectableWithAlertItem),e.getActiveFocusableItem=ce.In.getActiveItemOfType(e.isSelectableWithAlertItem),e.checksFeedItemsMapper=t,e.isAlertCard=i,e.isAlertsBundle=r,e.isEthicalAIAlertCard=o,e.isEthicalAIAlertsBundle=l,e.defaultOrd=(0,a.fold)(ge.getMonoid())([(0,n.pipe)(ge.ordBoolean,ge.contramap((0,me.ff)(o))),(0,n.pipe)(ge.ordBoolean,ge.contramap(M.m)),ge.fromCompare(((e,t)=>i(e)&&i(t)?I.X.ord.compare(e,t):0))]),e.bundlesOrd=(0,a.fold)(ge.getMonoid())([(0,n.pipe)(ge.ordBoolean,ge.contramap((0,me.ff)(l))),(0,n.pipe)(ge.ordBoolean,ge.contramap(M.m)),ge.fromCompare(((e,t)=>r(e)&&r(t)?se.R.ord.compare(e,t):0))]),e.item=e=>Se.UI.Union.make("kind",{alertCard:Z.p.Card(e),alertsBundle:j.Q.Card(e),checklistItemEmpty:ee.z.Card(e),checklistItemWithAlerts:te.fw.Card(e),readersAttentionItem:W.Card}),e.viewState=d,e.createCardListFlow=e=>(0,$.sJ)((t=>(0,n.pipe)(e,pe.tap((e=>e.actions.next(t.action)))))),e.listItemOrd=e=>ge.contramap((e=>e.cell.item.view))(e).compare;const c={equals:(e,t)=>e.kind===t.kind&&z.s.eqById.equals(e,t)},u=(e,t,i,s,a)=>({equals:(n,r)=>{const o={[I.X.Kind]:e,[se.R.Kind]:t,[le.X.kind]:i,[de.J.kind]:s,[M.g.kind]:a};return c.equals(n,r)&&function(e,t){return(i,s)=>t[e(i)].equals(i,s)}((e=>e.kind),o)(n,r)}}),m=(0,a.fold)(he.getMonoid())([G.o.eq,z.s.verticalPositionEq,c]);function p(e,i){const s=I.X.Capabilities.getChangePosition(e);return{changePosition:e=>t(s.changePosition(e),se.R.changePosition(e),le.X.changePositionState(e),i.changePositionState(e),L(e))}}function g(e,i,s){const a=I.X.Capabilities.getAnimatable(e),n=se.R.Capabilities.getAnimatable(s);return{completeTransition:e=>{return t(a.completeTransition(e),n.completeTransition(e),le.X.completeTransition(e),i.completeTransition(e),(s=e,e=>({...e,visualState:G.o.VisualState.complete(e.visualState,s)})));var s},transitionTo:e=>t(a.transitionTo(e),n.transitionTo(e),le.X.transitionTo(e),i.transitionTo(e),(e=>t=>({...t,visualState:G.o.VisualState.to(t.visualState,e)}))(e)),changeVisualState:e=>t(a.changeVisualState(e),n.changeVisualState(e),le.X.changeVisualState(e),i.changeVisualState(e),K(e))}}function S(e,i,a,r,o){const l=se.R.getCardHydrator(o),d=se.R.getSelect(a,r,l),c=se.R.getSelectByAlert(a,r,l),u=I.X.Capabilities.getSelect(e);return{select:(e,a,r)=>t(u.select(e,a,r),d(e,a),le.X.select(e),i.selectFirstAlert((0,s.unsafeCoerce)(e),a),function(e,t){return i=>{const a=(0,n.pipe)(e,h.map((e=>t.compare(i,e)>0)),h.getOrElse(s.constTrue)),r=(0,n.pipe)(e,h.exists((e=>e.id===i.id))),o=r&&I.X.isCardOpen(i.visualState)?"expanded":"focused",l=(0,n.pipe)(e,h.fold((()=>G.o.VisualState.initial({type:o,clockwise:a})),(e=>G.o.VisualState.to(i.visualState,{type:o,clockwise:a}))));return(0,n.pipe)(i,r?s.identity:L(z.s.PositionState.invalidateHeight(i.positionState)),K(l))}}(e,a)),selectByAlert:(e,a,n,r)=>t(u.selectByAlert(e,a,n,r),c(a,e,n),le.X.select(e),i.selectByAlert(a,(0,s.unsafeCoerce)(e),n),s.identity),unselect:(e,a)=>t(u.unselect((0,s.unsafeCoerce)(e),a),se.R.unselect((0,s.unsafeCoerce)(e),a),le.X.unselect(e),i.unselect((0,s.unsafeCoerce)(e),a),function(e,t){return i=>{const a=(0,n.pipe)(e,h.map((e=>t.compare(i,e)>0)),h.getOrElse(s.constTrue)),r=(0,n.pipe)(e,h.exists((e=>e.id===i.id)));return(0,n.pipe)(i,r?s.identity:L(z.s.PositionState.invalidateHeight(i.positionState)),G.o.isHidden(i)?s.identity:K(G.o.VisualState.to(i.visualState,{type:"rendered",clockwise:a})))}}(e,a))}}function v(e,a,n,o,l,d){return{removeAlertFromItem:(c,u)=>t((t=>I.X.Capabilities.getRemoveAlerts(e,u.itemsOrd)(c,ce.In.getActiveItemOfType(i)(u))(t)),(e=>se.R.Capabilities.getRemoveAlertsCapability(o,l,d,u.itemsOrd)(c,ce.In.getActiveItemOfType(r)(u))(e)),s.identity,(e=>ne.G.getRemoveAlert(a,n,o).removeAlertFromItem(c,u)(e)),s.identity)}}function f(e,i,a,n){const r=I.X.Capabilities.getRemove(e);return{remove:(e,o)=>t(r.remove(e,o),(t=>e(t)?se.R.Capabilities.getRemove(a,n)([t.activeAlert],o(t))(t):t),s.identity,(t=>e(t)?i.removeAlerts(t.alerts,o(t))(t):t),s.identity)}}function y(e,i,a,n){const r=I.X.Capabilities.getUpdateWithAlert(e),o=se.R.Capabilities.getUpdatableWithAlertsCapability(i,n);return{updateWithAlerts:e=>t(r.updateWithAlerts(e),o(e),s.identity,a.updateWith(e),s.identity)}}e.equatable={structEq:u(I.X.eq,se.R.eq,le.X.eq,de.J.eq,M.g.eq),idEq:u(c,c,c,c,c),visualStateEq:u(m,m,m,m,m)},e.changePosition=p,e.disposable={isScheduledToDispose:t((e=>re.C.willBeDisposed(e,e.removedAlertsIds)),(e=>re.C.willBeDisposed(e,e.removedAlertsIds)),s.constFalse,(e=>re.C.willBeDisposed(e,e.removedAlertsIds)),s.constFalse)},e.hidable={isHidden:t(G.o.isHidden,G.o.isHidden,G.o.isHidden,G.o.isHidden,G.o.isHidden)},e.animatableItem=g,e.hasAlertsQueries={isSelectableByAlert:e=>t(re.C.hasAlert(e.alert.id),re.C.hasAlert(e.alert.id),s.constFalse,re.C.hasAlert(e.alert.id),s.constFalse),hasAlert:e=>t(re.C.hasAlert(e),re.C.hasAlert(e),s.constFalse,re.C.hasAlert(e),s.constFalse),hasActiveAlert:t((e=>h.some(e.activeAlert)),(e=>h.some(e.activeAlert)),(()=>h.none),(e=>h.some(e.activeAlert)),(()=>h.none))},e.changePositionStrategyQueries={useReferenceHeightOnRemove:t(s.constFalse,s.constFalse,s.constFalse,s.constTrue,s.constFalse)},e.select=S,e.removeAlert=v,e.remove=f,e.updateWithAlert=y,e.releaseAlert=(t,i,s,a,n,r)=>ue.v.Capabilities.getAlertReleaser({...v(t,i,s,a,n,r),...e.disposable}),e.unselectable=(e,t,i,s,a)=>ue.v.Capabilities.getUnselectable(ce.In.getActiveItem,S(e,t,i,s,a)),e.selectableByAlert=(t,i,s,a,n)=>ue.v.Capabilities.getSelectableByAlert(ce.In.getActiveItem,{...e.hasAlertsQueries,...S(t,i,s,a,n),...ue.v.Capabilities.getHasChecksFeed()}),e.selectableById=(e,t,i,s,a)=>ue.v.Capabilities.getSelectableById(ce.In.getActiveItem,S(e,t,i,s,a)),e.updateMeta=()=>({updateMeta:ue.v.Capabilities.getMetaUpdatable().updateMeta}),e.animatableFeed=(e,t,i,s,a,n)=>ue.v.Capabilities.getAnimatable(e,{...v(e,t,i,s,a,n),...g(e,t,n),...ue.v.Capabilities.getHasChecksFeed()}),e.hasPriorityToggle=(t,i,s)=>ue.v.WithPriority.getHasPriorityToggle({...g(t,i,s),...e.hasAlertsQueries,...e.disposable});const C=t=>["focused","expanded"].includes(t.visualState.transition.type)&&!e.disposable.isScheduledToDispose(t);function b(e,i){const s=ae.Mq.getCardSelections(i);return{nextAlert:t(s.nextAlert,s.nextAlert,(()=>h.none),e.nextAlert,(()=>h.none)),prevAlert:t(s.prevAlert,s.prevAlert,(()=>h.none),e.prevAlert,(()=>h.none))}}function A(){return{updateUserInput:e=>t(I.X.updateUserInput(e),se.R.changeUserInput(e),s.identity,s.identity,s.identity)}}e.alignable={isValidToAlign:t(C,C,s.constFalse,C,s.constFalse)},e.alertIterator=b,e.itemReleaser=(e,t,i)=>ne.G.getItemReleaser(e,t,i,ue.v.Capabilities.getItemReleaser()),e.hasAlerts=ue.v.Capabilities.getHasAlerts,e.getDefaultNextAlertItemFilter=t=>(0,me.W9)(e.isSelectableWithAlertItem,(i=>!e.disposable.isScheduledToDispose(i)&&(0,n.pipe)(i,e.hasAlertsQueries.hasActiveAlert,h.map((e=>t.isRegistered(e.id))),h.getOrElse(s.constFalse)))),e.hasUserInput=A,e.priorityTest=(0,me.W9)(i,(e=>ie.$.isPriority(e.activeAlert))),e.verifiable=()=>ue.v.Capabilities.getVerifiable(e.disposable),e.cloneable=()=>{const e=z.s.Capabilities.getPojoCloneable().clone;return{clone:t(I.X.Capabilities.getCloneable().clone,e,e,e,e)}},e.getCapabilities=function(t,i,a,n,r,o,l,c=(0,s.constant)(h.none),u=ae.IG.Default){return{...d(c,l),...e.disposable,...e.hidable,...e.equatable,...A(),...e.cloneable(),...p(t,a),...g(t,a,r),...S(t,a,n,u,r),...f(t,a,u,r),...v(t,a,o,n,u,r),...y(t,i,a,r),...e.hasAlertsQueries,...e.changePositionStrategyQueries,...e.alignable,...e.releaseAlert(t,a,o,n,u,r),...e.unselectable(t,a,n,u,r),...e.selectableByAlert(t,a,n,u,r),...e.selectableById(t,a,n,u,r),...e.updateMeta(t),...e.animatableFeed(t,a,o,n,u,r),...e.hasPriorityToggle(t,a,r),...e.itemReleaser(a,o,n),...e.verifiable(),...e.cloneable(),...e.hasAlerts(b(a,n),e.hasAlertsQueries,(()=>e.getDefaultNextAlertItemFilter(n)))}}}(Y||(Y={}))},65060:(e,t,i)=>{i.d(t,{g:()=>s,m:()=>m});var s,a=i(57050),n=i(2291),r=i(36156),o=i(16892),l=i(48521),d=i(4890),c=i(73975),u=i(5114);function m(e){return e.id===s.id}!function(e){e.id="ReadersAttentionItemId",e.kind="ReadersAttentionItem",e.eq=c.fromEquals(((e,t)=>e.hashCode()===t.hashCode()&&o.s.PositionState.eq.equals(e.positionState,t.positionState)&&l.o.VisualState.eq.equals(e.visualState,t.visualState))),e.hashCodeOwnFields=e=>(0,r.NO)({title:e.title,description:e.description,details:(0,a.pipe)(e.details,u.fold((()=>"none"),(e=>`some(${e})`))),attentionScore:n.T.prism.reverseGet(e.attentionScore)}),e.hashCode=e.hashCodeOwnFields,e.create=function(t,i,s){return{id:e.id,kind:e.kind,renderOptions:{...d.j.defaultOptions,layoutDensity:d.j.Density.minimal},positionState:i,visualState:s,title:t.title,description:t.description,details:t.details,attentionScore:t.attentionScore,equals(t){return e.eq.equals(this,t)},hashCode(){return e.hashCode(this)}}}}(s||(s={}))},16314:(e,t,i)=>{var s;function a(e){return e.type===s.miniCardClick}function n(e){return e.type===s.ignoreButtonClick}function r(e){return e.type===s.viewMoreButtonClick}function o(e){return e.type===s.feedbackButtonClick}i.d(t,{Dy:()=>s,Vl:()=>a,l9:()=>n,Q:()=>r,RJ:()=>o}),function(e){e.miniCardClick="readersAttentionItemMiniCardClick",e.ignoreButtonClick="readersAttentionItemIgnoreButtonClick",e.viewMoreButtonClick="readersAttentionItemViewMoreButtonClick",e.feedbackButtonClick="readersAttentionItemFeedbackButtonClick"}(s||(s={}))},35501:(e,t,i)=>{i.d(t,{h:()=>h,r:()=>g});var s=i(27378),a=i(63847),n=i(3656),r=i(77176),o=i(2291),l=i(8125),d=i(5739),c=i(12187),u=i(94435),m=i(35630);const p=({progress:e})=>s.createElement(d.F.Fragment,null,e.pipe(r.U((e=>s.createElement(a.P,{percentage:o.g.prism.reverseGet(e),colorType:a.P.ColorType.neoBlue,iconSize:a.P.IconSize.extraSmall,theme:{radialProgressBar:m.circleProgress,radialProgressText:m.circleText}}))))),h=e=>u.UI.Node.make((({view:t})=>s.createElement(d.F.div,{...(0,c.Sh)(m.header,t("density").pipe(r.U((e=>"normal"===e)),r.U((0,l.RN)(m.normal,m.compact))))},s.createElement("div",{className:m.progressIcon},s.createElement(p,{progress:t("attentionScore").pipe(r.U(o.g.fromRatio))})),s.createElement(n.XY,{...(0,c.Sh)(m.title,"full"===e?m.full:void 0)},t("title"))))),g=u.UI.Node.make((({view:e})=>s.createElement(s.Fragment,null,s.createElement("div",{className:m.progressContainer,"data-name":"attention-score-progress-bar"},s.createElement(d.F.div,{className:m.progressBar,style:{width:e("attentionScore").pipe(r.U(o.g.fromRatio),r.U(o.g.prism.reverseGet),r.U((e=>`${e}%`)))}},s.createElement(n.XY,{className:m.progressValue,"data-name":"attention-score-progress-value"},e("attentionScore").pipe(r.U(o.g.fromRatio),r.U(o.g.prism.reverseGet),r.U((e=>`${e}%`)))))),s.createElement(n.XY,{className:m.description},e("description")))))},56989:(e,t,i)=>{i.r(t),i.d(t,{ShortenItFeature:()=>Z});var s,a=i(57050),n=i(74850),r=i(51972),o=i(5817),l=i(19751),d=i(85985),c=i(66310),u=i(80900),m=i(17343),p=i(93508),h=i(28043),g=i(2844),S=i(77176),v=i(76974),f=i(38983);!function(e){e.disconnected="disconnected",e.sessionStarted="sessionStarted",e.checking="checking",e.idle="idle"}(s||(s={}));class y{constructor(e,t,i){this._textObserver=e,this._requestAwaitService=t,this._textChangeBufferEmpty=i,this._logger=n.Y.create("ShortenItRequestManager"),this._sessionState=f.h.create({kind:s.sessionStarted}),this._typingDebounceDelay=(0,o.m9)(1),this._typingPaused=this._textObserver.contentChanges.async.pipe(d.h((e=>e.changes.length>0)),c.w((()=>u.H(this._typingDebounceDelay).pipe(m.h(!0),p.O(!1)))),p.O(!0),h.x(),l.d({bufferSize:1,refCount:!0}))}_flush(){this._logger.debug("flushing changes"),this._requestAwaitService.addRequest(Promise.resolve())}canSubmitRequest(){return this._typingPaused.pipe(c.w((e=>e?(this._textChangeBufferEmpty.get()||this._flush(),g.aj([this._sessionState,this._textChangeBufferEmpty]).pipe(S.U((([e,t])=>e.kind===s.idle&&t)))):v.of(!1))))}onNewRemoteRevision(e){e.sessionJustStarted&&this._onCAPISessionStarted(),this._sessionState.get().kind!==s.checking&&this._logger.trace("checking in progress"),this._sessionState.set({kind:s.checking,lastRevision:e.revision})}onRevisionFinished(e){const t=this._sessionState.get();t.kind===s.checking&&t.lastRevision===e&&(this._logger.trace("checking idle"),this._sessionState.set({kind:s.idle}))}onDisconnect(){this._logger.debug("websocket disconnected"),this._sessionState.set({kind:s.disconnected})}_onCAPISessionStarted(){this._logger.debug("session started"),this._sessionState.set({kind:s.sessionStarted})}}var C,b=i(17404),I=i(40018),A=i(14601),k=i(32952),w=i(23063),_=i(24209),E=i(5114),R=i(71249);!function(e){e.isReceived=function(e){return e.kind===I.vQ.SummaryState.received},e.isNotFound=function(e){return e.kind===I.vQ.SummaryState.notFound}}(C||(C={}));class q{constructor(e,t){this._alertProcessor=e,this._textObserver=t,this._logger=n.Y.create("ShortenItRequestStateHolder"),this._subs=new A.w,this._summaryRequestState=new Map,this._summaryNotFound=new k.xQ,this._staleRequests=new Map,this._textChangedBeforeSummaryReceived=new k.xQ,this.summaryNotFound=this._summaryNotFound.asObservable(),this.textChangedBeforeSummaryReceived=this._textChangedBeforeSummaryReceived.asObservable(),this._trackSummaryReceived(),this._trackTextChanges()}_trackTextChanges(){this._subs.add(this._textObserver.contentChanges.async.subscribe((e=>{if(!e.deltaChange.isEmpty)for(const e of this._staleRequests.keys())this._staleRequests.set(e,!0)})))}onCAPISessionStarted(){this._summaryRequestState.clear(),this._staleRequests.clear()}onShortenItFinished(e){const t=this._summaryRequestState.get(e);if((null==t?void 0:t.kind)!==I.vQ.SummaryState.received){if(!0===this._staleRequests.get(e))return this._logger.info("request stale",e),void this._textChangedBeforeSummaryReceived.next(e);this._logger.info("summary not found",e),this._summaryRequestState.set(e,{kind:I.vQ.SummaryState.notFound,latency:(0,a.pipe)(E.fromNullable(this._summaryRequestState.get(e)),E.fold((()=>0),(e=>{switch(e.kind){case I.vQ.SummaryState.requestSent:return performance.now()-e.requestTimestamp;case I.vQ.SummaryState.notFound:return e.latency;default:return 0}})))}),this._summaryNotFound.next(e)}else this._staleRequests.delete(e)}onShortenItSubmit(e){this._staleRequests.set(e,!1),this._summaryRequestState.set(e,{kind:I.vQ.SummaryState.requestSent,requestTimestamp:performance.now()})}get(e){return E.fromNullable(this._summaryRequestState.get(e))}_trackSummaryReceived(){const e=this._alertProcessor.alerts.state.pipe(S.U((0,a.flow)(Object.values,Array.from,R.filter(b.S.isShortenItAlertWithSummary))),w.q(1)),t=this._alertProcessor.alerts.changes.pipe(S.U((e=>e.addedAlerts.concat(e.updatedAlerts).filter(b.S.isShortenItAlertWithSummary))));this._subs.add(_.T(e,t).subscribe((e=>{e.forEach((e=>{const t=e.id;this._logger.info("summary received",t),this._summaryRequestState.set(t,{kind:I.vQ.SummaryState.received,latency:(0,a.pipe)(E.fromNullable(this._summaryRequestState.get(t)),E.fold((()=>0),(e=>{switch(e.kind){case I.vQ.SummaryState.requestSent:return performance.now()-e.requestTimestamp;case I.vQ.SummaryState.received:return e.latency;default:return 0}})))})}))})))}dispose(){this._subs.unsubscribe()}}var T=i(2291),F=i(15646),B=i(77610),O=i(35416),U=i(60797),x=i(16118),N=i(67434),D=i(85321),P=i(13444),Q=i(22232),M=i(83078),H=i(8125),X=i(73975);function V(e){switch(e){case I.vQ.SummaryState.notRequested:case I.vQ.SummaryState.requestSent:case I.vQ.SummaryState.invalidated:return"AILoadingCard";case I.vQ.SummaryState.received:return"summaryCard";case I.vQ.SummaryState.notFound:return"errorCard";default:(0,Q.vE)(e)}}class W{constructor(e,t,i){this._gnar=e,this._getSessionUuid=t,this._getRequestState=i}initAssistantTracking(e,t,i,s){const n=new A.w,o=new Map,c=new Map;return n.add(function(e,t){return e.pipe(d.h((0,H.Kg)(F.lY.isAlertIgnoreAction,F.lY.isAlertApplyAction)),S.U((e=>(0,a.pipe)(t.getById(e.alertId),E.filter(I.bZ.isShortenIt),E.map((()=>e))))),U.oA)}(e,t).subscribe((e=>{switch(e.type){case F.lY.Type.alertIgnore:o.set(e.alertId,"dismissed");break;case F.lY.Type.alertApply:o.set(e.alertId,"accepted");break;default:(0,Q.vE)(e)}}))),n.add(e.pipe(d.h((0,H.Kg)(F.ut.isReviewEdit,F.ut.isDismissEdit))).subscribe((e=>{const t=c.get(e.alertId)||{numEditsDismissed:0,numEditsReviewed:0,numTotalEditsDismissed:0,numTotalEditsReviewed:0};switch(e.type){case F.lY.Type.shortenItReviewEdit:c.set(e.alertId,{...t,numEditsReviewed:t.numEditsReviewed+1,numTotalEditsReviewed:t.numTotalEditsReviewed+1});break;case F.lY.Type.shortenItDismissEdit:c.set(e.alertId,{...t,numEditsDismissed:t.numEditsDismissed+1,numTotalEditsDismissed:t.numTotalEditsDismissed+1});break;default:(0,Q.vE)(e)}}))),n.add(function(e,t,i,s,n,o){return _.T(t.pipe(S.U(E.some)),i.pipe(m.h(E.none))).pipe(S.U(E.chain((t=>O.nL.hasItems(t)?(0,a.pipe)(r.O.getActiveItemWithAlert(t.currentLens),E.filter(B.C.isShortenItItem),E.map((e=>e.activeAlert)),E.chain((t=>(0,a.pipe)(e.getById(t.id),E.chain(I.bZ.getRawId),E.map((e=>({alert:t,rawAlertId:e}))))))):E.none))),l.$f(E.getEq(X.contramap((e=>({id:e.alert.id,activeView:V(e.alert.summaryState)})))(X.getStructEq({id:X.eqString,activeView:X.eqString})))),p.O(E.none),x.G(),N.R((({focusTimestamp:e},[t,i])=>{const r=(0,a.pipe)(t,E.map((e=>e.alert.id)),E.fold(a.constFalse,(e=>(0,a.pipe)(i,E.map((e=>e.alert.id)),M.contains(e))))),l=(0,a.pipe)(i,E.map((e=>e.alert.summaryState)),M.contains(I.vQ.SummaryState.received)),d=(0,a.pipe)(i,E.map((e=>e.alert.summaryState)),M.contains(I.vQ.SummaryState.notFound)),c=[];return(0,a.pipe)(t,M.tap((t=>{const i=t.alert.summaryState===I.vQ.SummaryState.received,s=t.alert.summaryState===I.vQ.SummaryState.notFound,u=E.toNullable(n(t.alert.id))||"unfocused";if(s)(0,Q.kG)("accepted"!==u,"Can't accept a ShortenIt alert that timed-out"),c.push({kind:"summaryNotFoundHide",alertId:t.alert.id,reason:u,sentenceCount:t.alert.sentenceCount,wordCount:t.alert.wordCount});else if(i){const e=o(t.alert.id);c.push({kind:"summaryAlertHide",alertId:t.alert.id,reason:u,sentenceCount:t.alert.sentenceCount,wordCount:t.alert.wordCount,compressionRatio:T.T.unwrap(t.alert.compressionRatio),canDismissEdits:t.alert.canDismissEdits,numEditsReviewed:(0,a.pipe)(e,E.fold((()=>0),(e=>e.numEditsReviewed))),numEditsDismissed:(0,a.pipe)(e,E.fold((()=>0),(e=>e.numEditsDismissed))),numTotalEditsDismissed:(0,a.pipe)(e,E.fold((()=>0),(e=>e.numTotalEditsDismissed))),numTotalEditsReviewed:(0,a.pipe)(e,E.fold((()=>0),(e=>e.numTotalEditsReviewed))),numOriginalEdits:t.alert.transformGroups.size,numEditsOnOpen:t.alert.transformGroups.size-(0,a.pipe)(e,E.fold((()=>0),(e=>e.numTotalEditsDismissed-e.numEditsDismissed)))})}else(0,Q.kG)("accepted"!==u,"Can't accept a loading ShortenIt alert"),c.push({kind:"summaryAlertLoadingHide",alertId:t.alert.id,reason:l&&r?"summaryReceived":d&&r?"timeoutReceived":u,duration:performance.now()-e,sentenceCount:t.alert.sentenceCount,wordCount:t.alert.wordCount})}))),(0,a.pipe)(i,M.tap((e=>{if(d)c.push({kind:"summaryNotFoundShow",alertId:e.alert.id,reason:r?"timeoutReceived":"focused",sentenceCount:e.alert.sentenceCount,wordCount:e.alert.wordCount,latency:(0,a.pipe)(s(e.rawAlertId),E.getOrElse((()=>0)))});else if(l){const t=o(e.alert.id);c.push({kind:"summaryAlertShow",alertId:e.alert.id,reason:r?"summaryReceived":"focused",sentenceCount:e.alert.sentenceCount,wordCount:e.alert.wordCount,compressionRatio:T.T.unwrap(e.alert.compressionRatio),canDismissEdits:e.alert.canDismissEdits,numOriginalEdits:e.alert.transformGroups.size,numEditsOnOpen:e.alert.transformGroups.size-e.alert.dismissedTransformGroups.size,numTotalEditsDismissed:(0,a.pipe)(t,E.fold((()=>0),(e=>e.numTotalEditsDismissed))),numTotalEditsReviewed:(0,a.pipe)(t,E.fold((()=>0),(e=>e.numTotalEditsReviewed))),latency:(0,a.pipe)(s(e.rawAlertId),E.getOrElse((()=>0)))})}else c.push({kind:"summaryAlertLoadingShow",alertId:e.alert.id,sentenceCount:e.alert.sentenceCount,wordCount:e.alert.wordCount})}))),{events:c,focusTimestamp:performance.now()}}),{events:[],focusTimestamp:performance.now()}),S.U((e=>e.events)),D.zg(a.identity))}(t,i.pipe(P.g(100)),s,(e=>(0,a.pipe)(this._getRequestState(e),E.filter((0,H.Kg)(C.isReceived,C.isNotFound)),E.map((e=>e.latency)))),(e=>E.fromNullable(o.get(e))),(e=>E.fromNullable(c.get(e)))).subscribe((e=>{if(function(e,t,i){switch(t.kind){case"summaryAlertShow":e.shortenItSummaryShow(t.alertId,t.canDismissEdits,t.compressionRatio,t.latency,t.sentenceCount,t.wordCount,t.numEditsOnOpen,t.numOriginalEdits,t.numTotalEditsDismissed,t.numTotalEditsReviewed,i,t.reason);break;case"summaryAlertHide":e.shortenItSummaryHide(t.alertId,t.canDismissEdits,t.compressionRatio,t.reason,t.sentenceCount,t.wordCount,t.numEditsDismissed,t.numEditsOnOpen,t.numEditsReviewed,t.numOriginalEdits,t.numTotalEditsDismissed,t.numTotalEditsReviewed,i);break;case"summaryAlertLoadingShow":e.shortenItSummaryLoadingShow(t.alertId,t.sentenceCount,t.wordCount,i);break;case"summaryAlertLoadingHide":e.shortenItSummaryLoadingHide(t.alertId,t.reason,t.sentenceCount,t.wordCount,t.duration,i);break;case"summaryNotFoundShow":e.shortenItSummaryNotFoundShow(t.alertId,t.latency,t.sentenceCount,t.wordCount,i,t.reason);break;case"summaryNotFoundHide":e.shortenItSummaryNotFoundHide(t.alertId,t.reason,t.sentenceCount,t.wordCount,i);break;default:(0,Q.vE)(t)}}(this._gnar,e,(0,a.pipe)(this._getSessionUuid(),E.getOrElse((()=>"")))),"summaryAlertHide"===e.kind){const t=c.get(e.alertId)||{numEditsDismissed:0,numEditsReviewed:0,numTotalEditsDismissed:0,numTotalEditsReviewed:0};c.set(e.alertId,{...t,numEditsReviewed:0,numEditsDismissed:0})}}))),n}}var G=i(84966),z=i(79227),L=i(4390),K=i(44586),Y=i(40151),J=i(78674);class Z{constructor(e,t,i,s,a,r){this._alertProcessor=e,this._textObserver=t,this._requestAwaitService=i,this._textChangeBufferEmpty=s,this._getSessionUuid=a,this._gnar=r,this._logger=n.Y.create("ShortenItFeature"),this._requestState=new q(this._alertProcessor,this._textObserver),this._requestManager=new y(this._textObserver,this._requestAwaitService,this._textChangeBufferEmpty),this._gnarTracking=new W(this._gnar,this._getSessionUuid,(e=>this._requestState.get(e)))}get addStateToRawAlertTransformer(){return e=>{if(G.wQ.isShortenIt(e)){const t=E.toNullable(this._requestState.get(e.id));return{...e,extra_properties:{...e.extra_properties,shorten_it_alert_state:{summaryState:null==t?void 0:t.kind}}}}return e}}onShortenItFinished(e){this._requestState.onShortenItFinished(e)}onNewRemoteRevision(e){e.sessionJustStarted&&this._requestState.onCAPISessionStarted(),this._requestManager.onNewRemoteRevision(e)}onRevisionFinished(e){this._requestManager.onRevisionFinished(e)}onDisconnect(){this._requestManager.onDisconnect()}initAssistantSession(e,t,i,s,n){return new K.y((()=>{const d=new A.w,u=new k.xQ;return d.add(_.T(function(e,t=(0,o.m9)(.5)){return e.pipe(S.U((e=>O.nL.hasItems(e)?(0,a.pipe)(r.O.getActiveItemWithAlert(e.currentLens),E.filter(B.C.isShortenItItem),E.filter((e=>e.activeAlert.summaryState===I.vQ.SummaryState.notRequested||e.activeAlert.summaryState===I.vQ.SummaryState.invalidated)),E.map((e=>e.activeAlert.id))):E.none)),l.$f(E.getEq(X.eqString)),J.b(t))}(i).pipe(c.w($(this._requestManager))),this._requestState.textChangedBeforeSummaryReceived.pipe(j(n)).pipe(D.zg($(this._requestManager)))).subscribe((e=>{this._logger.info("submitting request for",e),s.sendShortenItSummaryRequest(e),(0,a.pipe)(t.getById(e),E.chain(I.bZ.getRawId),M.tap((e=>this._requestState.onShortenItSubmit(e))))}))),d.add(this._requestState.summaryNotFound.pipe(j(n),U.oA).subscribe((e=>s.shortenItSummaryNotFound(e)))),d.add(this._requestState.summaryNotFound.pipe(j(n),U.oA,P.g(1500)).subscribe((e=>s.applyFeedback(e,{kind:G.PZ.HIDE,subtype:z.J.getSubTypeFromLens(i.get().currentLens.id)},I.l$.api)))),d.add(this._gnarTracking.initAssistantTracking(e,t,i,u)),()=>{u.next(),d.unsubscribe()}}))}dispose(){this._requestState.dispose()}}function $(e){return E.fold((()=>Y.E),(t=>e.canSubmitRequest().pipe(d.h((e=>!0===e)),w.q(1),m.h(t))))}function j(e){return S.U((t=>(0,a.pipe)(e.get(),L.p.find((e=>(0,a.pipe)(I.bZ.getRawId(e.alert),M.contains(t)))),E.map((e=>e.alert.id)))))}},35630:e=>{e.exports={circleProgress:"_1npo5",circleText:"_3muDd",card:"AAT_T",header:"_3k6P5",compact:"_1Efs0",normal:"_2_T8O",progressIcon:"_3lupT",title:"_1U6tn",full:"_24i7N",progressContainer:"TH-Um",progressBar:"_1Tzvc",progressValue:"_1Ck8G",description:"_4m_YN"}},32585:e=>{e.exports={cardBody:"_1qMrW",description:"_3g_X-",actions:"G0xen",lessIcon:"_3HhMd",minimalDescription:"srN6O",actionsFooter:"_11uNl",feedbackFooter:"_2PAOt",viewMoreButton:"_1CGEL"}},11510:e=>{e.exports={miniCard:"_2FMyP"}}}]);