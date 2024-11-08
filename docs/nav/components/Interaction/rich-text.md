<frame />

# Rich Text 富文本编辑器

## 基本用法

基础富文本编辑器。

```html
<lds-editor v-model="content" placeholder="请输入内容..." />
```

## 自定义占位符

通过 `placeholder` 属性设置编辑器的占位文本。

```html
<lds-editor v-model="content" placeholder="请输入您想要编辑的内容..." />
```

## 文本格式化

支持多种文本格式化功能：

```html
<!-- 基础文本格式 -->
<lds-editor v-model="content">
  <!-- 工具栏会自动显示以下功能：
    - 加粗
    - 斜体
    - 下划线
    - 删除线
    - 对齐方式
    等
  -->
</lds-editor>
```

## 插入元素

支持插入多种元素：

```html
<lds-editor v-model="content">
  <!-- 可以插入：
    - 图片
    - 日期
    - 分隔符
    等
  -->
</lds-editor>
```

## 历史记录

支持撤销和重做操作：

```html
<lds-editor v-model="content">
  <!-- 工具栏包含：
    - 撤销按钮
    - 重做按钮
  -->
</lds-editor>
```

## Attributes

| 参数          | 说明       | 类型   | 可选值 | 默认值          | 最低版本 |
| ------------- | ---------- | ------ | ------ | --------------- | -------- |
| value/v-model | 编辑器内容 | string | -      | -               | -        |
| placeholder   | 占位符文本 | string | -      | '请输入内容...' | -        |

## Events

| 事件名称     | 说明           | 参数                      | 最低版本 |
| ------------ | -------------- | ------------------------- | -------- |
| update:value | 内容变化时触发 | `(value: string) => void` | -        |

## Methods

| 方法名        | 说明         | 参数 | 返回值 |
| ------------- | ------------ | ---- | ------ |
| insertDivider | 插入分隔符   | -    | -      |
| insertDate    | 插入当前日期 | -    | -      |
| undo          | 撤销操作     | -    | -      |
| redo          | 重做操作     | -    | -      |
| removeFormat  | 清除格式     | -    | -      |
| clear         | 清空内容     | -    | -      |
| insertImage   | 插入图片     | -    | -      |

## 外部样式类

| 类名         | 说明       | 最低版本 |
| ------------ | ---------- | -------- |
| custom-class | 根节点样式 | -        |

## 注意事项

1. 编辑器基于 Vue 3 开发，需要在支持 Vue 3 的环境中使用
2. 图片上传功能需要配合 uni-app 环境使用
3. 建议在表单场景下使用该组件
