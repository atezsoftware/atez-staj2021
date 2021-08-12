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
              <td>
                <div className="activityWrapper">
                  <h4>İsmail Akar</h4>
                  <span>Internet Nasıl Çalışır?</span>
                </div>
              </td>
              <td>
                <div className="activityWrapper">
                  <h4>Hazım Dikenli</h4>
                  <span>Node.js, Loopback.js</span>
                </div>
              </td>
              <td>
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
                      "https://us02web.zoom.us/rec/share/3ou8NNnSNMS1UAervDP-M7EmcdYk91k9e2i-UvSgPmTJoHB-xS3yzbrwjQ3Yzsq3.bcSP7fl9GT5g4fja?startTime=1627900598000",
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
                      "https://us02web.zoom.us/rec/share/7RqqT4-G5Os9BaPUcGXTafreAfjGslA8OOJw-Oxv8NnQtIPj6f2MijGfYX1pKieH.-Bdo1T51LiLF0dbh?startTime=1627986586000",
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
              <td>
                <div className="activityWrapper">
                  <h4>Yılmaz Korkmaz</h4>
                  <span>Kod Yönetimi</span>
                </div>
              </td>
              <td>
                <div className="activityWrapper">
                  <h4>Mübeccel Babadostu</h4>
                  <span>İşyerinde Dayanıklılık</span>
                </div>
              </td>
              <td>
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
              <td>
                <div className="activityWrapper">
                  <h4>Dilara Taşyaran</h4>
                  <span>Konteyner Teknolojisi</span>
                </div>
              </td>
              <td>
                <div className="activityWrapper">
                  <h4>Abdulkerim Atik</h4>
                  <span>API Geliştirme</span>
                </div>
              </td>
              <td>
                <div className="activityWrapper">
                  <h4>Abdulkerim Atik</h4>
                  <span>API Geliştirme</span>
                </div>
              </td>
              <td>
                <div className="activityWrapper">
                  <h4>Ümmügülsüm Yılmaz</h4>
                  <span>Blokzincir</span>
                </div>
              </td>
              <td>
                <div className="activityWrapper">
                  <h4>Baran Durak</h4>
                  <span>Arayüz Geliştirme</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="hourCell">13:30 - 15:30</td>
              <td>
                <div className="activityWrapper">
                  <h4>Şükrü Çakmak</h4>
                  <span>Veritabanı</span>
                </div>
              </td>
              <td>
                <div className="activityWrapper">
                  <h4>Gülnaz Aramacı</h4>
                  <span>Arayüz Geliştirme</span>
                </div>
              </td>
              <td>
                <div className="activityWrapper">
                  <h4>Musa Koray Yaman</h4>
                  <span>Veri Yapıları ve Tasarım Şablonları</span>
                </div>
              </td>
              <td>
                <div className="activityWrapper">
                  <h4>Ümmügülsüm Yılmaz</h4>
                  <span>Blokzincir</span>
                </div>
              </td>
              <td>
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
              <td>
                <div className="activityWrapper">
                  <h4>Baran Durak</h4>
                  <span>Arayüz Geliştirme</span>
                </div>
              </td>
              <td>
                <div className="activityWrapper">
                  <span>Duyuru Yapılacak</span>
                </div>
              </td>
              <td>
                <div className="activityWrapper">
                  <h4>Arzu Çağman</h4>
                  <span>Farklı Düşünme Yolları</span>
                </div>
              </td>
              <td>
                <div className="activityWrapper">
                  <span>Duyuru Yapılacak</span>
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
              <td>
                <div className="activityWrapper">
                  <h4>Baran Durak</h4>
                  <span>Arayüz Geliştirme</span>
                </div>
              </td>
              <td>
                <div className="activityWrapper">
                  <h4>Şükrü Çakmak</h4>
                  <span>Performans Testi Nasıl Yapılır?</span>
                </div>
              </td>
              <td>
                <div className="activityWrapper">
                  <h4>Gülnaz Aramacı</h4>
                  <span>CSS</span>
                </div>
              </td>
              <td>
                <div className="activityWrapper">
                  <span>Duyuru Yapılacak</span>
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
              <td>
                <div className="activityWrapper">
                  <h4>Dilara Taşyaran</h4>
                  <span>DevOps</span>
                </div>
              </td>
              <td>
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
              <td>
                <div className="activityWrapper">
                  <h4>Şükrü Çakmak</h4>
                  <span>İş Ne Zaman Biter?</span>
                </div>
              </td>
              <td>
                <div className="activityWrapper">
                  <h4>Emre Kayacı</h4>
                  <span>Ar-Ge Nedir ve TÜBİTAK Projeleri</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="hourCell">13:30 - 15:30</td>
              <td>
                <div className="activityWrapper">
                  <h4>Şükrü Çakmak</h4>
                  <span>Linux</span>
                </div>
              </td>
              <td>
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
              <td>
                <div className="activityWrapper">
                  <h4>Tayfun Zaman</h4>
                  <span>21. YY İş Ortamında Kimler Ayakta Kalır</span>
                </div>
              </td>
              <td>
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
