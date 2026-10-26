# -*- coding: utf-8 -*-
"""
Master Audit Script for the question bank (Topics 1 to 8)
Active: Topic 1 (200 questions, IDs 1001-1200) and Topic 2 (200 questions, IDs 2201-2404; 2234, 2235, 2273 and 2298 removed).
Topics 3-8 are empty and are skipped.
"""

import json
import re

absurd_words = [
    'lixívia', 'ímã', 'ferver', 'perpétu', 'canalizada',
    'vapor d', 'alta voltagem', 'desintegra', 'indeformável',
    'gás ideal', 'gota de água', 'ondas de rádio', 'zero absoluto',
    'infinitamente'
]

total_questions = 0
global_counts = {0: 0, 1: 0, 2: 0, 3: 0}
global_ratios = []
global_flagged = []
global_da_issues = []

print("=" * 80)
print("MASTER AUDIT: BIOFÍSICA QUESTION BANK (TOPICS 1 - 8)")
print("=" * 80)

topics_summary = []

for t in range(1, 9):
    path = f"js/data/topic{t}.js"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    match = re.search(rf"const\s+TOPIC_{t}_QUESTIONS\s*=\s*(\[[\s\S]*\]);?", content)
    assert match, f"Could not find TOPIC_{t}_QUESTIONS array in {path}"

    data = json.loads(match.group(1))
    t_count = len(data)
    expected_count = 200 if t in (1, 2) else 0
    assert t_count == expected_count, f"Topic {t} has {t_count} questions instead of {expected_count}"
    if t_count == 0:
        print(f"Topic {t:02d}: empty (locked)")
        continue
    total_questions += t_count

    t_dist = {0: 0, 1: 0, 2: 0, 3: 0}
    t_ratios = []
    t_flagged = []
    t_da_issues = []

    for q in data:
        qid = q["id"]
        c_idx = q["correctIndex"]
        t_dist[c_idx] += 1
        global_counts[c_idx] += 1

        opts = q["options"]
        assert len(opts) == 4, f"Q{qid} does not have 4 options"
        c_len = len(opts[c_idx])
        avg_d = sum(len(opts[i]) for i in range(4) if i != c_idx) / 3.0
        r = c_len / avg_d
        t_ratios.append(r)
        global_ratios.append(r)

        if r > 1.35 or r < 0.80:
            t_flagged.append((qid, f"ratio {r:.2f}"))

        da = q.get("distractorAnalysis", [])
        if len(da) != 3:
            t_da_issues.append((qid, f"DA count {len(da)}"))
            global_da_issues.append((qid, f"DA count {len(da)}"))
        else:
            for d_text in da:
                if not d_text.startswith("Está incorreta:"):
                    t_da_issues.append((qid, f"DA prefix mismatch: {d_text[:30]}"))

        # Check banned words
        q_text = q["question"]
        for w in absurd_words:
            if w in q_text.lower():
                t_flagged.append((qid, f"word '{w}' in question"))
                global_flagged.append((qid, f"word '{w}' in question"))
        for opt in opts:
            for w in absurd_words:
                if w in opt.lower():
                    t_flagged.append((qid, f"word '{w}' in option"))
                    global_flagged.append((qid, f"word '{w}' in option"))
        for d_text in da:
            for w in absurd_words:
                if w in d_text.lower():
                    t_flagged.append((qid, f"word '{w}' in DA"))
                    global_flagged.append((qid, f"word '{w}' in DA"))

    avg_r = sum(t_ratios) / len(t_ratios)
    min_r = min(t_ratios)
    max_r = max(t_ratios)
    topics_summary.append({
        "topic": t,
        "count": t_count,
        "dist": t_dist,
        "avg_ratio": avg_r,
        "min_ratio": min_r,
        "max_ratio": max_r,
        "issues": len(t_flagged) + len(t_da_issues)
    })
    
    expected_opt = 50
    print(f"Topic {t:02d}: {t_count} questions | Dist (A/B/C/D): {t_dist[0]}/{t_dist[1]}/{t_dist[2]}/{t_dist[3]} | Ratio: {avg_r:.2f} (Min {min_r:.2f}, Max {max_r:.2f}) | Issues: {len(t_flagged) + len(t_da_issues)}")
    if any(t_dist[i] != expected_opt for i in range(4)):
        print(f"  WARN: Topic {t} answer distribution not perfectly balanced: {t_dist}")
    if t_flagged:
        print(f"  WARN: Topic {t} has {len(t_flagged)} flagged items (length ratio / banned words): {[f[0] for f in t_flagged]}")
    assert len(t_da_issues) == 0, f"Topic {t} DA issues: {t_da_issues}"

print("-" * 80)
print(f"TOTAL QUESTIONS AUDITED: {total_questions} (Expected: 400)")
print(f"GLOBAL ANSWER DISTRIBUTION: {global_counts} (target 100 of each)")
print(f"GLOBAL AVERAGE LENGTH RATIO: {sum(global_ratios)/len(global_ratios):.2f}")
print(f"GLOBAL MIN RATIO: {min(global_ratios):.2f}, GLOBAL MAX RATIO: {max(global_ratios):.2f}")
print(f"QUESTIONS WITH RATIO > 1.35: {sum(1 for r in global_ratios if r > 1.35)}")
print(f"QUESTIONS WITH RATIO < 0.80: {sum(1 for r in global_ratios if r < 0.80)}")
print(f"QUESTIONS WITH FLAGGED WORDS: {len(global_flagged)}")
print(f"QUESTIONS WITH DA COUNT/PREFIX ISSUES: {len(global_da_issues)}")
print("=" * 80)

assert total_questions == 400
assert len(global_da_issues) == 0

print("RESULT: STRUCTURE OK (warnings above are quality hints, not failures).")
