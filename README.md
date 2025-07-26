# 🎬 JNJ Tube – Video Streaming Platform

> A full-stack YouTube-like video streaming app built with scalability and premium features in mind. Supports video uploads, background processing, and monetization.

---
![alt text](<Screenshot 2025-07-26 121826.png>)
![alt text](<Screenshot 2025-07-26 121852.png>)
![alt text](<Screenshot 2025-07-26 122645.png>)
![alt text](<Screenshot 2025-07-26 123010.png>)
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
