/*
 * @Author: BluesCurry
 * @Date: 2022-07-23 11:35:50
 * @LastEditors: BluesCurry
 * @LastEditTime: 2022-07-27 19:38:44
 * @Description: 自定义颜色插件
 */
import plugin from 'windicss/plugin';

/** 颜色 hex 转 rgba */
function hexToRgb(color: string, opacity: number) {
  let sColor = color.toLowerCase();
  //十六进制颜色值的正则表达式
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = '#';
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    const sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)));
    }
    return `rgba(${sColorChange.join(', ')}, ${opacity / 100})`;
  }
  return sColor;
}

const generateStyles = (className: string) => {
  const matchRes = `${className}-`.match(/(?<=-).+?(?=-)/g) || [];
  const [color = '', opacity = '100'] = matchRes;

  return { color: hexToRgb(`#${color}`, +opacity) };
};

module.exports = plugin(function ({ addDynamic }) {
  /** 文字颜色 */
  const COLOR = 'color';
  addDynamic(
    COLOR,
    ({ Utility, Style }) => {
      const { color } = generateStyles(Utility.raw.replace(COLOR, ''));

      return Style.generate(Utility.class, {
        color,
      });
    },
    {
      group: COLOR,
      completions: [`${COLOR}-hex`],
      // 自定义 className
      respectSelector: true,
    },
  );

  /** 背景颜色 */
  const BACKGROUND_COLOR = 'bgc';
  addDynamic(
    BACKGROUND_COLOR,
    ({ Utility, Style }) => {
      const { color } = generateStyles(Utility.raw.replace(BACKGROUND_COLOR, ''));

      return Style.generate(Utility.class, {
        backgroundColor: color,
      });
    },
    {
      group: BACKGROUND_COLOR,
      completions: [`${BACKGROUND_COLOR}-hex`],
      // 自定义 className
      respectSelector: true,
    },
  );
});
