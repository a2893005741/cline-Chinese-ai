# Cline

<div align="center">
<table>
<tbody>
<td align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev" target="_blank"><strong>在 VS Marketplace 下载</strong></a>
</td>
<td align="center">
<a href="https://discord.gg/cline" target="_blank"><strong>Discord</strong></a>
</td>
<td align="center">
<a href="https://www.reddit.com/r/cline/" target="_blank"><strong>r/cline</strong></a>
</td>
<td align="center">
<a href="https://github.com/cline/cline/discussions/categories/feature-requests?discussions_q=is%3Aopen+category%3A%22Feature+Requests%22+sort%3Atop" target="_blank"><strong>功能请求</strong></a>
</td>
<td align="center">
<a href="https://docs.cline.bot/getting-started/for-new-coders" target="_blank"><strong>新手上路</strong></a>
</td>
</tbody>
</table>
</div>

认识 Cline，一个可以使用您的 **CLI** 和**编辑器**（**E**ditor）的 AI 助手。

得益于 [Claude Sonnet 的智能编码能力](https://www.anthropic.com/claude/sonnet)，Cline 可以逐步处理复杂的软件开发任务。借助允许他创建和编辑文件、探索大型项目、使用浏览器以及执行终端命令（在您授予权限后）的工具，他可以以超越代码补全或技术支持的方式为您提供帮助。Cline 甚至可以使用模型上下文协议 (MCP) 创建新工具并扩展自己的能力。虽然自主 AI 脚本传统上在沙盒环境中运行，但此扩展提供了一个人机协作的 GUI，用于批准每个文件更改和终端命令，提供了一种安全且易于访问的方式来探索智能 AI 的潜力。

1. 输入您的任务并添加图像，将原型转换为功能性应用程序，或通过截图修复错误。
2. Cline 首先分析您的文件结构和源代码 AST，运行正则搜索，并读取相关文件，以便在现有项目中快速上手。通过仔细管理添加到上下文中的信息，Cline 可以为大型复杂项目提供有价值的帮助，而不会压垮上下文窗口。
3. 一旦 Cline 获得所需信息，他可以：
    - 创建和编辑文件，同时监控 linter/编译器错误，让他能够主动修复缺少导入和语法错误等问题。
    - 直接在您的终端中执行命令并在工作时监控其输出，例如在编辑文件后对开发服务器问题做出反应。
    - 对于 Web 开发任务，Cline 可以在无头浏览器中启动网站，点击、输入、滚动并捕获截图和控制台日志，从而修复运行时错误和视觉缺陷。
4. 当任务完成时，Cline 会向您展示结果，附带一个终端命令，如 `open -a "Google Chrome" index.html`，您只需点击按钮即可运行。

> [!TIP]
> 按照[此指南](https://docs.cline.bot/features/customization/opening-cline-in-sidebar)在编辑器右侧打开 Cline。这让您可以将 Cline 与文件浏览器并排使用，并更清晰地看到他如何更改您的工作区。

---

<img align="right" width="340" src="https://github.com/user-attachments/assets/3cf21e04-7ce9-4d22-a7b9-ba2c595e88a4">

### 使用任何 API 和模型

Cline 支持 OpenRouter、Anthropic、OpenAI、Google Gemini、AWS Bedrock、Azure、GCP Vertex、Cerebras 和 Groq 等 API 提供商。您也可以配置任何兼容 OpenAI 的 API，或通过 LM Studio/Ollama 使用本地模型。如果您使用 OpenRouter，扩展会获取其最新模型列表，让您可以在新模型可用时立即使用。

扩展还会跟踪整个任务循环和单个请求的总 token 数和 API 使用成本，让您随时了解每一步的支出。

<!-- 透明像素，用于在浮动图像后创建换行 -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="left" width="370" src="https://github.com/user-attachments/assets/81be79a8-1fdb-4028-9129-5fe055e01e76">

### 在终端中运行命令

得益于 [VSCode v1.93 中的新 Shell 集成更新](https://code.visualstudio.com/updates/v1_93#_terminal-shell-integration-api)，Cline 可以直接在您的终端中执行命令并接收输出。这使他能够执行各种任务，从安装软件包和运行构建脚本到部署应用程序、管理数据库和执行测试，同时适应您的开发环境和工具链以完成工作。

对于长时间运行的进程（如开发服务器），使用"继续运行"按钮让 Cline 在命令在后台运行时继续处理任务。随着 Cline 的工作，他会收到任何新终端输出的通知，让他能够对可能出现的问题做出反应，例如编辑文件时的编译时错误。

<!-- 透明像素，用于在浮动图像后创建换行 -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="right" width="400" src="https://github.com/user-attachments/assets/c5977833-d9b8-491e-90f9-05f9cd38c588">

### 创建和编辑文件

Cline 可以直接在您的编辑器中创建和编辑文件，向您展示更改的差异视图。您可以直接在差异视图编辑器中编辑或恢复 Cline 的更改，或在聊天中提供反馈，直到您对结果满意为止。Cline 还监控 linter/编译器错误（缺少导入、语法错误等），以便他能够自行修复沿途出现的问题。

Cline 所做的所有更改都记录在文件的时间线中，提供了一种在需要时轻松跟踪和恢复修改的方式。

<!-- 透明像素，用于在浮动图像后创建换行 -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="left" width="370" src="https://github.com/user-attachments/assets/bc2e85ba-dfeb-4fe6-9942-7cfc4703cbe5">

### 使用浏览器

借助 Claude Sonnet 的新[电脑使用](https://www.anthropic.com/news/3-5-models-and-computer-use)功能，Cline 可以启动浏览器、点击元素、输入文本和滚动，在每一步捕获截图和控制台日志。这允许交互式调试、端到端测试，甚至一般的网络使用！这赋予了他修复视觉错误和运行时问题的自主权，而无需您手把手指导和自行复制粘贴错误日志。

尝试让 Cline "测试应用"，看他运行 `npm run dev` 等命令，在浏览器中启动您本地运行的开发服务器，并执行一系列测试以确认一切正常。[在此查看演示。](https://x.com/sdrzn/status/1850880547825823989)

<!-- 透明像素，用于在浮动图像后创建换行 -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="right" width="350" src="https://github.com/user-attachments/assets/ac0efa14-5c1f-4c26-a42d-9d7c56f5fadd">

### "添加一个工具..."

得益于[模型上下文协议](https://github.com/modelcontextprotocol)，Cline 可以通过自定义工具扩展他的能力。虽然您可以使用[社区制作的服务器](https://github.com/modelcontextprotocol/servers)，但 Cline 可以创建和安装专为您特定工作流程量身定制的工具。只需让 Cline "添加一个工具"，他将处理一切，从创建新的 MCP 服务器到将其安装到扩展中。这些自定义工具随后成为 Cline 工具包的一部分，可在未来任务中随时使用。

-   "添加一个获取 Jira 工单的工具"：检索工单验收条件并让 Cline 投入工作
-   "添加一个管理 AWS EC2 的工具"：检查服务器指标并扩展或缩减实例
-   "添加一个获取最新 PagerDuty 事件的工具"：获取详情并让 Cline 修复错误

<!-- 透明像素，用于在浮动图像后创建换行 -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="left" width="360" src="https://github.com/user-attachments/assets/7fdf41e6-281a-4b4b-ac19-020b838b6970">

### 添加上下文

**`@url`：** 粘贴 URL，扩展将获取并转换为 Markdown，当您想给 Cline 提供最新文档时非常有用

**`@problems`：** 添加工作区错误和警告（"问题"面板）供 Cline 修复

**`@file`：** 添加文件内容，这样您就不必浪费 API 请求来批准读取文件（+ 输入可搜索文件）

**`@folder`：** 一次添加文件夹中的所有文件，进一步加快您的工作流程

<!-- 透明像素，用于在浮动图像后创建换行 -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="right" width="350" src="https://github.com/user-attachments/assets/140c8606-d3bf-41b9-9a1f-4dbf0d4c90cb">

### 检查点：比较和恢复

当 Cline 处理任务时，扩展会在每一步拍摄您工作区的快照。您可以使用"比较"按钮查看快照与当前工作区之间的差异，使用"恢复"按钮回滚到该点。

例如，在使用本地 Web 服务器时，您可以使用"仅恢复工作区"快速测试应用的不同版本，然后在找到想要继续构建的版本时使用"恢复任务和工作区"。这让您可以安全地探索不同的方法，而不会丢失进度。

<!-- 透明像素，用于在浮动图像后创建换行 -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

## 贡献

要为项目做出贡献，请从我们的[贡献指南](https://github.com/cline/cline/blob/HEAD/CONTRIBUTING.md)开始了解基础知识。您也可以加入我们的 [Discord](https://discord.gg/cline)，在 `#contributors` 频道与其他贡献者交流。如果您在寻找全职工作，请查看我们[招聘页面](https://cline.bot/join-us)上的空缺职位！

## 企业版

获得相同的 Cline 体验，配备企业级控制：SSO（SAML/OIDC）、全局策略和配置、带审计跟踪的可观察性、私有网络（VPC/私有链接）、自托管或本地部署，以及企业支持。在我们的[企业页面](https://cline.bot/enterprise)了解更多，或[联系我们](https://cline.bot/contact-sales)。

## 许可证

[Apache 2.0 © 2026 Cline Bot Inc.](https://github.com/cline/cline/blob/HEAD/LICENSE)
