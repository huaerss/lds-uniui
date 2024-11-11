<template>
  <view class="container">
    <view class="page-body">
      <view class="wrapper">
        <view
          class="toolbar"
          @tap="format"
          style="height: 120px; overflow-y: auto"
        >
          <view
            :class="formats.bold ? 'ql-active' : ''"
            class="iconfont icon-zitijiacu"
            data-name="bold"
          ></view>
          <view
            :class="formats.italic ? 'ql-active' : ''"
            class="iconfont icon-zitixieti"
            data-name="italic"
          ></view>
          <view
            :class="formats.underline ? 'ql-active' : ''"
            class="iconfont icon-zitixiahuaxian"
            data-name="underline"
          ></view>
          <view
            :class="formats.strike ? 'ql-active' : ''"
            class="iconfont icon-zitishanchuxian"
            data-name="strike"
          ></view>
          <view
            :class="formats.align === 'left' ? 'ql-active' : ''"
            class="iconfont icon-zuoduiqi"
            data-name="align"
            data-value="left"
          ></view>
          <view
            :class="formats.align === 'center' ? 'ql-active' : ''"
            class="iconfont icon-juzhongduiqi"
            data-name="align"
            data-value="center"
          ></view>
          <view
            :class="formats.align === 'right' ? 'ql-active' : ''"
            class="iconfont icon-youduiqi"
            data-name="align"
            data-value="right"
          ></view>
          <view
            :class="formats.align === 'justify' ? 'ql-active' : ''"
            class="iconfont icon-zuoyouduiqi"
            data-name="align"
            data-value="justify"
          ></view>
          <view
            :class="formats.lineHeight ? 'ql-active' : ''"
            class="iconfont icon-line-height"
            data-name="lineHeight"
            data-value="2"
          ></view>
          <view
            :class="formats.letterSpacing ? 'ql-active' : ''"
            class="iconfont icon-Character-Spacing"
            data-name="letterSpacing"
            data-value="2em"
          ></view>
          <view
            :class="formats.marginTop ? 'ql-active' : ''"
            class="iconfont icon-722bianjiqi_duanqianju"
            data-name="marginTop"
            data-value="20px"
          ></view>
          <view
            :class="formats.previewarginBottom ? 'ql-active' : ''"
            class="iconfont icon-723bianjiqi_duanhouju"
            data-name="marginBottom"
            data-value="20px"
          ></view>
          <view class="iconfont icon-clearedformat" @tap="removeFormat"></view>
          <view
            :class="formats.fontFamily ? 'ql-active' : ''"
            class="iconfont icon-font"
            data-name="fontFamily"
            data-value="Pacifico"
          ></view>
          <view
            :class="formats.fontSize === '24px' ? 'ql-active' : ''"
            class="iconfont icon-fontsize"
            data-name="fontSize"
            data-value="24px"
          ></view>

          <view
            :class="formats.color === '#0000ff' ? 'ql-active' : ''"
            class="iconfont icon-text_color"
            data-name="color"
            data-value="#0000ff"
          ></view>
          <view
            :class="formats.backgroundColor === '#00ff00' ? 'ql-active' : ''"
            class="iconfont icon-fontbgcolor"
            data-name="backgroundColor"
            data-value="#00ff00"
          ></view>

          <view class="iconfont icon-date" @tap="insertDate"></view>
          <view
            class="iconfont icon--checklist"
            data-name="list"
            data-value="check"
          ></view>
          <view
            :class="formats.list === 'ordered' ? 'ql-active' : ''"
            class="iconfont icon-youxupailie"
            data-name="list"
            data-value="ordered"
          ></view>
          <view
            :class="formats.list === 'bullet' ? 'ql-active' : ''"
            class="iconfont icon-wuxupailie"
            data-name="list"
            data-value="bullet"
          ></view>
          <view class="iconfont icon-undo" @tap="undo"></view>
          <view class="iconfont icon-redo" @tap="redo"></view>

          <view
            class="iconfont icon-outdent"
            data-name="indent"
            data-value="-1"
          ></view>
          <view
            class="iconfont icon-indent"
            data-name="indent"
            data-value="+1"
          ></view>
          <view class="iconfont icon-fengexian" @tap="insertDivider"></view>
          <view class="iconfont icon-charutupian" @tap="insertImage"></view>
          <view
            :class="formats.header === 1 ? 'ql-active' : ''"
            class="iconfont icon-format-header-1"
            data-name="header"
            :data-value="1"
          ></view>
          <view
            :class="formats.script === 'sub' ? 'ql-active' : ''"
            class="iconfont icon-zitixiabiao"
            data-name="script"
            data-value="sub"
          ></view>
          <view
            :class="formats.script === 'super' ? 'ql-active' : ''"
            class="iconfont icon-zitishangbiao"
            data-name="script"
            data-value="super"
          ></view>
          <view class="iconfont icon-shanchu" @tap="clear"></view>
          <view
            :class="formats.direction === 'rtl' ? 'ql-active' : ''"
            class="iconfont icon-direction-rtl"
            data-name="direction"
            data-value="rtl"
          ></view>
        </view>
        <view class="editor-wrapper">
          <editor
            id="editor"
            class="ql-container"
            :placeholder="placeholder"
            @statuschange="onStatusChange"
            :show-img-resize="true"
            @ready="onEditorReady"
            @input="onInput"
            
          ></editor>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
