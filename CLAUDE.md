# Biofísica — question bank rules

Static quiz site for 1st-year Nursing students (Licenciatura em Enfermagem, Portugal).
Question banks live in `js/data/topicN.js` (topics 1–8), each a `const TOPIC_N_QUESTIONS = [ ... ];` array.

## Working efficiently

- Do NOT read a whole `topicN.js` file (the full ones are ~3,800 lines). To learn the format, read only the first ~40 lines of `js/data/topic1.js`. To find the next free ID, read only the last ~30 lines (`tail -n 30`).
- Write new questions straight into the file (append before the closing `];`). Do not print them in chat; reply with a short summary (IDs added, subtopics covered).
- Work in batches of 10–20 questions.
- Run the validation script below after each batch.

## Question object

```js
{
  "id": 1201,
  "topicId": 1,
  "question": "…",
  "options": ["…", "…", "…", "…"],
  "correctIndex": 2,
  "explanation": "…",
  "distractorAnalysis": [
    "Está incorreta: …",
    "Está incorreta: …",
    "Está incorreta: …"
  ],
  "nursingApplication": "…"
}
```

- IDs: topic N uses the range N001–N999, consecutive, never reused. Topics 1 and 2 have 200 questions each (topic 1: 1001–1200; topic 2: 2201–2400). Topics 3–8 are empty (`[]`), so start them at N001. Always confirm the last ID with `tail` before adding.
- Exactly 4 options. Exactly 3 entries in `distractorAnalysis`, one per WRONG option, **in the same order as the wrong options appear** (skip the correct index).
- Each distractor entry starts with "Está incorreta:" and says *why* that option is wrong. It must not just restate the option.
- `correctIndex` must be balanced across a batch (roughly equal counts of 0, 1, 2, 3).
- Valid JSON-style syntax: double quotes, no trailing commas, no unescaped quotes inside strings.

## Language (European Portuguese)

- PT-PT, post-1990 spelling (Acordo Ortográfico): "ação", "direção", "deem", "facto", "utente", "equipa", "ecrã".
- Decimal comma: 9,8 m/s², 0,15 m, 82,75 N. Never 9.8.
- Physics symbols keep their case: m, g, F, P, N, b, M, p. Never capitalise the first letter of a formula ("G = 9,8" is wrong: G is the universal gravitational constant).
- Units: N, kg, m, s, Pa, N·m. Forces always in N, never "quilos" or "kg". Say "carga de 15 kg", not "peso de 15 kg".
- Use g = 9,8 m/s² (course convention).
- Round results consistently (e.g. 20/1,2 = 16,7, not 16,6).

## Scientific rules (errors already found in this bank; do not repeat them)

- Inclined plane: P_n and P_t are the weight components **perpendicular** and **parallel to the plane**, not "vertical/horizontal". N = P·cos θ, P_t = P·sin θ. A body only slides if P_t exceeds maximum static friction.
- Friction: it is the **maximum** static friction (μe) that is greater than kinetic friction. Static friction adjusts to the applied force and can be smaller than kinetic friction. Wheeled stretchers/wheelchairs mostly involve rolling resistance and inertia, so for static vs kinetic friction use sliding examples (patient on a sheet, a box).
- Fr = 0 does not rule out rotation (a couple/binário has Fr = 0 and M ≠ 0). Full equilibrium needs Fr = 0 **and** Mr = 0.
- Newton's 1st law: "a menos que atue uma força resultante não nula"; a moving body keeps **MRU**.
- Weight acts on the body and is exerted by the Earth. The force on the mattress is the patient's contact force (the reaction to N). N and P are not an action–reaction pair.
- Third law equalises **forces**, not pressures (contact areas differ).
- A load held away from the trunk creates a **flexor** moment on the lumbar spine; the extensor muscles balance it.
- Impact force depends on the **body's** deceleration during impact (very short), not on the vehicle's braking deceleration.
- Interface pressure (skin–mattress) ≠ capillary blood pressure. Say "pressão de interface sobre o sacro".
- Standing posture is stabilised by muscles (inverted pendulum); avoid calling it "equilíbrio estável" in the strict sense. Prefer "maior margem de estabilidade".
- Point of application belongs to forces (bound vectors), not to every vector. Call them "elementos", not "componentes".
- Keep notation consistent within a question (b_E or d_E, not both; F_R, not F_r).
- Tiptoe (heel raise) is a contested lever example: Achilles tension is ~2–2,5 × body weight (single leg). Never claim it needs "little effort".

## Distractor quality

- Distractors must be **plausible misconceptions** students actually have (wrong formula inversion, mass vs weight, force vs pressure, wrong lever class, sign errors), not absurdities ("telepatia", "levitação", "plasticina", "olhos vendados").
- The correct option must NOT systematically be the longest one. Keep the 4 options similar in length and structure. (In topic1 the correct answer was the longest 72 % of the time; avoid this.)
- Avoid "sempre", "nunca", "exclusivamente" unless physically exact.
- For numeric items, each distractor should come from a specific, named calculation error (e.g. "dividir em vez de multiplicar", "esquecer g", "cm em vez de m").
- One unambiguous correct answer. The stem must contain every value an option relies on.

## Question content

- Test understanding and application of physics, not memorisation of slide wording ("destacada com ponto de exclamação", "rotulados na imagem").
- Prefer short clinical scenarios with numbers that a 1st-year student can solve by hand.

## nursingApplication

- One sentence, concrete and realistic: a specific clinical situation, device or procedure.
- No exaggerations or invented norms ("protocolo internacional obrigatório", "previne hérnias discais", "drasticamente").
- Follow current guidance. Example: repositioning frequency is individualised (EPUAP/NPIAP 2019), not a fixed "2 em 2 horas".
- Do not write generic filler ("Consolida a tabela…", "Resolução rigorosa do exercício…").

## Validation (run after each batch)

```bash
python3 -I - js/data/topic1.js <<'EOF'
import json, re, sys
s = open(sys.argv[1], encoding="utf8").read()
Q = json.loads(s[s.index("["):s.rindex("]")+1])
ids = [q["id"] for q in Q]
assert len(ids) == len(set(ids)), "duplicate ids"
dist = [0]*4; longest = 0
for q in Q:
    assert len(q["options"]) == 4 and len(q["distractorAnalysis"]) == 3, q["id"]
    assert all(d.startswith("Está incorreta:") for d in q["distractorAnalysis"]), q["id"]
    dist[q["correctIndex"]] += 1
    L = [len(o) for o in q["options"]]
    longest += L[q["correctIndex"]] == max(L)
    if re.search(r"\d\.\d", json.dumps(q, ensure_ascii=False)): print("decimal point:", q["id"])
print(f"{len(Q)} questions, correctIndex {dist}, correct=longest {longest/max(len(Q),1):.0%}")
EOF
```

Change the path for other topics. If the file does not parse as JSON (e.g. trailing commas), fix the syntax first.

## Review before finishing

For every new question, check: (1) the marked answer is correct; (2) no other option is also correct; (3) formulas, units, numbers and signs in the explanation and distractor analysis are right; (4) the nursing application is plausible.
