<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger'
type ButtonSize = 'large' | 'medium' | 'small' | 'mini'

interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  icon?: string
  disabled?: boolean
  loading?: boolean
  round?: boolean
  plain?: boolean
}

// 删除重复的 defineProps，只保留 withDefaults
const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'medium',
  icon: '',
  disabled: false,
  loading: false,
  round: false,
  plain: false
})

const emit = defineEmits<{
  (e: 'click', evt: MouseEvent): void
}>()

const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}
</script>
