# Portfolio

Quick start: [https://ejhgdxq3p.github.io/Portfolio](https://ejhgdxq3p.github.io/Portfolio)

## 自动部署设置

项目已配置 GitHub Actions 自动部署。当您 push 代码到 `main` 分支时，会自动构建并部署到 GitHub Pages。

### 首次设置步骤：

1. 进入 GitHub 仓库设置：`Settings` → `Pages`
2. 在 **Source** 部分，选择 `GitHub Actions`（而不是 "Deploy from a branch"）
3. 保存设置

### 之后的工作流程：

- ✅ 修改代码并 commit
- ✅ Push 到 `main` 分支
- ✅ GitHub Actions 会自动运行构建和部署
- ✅ 等待 1-2 分钟后，网站自动更新

### 手动部署（如果需要）：

```bash
npm run deploy
```

### 查看部署状态：

在 GitHub 仓库的 `Actions` 标签页可以查看部署进度和日志。

**是加粗还是斜体**