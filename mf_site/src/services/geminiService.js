import { GoogleGenerativeAI } from "@google/generative-ai";

// Google Gemini API anahtarını .env dosyasından alıyoruz.
// Bu anahtar, Google Cloud Console'dan alınır ve güvenli şekilde saklanmalıdır.
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Eğer API anahtarı yoksa, konsola uyarı veriyoruz.
if (!API_KEY) {
  console.warn("VITE_GEMINI_API_KEY environment variable bulunamadı!");
}

// Google Gemini AI servisini başlatıyoruz.
const genAI = new GoogleGenerativeAI(API_KEY);

// Kullanılacak AI modelini seçiyoruz..
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Sohbeti (chat) yönetmek için global bir chat objesi tanımlıyoruz.
let chat = null;

// Güncel tarihi alıp, context'e ekliyoruz.
// Böylece AI, her zaman doğru tarihi bilir.
const TODAY = new Date();
const GUNCEL_TARIH = TODAY.toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" });

// AI'ya, FİŞEK hakkında bilgi vermesi için gerekli tüm kişisel bilgileri ve kuralları context olarak veriyoruz.
// Bu context, AI'nın her soruya doğru ve kişisel yanıt vermesini sağlar.
const FISEK_CONTEXT = `
Sen FİŞEK'in kişisel AI asistanısın. Bugünün tarihi: ${GUNCEL_TARIH}
Aşağıdaki bilgileri kullanarak soruları yanıtla:

KİŞİSEL BİLGİLER:
- Ad Soyad: Muhammet FİŞEK
- Unvan: Yazılım Geliştirici
- E-posta: muhammetfisek121@gmail.com
- GitHub: https://github.com/muhammetfisek
- LinkedIn: https://www.linkedin.com/in/muhammet-fisek/

- "adres": "İstanbul, Türkiye"
- "cinsiyet": "Erkek"
- "dogum_tarihi": "20.01.2002"
- "dogum_yeri": "Kadıköy/İstanbul"
- "memleket": "Amasya"
- "boy": 173
- "kilo": 70
- "burc": "Oğlak"
- "kan_grubu": "A Rh+"
- "medeni_durum": "Bekar"
- "ehliyet bilgisi": "B sınıfı ehliyet"
- "cocukluk_yillari": "İstanbul'da geçti"
- "en_sevdigi_yemek": "Mantı"
- "en_sevdigi_renk": "Turkuaz"
- "en_sevdigi_muzik_turu": "Rock"
- "en_sevdigi_spor": "Futbol"
- "tuttugu_takım": "Galatasaray"
- "en_sevdigi_oyun": "Futbol"
- "en_sevdigi_dizi": "Vikings"


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

// Kullanıcıdan gelen mesajı AI'ya gönderen fonksiyon.
// Bu fonksiyon, chat başlatılmamışsa önce context ile başlatır, ardından kullanıcı mesajını AI'ya iletir.
export const sendMessage = async (userMessage) => {
  try {
    // API anahtarı kontrolü. Eğer yoksa hata fırlatılır.
    if (!API_KEY) {
      throw new Error("Gemini API anahtarı bulunamadı!");
    }

    // Eğer chat başlatılmadıysa, context ile yeni bir sohbet başlatılır.
    if (!chat) {
      chat = model.startChat({
        history: [
          { role: "user", parts: [{ text: FISEK_CONTEXT }] },
          { role: "model", parts: [{ text: "Merhaba! Ben FİŞEK'in kişisel asistanıyım. Size FİŞEK hakkında bilgi verebilir ve sorularınızı yanıtlayabilirim. Nasıl yardımcı olabilirim? 😊" }] }
        ],
        generationConfig: {
          // AI'nın döndüreceği maksimum token (kelime/karakter) sayısı. Yüksek tutulursa daha uzun yanıtlar alınır.
          maxOutputTokens: 4096,
          // Yanıtların çeşitliliğini belirler. 0.7 genellikle doğal ve çeşitli yanıtlar için idealdir.
          temperature: 0.7,
        },
      });
    }

    // Kullanıcı mesajını AI'ya gönderiyoruz ve yanıtı bekliyoruz.
    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    const text = response.text();

    // AI'dan gelen yanıtı döndürüyoruz.
    return { success: true, text };

  } catch (error) {
    // Hata oluşursa, konsola detaylı hata yazılır ve kullanıcıya uygun mesaj gösterilir.
    console.error("Gemini API Hatası:", error);
    let errorMessage = "Üzgünüm, şu anda yanıt veremiyorum. Lütfen daha sonra tekrar deneyin.";
    if (error.message.includes("API anahtarı")) {
      errorMessage = "API bağlantısında sorun var. Lütfen daha sonra tekrar deneyin.";
    } else if (error.message.includes("quota")) {
      errorMessage = "API kotası dolmuş. Lütfen daha sonra tekrar deneyin.";
    }
    return { success: false, text: errorMessage };
  }
};

// Sohbeti sıfırlamak için kullanılır. Yeni bir konuşma başlatmak istediğinde çağrılır.
export const clearChatHistory = () => {
  chat = null;
};

// API anahtarının var olup olmadığını kontrol eden yardımcı fonksiyon.
export const isApiKeyAvailable = () => {
  return !!API_KEY;
}; 