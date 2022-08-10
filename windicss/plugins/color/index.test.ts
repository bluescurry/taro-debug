/*
 * @Author: BluesCurry
 * @Date: 2022-07-23 11:48:09
 * @LastEditors: BluesCurry
 * @LastEditTime: 2022-07-27 19:39:13
 * @Description: 测试用例
 */
import { Processor } from 'windicss/lib';

const color = require('./');

describe('Color Plugin', () => {
  it('设置文字颜色', () => {
    const processor = new Processor();
    processor.loadPlugin(color);
    const result = processor.interpret('color-ddd');
    expect(result.ignored.length).toEqual(0);
    expect(result.styleSheet.build()).toEqual(`.color-ddd {
  color: rgba(221, 221, 221, 1);
}`);
  });

  it('设置文字颜色，带透明度', () => {
    const processor = new Processor();
    processor.loadPlugin(color);
    const result = processor.interpret('color-ddd-80');
    expect(result.ignored.length).toEqual(0);
    expect(result.styleSheet.build()).toEqual(`.color-ddd-80 {
  color: rgba(221, 221, 221, 0.8);
}`);
  });

  it('设置背景颜色', () => {
    const processor = new Processor();
    processor.loadPlugin(color);
    const result = processor.interpret('bgc-ddd');
    expect(result.ignored.length).toEqual(0);
    expect(result.styleSheet.build()).toEqual(`.bgc-ddd {
  background-color: rgba(221, 221, 221, 1);
}`);
  });

  it('设置背景颜色，带透明度', () => {
    const processor = new Processor();
    processor.loadPlugin(color);
    const result = processor.interpret('bgc-ddd-60');
    expect(result.ignored.length).toEqual(0);
    expect(result.styleSheet.build()).toEqual(`.bgc-ddd-60 {
  background-color: rgba(221, 221, 221, 0.6);
}`);
  });
});
