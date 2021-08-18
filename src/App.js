import React, { useState } from "react";
import DetailModal from "./components/DetailModal";
import "./styles/App.scss";

const App = () => {
  const [modalDetail, setModalDetail] = useState({
    teacherName: "",
    lessonName: "",
    recordUrl: "",
    description: "",
    date: "",
    isOpen: false,
  });

  const handleModalClose = () =>
    setModalDetail({
      teacherName: "",
      lessonName: "",
      recordUrl: "",
      description: "",
      date: "",
      isOpen: false,
    });

  return (
    <div className="container">
      <div className="content">
        <table className="table">
          <thead>
            <tr>
              <th colSpan="2"></th>
              <th>Pazartesi</th>
              <th>Salı</th>
              <th>Çarşamba</th>
              <th>Perşembe</th>
              <th>Cuma</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="2" className="dateCell">
                2-6 Ağustos
              </td>
              <td className="hourCell">10:00 - 12:00</td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Kenan Güler",
                    lessonName: "ATEZ",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/81YjU3B_t_76-zNz5bAMWZnesmxnS_IUFHW_3MgeO2r9gHqweMuSekiIQEjE1ZlY.wmJ90pCKCeaJ0p8c?startTime=1627888214000",
                    description: "ATEZ Staj 2021 Açılış Konuşması",
                    date: "2 Ağustos Pazartesi 10:00 - 12:00",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Kenan Güler</h4>
                  <span>ATEZ</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Tuncay Uzun",
                    lessonName: "Staj Projesi ve Uygulama Güvenliği",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/bW5juwlrQC0vIpMCgoVj80MAUhbN0Ll7aQMKzgT20mp_MCNi3HINWwzPYiioZa5S.g1Ag46JMZKXvL7Yp?startTime=1627973936000",
                    description: "Staj Projesi ve Uygulama Güvenliği",
                    date: "3 Ağustos Salı 10:00 - 12:00",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Tuncay Uzun</h4>
                  <span>Staj Projesi ve Uygulama Güvenliği</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "İsmail Akar",
                    lessonName: "İnternet Nasıl Çalışır?",
                    recordUrl:
                      "https://us02web.zoom.us/rec/play/J1v5sGP1jo4YZqa9PEkyaQIC6xz7Hvy90c-CYWM8qIegf2Uz9A8UcuTMtVko0aaoRFT8nJT53hrlHXgT.AtqW7jKuaXgmVJ8C?continueMode=true",
                    description: "İnternet Nasıl Çalışır?",
                    date: "4 Ağustos Çarşamba 10:00 - 12:00",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>İsmail Akar</h4>
                  <span>İnternet Nasıl Çalışır?</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Hazım Dikenli",
                    lessonName: "Node.js, Loopback.js",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/HxzfRXu6L-V9GUXlnpQtnYcCVSzvijZYYh2-HKpm0o6T1g8N1hyMVnkllOn6GZ-q.VwrOPHycEgCCGmyf",
                    description: "Node.js, Loopback.js",
                    date: "5 Ağustos Perşembe 10:00 - 12:00",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Hazım Dikenli</h4>
                  <span>Node.js, Loopback.js</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Alican Koçak",
                    lessonName: "Görsel Tasarım",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/W1jFQHWTctiIvUUqVOTNoXKXwv6O4ktOrjLhYlP86Zl80QnNDdN4l6MgWFV_gf-Q.WUaJgLegtIej_Wgx",
                    description: "Görsel Tasarım",
                    date: "6 Ağustos Cuma 10:00 - 12:00",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Alican Koçak</h4>
                  <span>Görsel Tasarım</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="hourCell">13:30 - 15:30</td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Şükrü Çakmak",
                    lessonName: "Yazılım Geliştirme Metodolojisi",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/3ou8NNnSNMS1UAervDP-M7EmcdYk91k9e2i-UvSgPmTJoHB-xS3yzbrwjQ3Yzsq3.bcSP7fl9GT5g4fja",
                    description: "Yazılım Geliştirme Metodolojisi",
                    date: "2 Ağustos Pazartesi 13:30 - 15:30",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Şükrü Çakmak</h4>
                  <span>Yazılım Geliştirme Metodolojisi</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Arzu Çağman",
                    lessonName: "İş Analisti Olmak",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/7RqqT4-G5Os9BaPUcGXTafreAfjGslA8OOJw-Oxv8NnQtIPj6f2MijGfYX1pKieH.-Bdo1T51LiLF0dbh",
                    description: "İş Analisti Olmak",
                    date: "3 Ağustos Salı 13:30 - 15:30",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Arzu Çağman</h4>
                  <span>İş Analisti Olmak</span>
                </div>
              </td>

              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Yılmaz Korkmaz",
                    lessonName: "Kod Yönetimi",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/9miE38q_QwIS3Gwq2-23tv8Y26tW-QQkFr9IeEOOlZ3FmOesjwjq_ZHAv7CBCStX.-Kovr-Q6L2vecXYe",
                    description: "Kod Yönetimi",
                    date: "4 Ağustos Çarşamba 13:30 - 15:30",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Yılmaz Korkmaz</h4>
                  <span>Kod Yönetimi</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Mübeccel Babadostu",
                    lessonName: "İşyerinde Dayanıklılık",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/01yE3LrZ67EOLH9_Qg78F4A37w3l1RBuqg0e1ft7Dy1iTKsijj2D1ZXVwA8lIFLM.pUunN0hBGdjWb1Ni",
                    description: "İşyerinde Dayanıklılık",
                    date: "5 Ağustos Perşembe 13:30 - 15:30",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Mübeccel Babadostu</h4>
                  <span>İşyerinde Dayanıklılık</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Onur Özcan",
                    lessonName: "Müşteriyi Anlamak",
                    recordUrl: "",
                    description: "Müşteriyi Anlamak",
                    date: "6 Ağustos Cuma 13:30 - 15:30",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Onur Özcan</h4>
                  <span>Müşteriyi Anlamak</span>
                </div>
              </td>
            </tr>
            <tr>
              <td rowSpan="2" className="dateCell">
                9-13 Ağustos
              </td>
              <td className="hourCell">10:00 - 12:00</td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Dilara Taşyaran",
                    lessonName: "Konteyner Teknolojisi",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/7QVw9AcC3G4uYoediCe0G0PCN0HfauUHW81uI4iHADl8oHS4P0b1VuEPssz_6S00.c_fKi2ooHtTubIjA",
                    description: "Konteyner Teknolojisi",
                    date: "9 Ağustos Pazartesi 10:00 - 12:00",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Dilara Taşyaran</h4>
                  <span>Konteyner Teknolojisi</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Abdulkerim Atik",
                    lessonName: "API Geliştirme",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/mZXTXuxCxgZAIrjmMqn8W3K82oPhFXSsUXEJz8JexhB--2lYcbsUeV70bgb1eZBp.UZFyN96-WsWBVSpn",
                    description: "API Geliştirme",
                    date: "10 Ağustos Salı 10:00 - 12:00",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Abdulkerim Atik</h4>
                  <span>API Geliştirme</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Abdulkerim Atik",
                    lessonName: "API Geliştirme II",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/HZmLzwBgcq7yo3lRZfvYduIEZNklQ-dIcLaSnWzLk3qGB4-SpcNS_XTg8MqTYBpD.b4Gs_16yuYJJEoUp",
                    description: "API Geliştirme II",
                    date: "11 Ağustos Çarşamba 10:00 - 12:00",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Abdulkerim Atik</h4>
                  <span>API Geliştirme</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Ümmügülsüm Yılmaz",
                    lessonName: "Blokzincir",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/o7P72FENJlfg27uALS9zAbGYHCCwyCkpCBsQm_OdCjap2OpKaot0dQUJCZO5IO_f.z_Wly2jovjr06B8D",
                    description: "Blokzincir",
                    date: "12 Ağustos Perşembe 10:00 - 12:00",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Ümmügülsüm Yılmaz</h4>
                  <span>Blokzincir</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Baran Durak",
                    lessonName: "Arayüz Geliştirme",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/scFpniT-MHIJojf_lo-eGgAmH0iMn3ry0_AGCgrmh5a4dmv3GGA4HtUFyPZgHlWi.grK4n-sGNlkIFnWN",
                    description: "Arayüz Geliştirme",
                    date: "13 Ağustos Cuma 10:00 - 12:00",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Baran Durak</h4>
                  <span>Arayüz Geliştirme</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="hourCell">13:30 - 15:30</td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Şükrü Çakmak",
                    lessonName: "Veritabanı",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/gc4JU2xDxwJN0N6lVVU-OtW7ORIJOen8u4N-VW63mHTK1wmMFF4buIMPkeosK0ak.XUjq0rxPoZXFBp5u",
                    description: "Veritabanı",
                    date: "9 Ağustos Pazartesi 13:30 - 15:30",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Şükrü Çakmak</h4>
                  <span>Veritabanı</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Gülnaz Aramacı",
                    lessonName: "Arayüz Geliştirme",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/8kZLBTTElN7ZXKIANoqXJ5KOztFNouZkjJbDQmSU5K0A3gv64v4OuuBZmBSP-Hpq.O8bppzNT-RBPUnar",
                    description: "Arayüz geliştirme ve React.js temelleri",
                    date: "10 Ağustos Salı 13:30 - 15:30",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Gülnaz Aramacı</h4>
                  <span>Arayüz Geliştirme</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Musa Koray Yaman",
                    lessonName: "Veri Yapıları ve Tasarım Şablonları",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/I5nNFkmEdpKo6JWovJ9r5yerAzdUQwQKYqf9vLnaipUrpT-u42UMipxTipSX5mDh.p8celFsiTwP6nzJG",
                    description: "Veri Yapıları ve Tasarım Şablonları",
                    date: "11 Ağustos Çarşamba 13:30 - 15:30",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Musa Koray Yaman</h4>
                  <span>Veri Yapıları ve Tasarım Şablonları</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Ümmügülsüm Yılmaz",
                    lessonName: "Blokzincir",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/OFtAGX3wXW4uDmGze7U9IF8OIBE6h50X1HMKB-0U5kuUcUoV8l7BKkGM_becevQF.OK4AQrbBQpBmbB3N",
                    description: "Blokzincir",
                    date: "12 Ağustos Perşembe 13:30 - 15:30",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Ümmügülsüm Yılmaz</h4>
                  <span>Blokzincir</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Abdülkerim Atik",
                    lessonName: "API Geliştirme",
                    recordUrl: "",
                    description: "API Geliştirme",
                    date: "13 Ağustos Cuma 13:30 - 15:30",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Abdülkerim Atik</h4>
                  <span>API Geliştirme</span>
                </div>
              </td>
            </tr>
            <tr>
              <td rowSpan="2" className="dateCell">
                16-20 Ağustos
              </td>
              <td className="hourCell">10:00 - 12:00</td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Baran Durak",
                    lessonName: "Arayüz Geliştirme II",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/vGjIFZYRq2Xv9q7WvvmjSxshEj9-0e2OmmCH_wz4KOnqGADSiCin_ZhIimNpnOsM.qliouz0z9xTFEx9W",
                    description: "Arayüz Geliştirme II",
                    date: "16 Ağustos Pazartesi 10:00 - 12:00",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Baran Durak</h4>
                  <span>Arayüz Geliştirme</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Prof. Dr. Ahmet Sayar",
                    lessonName: "Veri Bilimi ve Büyük Veri",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/rKygXCGhaeGEvsifYfGZioL9VDdZCG0YLi0RwXxsYjZzEC3UD-8oCu3M7q-bqP0W.qlxb3vnZPobLzp3b",
                    description: "Veri Bilimi ve Büyük Veri",
                    date: "17 Ağustos Salı 10:00 - 12:00",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Prof. Dr. Ahmet Sayar</h4>
                  <span>Veri Bilimi ve Büyük Veri</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Arzu Çağman",
                    lessonName: "Farklı Düşünme Yolları",
                    recordUrl: "",
                    description: "Farklı Düşünme Yolları",
                    date: "18 Ağustos Çarşamba 10:00 - 12:00",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Arzu Çağman</h4>
                  <span>Farklı Düşünme Yolları</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Gizemnur Taşkın",
                    lessonName: "Kriptoloji",
                    recordUrl: "",
                    description: "Kriptoloji",
                    date: "19 Ağustos Perşembe 10:00 - 12:00",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Gizemnur Taşkın</h4>
                  <span>Kriptoloji</span>
                </div>
              </td>
              <td>
                <div className="activityWrapper">
                  <span>Duyuru Yapılacak</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="hourCell">13:30 - 15:30</td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Baran Durak",
                    lessonName: "Arayüz Geliştirme",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/xjwDv4qFAxYSVc20gKoEI1ikAhCup4hiKh6R2u9Wo9kqu1Y1NkgVffFAR5KDxSk.kbQUCxruj_1TgV-m",
                    description: "Arayüz Geliştirme",
                    date: "16 Ağustos Pazartesi 13:30 - 15:30",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Baran Durak</h4>
                  <span>Arayüz Geliştirme</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Şükrü Çakmak",
                    lessonName: "Performans Testi Nasıl Yapılır?",
                    recordUrl:
                      "https://us02web.zoom.us/rec/share/8FFDJXyQFY_o9G71Q9zDqbcfwBOFfGLtelRqF8uZ9wstU-Je2l-yQxVEZWtkyR-E.dOk_OcgArdhP4HGC",
                    description: "Performans Testi Nasıl Yapılır?",
                    date: "17 Ağustos Salı 13:30 - 15:30",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Şükrü Çakmak</h4>
                  <span>Performans Testi Nasıl Yapılır?</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Gülnaz Aramacı",
                    lessonName: "CSS",
                    recordUrl: "",
                    description: "CSS",
                    date: "18 Ağustos Çarşamba 13:30 - 15:30",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Gülnaz Aramacı</h4>
                  <span>CSS</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Çağlar Akyol",
                    lessonName: "Excel",
                    recordUrl: "",
                    description: "Excel",
                    date: "19 Ağustos Perşembe 13:30 - 15:30",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Çağlar Akyol</h4>
                  <span>Excel</span>
                </div>
              </td>
              <td>
                <div className="activityWrapper">
                  <span>Duyuru Yapılacak</span>
                </div>
              </td>
            </tr>
            <tr>
              <td rowSpan="2" className="dateCell" style={{ borderBottomLeftRadius: "15px" }}>
                23-27 Ağustos
              </td>
              <td className="hourCell">10:00 - 12:00</td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Dilara Taşyaran",
                    lessonName: "DevOps",
                    recordUrl: "",
                    description: "DevOps",
                    date: "23 Ağustos Pazartesi 10:00 - 12:00",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Dilara Taşyaran</h4>
                  <span>DevOps</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Tuncay Uzun",
                    lessonName: "Yazılım Geliştirme Araçları",
                    recordUrl: "",
                    description: "Yazılım Geliştirme Araçları",
                    date: "24 Ağustos Salı 10:00 - 12:00",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Tuncay Uzun</h4>
                  <span>Yazılım Geliştirme Araçları</span>
                </div>
              </td>
              <td>
                <div className="activityWrapper">
                  <h4>DCS Konuk</h4>
                  <span>Gümrük</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Şükrü Çakmak",
                    lessonName: "İş Ne Zaman Biter?",
                    recordUrl: "",
                    description: "İş Ne Zaman Biter?",
                    date: "26 Ağustos Perşembe 10:00 - 12:00",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Şükrü Çakmak</h4>
                  <span>İş Ne Zaman Biter?</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Emre Kayacı",
                    lessonName: "Ar-Ge Nedir ve TÜBİTAK Projeleri",
                    recordUrl: "",
                    description: "Ar-Ge Nedir ve TÜBİTAK Projeleri",
                    date: "27 Ağustos Cuma 10:00 - 12:00",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Emre Kayacı</h4>
                  <span>Ar-Ge Nedir ve TÜBİTAK Projeleri</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="hourCell">13:30 - 15:30</td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Şükrü Çakmak",
                    lessonName: "Linux",
                    recordUrl: "",
                    description: "Linux",
                    date: "23 Ağustos Pazartesi 13:30 - 15:30",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Şükrü Çakmak</h4>
                  <span>Linux</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Tuncay Uzun",
                    lessonName: "Yazılım Test Metodolojisi",
                    recordUrl: "",
                    description: "Yazılım Test Metodolojisi",
                    date: "24 Ağustos Salı 13:30 - 15:30",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Tuncay Uzun</h4>
                  <span>Yazılım Test Metodolojisi</span>
                </div>
              </td>
              <td>
                <div className="activityWrapper">
                  <h4>DCS Konuk</h4>
                  <span>Gümrük</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Tayfun Zaman",
                    lessonName: "21. YY İş Ortamında Kimler Ayakta Kalır ?",
                    recordUrl: "",
                    description: "21. YY İş Ortamında Kimler Ayakta Kalır ?",
                    date: "26 Ağustos Perşembe 13:30 - 15:30",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Tayfun Zaman</h4>
                  <span>21. YY İş Ortamında Kimler Ayakta Kalır</span>
                </div>
              </td>
              <td
                onClick={() =>
                  setModalDetail({
                    teacherName: "Kenan Güler",
                    lessonName: "Kapanış",
                    recordUrl: "",
                    description: "Kapanış",
                    date: "27 Ağustos Cuma 13:30 - 15:30",
                    isOpen: true,
                  })
                }
              >
                <div className="activityWrapper">
                  <h4>Kenan Güler</h4>
                  <span>Kapanış</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <DetailModal
        isOpen={modalDetail.isOpen}
        teacherName={modalDetail.teacherName}
        lessonName={modalDetail.lessonName}
        recordUrl={modalDetail.recordUrl}
        description={modalDetail.description}
        date={modalDetail.date}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default App;
