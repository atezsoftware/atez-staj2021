import React from "react";

const DetailModal = ({
  teacherName,
  lessonName,
  recordUrl,
  description,
  date,
  isOpen,
  onClose,
}) => {
  return (
    <>
      {isOpen ? (
        <>
          <div
            onClick={onClose}
            style={{
              zIndex: 998,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "fixed",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          ></div>
          <div
            style={{
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "fixed",
              width: 500,
              maxHeight: 600,
              minHeight: 200,
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "24px",
            }}
          >
            <h2
              style={{
                margin: "10px 0px",
                fontSize: "24px",
              }}
            >
              {lessonName}
            </h2>
            <span style={{ margin: "2.5px 0px" }}>
              <strong>Anlatıcı: </strong>
              {teacherName}
            </span>
            <span style={{ margin: "2.5px 0px" }}>
              <strong>Tarih: </strong>
              {date}
            </span>
            <span style={{ margin: "2.5px 0px" }}>
              <strong>Açıklama: </strong>
              {description}
            </span>
            <a
              style={{
                color: "#2f95f8",
                margin: "2.5px 0px",
              }}
              href={recordUrl}
              target="_blank"
              rel="noreferrer"
            >
              Ders Kayıtını izlemek için tıklayın.
            </a>
          </div>
        </>
      ) : null}
    </>
  );
};

export default DetailModal;
