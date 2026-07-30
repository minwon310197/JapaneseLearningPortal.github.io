import { s as supabase } from "./feature-3d-hud-Dp6hMoyV.js";
async function getAllChallenges() {
  const { data, error } = await supabase.from("quiz_challenges").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}
async function createChallenge(authorId, { title, description, quizConfig, startsAt, endsAt }) {
  const { data, error } = await supabase.from("quiz_challenges").insert({
    author_id: authorId,
    title,
    description,
    quiz_config: quizConfig,
    starts_at: startsAt,
    ends_at: endsAt
  }).select().single();
  if (error) throw error;
  return data;
}
async function deleteChallenge(id) {
  const { error } = await supabase.from("quiz_challenges").delete().eq("id", id);
  if (error) throw error;
}
async function submitChallengeResult(userId, challengeId, { score, total, timeSeconds, answers }) {
  const { data, error } = await supabase.from("challenge_submissions").upsert({
    challenge_id: challengeId,
    user_id: userId,
    score,
    total,
    time_seconds: timeSeconds,
    answers
  }, { onConflict: "challenge_id,user_id" }).select("id, challenge_id, user_id, score, total, time_seconds, submitted_at").single();
  if (error) throw error;
  return data;
}
async function getChallengeLeaderboard(challengeId) {
  const { data: submissions, error } = await supabase.from("challenge_leaderboard_submissions").select("*").eq("challenge_id", challengeId).order("score", { ascending: false }).order("time_seconds", { ascending: true }).limit(50);
  if (error) throw error;
  if (!submissions || submissions.length === 0) return [];
  const userIds = [...new Set(submissions.map((s) => s.user_id))];
  const { data: profiles } = await supabase.from("public_user_profiles").select("id, display_name, avatar_url").in("id", userIds);
  const profileMap = {};
  for (const p of profiles || []) profileMap[p.id] = p;
  return submissions.map((s) => ({
    ...s,
    user_profiles: profileMap[s.user_id] || null
  }));
}
async function getUserSubmission(userId, challengeId) {
  const { data, error } = await supabase.from("challenge_submissions").select("id, challenge_id, user_id, score, total, time_seconds, submitted_at").eq("user_id", userId).eq("challenge_id", challengeId).single();
  if (error && error.code !== "PGRST116") throw error;
  return data;
}
export {
  getChallengeLeaderboard as a,
  getUserSubmission as b,
  createChallenge as c,
  deleteChallenge as d,
  getAllChallenges as g,
  submitChallengeResult as s
};
