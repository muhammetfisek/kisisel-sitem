import berber1 from "../fotolar/berber1.jpeg";
import berber2 from "../fotolar/berber2.jpeg";
import berber3 from "../fotolar/berber3.jpeg";
import goruntuisleme1 from "../fotolar/goruntuisleme1.jpeg";
import goruntuisleme2 from "../fotolar/goruntuisleme2.jpeg";
import goruntuisleme3 from "../fotolar/goruntuisleme3.jpeg";
import spor1 from "../fotolar/spor1.jpeg";
import spor2 from "../fotolar/spor2.jpeg";
import spor3 from "../fotolar/spor3.jpeg";
import staj1 from "../fotolar/staj1.jpeg";
import staj2 from "../fotolar/staj2.jpeg";
import staj3 from "../fotolar/staj3.jpeg";
import newssite1 from "../fotolar/newssite1.jpeg";
import newssite2 from "../fotolar/newssite2.jpeg";
import newssite3 from "../fotolar/newssite3.jpeg";
import hesapmakinesi1 from "../fotolar/hesapmakinesi1.jpeg";
import hesapmakinesi2 from "../fotolar/hesapmakinesi2.jpeg";
import yapılacak1 from "../fotolar/yapılacak1.jpeg";
import yapılacak2 from "../fotolar/yapılacak2.jpeg";
import gardener1 from "../fotolar/gardener1.jpeg";
import gardener2 from "../fotolar/gardener2.jpeg";
import gardener3 from "../fotolar/gardener3.jpeg";
import oyun1 from "../fotolar/oyun1.jpeg";
import oyun2 from "../fotolar/oyun2.jpeg";
import oyun3 from "../fotolar/oyun3.jpeg";
import oyun4 from "../fotolar/oyun4.jpeg";
import kişisel1 from "../fotolar/kişisel1.jpeg";
import horsinggame1 from "../fotolar/horsinggame1.jpeg";
import horsinggame2 from "../fotolar/horsinggame2.jpeg";
import stok1 from "../fotolar/stok1.jpeg";
import stok2 from "../fotolar/stok2.jpeg";
import stok3 from "../fotolar/stok3.jpeg";
import stok4 from "../fotolar/stok4.jpeg";

