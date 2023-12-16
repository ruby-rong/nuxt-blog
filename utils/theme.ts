import { ThemeModel } from '@/types'

export class ThemeUtils {
  //private 关键字用于限制成员的访问权限
  //static 关键字用于定义静态成员，即属于类本身而不是类的实例
  private static THEME = 'theme'

  //设置主题
  static setTheme = (theme: ThemeModel) =>
    localStorage.setItem(this.THEME, theme)

  //获取主题
  static getTheme = () => localStorage.getItem(this.THEME)

  //清空主题
  static cleanTheme = () => localStorage.removeItem(this.THEME)

  //得到默认主题
  static getDefaultTheme = (): ThemeModel => {
    if (
      localStorage.theme === 'light' ||
      (!(ThemeUtils.THEME in localStorage) &&
        window.matchMedia('(prefers-color-scheme: light)').matches)
    ) {
      return ThemeModel.LIGHT
    }
    return ThemeModel.DARK
  }

  //修改主题
  static changeTheme = (theme: ThemeModel) => {
    ThemeUtils.setTheme(theme)
    console.log(theme)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}
