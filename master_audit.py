# -*- coding: utf-8 -*-
"""
Master Audit Script for all 2,400 Questions across Topics 1 to 8
Topic 1: 1,000 questions (IDs 1001-2000)
Topics 2-8: 200 questions each (IDs 2001-8200)
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
print("MASTER AUDIT: 2,400 CLINICAL BIOFÍSICA QUESTIONS (TOPICS 1 - 8)")
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
    
    expected_count = 1000 if t == 1 else 200
    expected_opt = 250 if t == 1 else 50
    print(f"Topic {t:02d}: {t_count} questions | Dist (A/B/C/D): {t_dist[0]}/{t_dist[1]}/{t_dist[2]}/{t_dist[3]} | Ratio: {avg_r:.2f} (Min {min_r:.2f}, Max {max_r:.2f}) | Issues: {len(t_flagged) + len(t_da_issues)}")
    assert t_count == expected_count, f"Topic {t} has {t_count} questions instead of {expected_count}"
    assert t_dist[0] == expected_opt and t_dist[1] == expected_opt and t_dist[2] == expected_opt and t_dist[3] == expected_opt, f"Topic {t} distribution unbalanced: {t_dist}"
    assert len(t_flagged) == 0, f"Topic {t} flagged issues: {t_flagged}"
    assert len(t_da_issues) == 0, f"Topic {t} DA issues: {t_da_issues}"

print("-" * 80)
print(f"TOTAL QUESTIONS AUDITED: {total_questions} (Expected: 2,400)")
print(f"GLOBAL ANSWER DISTRIBUTION: {global_counts} (600 of each: A={global_counts[0]}, B={global_counts[1]}, C={global_counts[2]}, D={global_counts[3]})")
print(f"GLOBAL AVERAGE LENGTH RATIO: {sum(global_ratios)/len(global_ratios):.2f}")
print(f"GLOBAL MIN RATIO: {min(global_ratios):.2f}, GLOBAL MAX RATIO: {max(global_ratios):.2f}")
print(f"QUESTIONS WITH RATIO > 1.35: {sum(1 for r in global_ratios if r > 1.35)}")
print(f"QUESTIONS WITH RATIO < 0.80: {sum(1 for r in global_ratios if r < 0.80)}")
print(f"QUESTIONS WITH FLAGGED WORDS: {len(global_flagged)}")
print(f"QUESTIONS WITH DA COUNT/PREFIX ISSUES: {len(global_da_issues)}")
print("=" * 80)

assert total_questions == 2400
assert global_counts[0] == 600 and global_counts[1] == 600 and global_counts[2] == 600 and global_counts[3] == 600
assert sum(1 for r in global_ratios if r > 1.35) == 0
assert sum(1 for r in global_ratios if r < 0.80) == 0
assert len(global_flagged) == 0
assert len(global_da_issues) == 0

print("RESULT: ALL 2,400 QUESTIONS PASS 100% OF QUALITY AND CALIBRATION ASSERTIONS!")
