import { ao as esc, ai as S } from "./index-BEJSIlFS.js";
/* empty css               */
import "./vendor-react-BUL8WuXG.js";
import "./vendor-runtime-BbOs9S9B.js";
import "./vendor-icons-D83cEu6Z.js";
import "./vendor-router-Dx6RIovR.js";
import "./vendor-supabase-DTEAj5J1.js";
function translateText(text, from, to) {
  if (!text || !text.trim()) return Promise.resolve("");
  var encoded = encodeURIComponent(text.trim().substring(0, 500));
  var controller, timeoutId, fetchOpts = {};
  if (typeof AbortController !== "undefined") {
    controller = new AbortController();
    timeoutId = setTimeout(function() {
      controller.abort();
    }, 8e3);
    fetchOpts.signal = controller.signal;
  }
  return fetch("https://api.mymemory.translated.net/get?q=" + encoded + "&langpair=" + from + "|" + to, fetchOpts).then(function(r) {
    if (timeoutId) clearTimeout(timeoutId);
    if (!r.ok) throw new Error("HTTP " + r.status);
    return r.json();
  }).then(function(d) {
    return d && d.responseData && d.responseData.translatedText || "";
  }).catch(function(err) {
    if (timeoutId) clearTimeout(timeoutId);
    if (err.name === "AbortError") return "(Hết thời gian chờ)";
    return "(Lỗi kết nối)";
  });
}
const DK = { pidx: 0, furigana: false };
var _dkDict = null;
function _buildDkDict() {
  if (_dkDict) return _dkDict;
  _dkDict = {};
  if (S.vocab) S.vocab.forEach(function(sec) {
    sec.entries.forEach(function(e) {
      var w = (e.word || "").replace(/[\s\*]/g, "");
      var r = e.reading || "";
      if (w && r && w !== r) _dkDict[w] = r;
      if (e.word2) {
        var w2 = (e.word2 || "").replace(/[\s\*]/g, "");
        var r2 = e.reading2 || "";
        if (w2 && r2 && w2 !== r2) _dkDict[w2] = r2;
      }
    });
  });
  if (S.kanji) S.kanji.forEach(function(sec) {
    sec.entries.forEach(function(k) {
      if (k.kanji && k.kun) _dkDict[k.kanji] = k.kun.split(/[,、\s]/)[0];
      if (k.compounds) {
        k.compounds.split(/[,、]/).forEach(function(c) {
          var m = c.trim().match(/^(.+?)\s*[\(（]([^)）]+)[\)）]/);
          if (m) {
            var cw = m[1].replace(/[\s\*]/g, "");
            var cr = m[2].split(/\s*\/\s*/)[0].trim();
            if (cw && cr && /[\u3040-\u309F]/.test(cr)) _dkDict[cw] = cr;
          }
        });
      }
    });
  });
  if (S.minnaData) Object.keys(S.minnaData).forEach(function(k) {
    var lesson = S.minnaData[k];
    if (lesson.vocab) lesson.vocab.forEach(function(v) {
      var w = (v.word || "").replace(/[\s\*]/g, "");
      var r = v.reading || "";
      if (w && r && w !== r && !_dkDict[w]) _dkDict[w] = r;
    });
  });
  return _dkDict;
}
function _maxMatchFurigana(text) {
  var dict = _buildDkDict();
  var maxLen = 8;
  var html = "";
  var i = 0;
  while (i < text.length) {
    var ch = text[i];
    if (ch === "\n") {
      html += "<br>";
      i++;
      continue;
    }
    if (!/[\u3000-\u9FFF\uF900-\uFAFF]/.test(ch)) {
      html += esc(ch);
      i++;
      continue;
    }
    var matched = false;
    for (var len = Math.min(maxLen, text.length - i); len >= 2; len--) {
      var sub = text.substring(i, i + len);
      if (dict[sub]) {
        html += '<ruby class="dk-ruby"><span class="dk-char" data-pos="' + i + '">' + esc(sub) + "</span><rt>" + esc(dict[sub]) + "</rt></ruby>";
        i += len;
        matched = true;
        break;
      }
    }
    if (!matched) {
      if (/[\u4E00-\u9FFF\u3400-\u4DBF]/.test(ch)) {
        var kr = dict[ch];
        if (kr) {
          html += '<ruby class="dk-ruby"><span class="dk-char" data-pos="' + i + '">' + esc(ch) + "</span><rt>" + esc(kr) + "</rt></ruby>";
        } else {
          html += '<span class="dk-char" data-pos="' + i + '">' + esc(ch) + "</span>";
        }
      } else {
        html += '<span class="dk-char" data-pos="' + i + '">' + esc(ch) + "</span>";
      }
      i++;
    }
  }
  return html;
}
const _DOKKAI_PASSAGES = [
  {
    title: "メールの返事",
    text: "田中さんへ\n来週の土曜日に友だちとパーティーをします。場所は私の家です。午後三時から始めます。食べ物と飲み物は私が準備します。よかったら来てください。\n山田より",
    questions: [
      { q: "パーティーはいつですか。", opts: ["来週の金曜日", "来週の土曜日", "今週の土曜日", "来週の日曜日"], ans: 1 },
      { q: "パーティーはどこでしますか。", opts: ["田中さんの家", "山田さんの家", "レストラン", "学校"], ans: 1 },
      { q: "食べ物は誰が準備しますか。", opts: ["田中さん", "山田さん", "友だち", "みんな"], ans: 1 }
    ]
  },
  {
    title: "図書館のお知らせ",
    text: "お知らせ\n四月から図書館の時間が変わります。月曜日から金曜日は朝九時から夜八時までです。土曜日は朝十時から午後五時までです。日曜日は休みです。本は二週間借りることができます。一人五冊まで借りることができます。",
    questions: [
      { q: "図書館は何曜日が休みですか。", opts: ["月曜日", "土曜日", "日曜日", "金曜日"], ans: 2 },
      { q: "土曜日は何時までですか。", opts: ["夜八時", "午後五時", "午後三時", "夜九時"], ans: 1 },
      { q: "本は何冊まで借りることができますか。", opts: ["三冊", "四冊", "五冊", "十冊"], ans: 2 }
    ]
  },
  {
    title: "病院の案内",
    text: "さくら病院のご案内\n診察時間は月曜日から土曜日まで、朝九時から十二時と午後二時から五時です。日曜日と祝日は休みです。初めての方は保険証を持ってきてください。予約は電話でもインターネットでもできます。駐車場は病院の後ろにあります。",
    questions: [
      { q: "診察は何時から何時までですか。", opts: ["朝九時から午後五時まで", "朝九時から十二時と午後二時から五時", "朝八時から午後四時まで", "朝十時から午後六時まで"], ans: 1 },
      { q: "初めての人は何を持っていきますか。", opts: ["予約票", "保険証", "薬", "お金"], ans: 1 },
      { q: "駐車場はどこにありますか。", opts: ["病院の前", "病院の隣", "病院の後ろ", "駅の近く"], ans: 2 }
    ]
  },
  {
    title: "アルバイトの募集",
    text: "アルバイト募集\nレストラン「はなび」ではスタッフを募集しています。時間は午前十一時から午後三時まで、または午後五時から夜十時までです。時給は千円です。週に三日以上働ける方を探しています。経験がなくても大丈夫です。興味がある方は、山田（090-1234-5678）まで電話してください。",
    questions: [
      { q: "時給はいくらですか。", opts: ["八百円", "九百円", "千円", "千二百円"], ans: 2 },
      { q: "週に何日以上働く必要がありますか。", opts: ["二日", "三日", "四日", "五日"], ans: 1 },
      { q: "経験がない人は応募できますか。", opts: ["できない", "できる", "面接で決まる", "書いていない"], ans: 1 }
    ]
  },
  {
    title: "旅行の計画",
    text: "私は来月友だちと京都に旅行に行きます。新幹線で東京から二時間半ぐらいです。一日目はお寺を見に行きます。二日目は着物を着て町を歩きます。ホテルは駅の近くで、一泊八千円です。二泊三日の旅行です。とても楽しみです。",
    questions: [
      { q: "東京から京都まで新幹線でどのくらいですか。", opts: ["一時間", "二時間", "二時間半", "三時間"], ans: 2 },
      { q: "二日目は何をしますか。", opts: ["お寺に行く", "着物を着て歩く", "買い物をする", "山に登る"], ans: 1 },
      { q: "ホテルは一泊いくらですか。", opts: ["五千円", "七千円", "八千円", "一万円"], ans: 2 }
    ]
  },
  {
    title: "スーパーのチラシ",
    text: "タイムセール！\n今週の金曜日と土曜日、午後三時から午後五時まで。\n・りんご 五個 三百円（普通は五百円）\n・牛乳  一本 百五十円（普通は二百円）\n・卵   一パック 百八十円（普通は二百五十円）\n・パン  一袋 百円（普通は百五十円）\nお一人様三つまでです。",
    questions: [
      { q: "セールはいつですか。", opts: ["月曜と火曜", "水曜と木曜", "金曜と土曜", "土曜と日曜"], ans: 2 },
      { q: "りんごはセールでいくらですか。", opts: ["二百円", "三百円", "四百円", "五百円"], ans: 1 },
      { q: "一人でいくつまで買えますか。", opts: ["一つ", "二つ", "三つ", "五つ"], ans: 2 }
    ]
  },
  {
    title: "日本語クラスの案内",
    text: "日本語教室のお知らせ\n四月から新しいクラスが始まります。初級クラスは火曜日と木曜日の午後七時から八時半までです。中級クラスは水曜日と金曜日の同じ時間です。場所は市民センターの三階です。一か月三千円です。教科書は別に買ってください。申し込みは三月三十一日までです。",
    questions: [
      { q: "初級クラスは何曜日ですか。", opts: ["月曜と水曜", "火曜と木曜", "水曜と金曜", "月曜と金曜"], ans: 1 },
      { q: "授業はどこでありますか。", opts: ["大学", "公民館", "市民センター", "図書館"], ans: 2 },
      { q: "一か月いくらですか。", opts: ["二千円", "三千円", "五千円", "教科書込み三千円"], ans: 1 }
    ]
  },
  {
    title: "天気予報",
    text: "明日の天気予報です。朝は曇りですが、昼から雨が降るでしょう。気温は朝十二度、昼は十八度ぐらいです。夜は風が強くなります。傘を持って出かけてください。週末は晴れになる予定です。",
    questions: [
      { q: "明日の昼の天気はどうですか。", opts: ["晴れ", "曇り", "雨", "雪"], ans: 2 },
      { q: "昼の気温は何度ぐらいですか。", opts: ["十度", "十五度", "十八度", "二十度"], ans: 2 },
      { q: "週末の天気はどうですか。", opts: ["雨", "曇り", "晴れ", "雪"], ans: 2 }
    ]
  },
  {
    title: "引っ越しのお知らせ",
    text: "鈴木です。三月に引っ越しをしました。新しい住所は東京都新宿区北町二丁目三番地です。駅から歩いて五分のマンションです。部屋は前より少し狭いですが、駅に近いので便利です。近くにいい公園もあります。ぜひ遊びに来てください。",
    questions: [
      { q: "鈴木さんはいつ引っ越しましたか。", opts: ["一月", "二月", "三月", "四月"], ans: 2 },
      { q: "駅から新しい家まで何分ですか。", opts: ["三分", "五分", "十分", "十五分"], ans: 1 },
      { q: "新しい部屋はどうですか。", opts: ["広くて便利", "狭いが駅に近い", "広いが不便", "前と同じ"], ans: 1 }
    ]
  },
  {
    title: "料理教室",
    text: "春の料理教室！\n日本料理を作りましょう。今回はお寿司とみそ汁を作ります。\n日時：四月十五日（土）午前十時から午後一時まで\n場所：コミュニティセンター二階\n参加費：一人二千五百円（材料費込み）\n定員：十五名\n持ち物：エプロン\n申し込み：四月十日まで",
    questions: [
      { q: "何を作りますか。", opts: ["カレーとサラダ", "お寿司とみそ汁", "てんぷらとうどん", "おにぎりとみそ汁"], ans: 1 },
      { q: "参加費はいくらですか。", opts: ["千円", "二千円", "二千五百円", "三千円"], ans: 2 },
      { q: "何を持っていきますか。", opts: ["包丁", "エプロン", "材料", "お皿"], ans: 1 }
    ]
  },
  {
    title: "ホテルの口コミ",
    text: "先週末、家族でこのホテルに泊まりました。部屋はきれいで広かったです。窓から海が見えました。朝ごはんのバイキングはとてもおいしかったです。特に焼き魚がよかったです。でも、駐車場が小さくて、車を止める場所を探すのが大変でした。また来たいと思います。",
    questions: [
      { q: "部屋の窓から何が見えましたか。", opts: ["山", "海", "公園", "町"], ans: 1 },
      { q: "朝ごはんで特によかったものは何ですか。", opts: ["パン", "サラダ", "焼き魚", "卵"], ans: 2 },
      { q: "ホテルの問題は何でしたか。", opts: ["部屋が狭い", "食事がまずい", "駐車場が小さい", "遠い"], ans: 2 }
    ]
  },
  {
    title: "スポーツクラブの案内",
    text: "スポーツクラブ「フィット」\n入会金：五千円　月会費：六千円\n施設：プール、ジム、ヨガスタジオ\n営業時間：平日 朝七時～夜十時、土日 朝九時～夜八時\n休館日：毎週水曜日\n見学は無料です。お気軽にお問い合わせください。",
    questions: [
      { q: "月会費はいくらですか。", opts: ["五千円", "六千円", "七千円", "一万円"], ans: 1 },
      { q: "休館日は何曜日ですか。", opts: ["月曜日", "火曜日", "水曜日", "日曜日"], ans: 2 },
      { q: "見学はいくらですか。", opts: ["千円", "五百円", "三千円", "無料"], ans: 3 }
    ]
  },
  {
    title: "友達への手紙",
    text: "リンさんへ\n元気ですか。私は先月から東京で働いています。会社は新宿にあります。毎日電車で通っていますが、朝はとても混んでいます。でも、仕事はおもしろいです。週末はよく秋葉原に行きます。来月、東京に来ませんか。おいしいラーメン屋を見つけました。一緒に行きましょう。\nタンより",
    questions: [
      { q: "タンさんの会社はどこにありますか。", opts: ["渋谷", "新宿", "秋葉原", "東京駅"], ans: 1 },
      { q: "タンさんは週末にどこに行きますか。", opts: ["新宿", "渋谷", "秋葉原", "池袋"], ans: 2 },
      { q: "タンさんはリンさんに何を提案していますか。", opts: ["旅行に行く", "会社に来る", "一緒にラーメンを食べる", "引っ越しを手伝う"], ans: 2 }
    ]
  },
  {
    title: "マンションの規則",
    text: "マンションの規則\n・ゴミは月・水・金の朝八時までに出してください。\n・ペットを飼うことはできません。\n・夜十時以降は大きい音を出さないでください。\n・共用部分でタバコを吸わないでください。\n・自転車は駐輪場に止めてください。\n・来客用の駐車場は二台分あります。事前に管理人に連絡してください。",
    questions: [
      { q: "ゴミはいつ出しますか。", opts: ["毎日", "月水金", "火木土", "週末"], ans: 1 },
      { q: "ペットについてどう書いてありますか。", opts: ["小さいのはOK", "飼えない", "犬だけOK", "許可が必要"], ans: 1 },
      { q: "来客用の駐車場は何台分ですか。", opts: ["一台", "二台", "三台", "五台"], ans: 1 }
    ]
  },
  {
    title: "映画の紹介",
    text: "映画「花の道」\nこれは日本の高校生の話です。主人公の美咲は東京から小さい町に引っ越しました。最初は友だちがいなくて寂しかったです。でも、花屋でアルバイトを始めて、町の人と友だちになりました。この映画を見た人は「泣きました」「元気になりました」と言っています。上映時間は二時間です。",
    questions: [
      { q: "美咲はどこから引っ越しましたか。", opts: ["大阪", "京都", "東京", "名古屋"], ans: 2 },
      { q: "美咲はどこでアルバイトを始めましたか。", opts: ["レストラン", "花屋", "コンビニ", "スーパー"], ans: 1 },
      { q: "映画を見た人はどう言っていますか。", opts: ["つまらない", "怖い", "泣いた・元気になった", "長すぎる"], ans: 2 }
    ]
  }
];
function renderDkPassage() {
  const p = _DOKKAI_PASSAGES[DK.pidx];
  const passEl = document.getElementById("dk-passage");
  if (DK.furigana) {
    passEl.innerHTML = _maxMatchFurigana(p.text);
  } else {
    let html = "";
    for (let i = 0; i < p.text.length; i++) {
      const ch = p.text[i];
      if (ch === "\n") {
        html += "<br>";
      } else if (/[\u3000-\u9FFF\uF900-\uFAFF]/.test(ch)) {
        html += '<span class="dk-char" data-pos="' + i + '">' + esc(ch) + "</span>";
      } else {
        html += esc(ch);
      }
    }
    passEl.innerHTML = html;
  }
  const qEl = document.getElementById("dk-questions");
  let qhtml = "";
  p.questions.forEach((q, qi) => {
    qhtml += '<div class="dk-q" id="dk-q-' + qi + '"><div class="dk-q-text">Q' + (qi + 1) + ". " + esc(q.q) + "</div>";
    q.opts.forEach((opt, oi) => {
      qhtml += '<button class="dk-opt" onclick="dkAnswer(' + qi + "," + oi + ')">' + esc(opt) + "</button>";
    });
    qhtml += "</div>";
  });
  qEl.innerHTML = qhtml;
  document.getElementById("dk-score").textContent = "";
  var ghEl = document.getElementById("dk-gh");
  if (ghEl) {
    var ansStr = p.questions.map(function(q, i) {
      return "Q" + (i + 1) + ": " + q.opts[q.ans];
    }).join(" | ");
    setGameHint({ romaji: "", vi: "", answer: ansStr });
    ghEl.innerHTML = dkHintBarHTML();
  }
}
var GH = { romaji: false, vi: false, data: null, used: false };
function setGameHint(data) {
  GH.data = data;
  GH.romaji = false;
  GH.vi = false;
  GH.used = false;
}
function toggleGameHint(type) {
  GH[type] = !GH[type];
  if (GH[type]) GH.used = true;
  var btnR = document.getElementById("gh-btn-romaji");
  var btnV = document.getElementById("gh-btn-vi");
  if (btnR) btnR.classList.toggle("active", GH.romaji);
  if (btnV) btnV.classList.toggle("active", GH.vi);
  updateGameHintLine();
}
function updateGameHintLine() {
  var el = document.getElementById("gh-line");
  if (!el || !GH.data) {
    if (el) el.textContent = "";
    return;
  }
  var parts = [];
  if (GH.romaji && GH.data.romaji) parts.push(GH.data.romaji);
  if (GH.vi && GH.data.vi) parts.push(GH.data.vi);
  el.textContent = parts.join(" — ") || "";
}
function gameHintBarHTML(labelR, labelV) {
  labelR = labelR || "💡 Đáp án";
  labelV = labelV || "🇻🇳 Nghĩa";
  return `<div class="game-hint-bar"><button class="game-hint-btn" id="gh-btn-romaji" onclick="toggleGameHint('romaji')" title="Hiện gợi ý">` + labelR + `</button><button class="game-hint-btn" id="gh-btn-vi" onclick="toggleGameHint('vi')" title="Hiện nghĩa tiếng Việt">` + labelV + '</button></div><div class="game-hint-line" id="gh-line"></div>';
}
function dkHintBarHTML() {
  return '<div class="game-hint-bar"><button class="game-hint-btn' + (DK.furigana ? " active" : "") + `" id="gh-btn-furigana" onclick="toggleDkFurigana()" title="Hiện furigana">[あ] Furigana</button><button class="game-hint-btn" id="gh-btn-answer" onclick="toggleDkHint('answer')" title="Hiện đáp án">✅ Đáp án</button><button class="game-hint-btn" id="gh-btn-vi" onclick="translateDkPassage('vi')" title="Dịch tiếng Việt">🇻🇳 Dịch Tiếng Việt</button><button class="game-hint-btn" id="gh-btn-romaji" onclick="translateDkPassage('romaji')" title="Phiên âm Romaji">ロー Romaji</button></div><div class="game-hint-line" id="gh-line"></div>`;
}
function toggleDkFurigana() {
  DK.furigana = !DK.furigana;
  var btn = document.getElementById("gh-btn-furigana");
  if (btn) btn.classList.toggle("active", DK.furigana);
  renderDkPassage();
}
function toggleDkHint(type) {
  if (type === "answer") {
    GH._showAnswer = !GH._showAnswer;
    var btn = document.getElementById("gh-btn-answer");
    if (btn) btn.classList.toggle("active", GH._showAnswer);
    var el = document.getElementById("gh-line");
    if (el) el.textContent = GH._showAnswer && GH.data && GH.data.answer ? GH.data.answer : "";
  }
}
function translateDkPassage(mode) {
  var p = _DOKKAI_PASSAGES[DK.pidx];
  if (!p) return;
  var el = document.getElementById("gh-line");
  if (!el) return;
  if (mode === "romaji") {
    el.textContent = "Đang phiên âm...";
    translateText(p.text.replace(/\n/g, " "), "ja", "en").then(function(t) {
      el.textContent = t || "(Không thể phiên âm)";
    });
  } else {
    el.textContent = "Đang dịch...";
    translateText(p.text.replace(/\n/g, " "), "ja", "vi").then(function(t) {
      el.textContent = t || "(Không thể dịch)";
    });
  }
}
function _lookupHints(word) {
  var romaji = "", vi = "", reading = "";
  for (var s = 0; s < (S.vocab || []).length; s++) {
    for (var e = 0; e < (S.vocab[s].entries || []).length; e++) {
      var ent = S.vocab[s].entries[e];
      if (ent.word === word) {
        romaji = ent.romaji || "";
        vi = ent.meaning || "";
        reading = ent.reading || "";
        break;
      }
    }
    if (romaji) break;
  }
  if (!romaji) {
    for (var s = 0; s < (S.kanji || []).length; s++) {
      for (var e = 0; e < (S.kanji[s].entries || []).length; e++) {
        var k = S.kanji[s].entries[e];
        if (k.kanji === word) {
          romaji = k.on || k.kun || "";
          vi = k.title || "";
          break;
        }
      }
      if (romaji) break;
    }
  }
  return { romaji: romaji || reading, vi };
}
export {
  GH,
  _lookupHints,
  dkHintBarHTML,
  gameHintBarHTML,
  setGameHint,
  toggleDkFurigana,
  toggleDkHint,
  toggleGameHint,
  translateDkPassage,
  updateGameHintLine
};
