import { GoogleGenerativeAI } from "@google/generative-ai";

// Gemini API anahtarını environment variable'dan al
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Eğer API key yoksa uyarı ver
if (!API_KEY) {
  console.warn("VITE_GEMINI_API_KEY environment variable bulunamadı!");
}

// Gemini AI modelini başlat
const genAI = new GoogleGenerativeAI(API_KEY);

// FİŞEK'in kişisel bilgileri - context olarak kullanılacak
const FISEK_CONTEXT = `
Sen FİŞEK'in kişisel AI asistanısın. Aşağıdaki bilgileri kullanarak soruları yanıtla:

KİŞİSEL BİLGİLER:
- Ad Soyad: Muhammet FİŞEK
- Unvan: Yazılım Geliştirici
- E-posta: muhammetfisek121@gmail.com
- GitHub: https://github.com/muhammetfisek
- LinkedIn: https://www.linkedin.com/in/muhammet-fisek/

EĞİTİM:
- Bilgisayar Mühendisliği öğrencisi

YETENEKLER:
Programlama & Geliştirme:
- Java - Spring Boot (80%)
- React.js (70%)
- Android Geliştirme(Java) (70%)
- C# (70%)
- C (75%)
- JavaScript (78%)
- HTML/CSS (95%)
- MS-SQL (70%)
- PostgreSQL (50%)
- Veri Yapıları ve Algoritmalar (75%)
- Nesne Yönelimli Programlama (OOP) (75%)

Tasarım:
- Mobile Android UI/UX (40%)
- Web UI/UX (85%)
- Adobe Photoshop (50%)

Diller:
- Türkçe (Ana dil)
- İngilizce (İleri seviye)

Diğer:
- Problem Çözme (85%)
- Takım Çalışması (80%)
- Proje Yönetimi (70%)
- Hızlı Öğrenme (90%)

PROJELER:
1. AI-Based Hairdresser Assistant and Business Management App
   - Kuaförler ve güzellik salonları için randevu yönetim uygulaması
   - Backend: Spring Boot, AI: Python-Flask
   - Fotoğraf yükleyerek saç kesimi ve bakım önerileri

2. Image Processing and Clustering Application
   - C# Windows Forms ile geliştirildi
   - K-Means (yoğunluk, RGB, Mahalanobis) ve Sobel kenar bulma algoritmaları
   - Detaylı piksel ve histogram analizi

3. Sports Complex Application
   - Java ve SQLite ile mobil uygulama
   - Günlük egzersiz rutinleri oluşturma
   - Sağlıklı yaşam tarzı desteği

4. Internship Project: User Platform
   - Kullanıcı odaklı sosyal etkileşim platformu
   - Güvenli kayıt/giriş, kullanıcı listeleme, profil yönetimi

5. Static Website: News
   - HTML ve CSS ile geliştirildi
   - Haber ve içerik gösteren web sitesi

6. Horse-Racing-Game
   - C# ile geliştirildi
   - 2-4 oyunculu at yarışı oyunu

KURALLAR:
1. Sadece FİŞEK hakkında bilgi ver, başka konularda konuşma
2. Türkçe yanıt ver
3. Samimi ve yardımsever ol
4. Bilmediğin bir şey varsa dürüstçe söyle
5. Kısa ve öz yanıtlar ver
6. Emoji kullanabilirsin 😊
`;

// Chat modelini oluştur
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Chat geçmişini tut
let chatHistory = [];

// Mesaj gönderme fonksiyonu
export const sendMessage = async (userMessage) => {
  try {
    // API key kontrolü
    if (!API_KEY) {
      throw new Error("Gemini API anahtarı bulunamadı!");
    }

    // İlk mesajsa context'i ekle
    if (chatHistory.length === 0) {
      chatHistory.push({
        role: "user",
        parts: [{ text: FISEK_CONTEXT }]
      });
      chatHistory.push({
        role: "model",
        parts: [{ text: "Merhaba! Ben FİŞEK'in kişisel asistanıyım. Size FİŞEK hakkında bilgi verebilir ve sorularınızı yanıtlayabilirim. Nasıl yardımcı olabilirim? 😊" }]
      });
    }

    // Kullanıcı mesajını ekle
    chatHistory.push({
      role: "user",
      parts: [{ text: userMessage }]
    });

    // Chat'i başlat
    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    // Yanıt al
    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    const text = response.text();

    // Model yanıtını geçmişe ekle
    chatHistory.push({
      role: "model",
      parts: [{ text }]
    });

    // Geçmişi 10 mesajla sınırla (performans için)
    if (chatHistory.length > 10) {
      chatHistory = chatHistory.slice(-10);
    }

    return { success: true, text };

  } catch (error) {
    console.error("Gemini API Hatası:", error);
    
    // Hata durumunda kullanıcı dostu mesaj
    let errorMessage = "Üzgünüm, şu anda yanıt veremiyorum. Lütfen daha sonra tekrar deneyin.";
    
    if (error.message.includes("API anahtarı")) {
      errorMessage = "API bağlantısında sorun var. Lütfen daha sonra tekrar deneyin.";
    } else if (error.message.includes("quota")) {
      errorMessage = "API kotası dolmuş. Lütfen daha sonra tekrar deneyin.";
    }

    return { success: false, text: errorMessage };
  }
};

// Chat geçmişini temizle
export const clearChatHistory = () => {
  chatHistory = [];
};

// API key'in varlığını kontrol et
export const isApiKeyAvailable = () => {
  return !!API_KEY;
}; 