export const projeler = [
  {
    baslik: "Yapay Zekâ Tabanlı Kuaför Asistanı ve İşletme Yönetimi Uygulaması",
    aciklama:
      "Bu uygulama, kuaförler ve güzellik salonları için randevu yönetim uygulamasıdır. Backend kısmı Spring Boot ile yazılmıştır. Yapay zeka ise Python-Flask ile geliştirilmiştir. Yapay zekaya fotoğrafınızı yükleyerek saç kesimi ve bakım önerileri alabiliyoruz .",
    etiketler: [
      { ad: "Python-Flask", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
      { ad: "Spring Boot", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
    ],
    fotolar: [berber1, berber2, berber3],
    github: "#",
  },
  {
    baslik: "Görüntü İşleme ve Kümeleme Uygulaması",
    aciklama:
      "C# Windows Forms kullanarak geliştirdiğim kapsamlı bir uygulamadır. K-Means (yoğunluk, RGB, Mahalanobis) ve Sobel kenar bulma gibi gelişmiş görüntü işleme algoritmalarını içerir. Detaylı piksel ve histogram analiz yetenekleri de sunmaktadır.",
    etiketler: [
      { ad: "C#", renk: "linear-gradient(90deg,#1976d2,#00e6d6)" },
      { ad: "Windows Forms", renk: "linear-gradient(90deg,#43e97b,#38f9d7)" },
    ],
    fotolar: [goruntuisleme1, goruntuisleme2, goruntuisleme3],
    github: "https://github.com/muhammetfisek/image-processing.git",
  },
  {
    baslik: "Spor Kompleksi Uygulaması",
    aciklama:
      "Mobil uygulama Java ve SQLite kullanılarak geliştirilmiştir. Kullanıcılar uygulamaya kayıt olarak ve giriş yaparak günlük egzersiz rutinlerini oluşturabilirler. Amacımız, uygulayacağımız egzersizleri göstererek kullanıcıların günlük yaşamlarında sağlıklı bir yaşam tarzı sürdürmelerine yardimci olmaktır.",
    etiketler: [
      { ad: "Android-Java", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
      { ad: "SQLite", renk: "linear-gradient(90deg,#00bcd4,#4caf50)" },
    ],
    fotolar: [spor1,spor2,spor3],
    github: "https://github.com/muhammetfisek/Spor-Kompleksi.git",
  },
  {
    baslik: "Staj Projesi: Kullanıcı Platformu",
    aciklama:
      "Bu uygulama kullanıcı odaklı bir sosyal etkileşim platformudur. Uygulama, güvenli kayıt/giriş, kullanıcı listeleme, detaylı profil görüntüleme ve düzenleme gibi fonksiyonellikler sağlayarak, kullanıcıların dijital ortamda birbirleriyle bağlantı kurmasını ve bilgi paylaşmasını kolaylaştırır.",
    etiketler: [
      { ad: "React JS ", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
      { ad: "Spring Boot", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
      { ad: "H2 Database", renk: "linear-gradient(90deg,#00bcd4,#4caf50)" },
    ],
    fotolar: [staj1,staj2,staj3],
    github: "https://github.com/muhammetfisek/staj-projesi.git",
  },
  {
    baslik: "Statik Web Sitesi: Haberler",
    aciklama:
      "HTML ve CSS kullanılarak geliştirildi. Haber ve içerik gösteren bir web sitesi oluşturuldu. Anasayfa,Bilim,Spor,Teknoloji vb. sayfalardan oluşmaktadır.",
    etiketler: [
      { ad: "HTML", renk: "linear-gradient(90deg,#1976d2,#00e6d6)" },
      { ad: "CSS", renk: "linear-gradient(90deg,#43e97b,#38f9d7)" },
    ],
    fotolar: [newssite2,newssite1,newssite3],
    github: "https://github.com/muhammetfisek/News-WebSite.git",
  },
  {
    baslik: "Horse-Racing-Game",
    aciklama:
      "C# kullanılarak geliştirilmiştir. Oyuncu sayısı girilerek oyuna başlanır. Minimum 2 , maximum 4 oyuncu kabul edilir. Atlar rastgele ilerler ve bitiş çizgisine ilk ulaşan oyuncu kazanır. Oyun reset ile tekrar başlar.",
    etiketler: [
      { ad: "C#", renk: "linear-gradient(90deg,#1976d2,#00e6d6)" },
      { ad: "Windows Forms", renk: "linear-gradient(90deg,#43e97b,#38f9d7)" },
    ],
    fotolar: [horsinggame1,horsinggame2],
    github: "https://github.com/muhammetfisek/Horse-Racing-Game.git",
  },
  {
    baslik: "Stock-Tracking-System",
    aciklama:
      "C# ve MS-SQL kullanılarak geliştirilmiştir. Yönetici ve çalışan olmak üzere iki ayrı panel bulunmaktadır. Yönetici giriş yapabilir ve çalışan ekleyebilir. Çalışan giriş yaptıktan sonra ürün ekleyip çıkararak ürün stok takip sistemi yapar.",
    etiketler: [
      { ad: "C#", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
      { ad: "MS-SQL", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
    ],
    fotolar: [stok1,stok2,stok3,stok4],
    github: "https://github.com/muhammetfisek/Stock-Tracking-System.git",
  },
  {
    baslik: " Hesap Makinesi",
    aciklama:
      "HTML, CSS ve JavaScript kullanarak geliştirdiğim tam işlevli bir web tabanlı hesap makinesi uygulamasıdır. Temel aritmetik işlemleri destekler ve dinamik tema değiştirme özelliğine sahiptir.",
    etiketler: [
      { ad: "JavaScript", renk: "linear-gradient(90deg,#1976d2,#00e6d6)" },
      { ad: "HTML", renk: "linear-gradient(90deg,#43e97b,#38f9d7)" },
      { ad: "CSS", renk: "linear-gradient(90deg,#00bcd4,#4caf50)" },
    ],
    fotolar: [hesapmakinesi1,hesapmakinesi2],
    github: "https://github.com/muhammetfisek/HesapMakinesi.git",
  },
  {
    baslik: "To-Do-List",
    aciklama:
      "Bu projede  yapılacaklar listesi uygulaması geliştirilmiştir. Kullanıcılar yapılacakları ekleyebilir, düzenleyebilir ve silebilir. Ayrıca Tümü, Devam Ediyor ve Bitti butonları ile görevleri filtreleyebilirler.",
    etiketler: [
      { ad: "JavaScript", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
      { ad: "HTML-CSS", renk: "linear-gradient(90deg,#2196f3,#19e6d6)" },
      { ad: "Bootstrap", renk: "linear-gradient(90deg,#00c853,#00e6d6)" },
      { ad: "JQuery", renk: "linear-gradient(90deg,#00bcd4,#4caf50)" },
    ],
    fotolar: [yapılacak1,yapılacak2],
    github: "https://github.com/muhammetfisek/To-Do-List.git",
  },
  {
    baslik: "Statik Web Sitesi: Gardener",
    aciklama:
      "Bu site HTML, CSS, JS kullanılarak geliştirilmiştir. Site, bazı bitkilerin nasıl yetiştirildiği ve bakımının nasıl yapıldığı hakkında faydalı bilgiler içermektedir.",
    etiketler: [
      { ad: "JavaScript", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
      { ad: "HTML-CSS", renk: "linear-gradient(90deg,#2196f3,#19e6d6)" },
    ],
    fotolar: [gardener1,gardener2,gardener3],
    github: "https://github.com/muhammetfisek/gardener.git",
  },
  {
    baslik: "Mini-Game-WebSite",
    aciklama:
      "HTML, CSS ve vanilla JavaScript ile geliştirdiğim, kullanıcı dostu bir mini oyun portalıdır. Pong, Yılan Oyunu ve Köstebeğe Vurma gibi popüler oyunları içeren bu site, temel front-end becerilerimi ve dinamik oyun mantığı uygulama yeteneğimi kapsamlı bir şekilde sergiler",
    etiketler: [
      { ad: "JavaScript", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
      { ad: "HTML-CSS", renk: "linear-gradient(90deg,#2196f3,#19e6d6)" },
    ],
    fotolar: [oyun1,oyun2,oyun3,oyun4],
    github: "https://github.com/muhammetfisek/Mini-Game-Website.git",
  },
  {
    baslik: "Kişisel Web Sitem",
    aciklama:
      " Kişisel portfolyo web sitesidir. Yazılım geliştirme becerilerimi sergileyen çeşitli projelerimi (web, masaüstü, mobil) barındırır. Duyarlı tasarımı ve kullanıcı dostu arayüzü ile çalışmalarımı sunar",
    etiketler: [
      { ad: "React", renk: "linear-gradient(90deg,#3ea6ff,#00e6d6)" },
      { ad: "CSS", renk: "linear-gradient(90deg,#2196f3,#19e6d6)" },
      { ad: "JavaScript", renk: "linear-gradient(90deg,#00c853,#00e6d6)" },
    ],
    fotolar: [kişisel1],
    github: "https://github.com/muhammetfisek/kisisel-sitem.git",
  },
]; 