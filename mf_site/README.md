# FİŞEK Kişisel Web Sitesi

Bu proje, Muhammet FİŞEK'in kişisel web sitesidir. React + Vite kullanılarak geliştirilmiştir.

## Özellikler

- 🎨 Modern ve responsive tasarım
- 🌙 Dark/Light mode desteği
- 🌍 Türkçe/İngilizce dil desteği
- 🤖 AI Chat Asistanı (Gemini API entegrasyonu)
- 📱 Mobil uyumlu tasarım
- ⚡ Hızlı yükleme (Vite)

## AI Chat Asistanı Kurulumu

AI Chat özelliğini aktif hale getirmek için:

1. [Google AI Studio](https://aistudio.google.com/apikey) adresinden Gemini API key alın
2. Proje ana dizininde `.env` dosyası oluşturun
3. `.env` dosyasına API key'inizi ekleyin:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

4. Uygulamayı yeniden başlatın

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build
```

## Teknolojiler

- React 19
- Vite
- Material-UI (MUI)
- React Router
- i18next (Çoklu dil desteği)
- Google Generative AI (Gemini)

## Lisans

MIT
