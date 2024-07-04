/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-07-03 15:49:20
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-07-04 09:49:12
 * @FilePath: \antd-demo-vite\src\serives\mock.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Mock from "mockjs";

export const listData = Mock.mock({
  status: 200,
  "data|20": [
    {
      name: "@cname",
      "age|10-20": 1,
      "score|1-100": 100,
      "grade|1": ["一班", "二班", "三班"],
      "sex|1": ["男", "女"],
      address: "@county(true)",
      updateTime: "@datetime",
      id: "@id",
    },
  ],
});
