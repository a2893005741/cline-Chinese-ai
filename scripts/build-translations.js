#!/usr/bin/env node
// 从汉化源文件提取翻译内容，生成 translations-zh-CN.json
const fs = require("fs")
const path = require("path")

const srcBase = "I:/新建文件夹/saoudrizwan.claude-dev-3.83.0/extension"

function readSrc(relPath) {
	return fs.readFileSync(path.join(srcBase, relPath), "utf8")
}

const data = {
	package: {
		displayName: "Cline",
		description:
			"自主编码助手，可在您的 IDE 中创建/编辑文件、运行命令、使用浏览器等，每一步都需要您的许可。",
		commands: [
			{ id: "cline.plusButtonClicked", title: "新任务" },
			{ id: "cline.mcpButtonClicked", title: "MCP 服务器" },
			{ id: "cline.historyButtonClicked", title: "历史记录" },
			{ id: "cline.accountButtonClicked", title: "账户" },
			{ id: "cline.settingsButtonClicked", title: "设置" },
			{ id: "cline.dev.createTestTasks", title: "创建测试任务" },
			{
				id: "cline.dev.expireMcpOAuthTokens",
				title: "使 MCP OAuth 令牌过期（用于测试）",
			},
			{ id: "cline.addToChat", title: "添加到 Cline" },
			{ id: "cline.addTerminalOutputToChat", title: "添加到 Cline" },
			{ id: "cline.focusChatInput", title: "跳转到聊天输入" },
			{
				id: "cline.generateGitCommitMessage",
				title: "使用 Cline 生成提交消息",
			},
			{
				id: "cline.abortGitCommitMessage",
				title: "使用 Cline 生成提交消息 - 停止",
			},
			{ id: "cline.explainCode", title: "使用 Cline 解释" },
			{ id: "cline.improveCode", title: "使用 Cline 改进" },
			{
				id: "cline.jupyterGenerateCell",
				title: "使用 Cline 生成 Jupyter 单元格",
			},
			{
				id: "cline.jupyterExplainCell",
				title: "使用 Cline 解释 Jupyter 单元格",
			},
			{
				id: "cline.jupyterImproveCell",
				title: "使用 Cline 改进 Jupyter 单元格",
			},
			{ id: "cline.openWalkthrough", title: "打开引导" },
			{ id: "cline.reconstructTaskHistory", title: "重建任务历史" },
			{ id: "cline.reviewComment.reply", title: "回复" },
			{ id: "cline.reviewComment.addToChat", title: "添加到 Cline 聊天" },
		],
		walkthrough: [
			{
				id: "ClineWalkthrough",
				title: "认识 Cline，您的新编码伙伴",
				description:
					"Cline 像开发者一样编码，因为它像开发者一样思考。以下是 5 种使用方式：",
				steps: [
					{
						id: "welcome",
						title: "从目标开始，而不仅仅是提示",
						description:
							"告诉 Cline 您想要实现什么。它会规划、询问，然后编码，像真正的伙伴一样。",
					},
					{
						id: "learn",
						title: "让 Cline 学习您的代码库",
						description:
							"将 Cline 指向您的项目。它会建立理解，做出智能的、上下文感知的更改。",
					},
					{
						id: "advanced-features",
						title: "始终使用最佳 AI 模型",
						description:
							"Cline 为您提供最先进的 AI，连接顶级模型（Anthropic、Gemini、OpenAI 等）。",
					},
					{
						id: "mcp",
						title: "使用强大工具扩展（MCP）",
						description: "连接到数据库、API，或在 MCP 市场中发现新功能。",
					},
					{
						id: "getting-started",
						title: "您始终掌控一切",
						description:
							"审查 Cline 的计划和差异。在更改发生之前批准。没有意外。",
					},
				],
			},
		],
		configuration: [
			{
				key: "Cline",
				title: "Cline",
				description: "配置项为空（properties: {}）",
			},
		],
	},
	walkthrough: {
		step1: readSrc("walkthrough/step1.md"),
		step2: readSrc("walkthrough/step2.md"),
		step3: readSrc("walkthrough/step3.md"),
		step4: readSrc("walkthrough/step4.md"),
		step5: readSrc("walkthrough/step5.md"),
	},
	readme: readSrc("readme.md"),
}

const outPath = path.join(__dirname, "../translations-zh-CN.json")
fs.writeFileSync(outPath, JSON.stringify(data, null, 2), "utf8")

// 统计
const cmds = data.package.commands.length
const steps = data.package.walkthrough[0].steps.length
const wt = Object.keys(data.walkthrough).length
const cfg = data.package.configuration.length
console.log("=== 翻译对照表生成完成 ===")
console.log(`commands 条数: ${cmds}`)
console.log(`walkthrough 步骤数: ${steps}`)
console.log(`walkthrough 文件数: ${wt}`)
console.log(`configuration 条数: ${cfg}`)
console.log(`输出文件: ${outPath}`)
