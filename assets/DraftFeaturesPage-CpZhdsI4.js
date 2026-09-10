import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BUL8WuXG.js";
import { u as useAppStore, d as safeSetItem, S as STORAGE_KEYS, aO as onSyncEvent, aP as pushNow, aQ as pullNow, aR as syncNow, s as safeGetItem } from "./index-BEJSIlFS.js";
import { m as motion } from "./vendor-motion-C2SAPQSW.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-router-Dx6RIovR.js";
import "./vendor-supabase-DTEAj5J1.js";
const SUFFIX_IMPLEMENTATION_META = {
  Minigame: {
    scopeLead: "Tách thành một page gameplay ngắn với HUD, session state và màn tổng kết.",
    coreLoop: "Vào màn nhanh, chơi một lượt 60-90 giây, chấm điểm rồi trả thưởng ngay.",
    rewardHook: "Thưởng XP, coin và ghi lại session hoàn thành vào luồng tiến độ hiện có.",
    integrationPoint: "Tái dùng hook hoặc engine gameplay nhẹ để không tạo thêm một nhánh logic quá nặng.",
    checklist: [
      "Thiết kế HUD rõ ràng cho timer, score và trạng thái lượt chơi.",
      "Tạo kết quả cuối màn với nút chơi lại và deep link quay về World."
    ]
  },
  Simulator: {
    scopeLead: "Dựng một page mô phỏng có tiến trình dài hơn, vài panel trạng thái và nâng cấp cơ bản.",
    coreLoop: "Vào page, thao tác theo chu kỳ mô phỏng, tích lũy tiến trình rồi mở khóa bước tiếp theo.",
    rewardHook: "Gắn thưởng theo milestone và các mốc tiến trình thay vì chỉ theo từng click.",
    integrationPoint: "Kết nối state dài hạn vào store hoặc local snapshot trước khi nghĩ đến cloud schema riêng.",
    checklist: [
      "Xác định rõ tài nguyên chính, chu kỳ tick và điều kiện hoàn thành vòng mô phỏng.",
      "Thêm panel trạng thái để người học hiểu tiến trình và giá trị phần thưởng."
    ]
  },
  Collection: {
    scopeLead: "Dựng một page sưu tập với card grid, tiến độ hoàn thành set và phần thưởng mốc.",
    coreLoop: "Xem set hiện có, thu thập mục còn thiếu, hoàn thành bộ rồi nhận phần thưởng rõ ràng.",
    rewardHook: "Trao coin, cosmetic hoặc badge theo từng bộ hoàn thành và trạng thái trùng lặp.",
    integrationPoint: "Ưu tiên tái dùng inventory, achievements và collection claims thay vì phát minh dữ liệu song song.",
    checklist: [
      "Xác định item schema, trạng thái thiếu/đủ và các mốc thưởng của bộ.",
      "Thêm hiển thị tiến độ, phần thưởng claim và trạng thái trùng lặp để tránh mơ hồ."
    ]
  },
  Tracker: {
    scopeLead: "Tạo một page gameplay hoặc dashboard nhẹ tập trung vào số liệu, streak và các tín hiệu can thiệp nhanh.",
    coreLoop: "Mở trang, đọc tín hiệu chính, chọn một hành động đề xuất rồi quay lại vòng luyện tập.",
    rewardHook: "Ưu tiên phần thưởng theo streak, milestone và daily usage hơn là loop điểm số thuần túy.",
    integrationPoint: "Kéo dữ liệu từ learning store hiện có và tránh tạo thêm một hệ thống analytics mới nếu chưa cần.",
    checklist: [
      "Chọn tối đa 3 chỉ số chính để tránh biến trang thành dashboard quá tải.",
      "Thêm CTA dẫn về trainer hoặc World feature liên quan để dữ liệu biến thành hành động."
    ]
  },
  Mode: {
    scopeLead: "Xây dựng một biến thể mode có thể gắn vào trainer hoặc page hiện tại mà không làm vỡ flow cũ.",
    coreLoop: "Chọn mode, áp dụng luật mới, hoàn thành phiên rồi quay lại lựa chọn mode tiếp theo.",
    rewardHook: "Dùng reward nhẹ và bonus modifier để mode đóng vai trò enhancer thay vì hệ thống riêng.",
    integrationPoint: "Ưu tiên cắm mode vào trainer shell, hook engine hoặc router hiện hữu để ship nhanh hơn.",
    checklist: [
      "Xác định luật khác biệt duy nhất khiến mode này đáng tồn tại.",
      "Tạo cách bật/tắt mode rõ ràng để không phá flow trainer gốc."
    ]
  }
};
const DISTRICT_IMPLEMENTATION_FOCUS = {
  shrine: "Ưu tiên nghi thức, buff hằng ngày và cảm giác ghé thăm ngắn nhưng có thưởng.",
  shopping: "Ưu tiên inventory, exchange hoặc reward economy rõ ràng để người dùng thấy giá trị ngay.",
  yokocho: "Ưu tiên không khí vui, loop ngắn và phần thưởng có tính giải trí cao.",
  village: "Ưu tiên tiến trình dài hạn, NPC hoặc nhịp chơi có cảm giác phát triển cộng đồng.",
  dojo: "Ưu tiên pacing nhanh, meter tiến bộ và phần thưởng sau trận rõ ràng.",
  culture: "Ưu tiên nội dung, sưu tập và cảm giác mở khóa tri thức hoặc câu chuyện.",
  square: "Ưu tiên dashboard, shortlist, deep link và các CTA điều hướng sang hệ thống khác."
};
const DEFAULT_IMPLEMENTATION_META = {
  scopeLead: "Dựng một page React độc lập với flow rõ ràng và chỉ một vòng tương tác chính.",
  coreLoop: "Mở trang, thực hiện một vòng tương tác rõ ràng, lưu tiến độ rồi quay lại World.",
  rewardHook: "Gắn XP, coin hoặc milestone vào luồng thưởng sẵn có thay vì tạo reward engine mới.",
  integrationPoint: "Tái dùng router, navigation và learning store hiện có để giữ phạm vi gọn.",
  checklist: [
    "Chốt một vòng tương tác chính trước khi thêm biến thể phụ.",
    "Kết nối tiến độ và phần thưởng vào store hiện có."
  ]
};
const IMPLEMENTATION_BRIEF_READINESS_ORDER = {
  ready: 0,
  "in-progress": 1,
  draft: 2
};
const IMPLEMENTATION_BRIEF_EFFORT_ORDER = {
  S: 0,
  M: 1,
  L: 2
};
function getImplementationBriefReadinessOrder(brief) {
  var _a;
  return (_a = IMPLEMENTATION_BRIEF_READINESS_ORDER[brief == null ? void 0 : brief.readinessStatus]) != null ? _a : 99;
}
function getImplementationBriefEffortOrder(brief) {
  var _a;
  return (_a = IMPLEMENTATION_BRIEF_EFFORT_ORDER[brief == null ? void 0 : brief.effort]) != null ? _a : 99;
}
function compareImplementationBriefTitles(left, right) {
  return String((left == null ? void 0 : left.title) || "").localeCompare(String((right == null ? void 0 : right.title) || ""), "vi", { sensitivity: "base" });
}
function toPascalCase(value = "") {
  return String(value).split(/[^a-zA-Z0-9]+/).filter(Boolean).map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)).join("");
}
function normalizeDraftFeatureRouteSlug(value = "") {
  return slugifyDraftFeatureName(String(value || "").replace(/^[/#]+/, "").trim());
}
function normalizeDraftFeatureCopy(value = "") {
  return String(value || "").replace(/\s+/g, " ").trim();
}
function slugifyDraftFeatureName(name = "") {
  return String(name).normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function buildImplementationBriefs(entries = [], { districtMetaMap = /* @__PURE__ */ new Map(), effortMetaMap = /* @__PURE__ */ new Map(), limit = 4 } = {}) {
  return (Array.isArray(entries) ? entries : []).filter((entry) => {
    var _a, _b;
    return ((_a = entry == null ? void 0 : entry.plan) == null ? void 0 : _a.lane) === "next" && ((_b = entry == null ? void 0 : entry.feature) == null ? void 0 : _b.name);
  }).slice(0, limit).map(({ feature, plan }) => {
    const routeSlug = normalizeDraftFeatureRouteSlug(plan == null ? void 0 : plan.routeSlug) || slugifyDraftFeatureName(feature.name) || "draft-feature";
    const componentName = `${toPascalCase(routeSlug)}Page`;
    const districtMeta = districtMetaMap.get(plan.districtId) || { id: plan.districtId, icon: "🗺️", label: plan.districtId || "World" };
    const effortMeta = effortMetaMap.get(plan.effort) || { id: plan.effort, label: plan.effort || "M" };
    const suffixMeta = SUFFIX_IMPLEMENTATION_META[feature.suffix] || DEFAULT_IMPLEMENTATION_META;
    const districtFocus = DISTRICT_IMPLEMENTATION_FOCUS[plan.districtId] || "Gắn feature vào flow World hiện có thay vì tạo một nhánh hệ thống mới.";
    const worldDescription = normalizeDraftFeatureCopy(plan == null ? void 0 : plan.worldDesc) || `${feature.suffix} trong ${districtMeta.label.toLowerCase()}`;
    const buildChecklist = [
      "Tạo page React riêng và khai báo route hash mới.",
      ...suffixMeta.checklist,
      "Nối thưởng, sync và telemetry với useLearningStore / sync service khi cần."
    ];
    const buildChecklistItemsState = buildChecklistItems(buildChecklist, plan == null ? void 0 : plan.checklistDone);
    const completedChecklistCount = buildChecklistItemsState.filter((item) => item.done).length;
    const totalChecklistCount = buildChecklistItemsState.length;
    const readinessStatus = totalChecklistCount && completedChecklistCount === totalChecklistCount ? "ready" : completedChecklistCount > 0 ? "in-progress" : "draft";
    const readinessLabel = readinessStatus === "ready" ? "Sẵn sàng ship" : readinessStatus === "in-progress" ? "Đang chuẩn bị" : "Chưa sẵn sàng";
    return {
      featureId: feature.id,
      title: feature.name,
      prefix: feature.prefix,
      suffix: feature.suffix,
      status: feature.status,
      districtId: plan.districtId,
      districtLabel: districtMeta.label,
      districtIcon: districtMeta.icon,
      effort: plan.effort,
      effortLabel: effortMeta.label,
      routeSlug,
      routeProposal: `/${routeSlug}`,
      componentName,
      pageFile: `src/app/pages/${componentName}.jsx`,
      worldDescription,
      scopeSummary: `${suffixMeta.scopeLead} ${districtFocus}`,
      coreLoop: suffixMeta.coreLoop,
      rewardHook: suffixMeta.rewardHook,
      checklistDone: buildChecklistItemsState.filter((item) => item.done).map((item) => item.id),
      buildChecklistItems: buildChecklistItemsState,
      completedChecklistCount,
      totalChecklistCount,
      readinessStatus,
      readinessLabel,
      readinessProgress: `${completedChecklistCount}/${totalChecklistCount}`,
      readinessPercent: totalChecklistCount ? Math.round(completedChecklistCount / totalChecklistCount * 100) : 0,
      integrationPoints: [
        "Gắn entry vào WorldHub, HamburgerMenu và config điều hướng.",
        suffixMeta.integrationPoint,
        "Chuẩn hóa analytics, sync và phần thưởng với flow hiện có trước khi mở rộng phạm vi."
      ],
      buildChecklist
    };
  });
}
function buildImplementationBriefExportText(briefs = [], { title = "Batch 1 Implementation Briefs", notes = [] } = {}) {
  const list = Array.isArray(briefs) ? briefs : [];
  return [
    title,
    ...notes,
    `Tổng brief: ${list.length}`,
    "",
    ...list.flatMap((brief, index) => {
      var _a;
      return [
        `${index + 1}. ${brief.title}`,
        `Route: ${brief.routeProposal}`,
        `File: ${brief.pageFile}`,
        `World tile: ${brief.worldDescription}`,
        `District: ${brief.districtIcon} ${brief.districtLabel}`,
        `Effort: ${brief.effortLabel}`,
        `Readiness: ${brief.readinessLabel} (${brief.readinessProgress})`,
        `Scope: ${brief.scopeSummary}`,
        `Core loop: ${brief.coreLoop}`,
        `Reward: ${brief.rewardHook}`,
        "Checklist:",
        ...((_a = brief.buildChecklistItems) == null ? void 0 : _a.length) ? brief.buildChecklistItems.map((item) => `- [${item.done ? "x" : " "}] ${item.label}`) : brief.buildChecklist.map((item) => `- ${item}`),
        "Integration:",
        ...brief.integrationPoints.map((item) => `- ${item}`),
        ""
      ];
    })
  ].join("\n").trim();
}
function filterImplementationBriefsByReadiness(briefs = [], filter = "all") {
  const list = Array.isArray(briefs) ? briefs : [];
  if (filter === "ready") return list.filter((brief) => (brief == null ? void 0 : brief.readinessStatus) === "ready");
  if (filter === "in-progress") return list.filter((brief) => (brief == null ? void 0 : brief.readinessStatus) === "in-progress");
  if (filter === "draft") return list.filter((brief) => (brief == null ? void 0 : brief.readinessStatus) === "draft");
  if (filter === "ship-candidates") {
    return list.filter((brief) => (brief == null ? void 0 : brief.readinessStatus) === "ready" || (brief == null ? void 0 : brief.readinessStatus) === "in-progress");
  }
  return list;
}
function summarizeImplementationBriefReadiness(briefs = []) {
  const list = Array.isArray(briefs) ? briefs : [];
  return list.reduce((summary, brief) => {
    const status = brief == null ? void 0 : brief.readinessStatus;
    if (status === "ready" || status === "in-progress" || status === "draft") {
      summary[status] += 1;
      if (status === "ready" || status === "in-progress") summary.shipCandidates += 1;
    }
    summary.total += 1;
    return summary;
  }, {
    total: 0,
    ready: 0,
    "in-progress": 0,
    draft: 0,
    shipCandidates: 0
  });
}
function sortImplementationBriefs(briefs = [], sortMode = "roadmap") {
  const list = Array.isArray(briefs) ? briefs : [];
  return list.map((brief, index) => ({ brief, index })).sort((left, right) => {
    if (sortMode === "ship-first") {
      const readinessDelta = getImplementationBriefReadinessOrder(left.brief) - getImplementationBriefReadinessOrder(right.brief);
      if (readinessDelta !== 0) return readinessDelta;
      const effortDelta = getImplementationBriefEffortOrder(left.brief) - getImplementationBriefEffortOrder(right.brief);
      if (effortDelta !== 0) return effortDelta;
      const titleDelta = compareImplementationBriefTitles(left.brief, right.brief);
      if (titleDelta !== 0) return titleDelta;
    }
    if (sortMode === "lightest-first") {
      const effortDelta = getImplementationBriefEffortOrder(left.brief) - getImplementationBriefEffortOrder(right.brief);
      if (effortDelta !== 0) return effortDelta;
      const readinessDelta = getImplementationBriefReadinessOrder(left.brief) - getImplementationBriefReadinessOrder(right.brief);
      if (readinessDelta !== 0) return readinessDelta;
      const titleDelta = compareImplementationBriefTitles(left.brief, right.brief);
      if (titleDelta !== 0) return titleDelta;
    }
    if (sortMode === "title") {
      const titleDelta = compareImplementationBriefTitles(left.brief, right.brief);
      if (titleDelta !== 0) return titleDelta;
    }
    return left.index - right.index;
  }).map(({ brief }) => brief);
}
function getWorldTileIcon(brief) {
  return (brief == null ? void 0 : brief.suffix) === "Minigame" ? "🎮" : (brief == null ? void 0 : brief.suffix) === "Simulator" ? "🕹️" : (brief == null ? void 0 : brief.suffix) === "Collection" ? "🏮" : (brief == null ? void 0 : brief.suffix) === "Tracker" ? "📈" : "⚙️";
}
function buildPageScaffold(brief) {
  return `/**
 * ${brief.componentName} — Scaffold generated from Draft Features roadmap.
 */
import React from 'react';

export default function ${brief.componentName}() {
  return (
    <div className="n4-page-enter" style={{ maxWidth: 980, margin: '0 auto', padding: '1rem' }}>
      <div className="n4-card" style={{ padding: '1rem', marginBottom: 12 }}>
        <h1 style={{ margin: 0 }}>${brief.title}</h1>
        <p style={{ marginTop: 8, color: 'var(--n4-text-dim)' }}>
          ${brief.scopeSummary}
        </p>
      </div>

      <div className="n4-panel" style={{ padding: '1rem' }}>
        <p style={{ margin: 0 }}><strong>Core loop:</strong> ${brief.coreLoop}</p>
      </div>
    </div>
  );
}`;
}
function buildChecklistItems(items = [], completedIds = []) {
  const completedSet = new Set(Array.isArray(completedIds) ? completedIds.filter((item) => typeof item === "string") : []);
  return (Array.isArray(items) ? items : []).map((label, index) => {
    const id = `task-${index + 1}-${slugifyDraftFeatureName(label).slice(0, 32) || index + 1}`;
    return {
      id,
      label,
      done: completedSet.has(id)
    };
  });
}
function buildRouterImportSnippet(brief) {
  return `const ${brief.componentName} = lazy(() => import('./pages/${brief.componentName.replace(/Page$/, "")}Page'));`;
}
function buildRouterRouteSnippet(brief) {
  return `<Route path="${brief.routeProposal}" element={<LazyPage cards={3}><${brief.componentName} /></LazyPage>} />`;
}
function buildWorldHubTileSnippet(brief) {
  return `{ id: '${brief.routeSlug || slugifyDraftFeatureName(brief.title)}', path: '${brief.routeProposal}', icon: '${getWorldTileIcon(brief)}', label: '${brief.title}', desc: '${brief.worldDescription}' }`;
}
function buildImplementationScaffoldSections(brief) {
  if (!brief) return [];
  return [
    {
      id: "page-file",
      shortLabel: "Page",
      label: "Page file",
      meta: brief.pageFile,
      language: "jsx",
      code: buildPageScaffold(brief)
    },
    {
      id: "router-import",
      shortLabel: "Import",
      label: "Router import",
      meta: "src/app/router.jsx",
      language: "jsx",
      code: buildRouterImportSnippet(brief)
    },
    {
      id: "router-route",
      shortLabel: "Route",
      label: "Router route",
      meta: "src/app/router.jsx",
      language: "jsx",
      code: buildRouterRouteSnippet(brief)
    },
    {
      id: "worldhub-tile",
      shortLabel: "WorldHub",
      label: "WorldHub tile",
      meta: "src/app/pages/WorldHub.jsx",
      language: "js",
      code: buildWorldHubTileSnippet(brief)
    }
  ];
}
function buildImplementationScaffoldText(brief) {
  if (!brief) return "";
  const sections = buildImplementationScaffoldSections(brief);
  return [
    `${brief.title} Scaffold Pack`,
    `Route: ${brief.routeProposal}`,
    `File: ${brief.pageFile}`,
    "",
    ...sections.flatMap((section) => [
      `${section.label}:`,
      section.meta,
      `${section.language}`,
      section.code,
      "```",
      ""
    ]).join("\n").replace(/\u0000\u0000\u0000/g, "```").split("\n")
  ].join("\n");
}
function buildImplementationScaffoldPackText(briefs = [], { title = "Batch 1 Scaffold Pack", notes = [] } = {}) {
  const list = Array.isArray(briefs) ? briefs : [];
  return [
    title,
    ...notes,
    `Tổng scaffold: ${list.length}`,
    "",
    ...list.map((brief) => buildImplementationScaffoldText(brief))
  ].join("\n\n").trim();
}
const PREFIXES = ["Zen", "Neon", "Samurai", "Ninja", "Yokai", "Kami", "Sakura", "Matcha", "Tokyo", "Kyoto", "Fuji", "Shogun", "Mecha", "Kawaii", "Kaiju", "Bento", "Ramen", "Manga", "Anime", "Origami"];
const SUFFIXES = ["Minigame", "Simulator", "Collection", "Tracker", "Mode", "Challenge", "Quest", "Arena", "Dojo", "Garden", "Shrine", "Festival", "Market", "Journey", "Companion", "Battle", "Puzzle", "Quiz", "Dictionary", "Story"];
const ACTIVE_SUFFIXES = SUFFIXES.slice(0, 5);
const SHORTLIST_STORAGE_KEY = STORAGE_KEYS.DRAFT_FEATURES_SHORTLIST;
const ROADMAP_STORAGE_KEY = STORAGE_KEYS.DRAFT_FEATURES_ROADMAP;
const DRAFT_FEATURES_CHANGED_AT_KEY = STORAGE_KEYS.DRAFT_FEATURES_CHANGED_AT;
const WORLD_DISTRICTS = [
  { id: "square", icon: "📋", label: "Quảng trường" },
  { id: "shrine", icon: "⛩️", label: "Đền thờ" },
  { id: "shopping", icon: "🛍️", label: "Phố mua sắm" },
  { id: "yokocho", icon: "🍜", label: "Ngõ ẩm thực" },
  { id: "village", icon: "🏘️", label: "Làng" },
  { id: "dojo", icon: "🥋", label: "Võ đường" },
  { id: "culture", icon: "📚", label: "Văn hóa" }
];
const EFFORT_OPTIONS = [
  { id: "S", label: "S - Nhẹ" },
  { id: "M", label: "M - Vừa" },
  { id: "L", label: "L - Lớn" }
];
const ROADMAP_LANES = [
  { id: "next", icon: "🚀", label: "Đợt 1", color: "#22c55e" },
  { id: "later", icon: "🧱", label: "Đợt 2", color: "#38bdf8" },
  { id: "parked", icon: "🛰️", label: "Tạm để đó", color: "#a855f7" }
];
const BRIEF_READINESS_FILTERS = [
  { id: "all", label: "Tất cả", icon: "🗂️", accent: "#94a3b8", countKey: "total" },
  { id: "ship-candidates", label: "Ứng viên phát hành", icon: "🚢", accent: "#22c55e", countKey: "shipCandidates" },
  { id: "ready", label: "Sẵn sàng", icon: "✅", accent: "#16a34a", countKey: "ready" },
  { id: "in-progress", label: "Chuẩn bị", icon: "🛠️", accent: "#38bdf8", countKey: "in-progress" },
  { id: "draft", label: "Bản nháp", icon: "📝", accent: "#94a3b8", countKey: "draft" }
];
const BRIEF_SORT_OPTIONS = [
  { id: "roadmap", label: "Theo roadmap", hint: "Giữ nguyên thứ tự Đợt 1 như bạn đã xếp trong roadmap." },
  { id: "ship-first", label: "Ưu tiên phát hành", hint: "Ưu tiên brief sẵn sàng, sau đó chuẩn bị rồi bản nháp; effort nhẹ đứng trước." },
  { id: "lightest-first", label: "Nhẹ trước", hint: "Đẩy quick win lên trước bằng cách ưu tiên effort S rồi M rồi L." },
  { id: "title", label: "A-Z", hint: "Sắp theo tên để rà soát và đối chiếu concept nhanh hơn." }
];
const DISTRICT_MAP = new Map(WORLD_DISTRICTS.map((district) => [district.id, district]));
const EFFORT_MAP = new Map(EFFORT_OPTIONS.map((option) => [option.id, option]));
const ROADMAP_LANE_MAP = new Map(ROADMAP_LANES.map((lane) => [lane.id, lane]));
const ROADMAP_LANE_INDEX = new Map(ROADMAP_LANES.map((lane, index) => [lane.id, index]));
const DEFAULT_DISTRICT_BY_SUFFIX = {
  Minigame: "dojo",
  Simulator: "village",
  Collection: "culture",
  Tracker: "square",
  Mode: "dojo"
};
const DEFAULT_EFFORT_BY_SUFFIX = {
  Minigame: "M",
  Simulator: "L",
  Collection: "M",
  Tracker: "S",
  Mode: "S"
};
const SUFFIX_META = {
  Minigame: { icon: "🎮", color: "#fb923c", blurb: "Loop ngắn, vào nhanh, ra thưởng ngay." },
  Simulator: { icon: "🕹️", color: "#a855f7", blurb: "Mô phỏng themed-system với tiến trình riêng." },
  Collection: { icon: "🏮", color: "#ec4899", blurb: "Thu thập, mở khóa và hoàn thành set." },
  Tracker: { icon: "📈", color: "#14b8a6", blurb: "Theo dõi tiến độ, streak hoặc chỉ số cá nhân." },
  Mode: { icon: "⚙️", color: "#3b82f6", blurb: "Biến thể gameplay có thể gắn vào trainer hiện có." }
};
const STATUS_META = {
  Priority: { icon: "🔥", color: "#f97316", blurb: "Ứng viên mạnh để đưa lên World sớm." },
  Planned: { icon: "🗓️", color: "#22c55e", blurb: "Đã có hướng triển khai, chờ chọn batch." },
  Research: { icon: "🧪", color: "#38bdf8", blurb: "Cần chốt gameplay hoặc value trước khi làm." },
  Experimental: { icon: "🛰️", color: "#a855f7", blurb: "Ý tưởng táo bạo, hợp để thử nghiệm nhỏ." }
};
const STATUS_ORDER = ["Priority", "Planned", "Research", "Experimental"];
function getFeatureStatus(suffix, prefixIndex) {
  if ((suffix === "Minigame" || suffix === "Mode") && prefixIndex < 4) return "Priority";
  if (prefixIndex < 9) return "Planned";
  if (suffix === "Tracker" || prefixIndex >= 15) return "Experimental";
  return "Research";
}
const FEATURES = ACTIVE_SUFFIXES.flatMap((suffix, suffixIndex) => PREFIXES.map((prefix, prefixIndex) => {
  var _a, _b;
  return {
    id: `${suffixIndex + 1}-${prefixIndex + 1}`,
    name: `${prefix} ${suffix}`,
    prefix,
    suffix,
    status: getFeatureStatus(suffix, prefixIndex),
    icon: ((_a = SUFFIX_META[suffix]) == null ? void 0 : _a.icon) || "✨",
    color: ((_b = SUFFIX_META[suffix]) == null ? void 0 : _b.color) || "#f59e0b",
    description: `Concept đang ở giai đoạn phác thảo cho World: ${prefix} ${suffix}. Khi đi vào production, mục này sẽ cần UI riêng, logic gameplay hoặc tracker riêng, và hook thưởng XP/Coin phù hợp.`
  };
}));
const FEATURE_ORDER = new Map(FEATURES.map((feature, index) => [feature.id, index + 1]));
const FEATURE_MAP = new Map(FEATURES.map((feature) => [feature.id, feature]));
function normalizeShortlistIds(value) {
  if (!Array.isArray(value)) return [];
  const seen = /* @__PURE__ */ new Set();
  const normalized = [];
  value.forEach((entry) => {
    if (typeof entry !== "string" || seen.has(entry) || !FEATURE_ORDER.has(entry)) return;
    seen.add(entry);
    normalized.push(entry);
  });
  return normalized;
}
function loadShortlistIds() {
  try {
    return normalizeShortlistIds(JSON.parse(safeGetItem(SHORTLIST_STORAGE_KEY) || "[]"));
  } catch (e) {
    return [];
  }
}
function getDraftFeaturesChangedAt() {
  try {
    return safeGetItem(DRAFT_FEATURES_CHANGED_AT_KEY) || "";
  } catch (e) {
    return "";
  }
}
function touchDraftFeaturesChangedAt() {
  try {
    safeSetItem(DRAFT_FEATURES_CHANGED_AT_KEY, (/* @__PURE__ */ new Date()).toISOString());
  } catch (e) {
  }
}
function getDefaultRoadmap(feature) {
  return {
    districtId: DEFAULT_DISTRICT_BY_SUFFIX[feature.suffix] || "square",
    effort: DEFAULT_EFFORT_BY_SUFFIX[feature.suffix] || "M",
    lane: feature.status === "Priority" ? "next" : feature.status === "Planned" ? "later" : "parked",
    routeSlug: "",
    worldDesc: "",
    checklistDone: []
  };
}
function normalizeRoadmapData(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const normalized = {};
  Object.entries(value).forEach(([featureId, entry]) => {
    const feature = FEATURE_MAP.get(featureId);
    if (!feature || !entry || typeof entry !== "object" || Array.isArray(entry)) return;
    const defaults = getDefaultRoadmap(feature);
    normalized[featureId] = {
      districtId: DISTRICT_MAP.has(entry.districtId) ? entry.districtId : defaults.districtId,
      effort: EFFORT_MAP.has(entry.effort) ? entry.effort : defaults.effort,
      lane: ROADMAP_LANE_MAP.has(entry.lane) ? entry.lane : defaults.lane,
      routeSlug: normalizeDraftFeatureRouteSlug(entry.routeSlug),
      worldDesc: normalizeDraftFeatureCopy(entry.worldDesc),
      checklistDone: Array.isArray(entry.checklistDone) ? entry.checklistDone.filter((item) => typeof item === "string") : []
    };
  });
  return normalized;
}
function loadRoadmapData() {
  try {
    return normalizeRoadmapData(JSON.parse(safeGetItem(ROADMAP_STORAGE_KEY) || "{}"));
  } catch (e) {
    return {};
  }
}
function formatRoadmapEntry(entry) {
  const district = DISTRICT_MAP.get(entry == null ? void 0 : entry.districtId) || WORLD_DISTRICTS[0];
  const effort = EFFORT_MAP.get(entry == null ? void 0 : entry.effort) || EFFORT_OPTIONS[1];
  const lane = ROADMAP_LANE_MAP.get(entry == null ? void 0 : entry.lane) || ROADMAP_LANES[0];
  return `${district.icon} ${district.label} • ${effort.label} • ${lane.icon} ${lane.label}`;
}
function buildExportText(features, title, notes = [], roadmapEntries = {}) {
  return [
    title,
    ...notes,
    `Tổng cộng: ${features.length} concept`,
    "",
    ...features.map((feature) => {
      const order = FEATURE_ORDER.get(feature.id) || 0;
      const roadmap = roadmapEntries[feature.id];
      const routeSlug = normalizeDraftFeatureRouteSlug(roadmap == null ? void 0 : roadmap.routeSlug);
      const worldDesc = normalizeDraftFeatureCopy(roadmap == null ? void 0 : roadmap.worldDesc);
      return `${String(order).padStart(3, "0")}. ${feature.name} [${feature.status}] • ${feature.prefix} / ${feature.suffix}${roadmap ? ` • ${formatRoadmapEntry(roadmap)}` : ""}${routeSlug ? ` • /${routeSlug}` : ""}${worldDesc ? ` • ${worldDesc}` : ""}`;
    })
  ].join("\n");
}
function formatRelativeSyncTime(lastSyncAt, nowMs) {
  if (!lastSyncAt) return "Chưa có lượt sync nào trong phiên này.";
  const diffMs = Math.max(0, nowMs - new Date(lastSyncAt).getTime());
  const diffMinutes = Math.floor(diffMs / 6e4);
  if (diffMinutes < 1) return "Vừa xong";
  if (diffMinutes < 60) return `${diffMinutes} phút trước`;
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours} giờ trước`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} ngày trước`;
}
async function copyTextToClipboard(text) {
  var _a;
  if ((_a = navigator == null ? void 0 : navigator.clipboard) == null ? void 0 : _a.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(textarea);
  if (!copied) throw new Error("Clipboard copy failed");
}
function DraftImplementationBriefCard({
  brief,
  previewOpen,
  activeScaffoldSection,
  scaffoldSections,
  onTogglePreview,
  onSelectSection,
  onCopyBrief,
  onCopyScaffold,
  onCopySection,
  onToggleChecklistItem
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "n4-draft-brief-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-brief-top", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-roadmap-kicker", children: [
          brief.districtIcon,
          " ",
          brief.districtLabel,
          " • ",
          brief.effortLabel
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: brief.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-brief-top-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-draft-status", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "🚀" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Batch 1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `n4-draft-readiness-pill ${brief.readinessStatus}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: brief.readinessStatus === "ready" ? "✅" : brief.readinessStatus === "in-progress" ? "🛠️" : "📝" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: brief.readinessLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: brief.readinessProgress })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: `n4-draft-action-btn ${previewOpen ? "active" : ""}`,
            style: { "--draft-action-accent": "#f59e0b" },
            onClick: onTogglePreview,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "👀" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: previewOpen ? "Ẩn preview" : "Preview scaffold" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "n4-draft-action-btn",
            style: { "--draft-action-accent": "#22c55e" },
            onClick: onCopyBrief,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "📄" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Copy brief" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "n4-draft-action-btn",
            style: { "--draft-action-accent": "#a855f7" },
            onClick: onCopyScaffold,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "🧱" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Copy scaffold" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-draft-brief-summary", children: brief.scopeSummary }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-tag-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-tag", children: brief.prefix }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-tag n4-draft-tag-soft", children: brief.suffix }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-tag n4-draft-tag-status", children: brief.status })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-brief-info", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-brief-info-block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-brief-label", children: "Route đề xuất" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "n4-draft-brief-value", children: brief.routeProposal })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-brief-info-block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-brief-label", children: "Page file" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "n4-draft-brief-value", children: brief.pageFile })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-brief-copy-block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-brief-label", children: "World tile desc" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: brief.worldDescription })
    ] }),
    previewOpen && activeScaffoldSection ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-scaffold-preview", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-scaffold-head", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-scaffold-title-block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-brief-label", children: "Scaffold preview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "n4-draft-brief-value", children: activeScaffoldSection.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-scaffold-meta", children: activeScaffoldSection.meta })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "n4-draft-action-btn",
            style: { "--draft-action-accent": "#38bdf8" },
            onClick: () => onCopySection(activeScaffoldSection),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "📎" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Copy đoạn này" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-draft-scaffold-tabs", role: "tablist", "aria-label": `Scaffold sections cho ${brief.title}`, children: scaffoldSections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": activeScaffoldSection.id === section.id,
          className: `n4-draft-scaffold-tab ${activeScaffoldSection.id === section.id ? "active" : ""}`,
          onClick: () => onSelectSection(section.id),
          children: section.shortLabel || section.label
        },
        section.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "n4-draft-scaffold-code", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: activeScaffoldSection.code }) })
    ] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-brief-copy-block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-brief-label", children: "Core loop" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: brief.coreLoop })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-brief-copy-block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-brief-label", children: "Reward hook" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: brief.rewardHook })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-brief-list-block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-brief-progress-head", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-brief-label", children: "Ship checklist" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "n4-draft-brief-progress-value", children: brief.readinessProgress })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-draft-brief-progress-track", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { width: `${brief.readinessPercent}%` } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-draft-checklist", children: brief.buildChecklistItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: `n4-draft-check-item ${item.done ? "done" : ""}`,
          onClick: () => onToggleChecklistItem(item.id),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-check-icon", "aria-hidden": "true", children: item.done ? "✓" : "○" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
          ]
        },
        item.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-brief-list-block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-brief-label", children: "Integration points" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "n4-draft-brief-list", children: brief.integrationPoints.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: item }, item)) })
    ] })
  ] });
}
function DraftFeaturesPage() {
  const user = useAppStore((state) => state.user);
  const autoBackupEnabled = useAppStore((state) => state.autoBackupEnabled);
  const lastSyncAt = useAppStore((state) => state.lastSyncAt);
  const [query, setQuery] = reactExports.useState("");
  const [selectedSuffix, setSelectedSuffix] = reactExports.useState("all");
  const [selectedPrefix, setSelectedPrefix] = reactExports.useState("all");
  const [selectedStatus, setSelectedStatus] = reactExports.useState("all");
  const [viewMode, setViewMode] = reactExports.useState("rich");
  const [shortlistIds, setShortlistIds] = reactExports.useState(loadShortlistIds);
  const [roadmapData, setRoadmapData] = reactExports.useState(loadRoadmapData);
  const [pinnedOnly, setPinnedOnly] = reactExports.useState(false);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [lastSyncDirection, setLastSyncDirection] = reactExports.useState(null);
  const [syncBusy, setSyncBusy] = reactExports.useState("");
  const [nowMs, setNowMs] = reactExports.useState(() => Date.now());
  const [previewBriefId, setPreviewBriefId] = reactExports.useState("");
  const [previewSectionByBriefId, setPreviewSectionByBriefId] = reactExports.useState({});
  const [briefReadinessFilter, setBriefReadinessFilter] = reactExports.useState("all");
  const [briefSortMode, setBriefSortMode] = reactExports.useState("roadmap");
  const deferredQuery = reactExports.useDeferredValue(query);
  const normalizedQuery = deferredQuery.trim().toLowerCase();
  const pinnedSet = new Set(shortlistIds);
  reactExports.useEffect(() => {
    try {
      safeSetItem(SHORTLIST_STORAGE_KEY, JSON.stringify(shortlistIds));
    } catch (e) {
    }
  }, [shortlistIds]);
  reactExports.useEffect(() => {
    try {
      safeSetItem(ROADMAP_STORAGE_KEY, JSON.stringify(roadmapData));
    } catch (e) {
    }
  }, [roadmapData]);
  reactExports.useEffect(() => {
    if (getDraftFeaturesChangedAt()) return;
    if (!shortlistIds.length && !Object.keys(roadmapData || {}).length) return;
    touchDraftFeaturesChangedAt();
  }, [shortlistIds, roadmapData]);
  reactExports.useEffect(() => onSyncEvent((type) => {
    setShortlistIds(loadShortlistIds());
    setRoadmapData(loadRoadmapData());
    setLastSyncDirection(type);
    setNowMs(Date.now());
  }), []);
  reactExports.useEffect(() => {
    const intervalId = window.setInterval(() => setNowMs(Date.now()), 3e4);
    return () => window.clearInterval(intervalId);
  }, []);
  reactExports.useEffect(() => {
    if (!feedback) return void 0;
    const timeoutId = window.setTimeout(() => setFeedback(null), 2800);
    return () => window.clearTimeout(timeoutId);
  }, [feedback]);
  const matchesSearchAndSuffix = (feature) => {
    if (selectedSuffix !== "all" && feature.suffix !== selectedSuffix) return false;
    if (!normalizedQuery) return true;
    const haystack = `${feature.name} ${feature.prefix} ${feature.suffix} ${feature.description}`.toLowerCase();
    return haystack.includes(normalizedQuery);
  };
  const matchesBaseFilters = (feature) => {
    if (!matchesSearchAndSuffix(feature)) return false;
    if (pinnedOnly && !pinnedSet.has(feature.id)) return false;
    return true;
  };
  const filteredFeatures = FEATURES.filter((feature) => {
    if (!matchesBaseFilters(feature)) return false;
    if (selectedPrefix !== "all" && feature.prefix !== selectedPrefix) return false;
    if (selectedStatus !== "all" && feature.status !== selectedStatus) return false;
    return true;
  });
  const visiblePrefixCounts = PREFIXES.map((prefix) => ({
    prefix,
    count: FEATURES.filter((feature) => {
      if (!matchesBaseFilters(feature)) return false;
      if (selectedStatus !== "all" && feature.status !== selectedStatus) return false;
      return feature.prefix === prefix;
    }).length
  })).filter((entry) => entry.count > 0 || entry.prefix === selectedPrefix);
  const shortlistedFeatures = FEATURES.filter((feature) => pinnedSet.has(feature.id));
  const shortlistRoadmap = shortlistedFeatures.map((feature) => ({
    feature,
    plan: roadmapData[feature.id] || getDefaultRoadmap(feature)
  })).sort((left, right) => {
    var _a, _b;
    const laneDelta = ((_a = ROADMAP_LANE_INDEX.get(left.plan.lane)) != null ? _a : 99) - ((_b = ROADMAP_LANE_INDEX.get(right.plan.lane)) != null ? _b : 99);
    if (laneDelta !== 0) return laneDelta;
    return (FEATURE_ORDER.get(left.feature.id) || 0) - (FEATURE_ORDER.get(right.feature.id) || 0);
  });
  const roadmapEntries = Object.fromEntries(shortlistRoadmap.map((entry) => [entry.feature.id, entry.plan]));
  const roadmapLaneCounts = ROADMAP_LANES.map((lane) => ({
    ...lane,
    count: shortlistRoadmap.filter((entry) => entry.plan.lane === lane.id).length
  }));
  const roadmapDistrictCounts = WORLD_DISTRICTS.map((district) => ({
    ...district,
    count: shortlistRoadmap.filter((entry) => entry.plan.districtId === district.id).length
  })).filter((entry) => entry.count > 0);
  const batchOneBriefLimit = shortlistRoadmap.filter((entry) => entry.plan.lane === "next").length || 4;
  const implementationBriefs = buildImplementationBriefs(shortlistRoadmap, {
    districtMetaMap: DISTRICT_MAP,
    effortMetaMap: EFFORT_MAP,
    limit: batchOneBriefLimit
  });
  const briefReadinessCounts = summarizeImplementationBriefReadiness(implementationBriefs);
  const filteredImplementationBriefs = filterImplementationBriefsByReadiness(implementationBriefs, briefReadinessFilter);
  const visibleImplementationBriefs = sortImplementationBriefs(filteredImplementationBriefs, briefSortMode);
  const activeBriefFilterMeta = BRIEF_READINESS_FILTERS.find((filter) => filter.id === briefReadinessFilter) || BRIEF_READINESS_FILTERS[0];
  const activeBriefSortMeta = BRIEF_SORT_OPTIONS.find((option) => option.id === briefSortMode) || BRIEF_SORT_OPTIONS[0];
  const syncSummary = user ? autoBackupEnabled ? "Cloud planning đang bật cho shortlist và roadmap này." : "Bạn đã đăng nhập nhưng Auto Backup đang tắt, nên thay đổi vẫn chỉ nằm trên thiết bị hiện tại." : "Đăng nhập để shortlist và roadmap đi theo cloud sync giữa các thiết bị.";
  const syncTone = user ? autoBackupEnabled ? "ok" : "warn" : "info";
  const syncDirectionLabel = lastSyncDirection === "pull" ? "Cloud vừa kéo dữ liệu xuống thiết bị này." : lastSyncDirection === "push" ? "Thiết bị này vừa đẩy kế hoạch lên cloud." : "Chưa có pull hoặc push mới kể từ khi mở trang này.";
  const syncActionLabel = syncBusy === "push" ? "Đang đẩy dữ liệu..." : syncBusy === "pull" ? "Đang lấy dữ liệu..." : syncBusy === "sync" ? "Đang hợp nhất local với cloud..." : "Sync an toàn sẽ hợp nhất local và cloud trước, còn Push/Pull dành cho lúc bạn cần chủ động kiểm soát hơn.";
  const visiblePinnedCount = FEATURES.filter((feature) => {
    if (!matchesSearchAndSuffix(feature)) return false;
    if (selectedPrefix !== "all" && feature.prefix !== selectedPrefix) return false;
    if (selectedStatus !== "all" && feature.status !== selectedStatus) return false;
    return pinnedSet.has(feature.id);
  }).length;
  const visibleStatusCounts = STATUS_ORDER.map((status) => ({
    status,
    count: FEATURES.filter((feature) => matchesBaseFilters(feature) && (selectedPrefix === "all" || feature.prefix === selectedPrefix) && feature.status === status).length
  })).filter((entry) => entry.count > 0 || entry.status === selectedStatus);
  const hasActiveFilters = Boolean(query) || selectedSuffix !== "all" || selectedPrefix !== "all" || selectedStatus !== "all" || pinnedOnly;
  const handleResetFilters = () => {
    setQuery("");
    setSelectedSuffix("all");
    setSelectedPrefix("all");
    setSelectedStatus("all");
    setPinnedOnly(false);
  };
  const handleToggleShortlist = (feature) => {
    const isPinned = pinnedSet.has(feature.id);
    touchDraftFeaturesChangedAt();
    setShortlistIds((current) => isPinned ? current.filter((id) => id !== feature.id) : [...current, feature.id]);
    setRoadmapData((current) => {
      if (isPinned) {
        if (!current[feature.id]) return current;
        const next = { ...current };
        delete next[feature.id];
        return next;
      }
      if (current[feature.id]) return current;
      return { ...current, [feature.id]: getDefaultRoadmap(feature) };
    });
    setFeedback({
      tone: isPinned ? "info" : "ok",
      text: isPinned ? `Đã bỏ ${feature.name} khỏi shortlist.` : `Đã ghim ${feature.name} vào shortlist.`
    });
  };
  const handleUpdateRoadmap = (feature, field, value) => {
    touchDraftFeaturesChangedAt();
    setRoadmapData((current) => ({
      ...current,
      [feature.id]: {
        ...current[feature.id] || getDefaultRoadmap(feature),
        [field]: value
      }
    }));
  };
  const handleCopyVisible = async () => {
    if (!filteredFeatures.length) {
      setFeedback({ tone: "err", text: "Không có concept nào đang hiển thị để sao chép." });
      return;
    }
    try {
      await copyTextToClipboard(buildExportText(filteredFeatures, "Draft Features View", [
        `Filter: suffix=${selectedSuffix}, prefix=${selectedPrefix}, status=${selectedStatus}, pinnedOnly=${pinnedOnly ? "yes" : "no"}`,
        `Keyword: ${normalizedQuery || "none"}`
      ], roadmapEntries));
      setFeedback({ tone: "ok", text: `Đã sao chép ${filteredFeatures.length} concept đang hiển thị.` });
    } catch (e) {
      setFeedback({ tone: "err", text: "Không sao chép được vào clipboard trên thiết bị này." });
    }
  };
  const handleCopyShortlist = async () => {
    if (!shortlistedFeatures.length) {
      setFeedback({ tone: "err", text: "Shortlist đang trống. Hãy ghim vài concept trước." });
      return;
    }
    try {
      await copyTextToClipboard(buildExportText(shortlistRoadmap.map((entry) => entry.feature), "Draft Features Shortlist", [
        "Nguồn: lưu cục bộ trên thiết bị hiện tại",
        "Bao gồm district, effort và batch hiện tại của từng concept đã ghim"
      ], roadmapEntries));
      setFeedback({ tone: "ok", text: `Đã sao chép shortlist gồm ${shortlistedFeatures.length} concept.` });
    } catch (e) {
      setFeedback({ tone: "err", text: "Không xuất được shortlist ra clipboard." });
    }
  };
  const handleCopyRoadmap = async () => {
    var _a, _b, _c;
    if (!shortlistRoadmap.length) {
      setFeedback({ tone: "err", text: "Roadmap đang trống vì chưa có concept nào được ghim." });
      return;
    }
    try {
      await copyTextToClipboard(buildExportText(shortlistRoadmap.map((entry) => entry.feature), "Draft Features Roadmap", [
        `Batch 1=${((_a = roadmapLaneCounts.find((lane) => lane.id === "next")) == null ? void 0 : _a.count) || 0}, Batch 2=${((_b = roadmapLaneCounts.find((lane) => lane.id === "later")) == null ? void 0 : _b.count) || 0}, Parking=${((_c = roadmapLaneCounts.find((lane) => lane.id === "parked")) == null ? void 0 : _c.count) || 0}`
      ], roadmapEntries));
      setFeedback({ tone: "ok", text: `Đã sao chép roadmap của ${shortlistRoadmap.length} concept đã ghim.` });
    } catch (e) {
      setFeedback({ tone: "err", text: "Không xuất được roadmap ra clipboard." });
    }
  };
  const handleManualSync = async (direction) => {
    if (!user) {
      setFeedback({ tone: "info", text: "Hãy đăng nhập trước khi push hoặc pull dữ liệu từ cloud." });
      return;
    }
    if (direction === "pull") {
      const confirmed = window.confirm("Pull sẽ lấy dữ liệu cloud và ghi đè phần local tương ứng. Tiếp tục?");
      if (!confirmed) return;
    }
    try {
      setSyncBusy(direction);
      const result = direction === "push" ? await pushNow() : direction === "pull" ? await pullNow() : await syncNow();
      const tone = (result == null ? void 0 : result.status) === "success" ? "ok" : (result == null ? void 0 : result.status) === "blocked" ? "info" : "err";
      setFeedback({ tone, text: (result == null ? void 0 : result.message) || `Sync ${direction} hoàn tất.` });
      setNowMs(Date.now());
    } catch (error) {
      setFeedback({ tone: "err", text: (error == null ? void 0 : error.message) || "Không thể hoàn tất thao tác sync." });
    } finally {
      setSyncBusy("");
    }
  };
  const handleCopyAllBriefs = async () => {
    if (!visibleImplementationBriefs.length) {
      setFeedback({ tone: "err", text: "Không có brief nào trong bộ lọc hiện tại để xuất." });
      return;
    }
    try {
      await copyTextToClipboard(buildImplementationBriefExportText(visibleImplementationBriefs, {
        title: `Batch 1 Implementation Briefs — ${activeBriefFilterMeta.label}`,
        notes: ["Nguồn: Draft Features roadmap", `Filter readiness: ${activeBriefFilterMeta.id}`, `Sort: ${activeBriefSortMeta.id}`]
      }));
      setFeedback({ tone: "ok", text: `Đã sao chép ${visibleImplementationBriefs.length} brief trong bộ lọc ${activeBriefFilterMeta.label}, sắp theo ${activeBriefSortMeta.label}.` });
    } catch (e) {
      setFeedback({ tone: "err", text: "Không xuất được danh sách brief đang lọc." });
    }
  };
  const handleCopySingleBrief = async (brief) => {
    try {
      await copyTextToClipboard(buildImplementationBriefExportText([brief], {
        title: `${brief.title} Brief`,
        notes: ["Nguồn: Draft Features roadmap"]
      }));
      setFeedback({ tone: "ok", text: `Đã sao chép brief cho ${brief.title}.` });
    } catch (e) {
      setFeedback({ tone: "err", text: `Không xuất được brief cho ${brief.title}.` });
    }
  };
  const handleCopyScaffoldPack = async () => {
    if (!visibleImplementationBriefs.length) {
      setFeedback({ tone: "err", text: "Không có scaffold nào trong bộ lọc hiện tại để xuất." });
      return;
    }
    try {
      await copyTextToClipboard(buildImplementationScaffoldPackText(visibleImplementationBriefs, {
        title: `Batch 1 Scaffold Pack — ${activeBriefFilterMeta.label}`,
        notes: ["Nguồn: Draft Features roadmap", `Filter readiness: ${activeBriefFilterMeta.id}`, `Sort: ${activeBriefSortMeta.id}`]
      }));
      setFeedback({ tone: "ok", text: `Đã sao chép scaffold pack cho ${visibleImplementationBriefs.length} brief đang lọc theo ${activeBriefSortMeta.label}.` });
    } catch (e) {
      setFeedback({ tone: "err", text: "Không xuất được scaffold pack." });
    }
  };
  const handleCopySingleScaffold = async (brief) => {
    try {
      await copyTextToClipboard(buildImplementationScaffoldText(brief));
      setFeedback({ tone: "ok", text: `Đã sao chép scaffold cho ${brief.title}.` });
    } catch (e) {
      setFeedback({ tone: "err", text: `Không xuất được scaffold cho ${brief.title}.` });
    }
  };
  const handleToggleBriefChecklist = (brief, checklistItemId) => {
    touchDraftFeaturesChangedAt();
    setRoadmapData((current) => {
      const currentEntry = current[brief.featureId] || getDefaultRoadmap({
        suffix: brief.suffix,
        status: brief.status
      });
      const currentDone = Array.isArray(currentEntry.checklistDone) ? currentEntry.checklistDone : [];
      const nextDone = currentDone.includes(checklistItemId) ? currentDone.filter((item) => item !== checklistItemId) : [...currentDone, checklistItemId];
      return {
        ...current,
        [brief.featureId]: {
          ...currentEntry,
          checklistDone: nextDone
        }
      };
    });
  };
  const handleToggleScaffoldPreview = (brief) => {
    const sections = buildImplementationScaffoldSections(brief);
    if (!sections.length) return;
    setPreviewBriefId((current) => current === brief.featureId ? "" : brief.featureId);
    setPreviewSectionByBriefId((current) => current[brief.featureId] ? current : { ...current, [brief.featureId]: sections[0].id });
  };
  const handleSelectScaffoldSection = (briefId, sectionId) => {
    setPreviewSectionByBriefId((current) => ({
      ...current,
      [briefId]: sectionId
    }));
  };
  const handleCopyScaffoldSection = async (brief, section) => {
    try {
      await copyTextToClipboard(section.code);
      setFeedback({ tone: "ok", text: `Đã sao chép đoạn ${section.label.toLowerCase()} của ${brief.title}.` });
    } catch (e) {
      setFeedback({ tone: "err", text: `Không xuất được đoạn ${section.label.toLowerCase()} của ${brief.title}.` });
    }
  };
  const groupedFeatures = ACTIVE_SUFFIXES.map((suffix) => ({
    suffix,
    meta: SUFFIX_META[suffix],
    items: filteredFeatures.filter((feature) => feature.suffix === suffix)
  })).filter((group) => group.items.length > 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-page-enter n4-draft-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.section,
      {
        className: "n4-draft-hero",
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, ease: "easeOut" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-draft-hero-badge", children: "🚧 World Expansion Lab" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "n4-draft-title", children: "100 Draft Features" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-draft-subtitle", children: "Bộ concept được sinh tự động từ 20 prefix chủ đề và 5 suffix kiểu trải nghiệm đầu tiên trong danh sách gốc. Đây là catalogue định hướng để mở rộng World, chưa phải 100 route hay 100 mini-game hoàn chỉnh." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-stats", "aria-label": "Tổng quan draft features", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-stat-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-stat-value", children: "100" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-stat-label", children: "Concept" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-stat-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-stat-value", children: "20" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-stat-label", children: "Theme Prefix" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-stat-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-stat-value", children: "5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-stat-label", children: "Format Suffix" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-stat-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-stat-value", children: shortlistedFeatures.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-stat-label", children: "Shortlist" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-draft-chip-row", children: ACTIVE_SUFFIXES.map((suffix) => {
            var _a, _b;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "n4-draft-chip",
                style: { "--draft-chip-accent": ((_a = SUFFIX_META[suffix]) == null ? void 0 : _a.color) || "#f59e0b" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: ((_b = SUFFIX_META[suffix]) == null ? void 0 : _b.icon) || "✨" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: suffix })
                ]
              },
              suffix
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.section,
      {
        className: "n4-draft-intro",
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, ease: "easeOut", delay: 0.04 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-draft-intro-icon", "aria-hidden": "true", children: "🧭" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-intro-content", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Biến catalogue thành roadmap build" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Giữ nguyên tinh thần của snippet gốc: 20 prefix × 5 suffix đầu tiên tạo ra 100 draft cards. Từ đây bạn có thể lọc theo format, ghim shortlist, gán district, xếp batch và xuất scaffold cho Batch 1." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "n4-draft-points", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Pin concept trước, sau đó gán district và effort để biến shortlist thành roadmap." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Dùng brief để chốt scope, rồi mở preview scaffold để xem page, route và WorldHub snippets." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Push hoặc pull cloud khi bạn muốn đồng bộ cùng roadmap Draft Features trên thiết bị khác." })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-draft-toolbar-shell", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-toolbar-top", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Planner này giữ catalogue, shortlist, roadmap và scaffold preview ở cùng một nơi để chọn nhanh feature nào nên ship trước." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-draft-section-pill", children: [
          filteredFeatures.length,
          "/100 visible • ",
          shortlistedFeatures.length,
          " pinned"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-toolbar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-draft-search", "aria-label": "Tìm concept draft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-search-icon", "aria-hidden": "true", children: "🔎" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: query,
              onChange: (event) => setQuery(event.target.value),
              placeholder: "Tìm theo prefix, suffix hoặc tên concept..."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-filter-row", role: "tablist", "aria-label": "Lọc theo format", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: `n4-draft-filter-btn ${selectedSuffix === "all" ? "active" : ""}`,
              onClick: () => setSelectedSuffix("all"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "🧭" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tất cả" })
              ]
            }
          ),
          ACTIVE_SUFFIXES.map((suffix) => {
            var _a, _b;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: `n4-draft-filter-btn ${selectedSuffix === suffix ? "active" : ""}`,
                style: { "--draft-accent": ((_a = SUFFIX_META[suffix]) == null ? void 0 : _a.color) || "#f59e0b" },
                onClick: () => setSelectedSuffix(suffix),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: ((_b = SUFFIX_META[suffix]) == null ? void 0 : _b.icon) || "✨" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: suffix })
                ]
              },
              suffix
            );
          })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-filter-cluster", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-filter-cluster-head", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-filter-label", children: "Planning Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-view-toggle", role: "tablist", "aria-label": "Chuyển chế độ hiển thị", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: `n4-draft-view-btn ${viewMode === "rich" ? "active" : ""}`,
                  onClick: () => setViewMode("rich"),
                  children: "Rich"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: `n4-draft-view-btn ${viewMode === "compact" ? "active" : ""}`,
                  onClick: () => setViewMode("compact"),
                  children: "Compact"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-status-row", role: "tablist", "aria-label": "Lọc theo planning status", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: `n4-draft-status-filter ${selectedStatus === "all" ? "active" : ""}`,
                onClick: () => setSelectedStatus("all"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "🧭" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tất cả" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-status-count", children: FEATURES.filter((feature) => matchesBaseFilters(feature) && (selectedPrefix === "all" || feature.prefix === selectedPrefix)).length })
                ]
              }
            ),
            visibleStatusCounts.map((entry) => {
              var _a, _b;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: `n4-draft-status-filter ${selectedStatus === entry.status ? "active" : ""}`,
                  style: { "--draft-status-accent": ((_a = STATUS_META[entry.status]) == null ? void 0 : _a.color) || "#f59e0b" },
                  onClick: () => setSelectedStatus(entry.status),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: ((_b = STATUS_META[entry.status]) == null ? void 0 : _b.icon) || "✨" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: entry.status }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-status-count", children: entry.count })
                  ]
                },
                entry.status
              );
            })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-filter-cluster", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-filter-cluster-head", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-filter-label", children: "Theme Prefix" }),
            hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-draft-reset-link", onClick: handleResetFilters, children: "Reset tất cả" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-prefix-row", role: "tablist", "aria-label": "Lọc theo theme prefix", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: `n4-draft-prefix-btn ${selectedPrefix === "all" ? "active" : ""}`,
                onClick: () => setSelectedPrefix("all"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tất cả" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-prefix-count", children: FEATURES.filter(matchesBaseFilters).length })
                ]
              }
            ),
            visiblePrefixCounts.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: `n4-draft-prefix-btn ${selectedPrefix === entry.prefix ? "active" : ""}`,
                onClick: () => setSelectedPrefix(entry.prefix),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: entry.prefix }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-prefix-count", children: entry.count })
                ]
              },
              entry.prefix
            ))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-filter-cluster", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-filter-cluster-head", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-filter-label", children: "Shortlist Workflow" }),
            feedback && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `n4-draft-feedback ${feedback.tone || "ok"}`, "aria-live": "polite", children: feedback.text })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-action-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: `n4-draft-action-btn ${pinnedOnly ? "active" : ""}`,
                style: { "--draft-action-accent": "#fbbf24" },
                onClick: () => setPinnedOnly((value) => !value),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "📌" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: pinnedOnly ? "Đang xem shortlist" : "Chỉ xem shortlist" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-action-count", children: visiblePinnedCount })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "n4-draft-action-btn",
                style: { "--draft-action-accent": "#38bdf8" },
                onClick: handleCopyVisible,
                disabled: !filteredFeatures.length,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "📋" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sao chép view hiện tại" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-action-count", children: filteredFeatures.length })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "n4-draft-action-btn",
                style: { "--draft-action-accent": "#22c55e" },
                onClick: handleCopyShortlist,
                disabled: !shortlistedFeatures.length,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "⭐" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Xuất shortlist" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-action-count", children: shortlistedFeatures.length })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "n4-draft-action-btn",
                style: { "--draft-action-accent": "#a855f7" },
                onClick: handleCopyRoadmap,
                disabled: !shortlistRoadmap.length,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "🗺️" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Xuất roadmap" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-action-count", children: shortlistRoadmap.length })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `n4-draft-sync-strip ${syncTone}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-sync-main", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-sync-icon", "aria-hidden": "true", children: syncTone === "ok" ? "☁️" : syncTone === "warn" ? "⏸️" : "🔐" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-sync-copy", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: syncSummary }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: syncDirectionLabel })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-sync-meta", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatRelativeSyncTime(lastSyncAt, nowMs) }),
              lastSyncAt ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(lastSyncAt).toLocaleString("vi-VN") }) : null
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-sync-actions", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "n4-draft-action-btn",
                style: { "--draft-action-accent": "#a855f7" },
                onClick: () => handleManualSync("sync"),
                disabled: !user || !!syncBusy,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "🔄" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: syncBusy === "sync" ? "Đang sync..." : "Sync an toàn" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "n4-draft-action-btn",
                style: { "--draft-action-accent": "#22c55e" },
                onClick: () => handleManualSync("push"),
                disabled: !user || !!syncBusy,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "☁️" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: syncBusy === "push" ? "Đang push..." : "Push cloud" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "n4-draft-action-btn",
                style: { "--draft-action-accent": "#38bdf8" },
                onClick: () => handleManualSync("pull"),
                disabled: !user || !!syncBusy,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "📥" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: syncBusy === "pull" ? "Đang pull..." : "Pull cloud" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-draft-sync-note", children: syncActionLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-draft-helper-text", children: "Shortlist và roadmap được lưu cục bộ, đồng thời sẽ đi theo cloud sync hiện có khi bạn đăng nhập và bật Auto Backup." })
        ] })
      ] }),
      shortlistRoadmap.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-draft-roadmap", "aria-label": "Roadmap cho draft features", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-roadmap-head", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Roadmap Board" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Mỗi concept đã ghim có thể được gán district, effort và batch triển khai. Thay đổi sẽ tự lưu và có thể theo cloud sync để bạn dần chốt backlog cho World trên nhiều thiết bị." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-draft-roadmap-chip-row", children: roadmapLaneCounts.map((lane) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "n4-draft-roadmap-chip",
              style: { "--draft-roadmap-accent": lane.color },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: lane.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lane.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-roadmap-chip-count", children: lane.count })
              ]
            },
            lane.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-draft-roadmap-district-row", children: roadmapDistrictCounts.map((district) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-draft-roadmap-district-pill", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: district.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: district.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-roadmap-chip-count", children: district.count })
        ] }, district.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-draft-roadmap-columns", children: ROADMAP_LANES.map((lane) => {
          const laneItems = shortlistRoadmap.filter((entry) => entry.plan.lane === lane.id);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "section",
            {
              className: "n4-draft-roadmap-column",
              style: { "--draft-roadmap-accent": lane.color },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-roadmap-column-head", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { children: [
                      lane.icon,
                      " ",
                      lane.label
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                      lane.id === "next" && "Nhóm nên triển khai trước trong batch kế tiếp.",
                      lane.id === "later" && "Nhóm đã hợp lý nhưng có thể chờ batch sau.",
                      lane.id === "parked" && "Nhóm cần thêm kiểm chứng hoặc giữ làm ý tưởng dự phòng."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-roadmap-column-count", children: laneItems.length })
                ] }),
                laneItems.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-draft-roadmap-items", children: laneItems.map(({ feature, plan }) => {
                  const statusMeta = STATUS_META[feature.status] || STATUS_META.Research;
                  const routePreview = normalizeDraftFeatureRouteSlug(plan.routeSlug) || slugifyDraftFeatureName(feature.name);
                  const selectedDistrict = DISTRICT_MAP.get(plan.districtId) || WORLD_DISTRICTS[0];
                  const worldDescPreview = normalizeDraftFeatureCopy(plan.worldDesc) || `${feature.suffix} trong ${selectedDistrict.label.toLowerCase()}`;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "n4-draft-roadmap-item", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-roadmap-item-top", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-roadmap-kicker", children: [
                          "#",
                          String(FEATURE_ORDER.get(feature.id) || 0).padStart(3, "0"),
                          " • ",
                          statusMeta.icon,
                          " ",
                          feature.status
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { children: feature.name })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "n4-draft-pin-btn active",
                          onClick: () => handleToggleShortlist(feature),
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "📌" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Bỏ ghim" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-tag-row", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-tag", children: feature.prefix }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-tag n4-draft-tag-soft", children: feature.suffix })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-draft-roadmap-summary", children: formatRoadmapEntry(plan) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-roadmap-controls", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-draft-roadmap-control", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Khu World" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: plan.districtId, onChange: (event) => handleUpdateRoadmap(feature, "districtId", event.target.value), children: WORLD_DISTRICTS.map((district) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: district.id, children: [
                          district.icon,
                          " ",
                          district.label
                        ] }, district.id)) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-draft-roadmap-control", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Effort" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: plan.effort, onChange: (event) => handleUpdateRoadmap(feature, "effort", event.target.value), children: EFFORT_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.id, children: option.label }, option.id)) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-draft-roadmap-control", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Batch" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: plan.lane, onChange: (event) => handleUpdateRoadmap(feature, "lane", event.target.value), children: ROADMAP_LANES.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: option.id, children: [
                          option.icon,
                          " ",
                          option.label
                        ] }, option.id)) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-draft-roadmap-control", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Route slug" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "text",
                            value: plan.routeSlug || "",
                            onChange: (event) => handleUpdateRoadmap(feature, "routeSlug", event.target.value),
                            placeholder: slugifyDraftFeatureName(feature.name),
                            spellCheck: false
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-draft-roadmap-control n4-draft-roadmap-control-wide", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "World tile desc" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "text",
                            value: plan.worldDesc || "",
                            onChange: (event) => handleUpdateRoadmap(feature, "worldDesc", event.target.value),
                            placeholder: `${feature.suffix} trong ${selectedDistrict.label.toLowerCase()}`
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-roadmap-overrides", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Route:" }),
                        " /",
                        routePreview
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "World tile:" }),
                        " ",
                        worldDescPreview
                      ] })
                    ] })
                  ] }, feature.id);
                }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-draft-roadmap-empty", children: "Chưa có concept nào trong lane này." })
              ]
            },
            lane.id
          );
        }) })
      ] }) : null,
      implementationBriefs.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-draft-briefs", "aria-label": "Implementation briefs cho Batch 1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-briefs-head", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Batch 1 Implementation Briefs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Các brief này chuyển roadmap thành gói việc cụ thể: route đề xuất, file page, vòng chơi chính và checklist để bắt đầu build thật." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-briefs-actions", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-draft-section-pill", children: [
              visibleImplementationBriefs.length,
              "/",
              implementationBriefs.length,
              " brief"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-draft-readiness-pill ready", children: [
              "✅ ",
              briefReadinessCounts.ready,
              " ready"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-draft-readiness-pill in-progress", children: [
              "🛠️ ",
              briefReadinessCounts["in-progress"],
              " prep"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-draft-readiness-pill draft", children: [
              "📝 ",
              briefReadinessCounts.draft,
              " draft"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "n4-draft-action-btn",
                style: { "--draft-action-accent": "#38bdf8" },
                onClick: handleCopyAllBriefs,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "📋" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Xuất brief đang lọc" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "n4-draft-action-btn",
                style: { "--draft-action-accent": "#a855f7" },
                onClick: handleCopyScaffoldPack,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "🧱" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Xuất scaffold đang lọc" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-brief-controls", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-draft-brief-filter-row", role: "tablist", "aria-label": "Lọc Batch 1 theo readiness", children: BRIEF_READINESS_FILTERS.map((filter) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: `n4-draft-brief-filter-btn ${briefReadinessFilter === filter.id ? "active" : ""}`,
                style: { "--draft-brief-filter-accent": filter.accent },
                onClick: () => setBriefReadinessFilter(filter.id),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: filter.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: filter.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-brief-filter-count", children: (_a = briefReadinessCounts[filter.countKey]) != null ? _a : 0 })
                ]
              },
              filter.id
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "n4-draft-brief-sort", htmlFor: "draft-brief-sort-mode", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-brief-sort-label", children: "Sắp xếp queue" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                id: "draft-brief-sort-mode",
                className: "n4-draft-brief-sort-select",
                value: briefSortMode,
                onChange: (event) => setBriefSortMode(event.target.value),
                children: BRIEF_SORT_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.id, children: option.label }, option.id))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-brief-sort-help", children: activeBriefSortMeta.hint })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-draft-brief-grid", children: visibleImplementationBriefs.length ? visibleImplementationBriefs.map((brief) => {
          var _a;
          const scaffoldSections = buildImplementationScaffoldSections(brief);
          const previewOpen = previewBriefId === brief.featureId;
          const activeSectionId = previewSectionByBriefId[brief.featureId] || ((_a = scaffoldSections[0]) == null ? void 0 : _a.id);
          const activeScaffoldSection = scaffoldSections.find((section) => section.id === activeSectionId) || scaffoldSections[0];
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            DraftImplementationBriefCard,
            {
              brief,
              previewOpen,
              activeScaffoldSection,
              scaffoldSections,
              onTogglePreview: () => handleToggleScaffoldPreview(brief),
              onSelectSection: (sectionId) => handleSelectScaffoldSection(brief.featureId, sectionId),
              onCopyBrief: () => handleCopySingleBrief(brief),
              onCopyScaffold: () => handleCopySingleScaffold(brief),
              onCopySection: (section) => handleCopyScaffoldSection(brief, section),
              onToggleChecklistItem: (itemId) => handleToggleBriefChecklist(brief, itemId)
            },
            brief.featureId
          );
        }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-brief-empty", children: [
          "Không có brief nào khớp với bộ lọc ",
          activeBriefFilterMeta.label.toLowerCase(),
          "."
        ] }) })
      ] }) : null,
      groupedFeatures.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-draft-groups", children: groupedFeatures.map((group) => {
        var _a, _b, _c;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "n4-draft-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-group-head", style: { "--draft-accent": ((_a = group.meta) == null ? void 0 : _a.color) || "#f59e0b" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-group-title-row", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-group-icon", "aria-hidden": "true", children: ((_b = group.meta) == null ? void 0 : _b.icon) || "✨" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: group.suffix }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: (_c = group.meta) == null ? void 0 : _c.blurb })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-draft-group-count", children: [
              group.items.length,
              " concept"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `n4-draft-grid ${viewMode === "compact" ? "compact" : ""}`, children: group.items.map((feature) => {
            const absoluteIndex = FEATURE_ORDER.get(feature.id) || 0;
            const statusMeta = STATUS_META[feature.status] || STATUS_META.Research;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "article",
              {
                className: `n4-draft-card ${viewMode === "compact" ? "compact" : ""}`,
                style: { "--draft-accent": feature.color, "--draft-status-accent": statusMeta.color },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-card-top", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-card-meta", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-draft-card-index", children: [
                        "#",
                        String(absoluteIndex).padStart(3, "0")
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          className: `n4-draft-pin-btn ${pinnedSet.has(feature.id) ? "active" : ""}`,
                          onClick: () => handleToggleShortlist(feature),
                          "aria-pressed": pinnedSet.has(feature.id),
                          "aria-label": pinnedSet.has(feature.id) ? `Bỏ ${feature.name} khỏi shortlist` : `Ghim ${feature.name} vào shortlist`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: pinnedSet.has(feature.id) ? "📌" : "☆" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: pinnedSet.has(feature.id) ? "Ghim" : "Pin" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "n4-draft-status", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: statusMeta.icon }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: feature.status })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-card-title-row", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-card-icon", "aria-hidden": "true", children: feature.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "n4-draft-card-title", children: feature.name })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-tag-row", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-tag", children: feature.prefix }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-tag n4-draft-tag-soft", children: feature.suffix }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-draft-tag n4-draft-tag-status", style: { "--draft-status-accent": statusMeta.color }, children: feature.status })
                  ] }),
                  viewMode === "rich" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "n4-draft-card-desc", children: feature.description })
                ]
              },
              feature.id
            );
          }) })
        ] }, group.suffix);
      }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-draft-empty", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-draft-empty-icon", "aria-hidden": "true", children: "🫥" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Không có concept phù hợp" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: pinnedOnly ? "Shortlist hiện chưa có concept nào khớp với bộ lọc đang bật. Hãy bỏ chế độ shortlist hoặc ghim thêm ý tưởng." : "Thử đổi từ khóa hoặc bỏ bộ lọc format để xem lại toàn bộ catalogue." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "n4-btn n4-btn-secondary", onClick: handleResetFilters, children: "Reset bộ lọc" })
      ] })
    ] })
  ] });
}
export {
  DraftFeaturesPage as default
};
