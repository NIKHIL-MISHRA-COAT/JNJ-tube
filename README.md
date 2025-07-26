# 🎬 JNJ Tube – Video Streaming Platform

> A full-stack YouTube-like video streaming app built with scalability and premium features in mind. Supports video uploads, background processing, and monetization.

---

## 📸 Preview

> Home | Upload | Premium Content

<p float="left">
  - login
  <img src="Screenshot 2025-07-26 121826.png" width="32%" />
  <img src="Screenshot 2025-07-26 121852.png" width="32%" />
  
  -home
  <img src="Screenshot 2025-07-26 122645.png" width="32%" />

  -upload
  <img src="Screenshot 2025-07-26 123010.png" width="32%" />

  -free playlist
  <img src="<img width="940" height="529" alt="image" src="https://github.com/user-attachments/assets/bce957b3-5570-4934-93b1-0e46f0963370" />
" width="32%" />

- paid playlist
  <img src="<img width="940" height="529" alt="image" src="https://github.com/user-attachments/assets/951bda90-c9d8-4253-88f9-ef6349b268a8" />
" width="32%" />

- payment 
  <img src="<img width="940" height="529" alt="image" src="https://github.com/user-attachments/assets/56007fb3-7738-4d7f-b07c-d5a05771c3ad" />
" width="32%" />
 
</p>
---
## 🛠️ Tech Stack

- **Frontend:** React, TailwindCSS, Video.js  
- **Backend:** Node.js (TypeScript), Express.js, MongoDB  
- **Media Encoding:** FFmpeg  
- **Job Queue:** Bull + Redis  
- **Payments:** Razorpay  
- **Others:** Multer, Mongoose, dotenv

---

## ✨ Key Features

- 🎥 Upload & stream videos of multiple formats
- ⚙️ Auto video encoding using FFmpeg
- 🧵 Job queues using Bull for background processing
- 🧠 Thumbnail generation & metadata extraction
- 💸 Razorpay payment integration for premium content
- 📺 Video.js for responsive playback
- 👤 User authentication & content access control

---

## 🔁 Video Processing Flow

```mermaid
graph TD
A[User Uploads Video] --> B[Stored Temporarily]
B --> C[Queued using Bull]
C --> D[Processed by FFmpeg Worker]
D --> E[Thumbnail + Encoded Formats Saved]
E --> F[Database Updated]
F --> G[Streamable via Video.js]
