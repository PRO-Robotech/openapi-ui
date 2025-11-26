# 🤝 Contributing Guidelines

Thank you for contributing to **openapi-ui**.
This project has strict conventions to keep the codebase consistent, maintainable, and scalable.

Please read these rules carefully before opening a Pull Request.

---

## 📌 Branching Model

- **All new work MUST be submitted to the branch:**
  👉 `feature/dev`

- No direct commits to `main` or long-lived branches other than approved integration merges.

---

## 🧪 Pull Request Requirements

Your PR **must** satisfy the following before requesting review:

| Requirement                                    | Status         |
| ---------------------------------------------- | -------------- |
| Code style matches existing project patterns   | ✅ Required    |
| `npm run lint` passes                          | ✅ Required    |
| `npm run build` passes                         | ✅ Required    |
| No unused/commented code unless documented     | ❌ Not allowed |
| No unrelated refactors mixed with feature work | ❌ Not allowed |

If any of these fail, your PR will be **rejected without review**.

---

## 🧱 Code Style & Structure

This codebase has a defined architecture — **follow it.**

- Do **not** introduce new folder structures without prior approval.
- Do **not** reorganize global architecture in your PR.
- Keep naming, typing patterns, and formatting consistent.
- Avoid clever hacks — clarity > smartness.

> If you are unsure where something belongs, ask before coding.

---

## 🧼 Commit & PR Standards

- Use meaningful commit messages (imperative tone).
- Avoid large, mixed commits — keep changes logically grouped.
- PR title must summarize the purpose (not "fix", "update", or emoji spam).

Example PR title:

```
feat: add PodTerminal factory component with story and validation
```

---

## 🗑 What Will Get Your PR Rejected Instantly

- ❌ Failing build or lint
- ❌ Console.logs or debug code left behind
- ❌ Rewriting large parts of architecture without RFC
- ❌ Adding tech stack changes without approval
- ❌ Opinionated style rewrites (Prettier wars are already won)

---

## 🧭 Before Opening a PR Checklist

```txt
[ ] Code follows existing patterns & style
[ ] npm run lint passes
[ ] npm run build passes
[ ] No structural changes outside scope
[ ] PR title is clear, scoped, and meaningful
```

---

## 🗣 Reviews & Merging

- Reviewer may request structural changes — respond respectfully.
- Large changes may require a design review before merge.
- Final decision authority: maintainers.

---

## 🛡️ TL;DR

> **Be consistent, follow project norms, no cowboy refactoring, no broken builds.
> If you're adding a factory component, Storybook or it doesn't exist.**
