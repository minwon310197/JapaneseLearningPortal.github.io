import { r as reactExports, j as jsxRuntimeExports } from "./vendor-react-BYxMSDiB.js";
import { u as useSwipeClose } from "./useSwipeClose-kSoAdfCN.js";
import { I as useDialogFocus } from "./feature-3d-hud-Dp6hMoyV.js";
import { d as safeSetItem, S as STORAGE_KEYS, s as safeGetItem } from "./feature-3d-jK3b4Iv-.js";
import "./vendor-supabase-DTEAj5J1.js";
import "./vendor-three-Ba7Uoy0A.js";
const GUIDE_KEY = STORAGE_KEYS.GUIDE_SHOWN;
const SECTIONS = [
  {
    icon: "🏠",
    title: "Tổng quan ứng dụng",
    body: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Ứng dụng gồm ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "5 mục chính" }),
        " ở thanh điều hướng dưới cùng:"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🏠 Trang chủ" }),
          " — Bảng điều khiển, truy cập nhanh các trò chơi"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "📖 Nội dung" }),
          " — Kanji, Từ vựng, Ngữ pháp, Minna"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🎯 Luyện tập" }),
          " — các trainer luyện tập theo chủ đề"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🔍 Tra cứu" }),
          " — Từ điển tra nhanh"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "⚙️ Cài đặt" }),
          " — Giao diện, âm thanh, sao lưu dữ liệu"
        ] })
      ] })
    ] })
  },
  {
    icon: "🎮",
    title: "Trò chơi & Luyện tập",
    body: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Trang chủ gom các trainer theo nhóm kỹ năng để bạn học theo mục tiêu:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Võ đường từ vựng" }),
          " — Điền từ, trắc nghiệm, đúng/sai, ghép đôi, nghe"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Học viện hán tự" }),
          " — Luyện kanji đọc, viết, ghép đôi, trắc nghiệm"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Đấu trường ngữ pháp" }),
          " — Trắc nghiệm ngữ pháp, điền chỗ trống, trợ từ"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Phòng luyện nghe" }),
          " — Chính tả, nghe hiểu"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Phòng đọc hiểu" }),
          " — Đọc hiểu đoạn văn"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Thế giới câu đố, Thử thách trí não" }),
          " — Ô chữ, trí nhớ, tìm từ"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Luyện tập hằng ngày" }),
          " — Luyện hằng ngày tổng hợp"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Mỗi trò đều có nút ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "💡 gợi ý" }),
        " và ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "👁 xem đáp án" }),
        "."
      ] })
    ] })
  },
  {
    icon: "⌨️",
    title: "Phím tắt thường dùng",
    body: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "n4-guide-table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { children: "Phím tắt thường dùng" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "Ctrl+K" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Bảng lệnh (tìm nhanh)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "Ctrl+," }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Mở Cài đặt" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "Ctrl+B" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Bảng gỡ lỗi" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "row", children: /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "Esc" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Đóng modal hoặc overlay đang mở" })
        ] })
      ] })
    ] })
  },
  {
    icon: "🔍",
    title: "Tra cứu & Từ điển",
    body: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Bảng lệnh" }),
        " (",
        /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "Ctrl+K" }),
        "): Tìm nhanh mọi tính năng, từ vựng, trò chơi."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tra cứu" }),
        " (tab 🔍): Từ điển tra nhanh với lịch sử tìm kiếm."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Gia sư AI" }),
        ": Hỏi đáp về ngữ pháp, từ vựng với AI."
      ] })
    ] })
  },
  {
    icon: "📌",
    title: "Bookmark & Điểm kinh nghiệm",
    body: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Đánh dấu" }),
        ": Nhấn ⭐ bên cạnh từ vựng hoặc kanji để đánh dấu ôn tập."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "XP và cấp" }),
        ": Mỗi lần luyện tập đúng bạn nhận XP. Lên cấp để mở khóa thành tựu."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Combo" }),
        ": Trả lời đúng liên tiếp tăng combo và nhận thêm XP."
      ] })
    ] })
  },
  {
    icon: "🔊",
    title: "Phát âm & TTS",
    body: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "TTS" }),
        ": Nhấn 🔊 bên cạnh bất kỳ từ tiếng Nhật nào để nghe phát âm."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tùy chỉnh giọng" }),
        ": Vào Cài đặt để chọn giọng đọc và tốc độ."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "StudyAssist" }),
        ": Thanh công cụ nổi ở góc màn hình để bật tắt romaji và nghe đọc."
      ] })
    ] })
  },
  {
    icon: "📚",
    title: "Lộ trình học Minna",
    body: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Ứng dụng xây dựng theo giáo trình ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Minna no Nihongo" }),
        " (50 bài):"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Bài 1–25" }),
          ": Nội dung N5 để ôn lại nền tảng"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Bài 26–50" }),
          ": Nội dung N4, trọng tâm luyện thi"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cách học hiệu quả:" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "📖 Vào ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Nội dung → Minna" }),
          " để xem từ vựng và ngữ pháp từng bài"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "📝 Sau đó làm quiz tổng hợp để củng cố bài vừa học" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "🎯 Theo dõi thanh tiến trình để biết bài nào còn yếu" })
      ] })
    ] })
  },
  {
    icon: "💡",
    title: "Mẹo cho người mới",
    body: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "🎯 ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Bắt đầu từ Luyện tập hằng ngày" }),
        " để có nhịp học đều mỗi ngày"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "📖 ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Xem Nội dung trước" }),
        ", rồi mới chuyển sang luyện tập"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "⭐ ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Bookmark từ khó" }),
        " để gom đúng phần cần ôn"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "🎮 ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Chơi Võ đường từ vựng" }),
        " là cách vào bài dễ nhất cho người mới"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "⚙️ ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cài đặt" }),
        " giúp chỉnh giao diện, âm thanh và mật độ hiển thị phù hợp"
      ] })
    ] })
  }
];
function GuideModal({ open, onClose }) {
  const [expandedIdx, setExpandedIdx] = reactExports.useState(/* @__PURE__ */ new Set([0]));
  const swipeClose = useSwipeClose(onClose);
  const dialogRef = useDialogFocus(open, onClose);
  const toggle = reactExports.useCallback((idx) => {
    setExpandedIdx((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  }, []);
  reactExports.useEffect(() => {
    if (open) {
      safeSetItem(GUIDE_KEY, "1");
    }
  }, [open]);
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-guide-overlay", onPointerDown: (event) => event.target === event.currentTarget && (onClose == null ? void 0 : onClose()), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: dialogRef, className: "n4-guide-container", role: "dialog", "aria-modal": "true", "aria-labelledby": "n4-guide-title", tabIndex: -1, ...swipeClose.swipeHandlers, style: swipeClose.swipeStyle, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "n4-guide-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "n4-guide-title", children: "📖 Hướng dẫn sử dụng" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "n4-btn n4-btn-icon n4-btn-ghost", onClick: onClose, "aria-label": "Đóng hướng dẫn", children: "✕" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-guide-toc", children: SECTIONS.map((section, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        className: "n4-guide-toc-btn",
        onClick: () => {
          setExpandedIdx((prev) => {
            const next = new Set(prev);
            next.add(index);
            return next;
          });
          setTimeout(() => {
            var _a;
            (_a = document.getElementById(`n4-guide-sec-${index}`)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 60);
        },
        children: [
          section.icon,
          " ",
          section.title
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-guide-body", children: SECTIONS.map((section, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: `n4-guide-sec-${index}`, className: "n4-guide-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "n4-guide-sec-header",
          onClick: () => toggle(index),
          "aria-expanded": expandedIdx.has(index),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              section.icon,
              " ",
              section.title
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "n4-guide-arrow", children: expandedIdx.has(index) ? "▾" : "▸" })
          ]
        }
      ),
      expandedIdx.has(index) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-guide-sec-body", children: section.body })
    ] }, index)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "n4-guide-footer", children: "Chúc bạn học tốt! 🎌" })
  ] }) });
}
function shouldShowGuide() {
  try {
    return !safeGetItem(GUIDE_KEY);
  } catch (e) {
    return false;
  }
}
export {
  GuideModal as default,
  shouldShowGuide
};
