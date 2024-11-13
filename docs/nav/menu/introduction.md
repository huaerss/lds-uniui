# lds-uniui 介绍

<div class="gradient-header">
lds-uniui 是一个基于 <a href="https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html" style="color: #E1F5FE;">uni-ui</a> 二次开发的组件库，旨在提供更加丰富和易用的跨端组件解决方案。
</div>

## ✨ 特性

<div class="features">
  <div class="feature feature-primary">
    <h3>🚀 更丰富的组件</h3>
    <p>在 uni-ui 的基础上扩展了更多实用组件</p>
  </div>
  <div class="feature feature-success">
    <h3>💪 TypeScript 支持</h3>
    <p>使用 TypeScript 开发，提供完整的类型定义</p>
  </div>
  <div class="feature feature-warning">
    <h3>📱 多端兼容</h3>
    <p>支持各类小程序、H5 以及 App 端</p>
  </div>
  <div class="feature feature-danger">
    <h3>🎨 可定制主题</h3>
    <p>提供灵活的主题定制能力</p>
  </div>
  <div class="feature feature-info">
    <h3>📦 按需引入</h3>
    <p>支持按需引入组件，优化项目体积</p>
  </div>
  <div class="feature feature-purple">
    <h3>📝 完善文档</h3>
    <p>提供详细的使用文档和示例</p>
  </div>
</div>

## 🎯 为什么选择 lds-uniui？

<div class="advantages">
- <span class="text-primary">组件增强</span>: 对原有组件进行功能增强和 bug 修复

- <span class="text-success">新增组件</span>: 补充了更多实用的业务组件

- <span class="text-info">TypeScript</span>: 提供完整的类型支持，提升开发体验

- <span class="text-warning">更好的性能</span>: 优化了组件的性能表现

- <span class="text-danger">持续维护</span>: 提供长期的维护和支持
</div>

## 🎯 适用场景

<div class="content-box highlight-info">
- 需要快速开发 uni-app 项目的团队
- 需要 TypeScript 支持的项目
- 对组件库质量和维护有较高要求的项目
- 需要跨端开发的项目
</div>

## 📋 版本要求

<div class="content-box highlight-warning">
- <span class="version">Vue 3.0+</span>
- <span class="version">TypeScript 4.0+</span>
- <span class="version">uni-app 3.0+</span>
</div>

## 🤝 贡献指南

<div class="content-box highlight-success">
我们欢迎社区贡献，如果你发现了 bug 或有新的想法，可以：

1. 在 GitHub 上提交 <span class="badge danger">Issue</span>
2. 提交 <span class="badge success">Pull Request</span>
</div>

## 📄 开源协议

<div class="content-box highlight-purple">

lds-uniui 遵循 [MIT 协议](https://opensource.org/licenses/MIT)

</div>

<style>
:root {
  --primary-hue: 215;
  --success-hue: 150;
  --warning-hue: 38;
  --danger-hue: 350;
  --info-hue: 200;
  --purple-hue: 280;
}

.gradient-header {
  background: linear-gradient(120deg, 
    hsl(var(--primary-hue), 80%, 50%),
    hsl(var(--success-hue), 80%, 45%)
  );
  padding: 15px;
  border-radius: 8px;
  color: white;
  margin: 20px 0;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.feature {
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s;
  position: relative;
  overflow: hidden;
}

.feature::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  z-index: -1;
  transition: opacity 0.3s;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature:hover::before {
  opacity: 0.15;
}

.feature h3 {
  margin-top: 0;
  font-weight: 600;
}

.feature-primary::before { background: hsl(var(--primary-hue), 80%, 50%); }
.feature-success::before { background: hsl(var(--success-hue), 80%, 45%); }
.feature-warning::before { background: hsl(var(--warning-hue), 80%, 50%); }
.feature-danger::before { background: hsl(var(--danger-hue), 80%, 50%); }
.feature-info::before { background: hsl(var(--info-hue), 80%, 50%); }
.feature-purple::before { background: hsl(var(--purple-hue), 80%, 50%); }

.content-box {
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  position: relative;
  overflow: hidden;
}

.content-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  z-index: -1;
}

.highlight-primary::before { background: hsl(var(--primary-hue), 80%, 50%); }
.highlight-success::before { background: hsl(var(--success-hue), 80%, 45%); }
.highlight-warning::before { background: hsl(var(--warning-hue), 80%, 50%); }
.highlight-info::before { background: hsl(var(--info-hue), 80%, 50%); }
.highlight-purple::before { background: hsl(var(--purple-hue), 80%, 50%); }

.badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.9em;
  font-weight: 500;
  color: white;
}

.badge.primary { background: hsl(var(--primary-hue), 80%, 50%); }
.badge.success { background: hsl(var(--success-hue), 80%, 45%); }
.badge.warning { background: hsl(var(--warning-hue), 80%, 50%); }
.badge.danger { background: hsl(var(--danger-hue), 80%, 50%); }
.badge.info { background: hsl(var(--info-hue), 80%, 50%); }

.version {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 20px;
  color: var(--vp-c-brand);
  font-weight: 500;
}

/* 暗黑模式适配 */
.dark .feature::before,
.dark .content-box::before {
  opacity: 0.2;
}

.dark .feature:hover::before {
  opacity: 0.25;
}

.dark .badge {
  opacity: 0.9;
}

.advantages {
  padding: 20px 0;
}

.text-primary { color: hsl(var(--primary-hue), 80%, 50%); }
.text-success { color: hsl(var(--success-hue), 80%, 45%); }
.text-warning { color: hsl(var(--warning-hue), 80%, 50%); }
.text-danger { color: hsl(var(--danger-hue), 80%, 50%); }
.text-info { color: hsl(var(--info-hue), 80%, 50%); }

/* 暗黑模式下调整颜色亮度 */
.dark .text-primary { color: hsl(var(--primary-hue), 75%, 60%); }
.dark .text-success { color: hsl(var(--success-hue), 75%, 55%); }
.dark .text-warning { color: hsl(var(--warning-hue), 75%, 60%); }
.dark .text-danger { color: hsl(var(--danger-hue), 75%, 60%); }
.dark .text-info { color: hsl(var(--info-hue), 75%, 60%); }
</style>
