import { r as reactExports } from "./vendor-react-BYxMSDiB.js";
import { l as loadDailyStudyPlan } from "./index-ZUSnnghe.js";
import { cC as getItem } from "./feature-3d-ClP3ARU5.js";
function useGameRestart(scoring, { onReset } = {}) {
  const [gameKey, setGameKey] = reactExports.useState(0);
  const lockRef = reactExports.useRef(false);
  const onResetRef = reactExports.useRef(onReset);
  onResetRef.current = onReset;
  const restart = reactExports.useCallback(() => {
    var _a, _b;
    lockRef.current = false;
    (_a = scoring == null ? void 0 : scoring.reset) == null ? void 0 : _a.call(scoring);
    (_b = onResetRef.current) == null ? void 0 : _b.call(onResetRef);
    setGameKey((k) => k + 1);
  }, [scoring]);
  return { gameKey, restart, lockRef };
}
function useStudySession(trainerId) {
  const plan = reactExports.useMemo(() => loadDailyStudyPlan(), []);
  const blockIndex = plan && plan.status === "active" ? plan.currentBlock : -1;
  const block = blockIndex !== -1 ? plan.blocks[blockIndex] : null;
  const isSessionActive = reactExports.useMemo(() => {
    if (!block) return false;
    if (trainerId === "daily-practice") {
      return true;
    }
    const domainMap = {
      vocab: "vocab-dojo",
      kanji: "kanji-academy",
      grammar: "grammar-arena",
      reading: "reading-room",
      listening: "listening-lab"
    };
    return domainMap[block.domain] === trainerId;
  }, [block, trainerId]);
  const filterItems = (defaultItems) => {
    if (!isSessionActive || !block) return defaultItems;
    if (block.itemKeys && block.itemKeys.length > 0) {
      const resolved = block.itemKeys.map((k) => getItem(k)).filter(Boolean);
      if (resolved.length > 0) return resolved;
    }
    return defaultItems;
  };
  const filterQuestionCount = (defaultCount) => {
    var _a;
    if (!isSessionActive || !block) return defaultCount;
    return block.questionCount || ((_a = block.itemKeys) == null ? void 0 : _a.length) || defaultCount;
  };
  return {
    isSessionActive,
    blockIndex,
    block,
    plan,
    filterItems,
    filterQuestionCount
  };
}
export {
  useStudySession as a,
  useGameRestart as u
};
