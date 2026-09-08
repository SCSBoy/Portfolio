import {
  ActivatedRoute,
  I18nService,
  MatButton,
  MatButtonModule,
  MatChip,
  MatChipSet,
  MatChipsModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  RevealDirective,
  TransitionService,
  getProjectBySlug
} from "./chunk-LAA7IBNL.js";
import {
  Component,
  DestroyRef,
  HostListener,
  RuntimeError,
  __spreadValues,
  assertInInjectionContext,
  assertNotInReactiveContext,
  computed,
  inject,
  map,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-MGQ6GERN.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
/**
 * @license Angular v21.2.21
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
function toSignal(source, options) {
  typeof ngDevMode !== "undefined" && ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  if (ngDevMode && requiresCleanup && !options?.injector) {
    assertInInjectionContext(toSignal);
  }
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  } else {
    state = signal({
      kind: 1,
      value: options?.initialValue
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  }
  let destroyUnregisterFn;
  const sub = source.subscribe({
    next: (value) => state.set({
      kind: 1,
      value
    }),
    error: (error) => {
      state.set({
        kind: 2,
        error
      });
      destroyUnregisterFn?.();
    },
    complete: () => {
      destroyUnregisterFn?.();
    }
  });
  if (options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  destroyUnregisterFn = cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, __spreadValues({
    equal: options?.equal
  }, ngDevMode ? createDebugNameObject(options?.debugName, "source") : void 0));
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}
function createDebugNameObject(toSignalDebugName, internalSignalDebugName) {
  return {
    debugName: `toSignal${toSignalDebugName ? "#" + toSignalDebugName : ""}.${internalSignalDebugName}`
  };
}

// src/app/pages/project-detail/project-detail.ts
var _forTrack0 = ($index, $item) => $item.en;
var _forTrack1 = ($index, $item) => $item.src;
function ProjectDetail_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "mat-icon");
    \u0275\u0275text(2, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("href", p_r3.demoUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.i18n.t("project.btn_demo"), " ");
  }
}
function ProjectDetail_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9)(1, "mat-icon");
    \u0275\u0275text(2, "code");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("href", p_r3.codeUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.i18n.t("project.btn_code"), " ");
  }
}
function ProjectDetail_Conditional_0_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const paragraph_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(paragraph_r4[ctx_r1.i18n.currentLang()]);
  }
}
function ProjectDetail_Conditional_0_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(feature_r5[ctx_r1.i18n.currentLang()]);
  }
}
function ProjectDetail_Conditional_0_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 33);
    \u0275\u0275elementStart(1, "span", 34)(2, "mat-icon");
    \u0275\u0275text(3, "play_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 35);
    \u0275\u0275element(6, "img", 36);
    \u0275\u0275elementStart(7, "div", 37)(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("poster", ctx_r1.selectedMedia().src)("src", ctx_r1.selectedMedia().videoSrc, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.i18n.t("project.badge_video"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.selectedMedia().src, \u0275\u0275sanitizeUrl)("alt", ctx_r1.selectedMedia().label[ctx_r1.i18n.currentLang()]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedMedia().label[ctx_r1.i18n.currentLang()]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedMedia().caption[ctx_r1.i18n.currentLang()]);
  }
}
function ProjectDetail_Conditional_0_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 38);
    \u0275\u0275elementStart(1, "span", 39)(2, "mat-icon");
    \u0275\u0275text(3, "photo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 40)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.selectedMedia().src, \u0275\u0275sanitizeUrl)("alt", ctx_r1.selectedMedia().label[ctx_r1.i18n.currentLang()]);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.i18n.t("project.badge_photo"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedMedia().label[ctx_r1.i18n.currentLang()]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedMedia().caption[ctx_r1.i18n.currentLang()]);
  }
}
function ProjectDetail_Conditional_0_For_46_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43)(1, "mat-icon");
    \u0275\u0275text(2, "play_circle_filled");
    \u0275\u0275elementEnd()();
  }
}
function ProjectDetail_Conditional_0_For_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function ProjectDetail_Conditional_0_For_46_Template_button_click_0_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectMedia(item_r7));
    });
    \u0275\u0275element(1, "img", 42);
    \u0275\u0275conditionalCreate(2, ProjectDetail_Conditional_0_For_46_Conditional_2_Template, 3, 0, "span", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("project-media__thumb--active", ctx_r1.selectedMedia().src === item_r7.src);
    \u0275\u0275attribute("aria-label", item_r7.label[ctx_r1.i18n.currentLang()]);
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r7.src, \u0275\u0275sanitizeUrl)("alt", item_r7.label[ctx_r1.i18n.currentLang()]);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.type === "video" ? 2 : -1);
  }
}
function ProjectDetail_Conditional_0_For_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r8);
  }
}
function ProjectDetail_Conditional_0_Conditional_64_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 48);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("poster", ctx_r1.selectedMedia().src)("src", ctx_r1.selectedMedia().videoSrc, \u0275\u0275sanitizeUrl);
  }
}
function ProjectDetail_Conditional_0_Conditional_64_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 49);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.selectedMedia().src, \u0275\u0275sanitizeUrl)("alt", ctx_r1.selectedMedia().label[ctx_r1.i18n.currentLang()]);
  }
}
function ProjectDetail_Conditional_0_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function ProjectDetail_Conditional_0_Conditional_64_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMediaViewer());
    });
    \u0275\u0275elementStart(1, "button", 45);
    \u0275\u0275listener("click", function ProjectDetail_Conditional_0_Conditional_64_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.closeMediaViewer();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 46);
    \u0275\u0275listener("click", function ProjectDetail_Conditional_0_Conditional_64_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.prevMedia();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "figure", 47);
    \u0275\u0275listener("click", function ProjectDetail_Conditional_0_Conditional_64_Template_figure_click_7_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(8, ProjectDetail_Conditional_0_Conditional_64_Conditional_8_Template, 1, 2, "video", 48)(9, ProjectDetail_Conditional_0_Conditional_64_Conditional_9_Template, 1, 2, "img", 49);
    \u0275\u0275elementStart(10, "figcaption", 50)(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "button", 51);
    \u0275\u0275listener("click", function ProjectDetail_Conditional_0_Conditional_64_Template_button_click_15_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.nextMedia();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", ctx_r1.selectedMedia().label[ctx_r1.i18n.currentLang()]);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.i18n.currentLang() === "en" ? "Close viewer" : "Fermer la visionneuse");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", ctx_r1.i18n.currentLang() === "en" ? "Previous media" : "M\xE9dia pr\xE9c\xE9dent");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.selectedMedia().type === "video" ? 8 : 9);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedMedia().label[ctx_r1.i18n.currentLang()]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedMediaIndex() + 1, " / ", ctx_r1.media().length);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.i18n.currentLang() === "en" ? "Next media" : "M\xE9dia suivant");
  }
}
function ProjectDetail_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 1)(1, "div", 2)(2, "a", 3);
    \u0275\u0275listener("click", function ProjectDetail_Conditional_0_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.transitionService.navigate("/", "projets"));
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h1", 5);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 6);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 7);
    \u0275\u0275conditionalCreate(13, ProjectDetail_Conditional_0_Conditional_13_Template, 4, 2, "a", 8);
    \u0275\u0275conditionalCreate(14, ProjectDetail_Conditional_0_Conditional_14_Template, 4, 2, "a", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "section", 10)(16, "div", 11)(17, "div", 12)(18, "h2", 13);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, ProjectDetail_Conditional_0_For_21_Template, 2, 1, "p", 14, _forTrack0);
    \u0275\u0275elementStart(22, "h3", 15);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ul", 16);
    \u0275\u0275repeaterCreate(25, ProjectDetail_Conditional_0_For_26_Template, 5, 1, "li", null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 17)(28, "div", 18)(29, "h3", 19)(30, "mat-icon");
    \u0275\u0275text(31, "photo_library");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 20);
    \u0275\u0275listener("click", function ProjectDetail_Conditional_0_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMedia());
    });
    \u0275\u0275elementStart(34, "mat-icon");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 21)(37, "div", 22)(38, "div", 23)(39, "button", 24);
    \u0275\u0275listener("click", function ProjectDetail_Conditional_0_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openMediaViewer());
    });
    \u0275\u0275elementStart(40, "mat-icon");
    \u0275\u0275text(41, "fullscreen");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(42, ProjectDetail_Conditional_0_Conditional_42_Template, 12, 7)(43, ProjectDetail_Conditional_0_Conditional_43_Template, 10, 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 25);
    \u0275\u0275repeaterCreate(45, ProjectDetail_Conditional_0_For_46_Template, 3, 6, "button", 26, _forTrack1);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "aside", 27)(48, "div", 28)(49, "span", 29);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 30);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 28)(54, "span", 29);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 30);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 28)(59, "span", 29);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "mat-chip-set");
    \u0275\u0275repeaterCreate(62, ProjectDetail_Conditional_0_For_63_Template, 2, 1, "mat-chip", 31, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275conditionalCreate(64, ProjectDetail_Conditional_0_Conditional_64_Template, 18, 8, "div", 32);
  }
  if (rf & 2) {
    const p_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", p_r3.gradient);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.i18n.t("project.back"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.i18n.t("project.eyebrow"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.title[ctx_r1.i18n.currentLang()]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.summary[ctx_r1.i18n.currentLang()]);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r3.demoUrl ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r3.codeUrl ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("media-open", ctx_r1.mediaOpen());
    \u0275\u0275advance();
    \u0275\u0275classProp("main-scrollable", ctx_r1.mediaOpen());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.i18n.t("project.about_title"));
    \u0275\u0275advance();
    \u0275\u0275repeater(p_r3.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.i18n.t("project.features_title"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(p_r3.features);
    \u0275\u0275advance(2);
    \u0275\u0275property("revealDelay", 120);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.i18n.t("project.media_title"), " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.mediaOpen() ? ctx_r1.i18n.t("project.media_hide") : ctx_r1.i18n.t("project.media_show"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.mediaOpen() ? "remove" : "add");
    \u0275\u0275advance();
    \u0275\u0275classProp("is-open", ctx_r1.mediaOpen());
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", ctx_r1.i18n.currentLang() === "en" ? "Open media viewer" : "Ouvrir la visionneuse");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.selectedMedia().type === "video" ? 42 : 43);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.media());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.i18n.t("project.meta_role"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.role[ctx_r1.i18n.currentLang()]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.i18n.t("project.meta_duration"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.duration[ctx_r1.i18n.currentLang()]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.i18n.t("project.meta_stack"));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.i18n.t("common.tech_used"));
    \u0275\u0275advance();
    \u0275\u0275repeater(p_r3.tags);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.mediaViewerOpen() ? 64 : -1);
  }
}
function ProjectDetail_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 0)(1, "mat-icon");
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 52);
    \u0275\u0275listener("click", function ProjectDetail_Conditional_1_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.transitionService.navigate("/", "projets"));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.i18n.t("project.not_found_title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.i18n.t("project.not_found_desc"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.i18n.t("project.back"));
  }
}
var DEMO_MEDIA = [
  { type: "video", src: "https://picsum.photos/seed/demo-video/800/500", videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4", label: { en: "Functional demo", fr: "D\xE9mo fonctionnelle" }, caption: { en: "Complete user journey, from login to result.", fr: "Parcours utilisateur complet, de la connexion jusqu'au r\xE9sultat." } },
  { type: "photo", src: "https://picsum.photos/seed/mobile-view/800/500", label: { en: "Mobile view", fr: "Vue mobile" }, caption: { en: "Responsive design optimized for mobile devices.", fr: "Design responsive optimis\xE9 pour les appareils mobiles." } },
  { type: "photo", src: "https://picsum.photos/seed/dark-mode/800/500", label: { en: "Dark mode", fr: "Mode sombre" }, caption: { en: "Built-in dark theme with automatic system detection.", fr: "Th\xE8me sombre int\xE9gr\xE9 avec d\xE9tection automatique du syst\xE8me." } },
  { type: "video", src: "https://picsum.photos/seed/onboarding/800/500", videoSrc: "https://www.w3schools.com/html/movie.mp4", label: { en: "Onboarding", fr: "Onboarding" }, caption: { en: "3-step sign-up flow with real-time validation.", fr: "Flux d'inscription en 3 \xE9tapes avec validation en temps r\xE9el." } },
  { type: "photo", src: "https://picsum.photos/seed/analytics/800/500", label: { en: "Analytics module", fr: "Module analytics" }, caption: { en: "Interactive charts and PDF/CSV data exports.", fr: "Graphiques interactifs et exports PDF/CSV des donn\xE9es." } }
];
var AUTOMATIC_RFC_MEDIA = Array.from({ length: 7 }, (_, index) => {
  const pictureNumber = index + 1;
  return {
    type: "photo",
    src: `images/Screenshots/AutomaticRFC/Picture${pictureNumber}.png`,
    label: {
      en: `AutomaticRFC screenshot ${pictureNumber}`,
      fr: `Capture AutomaticRFC ${pictureNumber}`
    },
    caption: {
      en: `Screenshot ${pictureNumber} of the Automatic Request For Change application.`,
      fr: `Capture ${pictureNumber} de l'application de fiche de changement rapide.`
    }
  };
});
var BANK_RECONCILIATION_MEDIA = Array.from({ length: 15 }, (_, index) => {
  const pictureNumber = index + 1;
  return {
    type: "photo",
    src: `images/Screenshots/Bank_reconciliation/Picture${pictureNumber}.png`,
    label: {
      en: `Bank reconciliation screenshot ${pictureNumber}`,
      fr: `Capture rapprochement bancaire ${pictureNumber}`
    },
    caption: {
      en: `Screenshot ${pictureNumber} of the bank reconciliation application.`,
      fr: `Capture ${pictureNumber} de l'application de rapprochement bancaire.`
    }
  };
});
var LOVING_THOUGHTS_MEDIA = Array.from({ length: 4 }, (_, index) => {
  const pictureNumber = index + 1;
  return {
    type: "photo",
    src: `images/Screenshots/Loving_Thoughts/Picture${pictureNumber}.png`,
    label: {
      en: `Loving thoughts screenshot ${pictureNumber}`,
      fr: `Capture Pens\xE9es affectueuses ${pictureNumber}`
    },
    caption: {
      en: `Screenshot ${pictureNumber} of the Loving thoughts application.`,
      fr: `Capture ${pictureNumber} de l'application de pens\xE9es affectueuses.`
    }
  };
});
var INVENTORY_MANAGEMENT_MEDIA = Array.from({ length: 3 }, (_, index) => {
  const pictureNumber = index + 1;
  return {
    type: "photo",
    src: `images/Screenshots/Inventory_Management/Picture${pictureNumber}.png`,
    label: {
      en: `InventoryManagement screenshot ${pictureNumber}`,
      fr: `Capture Gestion Stock ${pictureNumber}`
    },
    caption: {
      en: `Screenshot ${pictureNumber} of the Inventory management application.`,
      fr: `Capture ${pictureNumber} de l'application de Gestion Stock.`
    }
  };
});
var EWE_MULTILINGUAL_TRANSLATOR_MEDIA = [
  ...Array.from({ length: 2 }, (_, index) => {
    const pictureNumber = index + 1;
    return {
      type: "photo",
      src: `images/Screenshots/Ewe_Multilingual_Translator/Picture${pictureNumber}.png`,
      label: {
        en: `Ewe multilingual translator screenshot ${pictureNumber}`,
        fr: `Capture du Traducteur Multilingue Ewe ${pictureNumber}`
      },
      caption: {
        en: `Screenshot ${pictureNumber} of the Ewe multilingual translator application.`,
        fr: `Capture ${pictureNumber} de l'application de Traduction Multilingue Ewe.`
      }
    };
  }),
  {
    type: "video",
    src: "images/Screenshots/Ewe_Multilingual_Translator/Picture3.png",
    videoSrc: "videos/Ewe_Multilingual_Translator/Video1.mp4",
    label: {
      en: "Functional demo",
      fr: "D\xE9mo fonctionnelle"
    },
    caption: {
      en: "Complete user journey, from login to result.",
      fr: "Parcours utilisateur complet, de la connexion jusqu'au r\xE9sultat."
    }
  }
];
var PORTFOLIO_MEDIA = [
  ...Array.from({ length: 4 }, (_, index) => {
    const pictureNumber = index + 1;
    return {
      type: "photo",
      src: `images/Screenshots/Portfolio/Picture${pictureNumber}.png`,
      label: {
        en: `Portfolio screenshot ${pictureNumber}`,
        fr: `Capture du Portfolio ${pictureNumber}`
      },
      caption: {
        en: `Screenshot ${pictureNumber} of my Portfolio webpage.`,
        fr: `Capture ${pictureNumber} du site web de mon portfolio.`
      }
    };
  }),
  ...Array.from({ length: 2 }, (_, index) => {
    const videoNumber = index + 1;
    const coverNumber = index + 1;
    return {
      type: "video",
      src: `images/Screenshots/Portfolio/Cover${coverNumber}.png`,
      videoSrc: `videos/Portfolio/Video${videoNumber}.mp4`,
      label: {
        en: `Functional demo ${videoNumber}`,
        fr: `D\xE9mo fonctionnelle ${videoNumber}`
      },
      caption: {
        en: "Complete user journey, from login to result.",
        fr: "Parcours utilisateur complet, de la connexion jusqu'au r\xE9sultat."
      }
    };
  })
];
var ProjectDetail = class _ProjectDetail {
  route = inject(ActivatedRoute);
  transitionService = inject(TransitionService);
  i18n = inject(I18nService);
  selectedMediaSrc = signal("", ...ngDevMode ? [{ debugName: "selectedMediaSrc" }] : (
    /* istanbul ignore next */
    []
  ));
  mediaOpen = signal(true, ...ngDevMode ? [{ debugName: "mediaOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  mediaViewerOpen = signal(false, ...ngDevMode ? [{ debugName: "mediaViewerOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  slug = toSignal(this.route.paramMap.pipe(map((params) => params.get("slug") ?? "")), { initialValue: "" });
  project = computed(() => getProjectBySlug(this.slug()), ...ngDevMode ? [{ debugName: "project" }] : (
    /* istanbul ignore next */
    []
  ));
  media = computed(() => {
    switch (this.slug()) {
      case "rapprochements-bancaires":
        return BANK_RECONCILIATION_MEDIA;
      case "automatic-rfc":
        return AUTOMATIC_RFC_MEDIA;
      case "pensees-affectueuses":
        return LOVING_THOUGHTS_MEDIA;
      case "gestion-stock":
        return INVENTORY_MANAGEMENT_MEDIA;
      case "traducteur-multilingue-vocal":
        return EWE_MULTILINGUAL_TRANSLATOR_MEDIA;
      case "portfolio-personnel":
        return PORTFOLIO_MEDIA;
      default:
        return DEMO_MEDIA;
    }
  }, ...ngDevMode ? [{ debugName: "media" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedMedia = computed(() => this.media().find((item) => item.src === this.selectedMediaSrc()) ?? this.media()[0], ...ngDevMode ? [{ debugName: "selectedMedia" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedMediaIndex = computed(() => {
    const index = this.media().findIndex((item) => item.src === this.selectedMedia().src);
    return index < 0 ? 0 : index;
  }, ...ngDevMode ? [{ debugName: "selectedMediaIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  selectMedia(item) {
    this.selectedMediaSrc.set(item.src);
  }
  openMediaViewer(item = this.selectedMedia()) {
    this.selectMedia(item);
    this.mediaViewerOpen.set(true);
  }
  closeMediaViewer() {
    this.mediaViewerOpen.set(false);
  }
  nextMedia() {
    const media = this.media();
    const nextIndex = (this.selectedMediaIndex() + 1) % media.length;
    this.selectMedia(media[nextIndex]);
  }
  prevMedia() {
    const media = this.media();
    const prevIndex = (this.selectedMediaIndex() - 1 + media.length) % media.length;
    this.selectMedia(media[prevIndex]);
  }
  toggleMedia() {
    this.mediaOpen.update((v) => !v);
  }
  handleKeydown(event) {
    if (!this.mediaViewerOpen())
      return;
    if (event.key === "Escape") {
      this.closeMediaViewer();
    }
    if (event.key === "ArrowRight") {
      this.nextMedia();
    }
    if (event.key === "ArrowLeft") {
      this.prevMedia();
    }
  }
  static \u0275fac = function ProjectDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectDetail)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectDetail, selectors: [["app-project-detail"]], hostBindings: function ProjectDetail_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function ProjectDetail_keydown_HostBindingHandler($event) {
        return ctx.handleKeydown($event);
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 2, vars: 1, consts: [[1, "section", "project-not-found"], [1, "project-hero"], ["appReveal", "bottom", 1, "project-hero__inner"], ["mat-button", "", 1, "project-hero__back", 2, "cursor", "pointer", 3, "click"], [1, "project-hero__eyebrow"], [1, "project-hero__title"], [1, "project-hero__summary"], [1, "project-hero__actions"], ["mat-flat-button", "", "color", "primary", 3, "href"], ["mat-stroked-button", "", 3, "href"], [1, "section", "project-detail"], [1, "project-detail__layout"], ["appReveal", "left", 1, "project-detail__main"], [1, "section-title"], [1, "project-detail__paragraph"], [1, "project-detail__subtitle"], [1, "project-detail__features"], ["appReveal", "bottom", 1, "project-media", 3, "revealDelay"], [1, "project-media__header"], [1, "project-media__title"], ["mat-icon-button", "", 1, "project-media__toggle", 3, "click"], [1, "collapsible-content"], [1, "collapsible-content__inner"], [1, "project-media__preview"], ["mat-icon-button", "", 1, "project-media__open", 3, "click"], [1, "project-media__thumbs"], [1, "project-media__thumb", 3, "project-media__thumb--active"], ["appReveal", "right", 1, "project-detail__sidebar"], [1, "project-detail__card"], [1, "project-detail__card-label"], [1, "project-detail__card-value"], ["disabled", ""], ["role", "dialog", "aria-modal", "true", 1, "media-viewer"], ["controls", "", "preload", "metadata", 1, "project-media__preview-video", 3, "poster", "src"], [1, "project-media__badge", "project-media__badge--video"], [1, "project-media__video-legend"], [1, "project-media__legend-thumb", 3, "src", "alt"], [1, "project-media__legend-text"], [1, "project-media__preview-img", 3, "src", "alt"], [1, "project-media__badge"], [1, "project-media__caption"], [1, "project-media__thumb", 3, "click"], ["loading", "lazy", 3, "src", "alt"], [1, "project-media__thumb-play"], ["role", "dialog", "aria-modal", "true", 1, "media-viewer", 3, "click"], ["mat-icon-button", "", 1, "media-viewer__close", 3, "click"], ["mat-icon-button", "", 1, "media-viewer__nav", "media-viewer__nav--prev", 3, "click"], [1, "media-viewer__figure", 3, "click"], ["controls", "", "autoplay", "", 1, "media-viewer__video", 3, "poster", "src"], [1, "media-viewer__image", 3, "src", "alt"], [1, "media-viewer__caption"], ["mat-icon-button", "", 1, "media-viewer__nav", "media-viewer__nav--next", 3, "click"], ["mat-flat-button", "", "color", "primary", 2, "cursor", "pointer", 3, "click"]], template: function ProjectDetail_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ProjectDetail_Conditional_0_Template, 65, 29)(1, ProjectDetail_Conditional_1_Template, 9, 3, "section", 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.project()) ? 0 : 1, tmp_0_0);
    }
  }, dependencies: [MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatChipsModule, MatChip, MatChipSet, RevealDirective], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.project-hero[_ngcontent-%COMP%] {\n  padding: 9rem 8vw 4rem;\n  color: #fff;\n}\n.project-hero__inner[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto;\n}\n.project-hero__back[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n  margin-bottom: 1.5rem;\n}\n.project-hero__back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n.project-hero__eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.75);\n}\n.project-hero__title[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: clamp(2rem, 4vw, 2.75rem);\n  font-weight: 600;\n}\n.project-hero__summary[_ngcontent-%COMP%] {\n  margin: 0 0 2rem;\n  font-size: 1.05rem;\n  line-height: 1.7;\n  color: rgba(255, 255, 255, 0.9);\n  max-width: 620px;\n}\n.project-hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.project-hero__actions[_ngcontent-%COMP%]   a[mat-stroked-button][_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: rgba(255, 255, 255, 0.6);\n}\n.project-detail__layout[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: grid;\n  grid-template-columns: 2.6fr 0.8fr;\n  grid-template-areas: "main sidebar" "media sidebar";\n  gap: 2.5rem;\n  align-items: start;\n  transition: grid-template-columns 0.4s ease;\n}\n.project-detail__layout.media-open[_ngcontent-%COMP%] {\n  grid-template-columns: 1.2fr 1.4fr 0.8fr;\n  grid-template-areas: "main media sidebar";\n}\n.project-detail__main[_ngcontent-%COMP%] {\n  grid-area: main;\n}\n.project-media[_ngcontent-%COMP%] {\n  grid-area: media;\n}\n.project-detail__sidebar[_ngcontent-%COMP%] {\n  grid-area: sidebar;\n}\n.project-detail__paragraph[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  line-height: 1.7;\n}\n.project-detail__subtitle[_ngcontent-%COMP%] {\n  margin: 2rem 0 1rem;\n  font-size: 1.15rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.project-detail__features[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.9rem;\n}\n.project-detail__features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  color: var(--text-secondary);\n  line-height: 1.5;\n}\n.project-detail__features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--primary-400);\n  flex-shrink: 0;\n}\n.project-media__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.75rem;\n}\n.project-media__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--primary-400);\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.project-media__title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.project-media__toggle[_ngcontent-%COMP%] {\n  color: var(--primary-400) !important;\n  background: rgba(3, 175, 249, 0.1) !important;\n  border-radius: 50% !important;\n  width: 36px !important;\n  height: 36px !important;\n  flex-shrink: 0;\n  transition: background 0.2s !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0 !important;\n}\n.project-media__toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(3, 175, 249, 0.2) !important;\n}\n.collapsible-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 0fr;\n  transition: grid-template-rows 0.3s ease-out;\n}\n.collapsible-content.is-open[_ngcontent-%COMP%] {\n  grid-template-rows: 1fr;\n}\n.collapsible-content__inner[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.project-detail__main.main-scrollable[_ngcontent-%COMP%] {\n  max-height: 75vh;\n  overflow-y: auto;\n  padding-right: 0.5rem;\n  scrollbar-width: thin;\n  scrollbar-color: var(--primary-700) transparent;\n}\n.project-media__preview[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  background: var(--bg-800);\n  border: 1px solid var(--border-default);\n  box-shadow: var(--shadow-card);\n  aspect-ratio: 16/10;\n}\n.project-media__open[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  z-index: 2;\n  color: #fff !important;\n  background: rgba(0, 1, 6, 0.72) !important;\n  border: 1px solid rgba(255, 255, 255, 0.18) !important;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.project-media__open[_ngcontent-%COMP%]:hover {\n  background: rgba(3, 175, 249, 0.28) !important;\n}\n.project-media__preview-img[_ngcontent-%COMP%], \n.project-media__preview-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.4s ease;\n}\n.project-media__preview-img[_ngcontent-%COMP%]:hover, \n.project-media__preview-video[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n.project-media__badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  left: 0.75rem;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.25rem 0.6rem;\n  border-radius: var(--radius-sm);\n  background: rgba(0, 1, 6, 0.75);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--primary-300);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.project-media__badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.project-media__badge--video[_ngcontent-%COMP%] {\n  color: #ff7ab2;\n}\n.project-media__caption[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 1rem 1.25rem 0.85rem;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 1, 6, 0.9) 0%,\n      transparent 100%);\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.project-media__caption[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #fff;\n}\n.project-media__caption[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.4;\n}\n.project-media__video-legend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.6rem 0.75rem;\n  background: var(--bg-800);\n  border-top: 1px solid var(--border-default);\n  margin-top: auto;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-radius: 0 0 var(--radius-md) var(--radius-md);\n}\n.project-media__legend-thumb[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 40px;\n  object-fit: cover;\n  border-radius: var(--radius-sm);\n  border: 2px solid var(--primary-700);\n  flex-shrink: 0;\n}\n.project-media__legend-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  overflow: hidden;\n}\n.project-media__legend-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.project-media__legend-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.project-media__thumbs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.5rem;\n  margin-top: 0.75rem;\n}\n.project-media__thumb[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0;\n  border: 2px solid transparent;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  cursor: pointer;\n  background: none;\n  aspect-ratio: 16/10;\n  transition: border-color 0.2s, transform 0.2s;\n}\n.project-media__thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: filter 0.2s;\n  filter: brightness(0.6);\n}\n.project-media__thumb[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  filter: brightness(0.85);\n}\n.project-media__thumb[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n}\n.project-media__thumb--active[_ngcontent-%COMP%] {\n  border-color: var(--primary-400);\n  box-shadow: 0 0 10px rgba(3, 175, 249, 0.4);\n}\n.project-media__thumb--active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: brightness(1);\n}\n.project-media__thumb-play[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(255, 255, 255, 0.9);\n  pointer-events: none;\n}\n.project-media__thumb-play[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  width: 1.75rem;\n  height: 1.75rem;\n  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));\n}\n.media-viewer[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: grid;\n  place-items: center;\n  padding: 5rem 5vw 3rem;\n  background: rgba(0, 1, 6, 0.92);\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n}\n.media-viewer__figure[_ngcontent-%COMP%] {\n  width: min(1120px, 100%);\n  max-height: 86vh;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n.media-viewer__image[_ngcontent-%COMP%], \n.media-viewer__video[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 76vh;\n  border-radius: var(--radius-md);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.55);\n  object-fit: contain;\n  background: #000;\n}\n.media-viewer__image[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n}\n.media-viewer__video[_ngcontent-%COMP%] {\n  width: min(1120px, 100%);\n  aspect-ratio: 16/9;\n}\n.media-viewer__caption[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  color: rgba(255, 255, 255, 0.86);\n  font-size: 0.9rem;\n  text-align: center;\n}\n.media-viewer__caption[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 600;\n}\n.media-viewer__caption[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--primary-300);\n  font-family:\n    "Roboto Mono",\n    ui-monospace,\n    monospace;\n}\n.media-viewer__close[_ngcontent-%COMP%], \n.media-viewer__nav[_ngcontent-%COMP%] {\n  position: fixed;\n  color: #fff !important;\n  background: rgba(255, 255, 255, 0.1) !important;\n  border: 1px solid rgba(255, 255, 255, 0.16) !important;\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n.media-viewer__close[_ngcontent-%COMP%]:hover, \n.media-viewer__nav[_ngcontent-%COMP%]:hover {\n  background: rgba(3, 175, 249, 0.26) !important;\n}\n.media-viewer__close[_ngcontent-%COMP%] {\n  top: 1.25rem;\n  right: 1.25rem;\n}\n.media-viewer__nav[_ngcontent-%COMP%] {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 48px !important;\n  height: 48px !important;\n}\n.media-viewer__nav--prev[_ngcontent-%COMP%] {\n  left: 1.25rem;\n}\n.media-viewer__nav--next[_ngcontent-%COMP%] {\n  right: 1.25rem;\n}\n.project-detail__sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  position: sticky;\n  top: 6rem;\n}\n.project-detail__card[_ngcontent-%COMP%] {\n  background: var(--bg-800);\n  border: 1px solid var(--border-default);\n  border-radius: var(--radius-md);\n  padding: 1.25rem 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.project-detail__card-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--text-muted);\n}\n.project-detail__card-value[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.project-not-found[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 10rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n}\n.project-not-found[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  color: var(--text-muted);\n}\n@media (max-width: 1200px) {\n  .project-detail__layout[_ngcontent-%COMP%], \n   .project-detail__layout.media-open[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: "media media" "main sidebar";\n  }\n}\n@media (max-width: 768px) {\n  .project-detail__layout[_ngcontent-%COMP%], \n   .project-detail__layout.media-open[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-areas: "media" "main" "sidebar";\n  }\n  .project-detail__sidebar[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .project-media__thumbs[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .media-viewer[_ngcontent-%COMP%] {\n    padding: 4.5rem 1rem 5rem;\n  }\n  .media-viewer__image[_ngcontent-%COMP%], \n   .media-viewer__video[_ngcontent-%COMP%] {\n    max-height: 68vh;\n  }\n  .media-viewer__nav[_ngcontent-%COMP%] {\n    top: auto;\n    bottom: 1rem;\n    transform: none;\n  }\n  .media-viewer__nav--prev[_ngcontent-%COMP%] {\n    left: calc(50% - 4rem);\n  }\n  .media-viewer__nav--next[_ngcontent-%COMP%] {\n    right: calc(50% - 4rem);\n  }\n  .media-viewer__caption[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n}\n/*# sourceMappingURL=project-detail.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectDetail, [{
    type: Component,
    args: [{ selector: "app-project-detail", imports: [MatButtonModule, MatIconModule, MatChipsModule, RevealDirective], template: `@if (project(); as p) {
  <section class="project-hero" [style.background]="p.gradient">
    <div class="project-hero__inner" appReveal="bottom">
      <a mat-button (click)="transitionService.navigate('/', 'projets')" class="project-hero__back" style="cursor: pointer;">
        <mat-icon>arrow_back</mat-icon>
        {{ i18n.t('project.back') }}
      </a>
      <p class="project-hero__eyebrow">{{ i18n.t('project.eyebrow') }}</p>
      <h1 class="project-hero__title">{{ p.title[i18n.currentLang()] }}</h1>
      <p class="project-hero__summary">{{ p.summary[i18n.currentLang()] }}</p>

      <div class="project-hero__actions">
        @if (p.demoUrl) {
          <a mat-flat-button color="primary" [href]="p.demoUrl">
            <mat-icon>open_in_new</mat-icon>
            {{ i18n.t('project.btn_demo') }}
          </a>
        }
        @if (p.codeUrl) {
          <a mat-stroked-button [href]="p.codeUrl">
            <mat-icon>code</mat-icon>
            {{ i18n.t('project.btn_code') }}
          </a>
        }
      </div>
    </div>
  </section>

  <section class="section project-detail">
    <div class="project-detail__layout" [class.media-open]="mediaOpen()">

      <!-- LEFT: Description + features (scrollable when gallery is open) -->
      <div class="project-detail__main" [class.main-scrollable]="mediaOpen()" appReveal="left">
        <h2 class="section-title">{{ i18n.t('project.about_title') }}</h2>
        @for (paragraph of p.description; track paragraph.en) {
          <p class="project-detail__paragraph">{{ paragraph[i18n.currentLang()] }}</p>
        }

        <h3 class="project-detail__subtitle">{{ i18n.t('project.features_title') }}</h3>
        <ul class="project-detail__features">
          @for (feature of p.features; track feature.en) {
            <li>
              <mat-icon>check_circle</mat-icon>
              <span>{{ feature[i18n.currentLang()] }}</span>
            </li>
          }
        </ul>
      </div>

      <!-- CENTER: Media gallery (collapsible) -->
      <div class="project-media" appReveal="bottom" [revealDelay]="120">

        <!-- Gallery header with toggle -->
        <div class="project-media__header">
          <h3 class="project-media__title">
            <mat-icon>photo_library</mat-icon>
            {{ i18n.t('project.media_title') }}
          </h3>
          <button mat-icon-button (click)="toggleMedia()" [attr.aria-label]="mediaOpen() ? i18n.t('project.media_hide') : i18n.t('project.media_show')" class="project-media__toggle">
            <mat-icon>{{ mediaOpen() ? 'remove' : 'add' }}</mat-icon>
          </button>
        </div>

        <!-- Collapsible body -->
        <div class="collapsible-content" [class.is-open]="mediaOpen()">
          <div class="collapsible-content__inner">

            <!-- Main preview -->
            <div class="project-media__preview">
              <button
                mat-icon-button
                class="project-media__open"
                (click)="openMediaViewer()"
                [attr.aria-label]="i18n.currentLang() === 'en' ? 'Open media viewer' : 'Ouvrir la visionneuse'">
                <mat-icon>fullscreen</mat-icon>
              </button>

              @if (selectedMedia().type === 'video') {
                <video
                  class="project-media__preview-video"
                  [poster]="selectedMedia().src"
                  [src]="selectedMedia().videoSrc"
                  controls
                  preload="metadata">
                </video>
                <span class="project-media__badge project-media__badge--video">
                  <mat-icon>play_circle</mat-icon> {{ i18n.t('project.badge_video') }}
                </span>
                <!-- Photo legend below video -->
                <div class="project-media__video-legend">
                  <img [src]="selectedMedia().src" [alt]="selectedMedia().label[i18n.currentLang()]" class="project-media__legend-thumb" />
                  <div class="project-media__legend-text">
                    <strong>{{ selectedMedia().label[i18n.currentLang()] }}</strong>
                    <span>{{ selectedMedia().caption[i18n.currentLang()] }}</span>
                  </div>
                </div>
              } @else {
                <img
                  class="project-media__preview-img"
                  [src]="selectedMedia().src"
                  [alt]="selectedMedia().label[i18n.currentLang()]" />
                <span class="project-media__badge">
                  <mat-icon>photo</mat-icon> {{ i18n.t('project.badge_photo') }}
                </span>
                <div class="project-media__caption">
                  <strong>{{ selectedMedia().label[i18n.currentLang()] }}</strong>
                  <span>{{ selectedMedia().caption[i18n.currentLang()] }}</span>
                </div>
              }
            </div>

            <!-- Thumbnails strip -->
            <div class="project-media__thumbs">
              @for (item of media(); track item.src) {
                <button
                  class="project-media__thumb"
                  [class.project-media__thumb--active]="selectedMedia().src === item.src"
                  (click)="selectMedia(item)"
                  [attr.aria-label]="item.label[i18n.currentLang()]">
                  <img [src]="item.src" [alt]="item.label[i18n.currentLang()]" loading="lazy" />
                  @if (item.type === 'video') {
                    <span class="project-media__thumb-play">
                      <mat-icon>play_circle_filled</mat-icon>
                    </span>
                  }
                </button>
              }
            </div>

          </div>
        </div>
      </div>

      <!-- RIGHT: Meta cards -->
      <aside class="project-detail__sidebar" appReveal="right">
        <div class="project-detail__card">
          <span class="project-detail__card-label">{{ i18n.t('project.meta_role') }}</span>
          <span class="project-detail__card-value">{{ p.role[i18n.currentLang()] }}</span>
        </div>
        <div class="project-detail__card">
          <span class="project-detail__card-label">{{ i18n.t('project.meta_duration') }}</span>
          <span class="project-detail__card-value">{{ p.duration[i18n.currentLang()] }}</span>
        </div>
        <div class="project-detail__card">
          <span class="project-detail__card-label">{{ i18n.t('project.meta_stack') }}</span>
          <mat-chip-set [attr.aria-label]="i18n.t('common.tech_used')">
            @for (tag of p.tags; track tag) {
              <mat-chip disabled>{{ tag }}</mat-chip>
            }
          </mat-chip-set>
        </div>
      </aside>

    </div>
  </section>

  @if (mediaViewerOpen()) {
    <div
      class="media-viewer"
      role="dialog"
      aria-modal="true"
      [attr.aria-label]="selectedMedia().label[i18n.currentLang()]"
      (click)="closeMediaViewer()">
      <button
        mat-icon-button
        class="media-viewer__close"
        (click)="closeMediaViewer(); $event.stopPropagation()"
        [attr.aria-label]="i18n.currentLang() === 'en' ? 'Close viewer' : 'Fermer la visionneuse'">
        <mat-icon>close</mat-icon>
      </button>

      <button
        mat-icon-button
        class="media-viewer__nav media-viewer__nav--prev"
        (click)="prevMedia(); $event.stopPropagation()"
        [attr.aria-label]="i18n.currentLang() === 'en' ? 'Previous media' : 'M\xE9dia pr\xE9c\xE9dent'">
        <mat-icon>chevron_left</mat-icon>
      </button>

      <figure class="media-viewer__figure" (click)="$event.stopPropagation()">
        @if (selectedMedia().type === 'video') {
          <video
            class="media-viewer__video"
            [poster]="selectedMedia().src"
            [src]="selectedMedia().videoSrc"
            controls
            autoplay>
          </video>
        } @else {
          <img
            class="media-viewer__image"
            [src]="selectedMedia().src"
            [alt]="selectedMedia().label[i18n.currentLang()]" />
        }

        <figcaption class="media-viewer__caption">
          <strong>{{ selectedMedia().label[i18n.currentLang()] }}</strong>
          <span>{{ selectedMediaIndex() + 1 }} / {{ media().length }}</span>
        </figcaption>
      </figure>

      <button
        mat-icon-button
        class="media-viewer__nav media-viewer__nav--next"
        (click)="nextMedia(); $event.stopPropagation()"
        [attr.aria-label]="i18n.currentLang() === 'en' ? 'Next media' : 'M\xE9dia suivant'">
        <mat-icon>chevron_right</mat-icon>
      </button>
    </div>
  }
} @else {
  <section class="section project-not-found">
    <mat-icon>search_off</mat-icon>
    <h1>{{ i18n.t('project.not_found_title') }}</h1>
    <p>{{ i18n.t('project.not_found_desc') }}</p>
    <a mat-flat-button color="primary" (click)="transitionService.navigate('/', 'projets')" style="cursor: pointer;">{{ i18n.t('project.back') }}</a>
  </section>
}
`, styles: ['/* src/app/pages/project-detail/project-detail.scss */\n:host {\n  display: block;\n}\n.project-hero {\n  padding: 9rem 8vw 4rem;\n  color: #fff;\n}\n.project-hero__inner {\n  max-width: 760px;\n  margin: 0 auto;\n}\n.project-hero__back {\n  color: rgba(255, 255, 255, 0.85);\n  margin-bottom: 1.5rem;\n}\n.project-hero__back mat-icon {\n  margin-right: 0.25rem;\n}\n.project-hero__eyebrow {\n  margin: 0 0 0.5rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.75);\n}\n.project-hero__title {\n  margin: 0 0 1rem;\n  font-size: clamp(2rem, 4vw, 2.75rem);\n  font-weight: 600;\n}\n.project-hero__summary {\n  margin: 0 0 2rem;\n  font-size: 1.05rem;\n  line-height: 1.7;\n  color: rgba(255, 255, 255, 0.9);\n  max-width: 620px;\n}\n.project-hero__actions {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.project-hero__actions a[mat-stroked-button] {\n  color: #fff;\n  border-color: rgba(255, 255, 255, 0.6);\n}\n.project-detail__layout {\n  margin-top: 1rem;\n  display: grid;\n  grid-template-columns: 2.6fr 0.8fr;\n  grid-template-areas: "main sidebar" "media sidebar";\n  gap: 2.5rem;\n  align-items: start;\n  transition: grid-template-columns 0.4s ease;\n}\n.project-detail__layout.media-open {\n  grid-template-columns: 1.2fr 1.4fr 0.8fr;\n  grid-template-areas: "main media sidebar";\n}\n.project-detail__main {\n  grid-area: main;\n}\n.project-media {\n  grid-area: media;\n}\n.project-detail__sidebar {\n  grid-area: sidebar;\n}\n.project-detail__paragraph {\n  color: var(--text-secondary);\n  line-height: 1.7;\n}\n.project-detail__subtitle {\n  margin: 2rem 0 1rem;\n  font-size: 1.15rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.project-detail__features {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.9rem;\n}\n.project-detail__features li {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  color: var(--text-secondary);\n  line-height: 1.5;\n}\n.project-detail__features li mat-icon {\n  color: var(--primary-400);\n  flex-shrink: 0;\n}\n.project-media__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.75rem;\n}\n.project-media__title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--primary-400);\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.project-media__title mat-icon {\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.project-media__toggle {\n  color: var(--primary-400) !important;\n  background: rgba(3, 175, 249, 0.1) !important;\n  border-radius: 50% !important;\n  width: 36px !important;\n  height: 36px !important;\n  flex-shrink: 0;\n  transition: background 0.2s !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0 !important;\n}\n.project-media__toggle:hover {\n  background: rgba(3, 175, 249, 0.2) !important;\n}\n.collapsible-content {\n  display: grid;\n  grid-template-rows: 0fr;\n  transition: grid-template-rows 0.3s ease-out;\n}\n.collapsible-content.is-open {\n  grid-template-rows: 1fr;\n}\n.collapsible-content__inner {\n  overflow: hidden;\n}\n.project-detail__main.main-scrollable {\n  max-height: 75vh;\n  overflow-y: auto;\n  padding-right: 0.5rem;\n  scrollbar-width: thin;\n  scrollbar-color: var(--primary-700) transparent;\n}\n.project-media__preview {\n  position: relative;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  background: var(--bg-800);\n  border: 1px solid var(--border-default);\n  box-shadow: var(--shadow-card);\n  aspect-ratio: 16/10;\n}\n.project-media__open {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  z-index: 2;\n  color: #fff !important;\n  background: rgba(0, 1, 6, 0.72) !important;\n  border: 1px solid rgba(255, 255, 255, 0.18) !important;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.project-media__open:hover {\n  background: rgba(3, 175, 249, 0.28) !important;\n}\n.project-media__preview-img,\n.project-media__preview-video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.4s ease;\n}\n.project-media__preview-img:hover,\n.project-media__preview-video:hover {\n  transform: scale(1.02);\n}\n.project-media__badge {\n  position: absolute;\n  top: 0.75rem;\n  left: 0.75rem;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.25rem 0.6rem;\n  border-radius: var(--radius-sm);\n  background: rgba(0, 1, 6, 0.75);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--primary-300);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.project-media__badge mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.project-media__badge--video {\n  color: #ff7ab2;\n}\n.project-media__caption {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 1rem 1.25rem 0.85rem;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 1, 6, 0.9) 0%,\n      transparent 100%);\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.project-media__caption strong {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #fff;\n}\n.project-media__caption span {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.4;\n}\n.project-media__video-legend {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.6rem 0.75rem;\n  background: var(--bg-800);\n  border-top: 1px solid var(--border-default);\n  margin-top: auto;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-radius: 0 0 var(--radius-md) var(--radius-md);\n}\n.project-media__legend-thumb {\n  width: 56px;\n  height: 40px;\n  object-fit: cover;\n  border-radius: var(--radius-sm);\n  border: 2px solid var(--primary-700);\n  flex-shrink: 0;\n}\n.project-media__legend-text {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  overflow: hidden;\n}\n.project-media__legend-text strong {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.project-media__legend-text span {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.project-media__thumbs {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.5rem;\n  margin-top: 0.75rem;\n}\n.project-media__thumb {\n  position: relative;\n  padding: 0;\n  border: 2px solid transparent;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  cursor: pointer;\n  background: none;\n  aspect-ratio: 16/10;\n  transition: border-color 0.2s, transform 0.2s;\n}\n.project-media__thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: filter 0.2s;\n  filter: brightness(0.6);\n}\n.project-media__thumb:hover img {\n  filter: brightness(0.85);\n}\n.project-media__thumb:hover {\n  transform: scale(1.03);\n}\n.project-media__thumb--active {\n  border-color: var(--primary-400);\n  box-shadow: 0 0 10px rgba(3, 175, 249, 0.4);\n}\n.project-media__thumb--active img {\n  filter: brightness(1);\n}\n.project-media__thumb-play {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(255, 255, 255, 0.9);\n  pointer-events: none;\n}\n.project-media__thumb-play mat-icon {\n  font-size: 1.75rem;\n  width: 1.75rem;\n  height: 1.75rem;\n  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));\n}\n.media-viewer {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: grid;\n  place-items: center;\n  padding: 5rem 5vw 3rem;\n  background: rgba(0, 1, 6, 0.92);\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n}\n.media-viewer__figure {\n  width: min(1120px, 100%);\n  max-height: 86vh;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n.media-viewer__image,\n.media-viewer__video {\n  max-width: 100%;\n  max-height: 76vh;\n  border-radius: var(--radius-md);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.55);\n  object-fit: contain;\n  background: #000;\n}\n.media-viewer__image {\n  width: auto;\n  height: auto;\n}\n.media-viewer__video {\n  width: min(1120px, 100%);\n  aspect-ratio: 16/9;\n}\n.media-viewer__caption {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  color: rgba(255, 255, 255, 0.86);\n  font-size: 0.9rem;\n  text-align: center;\n}\n.media-viewer__caption strong {\n  color: #fff;\n  font-weight: 600;\n}\n.media-viewer__caption span {\n  color: var(--primary-300);\n  font-family:\n    "Roboto Mono",\n    ui-monospace,\n    monospace;\n}\n.media-viewer__close,\n.media-viewer__nav {\n  position: fixed;\n  color: #fff !important;\n  background: rgba(255, 255, 255, 0.1) !important;\n  border: 1px solid rgba(255, 255, 255, 0.16) !important;\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n.media-viewer__close:hover,\n.media-viewer__nav:hover {\n  background: rgba(3, 175, 249, 0.26) !important;\n}\n.media-viewer__close {\n  top: 1.25rem;\n  right: 1.25rem;\n}\n.media-viewer__nav {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 48px !important;\n  height: 48px !important;\n}\n.media-viewer__nav--prev {\n  left: 1.25rem;\n}\n.media-viewer__nav--next {\n  right: 1.25rem;\n}\n.project-detail__sidebar {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  position: sticky;\n  top: 6rem;\n}\n.project-detail__card {\n  background: var(--bg-800);\n  border: 1px solid var(--border-default);\n  border-radius: var(--radius-md);\n  padding: 1.25rem 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.project-detail__card-label {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--text-muted);\n}\n.project-detail__card-value {\n  font-size: 1.05rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.project-not-found {\n  text-align: center;\n  padding-top: 10rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n}\n.project-not-found mat-icon {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  color: var(--text-muted);\n}\n@media (max-width: 1200px) {\n  .project-detail__layout,\n  .project-detail__layout.media-open {\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: "media media" "main sidebar";\n  }\n}\n@media (max-width: 768px) {\n  .project-detail__layout,\n  .project-detail__layout.media-open {\n    grid-template-columns: 1fr;\n    grid-template-areas: "media" "main" "sidebar";\n  }\n  .project-detail__sidebar {\n    position: static;\n  }\n  .project-media__thumbs {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .media-viewer {\n    padding: 4.5rem 1rem 5rem;\n  }\n  .media-viewer__image,\n  .media-viewer__video {\n    max-height: 68vh;\n  }\n  .media-viewer__nav {\n    top: auto;\n    bottom: 1rem;\n    transform: none;\n  }\n  .media-viewer__nav--prev {\n    left: calc(50% - 4rem);\n  }\n  .media-viewer__nav--next {\n    right: calc(50% - 4rem);\n  }\n  .media-viewer__caption {\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n}\n/*# sourceMappingURL=project-detail.css.map */\n'] }]
  }], null, { handleKeydown: [{
    type: HostListener,
    args: ["document:keydown", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectDetail, { className: "ProjectDetail", filePath: "src/app/pages/project-detail/project-detail.ts", lineNumber: 173 });
})();
export {
  ProjectDetail
};
//# sourceMappingURL=chunk-4YJHK6YI.js.map
