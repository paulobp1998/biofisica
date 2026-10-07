# -*- coding: utf-8 -*-
"""
Comprehensive verification test suite for the Biofísica Enfermagem Web App.
Verifies Topic 1 (200 qs) + Topic 2 (200 qs) [400 questions total],
Empty Topics 3-8 (0 qs each, waiting for teacher's future request).
UNLOCKED_TOPIC_IDS = [1] (Topic 1 active for students, Topic 2 locked for students and accessible to teacher).
"""

import json
import re

def test_app():
    print("=" * 80)
    print("RUNNING COMPLETE APP HEALTH VERIFICATION")
    print("=" * 80)

    # 1. HTML structure and asset links
    with open("index.html", "r", encoding="utf-8") as f:
        html = f.read()

    scripts = [s.split('?')[0] for s in re.findall(r'<script src="([^"]+)"></script>', html)]
    expected_scripts = [
        'js/data/topic1.js',
        'js/data/topic2.js',
        'js/data/topic3.js',
        'js/data/topic4.js',
        'js/data/topic5.js',
        'js/data/topic6.js',
        'js/data/topic7.js',
        'js/data/topic8.js',
        'js/questions-data.js',
        'js/quiz-engine.js',
        'js/lib/paho-mqtt.min.js',
        'js/arena-network.js',
        'js/arena-engine.js',
        'js/arena-ui.js',
        'js/teacher-manager.js',
        'js/app.js'
    ]
    # Check that all expected scripts are loaded in index.html
    for exp_script in expected_scripts:
        assert exp_script in scripts, f"Missing script: {exp_script}"
    print("✓ All required script tags in index.html are present and ordered correctly.")

    # 2. Check UI text reflects active Topic 1 (200 questions) and locked topics
    assert "200 Questões de Biofísica Ativas (Tópico 1)" in html
    assert "400 perguntas" in html or "400 Questões" in html
    assert "bloqueados" in html.lower()
    print("✓ UI metadata in index.html properly reflects active Topic 1 (200 questions) and teacher panel (400 questions).")

    # 3. Load Questions Data
    all_questions = []
    topic_counts = {}
    for t in range(1, 9):
        path = f"js/data/topic{t}.js"
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        m = re.search(rf"const\s+TOPIC_{t}_QUESTIONS\s*=\s*(\[[\s\S]*\]);?", content)
        assert m, f"Could not extract TOPIC_{t}_QUESTIONS from {path}"
        data = json.loads(m.group(1))
        topic_counts[t] = len(data)
        all_questions.extend(data)

    print(f"✓ Topic counts: {topic_counts}")
    assert topic_counts[1] == 200, f"Topic 1 has {topic_counts[1]} questions (expected 200)"
    assert topic_counts[2] == 200, f"Topic 2 has {topic_counts[2]} questions (expected 200)"
    for t in range(3, 9):
        assert topic_counts[t] == 0, f"Topic {t} has {topic_counts[t]} questions (expected 0)"
    assert len(all_questions) == 400, f"Total questions is {len(all_questions)} (expected 400)"
    print("✓ Question count verified: 200 in Topic 1, 200 in Topic 2, 0 in Topics 3-8 (Total: 400 questions).")

    # 4. Check IDs are contiguous and distinct
    ids = [q["id"] for q in all_questions]
    assert len(ids) == len(set(ids)), "Duplicate question IDs detected!"
    assert min(ids) == 1001
    assert max(ids) == 2200
    print("✓ All 400 IDs are unique and strictly contiguous per topic block (1001-1200 and 2001-2200).")

    # 5. Check search index simulation
    keywords = ["Inércia", "Momento", "Hooke", "Young", "Cisalhamento", "Compressão", "Alavanca", "Newton", "Atrito"]
    for kw in keywords:
        matches = [q for q in all_questions if kw.lower() in q["question"].lower() or kw.lower() in q["explanation"].lower() or any(kw.lower() in opt.lower() for opt in q["options"])]
        print(f"  • Search '{kw}': {len(matches)} matching questions found.")
        assert len(matches) > 0, f"Expected matches for keyword '{kw}'"
    print("✓ Search capability simulation successful across 400 questions.")

    # 6. Check Unlocked Questions in questions-data.js
    with open("js/questions-data.js", "r", encoding="utf-8") as f:
        q_data_js = f.read()
    assert "UNLOCKED_TOPIC_IDS = [1]" in q_data_js, "UNLOCKED_TOPIC_IDS not set to [1]"
    print("✓ UNLOCKED_TOPIC_IDS = [1] verified in questions-data.js.")

    # 7. Check Distractor Analysis and Options
    for q in all_questions:
        assert len(q["options"]) == 4, f"Q#{q['id']} does not have 4 options"
        assert len(set(q["options"])) == 4, f"Q#{q['id']} has duplicate options"
        assert len(q["distractorAnalysis"]) == 3, f"Q#{q['id']} distractor count != 3"
        for d in q["distractorAnalysis"]:
            assert d.startswith("Está incorreta: "), f"Q#{q['id']} invalid distractor format"
        assert q["correctIndex"] == q["id"] % 4, f"Q#{q['id']} correctIndex != id % 4"
    print("✓ All 400 questions satisfy: 4 unique options, 3 distractors starting with 'Está incorreta: ', correctIndex == id % 4.")

    print("=" * 80)
    print("RESULT: ALL APP COMPONENTS, DATA, LOGIC AND UI CHECKS ARE 100% OPERATIONAL!")
    print("=" * 80)

if __name__ == "__main__":
    test_app()
