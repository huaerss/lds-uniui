import { ref } from 'vue'

const isDark = ref(false)

export function useTheme() {
    const toggleTheme = (dark: boolean) => {
        isDark.value = dark
        // 给 html 和 body 都添加暗黑类名
        document.documentElement.classList.toggle('uni-dark', isDark.value)
        document.body.classList.toggle('uni-dark', isDark.value)

        // 设置导航栏颜色
        if (isDark.value) {
            uni.setNavigationBarColor({
                frontColor: '#ffffff',
                backgroundColor: '#1a1a1a'  // 使用与主题一致的颜色
            })
            // 设置 tabBar 样式（如果有的话）
            uni.setTabBarStyle({
                backgroundColor: '#1a1a1a',
                borderStyle: 'black',
                color: '#8F8F8F',
                selectedColor: '#ffffff'
            })
        } else {
            uni.setNavigationBarColor({
                frontColor: '#000000',
                backgroundColor: '#ffffff'
            })
            // 设置 tabBar 样式（如果有的话）
            uni.setTabBarStyle({
                backgroundColor: '#ffffff',
                borderStyle: 'white',
                color: '#8F8F8F',
                selectedColor: '#2979ff'
            })
        }
    }

    // 监听主题变化
    const handleThemeChange = (event: MessageEvent) => {
        toggleTheme(event.data)
    }

    return {
        isDark,
        toggleTheme,
        handleThemeChange
    }
} 
