import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/assignments",
    name: "Assignments",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Assignments.vue"),
  },
  {
    path: "/sources",
    name: "Sources",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Sources.vue"),
  },
  {
    path: "/random",
    name: "Random",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Random.vue"),
  },
  {
    path: "/refactoring",
    name: "Refactoring Plan",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RefactoringPlan.vue"),
  },
  {
    path: "/lecture00",
    name: "Lecture00",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture00.vue"
      ),
  },
  {
    path: "/lecture01",
    name: "Lecture01",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture01.vue"
      ),
  },
  {
    path: "/lectures/lecture02",
    name: "Lecture02",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture02.vue"
      ),
  },
  {
    path: "/designingForAnimation",
    name: "Lecture03",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/designingForAnimation.vue"
      ),
  },
  {
    path: "/lectures/lecture04",
    name: "Lecture04",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture04.vue"
      ),
  },
  {
    path: "/lectures/lecture05",
    name: "Lecture05",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture05.vue"
      ),
  },
  {
    path: "/svg",
    name: "SVG",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/svg.vue"
      ),
  },
  {
    path: "/svgAnimationSMIL",
    name: "SVG Anamiation SMIL",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/svgAnimationSMIL.vue"
      ),
  },
  {
    path: "/CSSanimations",
    name: "CSSanimations",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/CSSanimations.vue"
      ),
  },
  {
    path: "/accessibility",
    name: "CSSanimations",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/accessibility.vue"
      ),
  },
  {
    path: "/lectures/lecture08",
    name: "Lecture07",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture08.vue"
      ),
  },
  {
    path: "/lectures/lecture09",
    name: "Lecture09",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture09.vue"
      ),
  },
  {
    path: "/flexGrid",
    name: "Flexbox and CSS Grid",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/flexGrid.vue"
      ),
  },
  {
    path: "/intersectionObserver",
    name: "Lecture12",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture12.vue"
      ),
  },
  {
    path: "/interactionsOnWeb",
    name: "Lecture13",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture13.vue"
      ),
  },
  {
    path: "/cssshapes",
    name: "Lecture14",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture14.vue"
      ),
  },
  {
    path: "/transformations",
    name: "Transformations",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Transformations.vue"
      ),
  },
  {
    path: "/transitions",
    name: "Transitions",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Transitions.vue"
      ),
  },
  {
    path: "/performance",
    name: "Performance",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/performance.vue"
      ),
  },
  {
    path: "/rootsofwebandcss",
    name: "Performance",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/rootsofwebandcss.vue"
      ),
  },
  {
    path: "/webframeworksandheadlesscms",
    name: "webframeworksandheadlesscms",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/webframeworksandheadlesscms.vue"
      ),
  },
  {
    path: "/laboratories/laboratory01",
    name: "Laboratory01",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory01.vue"
      ),
  },
  {
    path: "/laboratories/laboratory03",
    name: "Laboratory03",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory03.vue"
      ),
  },
  {
    path: "/laboratories/laboratory04",
    name: "Laboratory04",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory04.vue"
      ),
  },
  {
    path: "/laboratories/laboratory05",
    name: "Laboratory04",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory05.vue"
      ),
  },
  {
    path: "/laboratories/laboratory06a",
    name: "Laboratory06",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory06a.vue"
      ),
  },
  {
    path: "/laboratories/laboratory06a-tasks",
    name: "Laboratory06-Tasks",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory6a-tasks.vue"
      ),
  },
  {
    path: "/laboratories/laboratory06b",
    name: "Laboratory06",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory06b.vue"
      ),
  },
  {
    path: "/laboratories/laboratory06c",
    name: "Laboratory06",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory06c.vue"
      ),
  },
  {
    path: "/laboratories/laboratory07",
    name: "Laboratory07",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory07.vue"
      ),
  },
  {
    path: "/laboratories/laboratory07a",
    name: "Laboratory07",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory07a.vue"
      ),
  },
  {
    path: "/laboratories/laboratory07_02",
    name: "Laboratory07",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory07_02.vue"
      ),
  },
  {
    path: "/laboratories/laboratory07_02ab",
    name: "Laboratory07",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory07_02ab.vue"
      ),
  },
  {
    path: "/laboratories/laboratory07_02",
    name: "Laboratory07",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory07_02.vue"
      ),
  },
  {
    path: "/laboratories/laboratory07_03",
    name: "Laboratory07",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory07_03.vue"
      ),
  },
  {
    path: "/laboratories/laboratory07_03ab",
    name: "Laboratory07",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory07_03ab.vue"
      ),
  },
  {
    path: "/laboratories/laboratory07_04",
    name: "Laboratory07",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory07_04.vue"
      ),
  },
  {
    path: "/laboratories/laboratory08",
    name: "Laboratory08",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory08.vue"
      ),
  },
  {
    path: "/laboratories/laboratory08io",
    name: "Laboratory08",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory08io.vue"
      ),
  },
  {
    path: "/laboratories/laboratory09flex",
    name: "Laboratory09 Flexbox",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory09flexbox.vue"
      ),
  },
  {
    path: "/laboratories/laboratory09grid",
    name: "Laboratory09 CSS Grid",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory09grid.vue"
      ),
  },
  {
    path: "/labcodepen",
    name: "Laboratory Code Pen",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/LabCodePen.vue"
      ),
  },
  {
    path: "/svgDrawing",
    name: "SVG Drawing",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/svgDrawingElements.vue"
      ),
  },
  {
    path: "/labintersectionobservercssselectors",
    name: "Intersection Observer CSS Selectors",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/LabIntersectionObserverCSSSelectors.vue"
      ),
  },
  {
    path: "/labsharing1",
    name: "LabSharing1",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/LabSharing1.vue"
      ),
  },
  {
    path: "/designingforanimationlab",
    name: "DesigningForAnimationLab",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/DesigningForAnimationLab.vue"
      ),
  },
  {
    path: "/keyframesCSSVariables",
    name: "keyframesCSSVariables",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/keyframesCSSVariables.vue"
      ),
  },
  {
    path: "/michal",
    name: "Michal Pietrzyk",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Michal.vue"
      ),
  },
  {
    path: "/scrollama",
    name: "Scrollama",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/scrollama.vue"
      ),
  },
  {
    path: "/githubPages",
    name: "GitHub Pages",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/githubpages.vue"
      ),
  },
  {
    path: "/cssunits",
    name: "CSS Units",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/cssUnits.vue"
      ),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
