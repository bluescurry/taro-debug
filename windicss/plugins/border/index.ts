import plugin from 'windicss/plugin';

const generateStyles = (className: string) => {
  const matchRes = `${className}-`.match(/(?<=-).+?(?=-)/g) || [];

  const styles = {
    borderColor: '#fff',
    borderWidth: '2px',
    borderRadius: '0',
    zIndex: 'auto',
    opacity: '1',
  };

  matchRes.forEach((item) => {
    const fir = item.charAt(0);
    const val = item.substr(1, item.length);

    switch (fir) {
      case 'c':
        styles.borderColor = `#${val}`;
        break;
      case 'w':
        styles.borderWidth = `${+val * 2}px`;
        break;
      case 'r':
        styles.borderRadius = `${+val * 2}px`;
        break;
      case 'z':
        styles.zIndex = val;
        break;
      case 'o':
        styles.opacity = `0.${val}`;
        break;
    }
  });

  return styles;
};

module.exports = plugin(function ({ addDynamic }) {
  /** 全边框 */
  addDynamic(
    'border-all',
    ({ Utility, Style }) => {
      const { borderColor, borderWidth, borderRadius, zIndex, opacity } = generateStyles(
        Utility.raw.replace('border-all', ''),
      );

      return Style.generate(Utility.class, {
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '200%',
          height: '200%',
          transform: 'scale(0.5)',
          transformOrigin: 'left top',
          boxSizing: 'border-box',
          pointerEvents: 'none',
          zIndex,
          opacity,
          border: `${borderWidth} solid ${borderColor}`,
          borderRadius: `${borderRadius}`,
        },
      });
    },
    {
      group: 'border-all',
      completions: ['border-all-c-w-r-z-o'],
      // 自定义 className
      respectSelector: true,
    },
  );

  /** 上/下边框 */
  ['top', 'bottom', 'left', 'right'].forEach((item) => {
    const name = `border-${item}`;

    addDynamic(
      name,
      ({ Utility, Style }) => {
        const { borderColor, borderWidth, zIndex, opacity } = generateStyles(Utility.raw.replace(name, ''));

        return Style.generate(Utility.class, {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            transform: 'scaleY(0.5)',
            transformOrigin: '0, 0',
            pointerEvents: 'none',
            zIndex,
            opacity,
            background: borderColor,
            [item]: '0',
            ...(['top', 'bottom'].includes(item)
              ? {
                  left: '0',
                  right: '0',
                  height: borderWidth,
                }
              : {
                  top: '0',
                  bottom: '0',
                  width: borderWidth,
                }),
          },
        });
      },
      {
        group: name,
        completions: [`${name}-c-w-z-o`],
        // 自定义 className
        respectSelector: true,
      },
    );
  });
});
