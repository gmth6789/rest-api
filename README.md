[![Build Status](https://travis-ci.org/ijry/initadmin.svg?branch=master)](https://travis-ci.org/ijry/initadmin)
![Downloads](https://img.shields.io/badge/downloads-1K-brightgreen.svg)
![License](https://img.shields.io/badge/license-Apache2-brightgreen.svg)
![builder](https://img.shields.io/badge/xybuilder-1.2.0-brightgreen.svg)
![cloudadmin](https://img.shields.io/badge/xyadmin-1.2.0-brightgreen.svg)
![RepoSize](https://img.shields.io/github/repo-size/ijry/initadmin.svg)
![Star](https://img.shields.io/github/stars/ijry/initadmin.svg?style=social)
[![Open in Visual Studio Code](https://img.shields.io/badge/-open%20in%20vscode-blue?style=for-the-badge&logo=visualstudiocode)](https://open.vscode.dev/ijry/uiadmin)


## 介绍
UiAdmin เป็นแบ็กเอนด์โอเพ่นซอร์สแบบก้าวหน้าที่ใช้เทคโนโลยีการแยกส่วนหน้าและส่วนหลัง การโต้ตอบข้อมูลใช้รูปแบบ json โดยมีการเชื่อมต่อการทำงานต่ำและการทำงานร่วมกันสูง โมดูลหลักรองรับการตั้งค่าระบบ การจัดการสิทธิ์ การจัดการผู้ใช้ การจัดการเมนู การจัดการ API และฟังก์ชันอื่นๆ ในเวลาเดียวกัน เราได้พัฒนาการใช้งานแบ็คเอนด์ที่รองรับเวอร์ชัน spring-boot3.0, thinkphp6.0, laravel9.0 และ Hyperf3.0 ตามสไตล์ API แบบรวม ด้านหน้า -end ของอินเทอร์เฟซการจัดการพื้นหลังถูกนำมาใช้กับ vue+element

## 预览

![UiAdmin](https://cnd1.jiangruyi.com/uniCloud2022/VKCEYUGU-f12e1180-fce8-465f-a4cd-9f2da88ca0e6/ba0c3585-fa80-4277-9ea2-46b08a23a4bf.png)


## เหตุใดจึงเลือก UiAdmin - การลดต้นทุนและปรับปรุงประสิทธิภาพ

### การพัฒนา UiAdmin กับการพัฒนาแบบดั้งเดิม


| โครงการ | วิธี UiAdmin | วิธีดั้งเดิม |
| ----------- | ----------- | ----------- |
| จำนวนนักพัฒนาแบ็กเอนด์ | 1 |1 |
| จำนวนนักพัฒนาส่วนหน้า | 0 |1 |
| ความเร็วในการพัฒนาฟังก์ชั่น | 2.5X |1X |
| จำนวน BUGs | ประมาณว่าจะลดลง 70% | การมีอยู่ |
| ต้องมีเอกสารประกอบ API | ไม่จำเป็น | จำเป็น |
| จำเป็นต้องมีการดีบักข้อต่อส่วนหน้าและส่วนหลัง | ไม่จำเป็น | จำเป็น |
| ต้นทุน R&D ที่ครอบคลุม | ลด 50% | - |
| ประหยัดค่าใช้จ่ายของทีม | ประหยัดได้ประมาณ 200,000 หยวน +/1 ปี/1 ส่วนหน้า | - |

บันทึก:

1. วิธีการแบบดั้งเดิมหมายถึงหน้าการวาดส่วนหน้า การเขียนส่วนต่อประสานส่วนหลังและการเขียนเอกสารส่วนต่อประสาน และวิธีการพัฒนาการแก้ไขจุดบกพร่องร่วมส่วนหน้าและส่วนหลังที่ทีมส่วนใหญ่ใช้อยู่ในปัจจุบัน

2. วิธี UiAdmin หมายถึงการพัฒนาโดยใช้วิธีสร้างหน้า Builder อัตโนมัติ (ไม่ใช่ตัวสร้างโค้ด)

3. วิธีคำนวณแบบประหยัดต้นทุน คือ ส่วนหน้าใช้ประมาณ 15K เป็นฐานในการคำนวณกองทุนสำรองเลี้ยงชีพ ค่าใช้จ่ายสำนักงาน ฯลฯ หากโครงการมีขนาดใหญ่กว่าและการพัฒนาแบบดั้งเดิมต้องใช้คนส่วนหน้ามากกว่าหนึ่งคน การประหยัดต้นทุนจะเพิ่มเป็นสองเท่า

```
ปัจจุบัน UiAdmin เหมาะสำหรับโปรเจ็กต์ใหม่ และไม่แนะนำสำหรับโปรเจ็กต์เก่า เว้นแต่จะมีการปรับโครงสร้างใหม่
```
### ลดต้นทุนการพัฒนาองค์กรและทีม

UiAdmin ได้ออกแบบและติดตั้งโซลูชันทางเทคนิคสำหรับการสร้างหน้าพื้นหลังการจัดการอัตโนมัติแบบเรียลไทม์ การใช้โซลูชันนี้ ต้นทุนการพัฒนาขององค์กรในการจัดการเบื้องหลังจะลดลงอย่างมากและเทคโนโลยีนี้เรียนรู้และใช้งานได้ง่ายมาก แลมบ์ดา นิพจน์สามารถเรียกเป็นลูกโซ่ได้ โซลูชันทางเทคนิคนี้เรียกว่าเทคโนโลยีตัวสร้างการสร้างหน้าอัตโนมัติ

การใช้ Builder ช่วยให้นักพัฒนาแบ็คเอนด์ไม่จำเป็นต้องเขียนเอกสารอินเทอร์เฟซอีกต่อไป ไม่จำเป็นต้องแก้ไขจุดบกพร่องร่วมของส่วนหน้าและส่วนหลัง และนักพัฒนาส่วนหน้าไม่จำเป็นต้องเขียนการเพิ่มเติม การลบ การเปลี่ยนแปลง และหน้าแบบสอบถามซ้ำๆ .

### เทคโนโลยีกระแสหลัก

แม้ว่าเราจะใช้โซลูชันเทคโนโลยีการพัฒนาพื้นหลังอื่น แต่สถาปัตยกรรมทางเทคนิคพื้นฐานนั้นเป็นไปตามกระแสหลักอย่างใกล้ชิด เช่น spring-boot3/thinkphp6/laravel9/hyperf3 ล่าสุด ฯลฯ ทั้งหมดได้รับการสนับสนุน ไม่จำเป็นต้องกังวลเกี่ยวกับค่าใช้จ่ายในการเรียนรู้

## คุณสมบัติ

### การทำให้เป็นโมดูล
แบ็กเอนด์ UiAdmin ยึดหลักการทำงานร่วมกันสูงและการเชื่อมต่อต่ำ โมดูลต่างๆ สามารถแชร์ได้ เนื่องจากเป็นแพ็คเกจฟังก์ชันขั้นต่ำของ UiAdmin ผู้ใช้สามารถอัปโหลดและดาวน์โหลดโมดูลในตลาดโมดูลได้

### การสร้างหน้าไดนามิกของตัวสร้าง

UiAdmin เป็นเจ้าแรกที่พัฒนาเทคโนโลยีการสร้างเพจอัตโนมัติโดยแยกจากกันของส่วนหน้าและส่วนหลัง ปัจจุบัน รองรับ xyBuilderList และ xyBuilderForm โดยแบบแรกจะสร้างรายการโดยอัตโนมัติ และแบบหลังจะสร้างแบบฟอร์มโดยอัตโนมัติ การรวมกันของทั้งสองสามารถทำให้เสร็จสมบูรณ์ได้มากขึ้น มากกว่า 90% ของข้อกำหนดฟังก์ชันพื้นหลัง

## รองรับหลายแพลตฟอร์ม

UiAdmin ถือกำเนิดขึ้นในช่วงครึ่งหลังของอินเทอร์เน็ตบนมือถือและมีทางเข้าออกหลายประเภท UiAdmin จะรองรับหลายแพลตฟอร์มจากด้านต่อไปนี้: ส่วนปลายของพีซีจะถูกนำไปใช้ในโหมดเว็บ และส่วนปลายของมือถือจะใช้ uni-app เทคโนโลยีเพื่อให้ครอบคลุม iOS, Android, แอปเพล็ต WeChat, แอปเพล็ต Alipay, แอปเพล็ต Baidu, แอปเพล็ต Toutiao, H5 อย่างครอบคลุม ทำให้นักพัฒนาประหยัดพลังงานได้มาก

### เข้ากันได้กับ API หลายภาษา

พื้นหลัง UiAdmin จะสร้างระบบเฟรมเวิร์กพื้นหลังแบบรวม แบ็กเอนด์ครอบคลุม php, java, python, node, .net และภาษาอื่นๆ ส่วนหน้าจะรองรับเฟรมเวิร์กภาษา เช่น vue และ dart รองรับหลายภาษาตามสไตล์ API แบบครบวงจร .

## คำอธิบายคลังสินค้า

นี่คือที่เก็บ Monorepo ที่มีการใช้งาน uiadmin ในภาษาและกรอบงานที่แตกต่างกัน


### การใช้งานแบ็กเอนด์เวอร์ชัน Java (รองรับ spring-boot3.0)

```
การใช้งานแบ็กเอนด์ back-end-java/summer-boot uiadmin ตามเฟรมเวิร์ก spring-boot3.0 (เอกสารการพัฒนา: https://uiadmin.net/docs/summer)
```

### เวอร์ชัน PHP การใช้งานแบ็กเอนด์

```
back-end/uiadmin-thinkphp การใช้งานแบ็กเอนด์ uiadmin ตามกรอบงาน thinkphp6 (เอกสารการพัฒนา: https://uiadmin.net/docs/uiadmin1-2)

back-end/uiadmin-laravel การใช้งานแบ็กเอนด์ uiadmin ตามกรอบงาน laravel9 (เอกสารการพัฒนา: https://uiadmin.net/docs/lrvadmin)

back-end/uiadmin-hyperf การใช้งานแบ็กเอนด์ uiadmin ตามกรอบงาน Hyperf3 (เอกสารการพัฒนา: https://uiadmin.net/docs/hyfadmin)


```


### การใช้งานส่วนหน้า

```
front-end/uiadmin-uniapp เวอร์ชัน uni-app ไคลเอ็นต์ส่วนหน้า
front-end/uiadmin-vue โปรเจ็กต์นั่งร้าน Front-end อิงจาก vue3+vite+typescript
front-end/uiadmin-flutter Flutter เวอร์ชันไคลเอ็นต์ส่วนหน้า
```

### อื่น

```
uiadmin-3rd โดยทั่วไปโครงการพึ่งพาโอเพ่นซอร์สของบุคคลที่สามบางโครงการโดยทั่วไปไม่จำเป็นต้องรวบรวมด้วยตัวเอง
```

##  ติดตั้ง
โปรดดูเอกสารประกอบ


## ทรัพยากร
เว็บไซต์อย่างเป็นทางการ: https://uiadmin.net
กรณีสำเร็จ: https://uiadmin.net/case
ตลาดปลั๊กอิน: https://uiadmin.net/ext
ชุมชนการสื่อสาร: https://uiadmin.net/ask


## ที่อยู่โอเพ่นซอร์ส
คลังโค้ดคลาวด์: https://gitee.com/uiadmin
GitHub: https://github.com/ijry/uiadmin

## สังเกต
หากคุณต้องการ ThinkPHP5.1 เวอร์ชัน 1.0 โปรดตรวจสอบสาขา 1.0 ของคลังสินค้านี้