const thisInstance = getCurrentInstance()

const insertDivider = () => {
  editorCtx.value?.insertDivider({
    success: function () {
      console.log(' 插入分隔符成功')
    },
  })
}
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  serverUrl: {
    type: String,
    default: '',
  },
})

const insertDate = () => {
  const date = new Date()
  const formatDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`
  editorCtx.value?.insertText({
    text: formatDate,
  })
}
const undo = () => {
  editorCtx.value?.undo()
}
const redo = () => {
  editorCtx.value?.redo()
}

const emit = defineEmits(['update:modelValue'])

const editorCtx = ref<any>(null)
const formats = ref<any>({})

// 编辑器初始化完成时
const onEditorReady = () => {
  // 编辑器准备就绪后再获取上下文
  uni
    .createSelectorQuery()
    .in(thisInstance) // 指定组件实例
    .select('#editor')
    .context((res: any) => {
      if (res && res.context) {
        editorCtx.value = res.context
        // 如果有初始值，设置内容
        if (props.modelValue) {
          editorCtx.value.setContents({
            html: props.modelValue,
          })
        }
      }
    })
    .exec()
}

// 内容变化时
const onInput = (e: any) => {
  const html = e.detail.html
  emit('update:modelValue', html)
}

// 格式变化时
const onStatusChange = (e: any) => {
  formats.value = e.detail
}

// 设置格式
const format = (e: any) => {
  const { name, value } = e.target.dataset
  if (!name) return
  editorCtx.value?.format(name, value)
}

// 移除格式
const removeFormat = () => {
  editorCtx.value?.removeFormat()
}

// 清空内容
const clear = () => {
  editorCtx.value?.clear()
}

// 插入图片
const insertImage = () => {
  uni.chooseImage({
    count: 1,
    success: (res: any) => {
      editorCtx.value?.insertImage({
        src: res.tempFilePaths[0],
        width: '100%',
      })
    },
  })
}


</script>

<style lang="scss">
@import './editor-icon.css';
.container {
  padding: 10px;
}

.wrapper {
  background: #fff;
  border-radius: 4px;
}

.toolbar {
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.ql-container {
  box-sizing: border-box;
  padding: 12px;
  width: 100%;
  min-height: 300px;
  height: auto;
  background: #fff;
  font-size: 16px;
  line-height: 1.5;
}

.editor-wrapper {
  padding: 12px;
}

.iconfont {
  display: inline-block;
  width: 30px;
  height: 30px;
  cursor: pointer;
  text-align: center;
  line-height: 30px;
  border-radius: 4px;
}

.iconfont:hover {
  background: #f5f5f5;
}

.ql-active {
  color: #06c;
  background: #e6f2ff;
}
</style>
