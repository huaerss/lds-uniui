<frame />

# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type` 属性来定义按钮的样式。

```html
<lds-button type="default">无元素按钮</lds-button>
<lds-button >主要按钮</lds-button>
<lds-button type="success">成功按钮</lds-button>
<lds-button type="warning">警告按钮</lds-button>
<lds-button type="danger">危险按钮</lds-button>
```

## 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```html
<lds-button plain type="default">无元素朴素按钮</lds-button>
<lds-button  plain>主要朴素按钮</lds-button>
<lds-button type="success" plain>成功朴素按钮</lds-button>
```

## 圆角按钮

通过 `round` 属性将按钮设置为圆角按钮。

```html
<lds-button round>圆角按钮</lds-button>
<lds-button  round>主要按钮</lds-button>
<lds-button type="success" round>成功按钮</lds-button>
```

## 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```html
<lds-button disabled>禁用按钮</lds-button>
<lds-button  disabled>禁用按钮</lds-button>
<lds-button type="success" disabled>禁用按钮</lds-button>
```

## 加载状态

通过 `loading` 属性设置按钮为加载状态，加载状态下按钮不可点击。

```html
<lds-button loading>加载中</lds-button>
<lds-button  loading>加载中</lds-button>
```

## 按钮尺寸

通过 `size` 属性设置按钮的大小。

```html
<lds-button size="mini" >小型按钮</lds-button>
<lds-button size="small" >中型按钮</lds-button>
<lds-button >正常按钮</lds-button>
<lds-button size="large" >大型按钮</lds-button>
```p

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| type | 按钮类型 | string | default / primary / success / warning / danger | default |
| size | 按钮尺寸 | string | mini / small / normal / large | normal |
| plain | 是否朴素按钮 | boolean | - | false |
| round | 是否圆角按钮 | boolean | - | false |
| disabled | 是否禁用 | boolean | - | false |
| loading | 是否加载中 | boolean | - | false |

### Events

| 事件名称 | 说明 | 回调参数 |
|---------|------|---------|
| click | 点击按钮时触发 | event: Event |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式：

```css
.lds-button {
  --button-height: 40px;
  --button-font-size: 14px;
  --button-border-radius: 4px;
  --button-padding: 0 15px;
  
  --button-default-color: #606266;
  --button-default-background: #fff;
  --button-default-border: #dcdfe6;
  
  --button-primary-color: #fff;
  --button-primary-background: #409eff;
  --button-primary-border: #409eff;
  
  --button-success-color: #fff;
  --button-success-background: #67c23a;
  --button-success-border: #67c23a;
  
  --button-warning-color: #fff;
  --button-warning-background: #e6a23c;
  --button-warning-border: #e6a23c;
  
  --button-danger-color: #fff;
  --button-danger-background: #f56c6c;
  --button-danger-border: #f56c6c;
}
```
