// src/data/blogData.js
import blogImg1 from '../assets/blogimg-1.jpg';
import blogImg2 from '../assets/blogimg-2.jpg';
import blogImg3 from '../assets/blogimg-3.jpg';
import blogImg4 from '../assets/blogimg-4.jpg';
import blogImg5 from '../assets/blogimg-5.jpg';
import blogImg6 from '../assets/blogimg-6.jpg';
import blogImg7 from '../assets/blogimg-7.jpg';
import blogImg8 from '../assets/blogimg-8.jpg';

export const blogs = [
    {
        id: 1,
        title: "Sleep Tracking",
        excerpt: "เนื้อหาสั้น...",
        category: "Vibe Code",
        content: `กิจกรรม Vibe Code โจทย์ที่ได้รับคือ 'แอปหรือเว็บไซต์บันทึกการนอน' จะเป็นการสุ่มโจทย์ขึ้นมาโดยไม่รู้ล่วงหน้า มีเวลาจำกัดภายใน 1 ชั่วโมง 45 นาที ใช้ Tool ที่เป็น AI มาช่วยในการทำงานโดยเริ่มตั้งแต่ การออกแบบ Feature ไปจนถึง Prototype
         
Feature:
 
🧠 แสดงข้อมูลระยะเวลาและประสิทธิภาพในการนอน ประสิทธิภาพ การอธิบายตัวชี้วัดอย่างชัดเจนและเชื่อมโยงกับพฤติกรรม เพื่ออธิบายวิธีปรับปรุงคุณภาพการนอน
 
🧭 คำแนะนำด้วย AI ปรับเปลี่ยนตามข้อมูลผู้ใช้ แนวโน้มพฤติกรรมและลักษณะชีวิตประจำวันของแต่ละคน
 
🎯 การตั้งเป้าหมายเพื่อปรับปรุงคุณภาพการนอน ที่สามารถปรับแต่งได้ และแสดงผลความก้าวหน้า เช่น “รู้สึกตื่นสดชื่นเวลา 7 โมงเช้า”, “ลดจำนวนครั้งที่ตื่นตอนกลางคืน”
 
🧘 การจดบันทึกเกี่ยวกับสุขภาพจิตและอารมณ์
 
📲 การจดบันทึกและแสดงความสัมพันธ์เกี่ยวกับพฤติกรรมตอนกลางวันที่ส่งผลถึงคุณภาพการนอน (เช่น การดื่มคาเฟอีน, การใช้หน้าจอ, การออกกำลังกาย, การกินอาหาร)
 
🛏️ การจดบันทึกเกี่ยวกับสภาพแวดล้อมในการการนอน เช่น แสง เสียง หรืออุณหภูมิ หรือเชื่อมต่อกับ Smart Home`,
        image: blogImg5,
        figmaEmbedUrl: "https://sax-repay-27177039.figma.site/",
        figmaUrl: "https://www.figma.com/make/QbkDlP4UxRC8y1pSkO5nx4/Sleep-Tracking-App--Copy-?node-id=0-1&p=f&fullscreen=1"
    },
    {
        id: 2,
        title: "DAO",
        excerpt: "เนื้อหาสั้น...",
        category: "User Interface Design",
        content: `Dashboard สำหรับโครงการระดมทุน Decentralized Autonomous Organizations (DAOs) การสนับสนุน แสดงข้อมูลยอดเงิน โทเค็น กิจกรรมการเงิน ไปจนถึงรอบการระดมทุน
         
Feature:
 
📥 สนับสนุนโปรเจกต์ได้โดยตรง ระบบจะแสดงจำนวนโทเค็นที่จะได้รับแบบอัตโนมัติ
 
📊 แสดง Volume ปัจจุบันแบบเรียลไทม์
ยอดการระดมทุนอัปเดตตลอดเวลา พร้อมแยกข้อมูลใน contract และ wallet
 
📈 ติดตามการเติบโตของโปรเจกต์ด้วยกราฟที่แสดงการเปลี่ยนแปลงย้อนหลัง
 
🔄 ข้อมูลรอบการระดมทุน (funding cycle) ระยะเวลา อัตราแจกโทเค็น redemption rate และเงื่อนไขการใช้งาน
 
📌 ทุกกิจกรรมบนโปรเจกต์ถูกบันทึกและแสดงผล เรียงตามเวลา
 
🛡️ แสดงรายชื่อ Address ของผู้ดูแล (signers) และรายละเอียดการตั้งค่า multisig`,
        image: blogImg3,
        figmaEmbedUrl: "https://embed.figma.com/design/4IVlY5BIZjq4ZENxA6qJOH/Blog-Design?node-id=0-1&embed-host=share",
        figmaUrl: "https://www.figma.com/design/4IVlY5BIZjq4ZENxA6qJOH/Blog-Design?node-id=0-1&p=f"
    },
    {
        id: 3,
        title: "Social Media Trends",
        excerpt: "เนื้อหาสั้น...",
        category: "User Interface Design",
        content: `แพลตฟอร์มรวบรวมความเคลื่อนไหวบนโซเชียลมีเดีย สำหรับติดตามความสนใจของผู้คนในแต่ละวัน
         
Feature:
 
📢 แสดงโพสต์ที่ได้รับความสนใจสูงสุดบนโซเชียลมีเดียในแต่ละวัน
 
📂 เลือกเนื้อหาให้ตามหมวดหมู่
 
🔍 กรองเฉพาะข้อมูลที่สนใจ
 
🌐 เปรียบเทียบข้อมูลระหว่างแต่ละแพลตฟอร์ม, ข้อมูลประชากรและกลุ่มผู้ใช้
 
⭐ ผู้ใช้ที่ได้รับความนิยมสูงสุดในแต่ละแพลตฟอร์ม
 
#️⃣ คีย์เวิร์ดและแฮชแท็กที่กำลังเป็นที่สนใจ`,
        image: blogImg7,
        figmaEmbedUrl: "https://embed.figma.com/design/4IVlY5BIZjq4ZENxA6qJOH/Blog-Design?node-id=9-11&embed-host=share",
        figmaUrl: "https://www.figma.com/design/4IVlY5BIZjq4ZENxA6qJOH/Blog-Design?node-id=9-11&p=f"
    },
    {
        id: 4,
        title: "Influencer Discovery",
        excerpt: "เนื้อหาสั้น...",
        category: "User Interface Design",
        content: `แพลตฟอร์มสรุปข้อมูลของอินฟลูเอนเซอร์และแบรนด์บนโซเชียลมีเดีย
         
Feature:
 
📊 เปรียบเทียบอินฟลูเอนเซอร์และแบรนด์ที่ได้รับความสนใจสูงสุดบนโซเชียลมีเดีย
 
📂 เลือกเนื้อหาให้ตามหมวดหมู่
 
🔍 กรองเฉพาะข้อมูลที่สนใจ
 
🌐 แสดงข้อมูลอินฟลูเอนเซอร์และแบรนด์แยกตามแต่ละโซเชียลมีเดีย
 
🔗 เชื่อมโยงระหว่างอินฟลูเอนเซอร์และแบรนด์ในมุมต่างๆ
 
⚖️ เปรียบเทียบอินฟลูเอนเซอร์ที่มีความเชื่อมโยงในแต่ละแคมเปญของแบรนด์ต่างๆ`,
        image: blogImg8,
        figmaEmbedUrl: "https://embed.figma.com/design/4IVlY5BIZjq4ZENxA6qJOH/Blog-Design?node-id=22-477&embed-host=share",
        figmaUrl: "https://www.figma.com/design/4IVlY5BIZjq4ZENxA6qJOH/Blog-Design?node-id=22-477&p=f"
    },

    // ...เพิ่มได้ตามต้องการ
];
